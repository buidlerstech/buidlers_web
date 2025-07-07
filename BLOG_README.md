# Blog de Buidlers con OpenGraph - Guía de Configuración

## Características

Ahora incluye soporte completo para OpenGraph y Twitter Cards, perfecto para compartir en:

- Twitter/X
- LinkedIn
- Telegram
- Facebook
- WhatsApp
- Y cualquier plataforma que soporte OpenGraph

## Configuración Rápida

### 1. Configura el dominio

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

### 2. Estructura de archivos

```
content/blog/           # Tus posts en Markdown
├── mi-post.md         # Cada archivo = 1 post
└── otro-post.md

public/images/blog/     # Imágenes para OpenGraph
├── mi-post.svg        # Imagen personalizada del post
└── otro-post.jpg      # Soporta JPG, PNG, SVG
```

## Crear un Post

### Front Matter (Metadatos)

```yaml
---
title: "Título de tu Post"
date: "2025-01-05"
author: "Tu Nombre"
excerpt: "Descripción corta para el listado"
description: "Descripción optimizada para redes sociales (OpenGraph)"
image: "/images/blog/mi-post.jpg"
tags: ["tag1", "tag2", "tag3"]
---
```

### Campos Explicados

| Campo         | Requerido | Descripción                                   |
| ------------- | --------- | --------------------------------------------- |
| `title`       | ✅        | Título del post                               |
| `date`        | ✅        | Fecha (YYYY-MM-DD)                            |
| `author`      | ❌        | Autor del post                                |
| `excerpt`     | ❌        | Resumen para listado                          |
| `description` | ❌        | Descripción para OpenGraph (160 chars max)    |
| `image`       | ❌        | Imagen para redes sociales (1200x630px ideal) |
| `tags`        | ❌        | Lista de etiquetas                            |

## Imágenes para Redes Sociales

### Tamaños Recomendados

- OpenGraph: 1200x630px
- Twitter Cards: 1200x630px
- Formato: JPG, PNG, SVG

### Crear Imágenes

1. Personalizada: Crea una imagen por post
2. Automática: Si no incluyes imagen, se usa la por defecto
3. Herramientas: Canva, Figma, o generadores online

## Contenido en Markdown

Después del front matter, escribe tu contenido en Markdown:

```markdown
---
title: "Mi Post Increíble"
date: "2025-01-05"
description: "Un post increíble sobre tecnología"
image: "/images/blog/mi-post.jpg"
---

# Mi Post Increíble

Este es el contenido de mi post...

## Sección 2

Más contenido aquí...
```

## URLs del Blog

- Lista de posts: `/blog`
- Post individual: `/blog/nombre-del-archivo`

## Cómo se ve en Redes Sociales

Cuando compartas un link del blog, se mostrará:

- Título: Del campo `title`
- Descripción: Del campo `description`
- Imagen: Del campo `image` (o imagen por defecto)
- Autor: Del campo `author`
- Fecha: Del campo `date`

## Personalización

### Cambiar imagen por defecto

Reemplaza `/public/images/blog-default.svg` con tu imagen.

### Cambiar metadatos globales

Edita los archivos:

- `src/app/blog/page.tsx` (página principal)
- `src/app/blog/[slug]/page.tsx` (posts individuales)

### Cambiar estilos

Los estilos del blog están en `src/app/globals.css` bajo la clase `.prose`.

## Consejos para Mejores Resultados

1. Títulos: Máximo 60 caracteres
2. Descripciones: Entre 120-160 caracteres
3. Imágenes: Siempre incluye una imagen personalizada
4. Texto Alt: Usa títulos descriptivos para las imágenes
5. Consistencia: Mantén un formato similar en todos los posts

## Testear OpenGraph

Usa estas herramientas para verificar cómo se ven tus posts:

- Facebook: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Twitter: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- LinkedIn: [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
