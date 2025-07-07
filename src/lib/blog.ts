import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
  author?: string;
  tags?: string[];
  language?: string;
  image?: string;
  description?: string;
}

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

const postsDirectory = path.join(process.cwd(), 'content/blog');

// id unico
function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9áéíóúñü\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// extraer headings de segundo nivel (##)
export function extractTableOfContents(content: string): TOCItem[] {
  const headingRegex = /^##\s+(.+)$/gm;
  const headings: TOCItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const title = match[1].trim();
    const id = generateId(title);
    headings.push({
      id,
      title,
      level: 2
    });
  }

  return headings;
}

// para renderizar markdown con IDs en los headings
export async function renderMarkdown(content: string): Promise<string> {
  // Procesar el contenido para agregar IDs a los headings de segundo nivel
  const processedContent = content.replace(/^##\s+(.+)$/gm, (match, title) => {
    const id = generateId(title.trim());
    return `## ${title.trim()} {#${id}}`;
  });

  // Configurar marked con extensiones para soportar IDs personalizados
  const html = await marked(processedContent);

  // Post-procesar el HTML para convertir los IDs personalizados en atributos HTML
  const finalHtml = html.replace(/<h2>(.*?)\s+\{#([^}]+)\}<\/h2>/g, '<h2 id="$2">$1</h2>');

  return finalHtml;
}

export function getAllPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        return {
          slug,
          title: data.title || slug,
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt || content.substring(0, 200) + '...',
          content,
          author: data.author,
          tags: data.tags || ["coming soon"],
          description: data.description || data.excerpt || content.substring(0, 160) + '...',
        };
      });

    return allPostsData.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || content.substring(0, 200) + '...',
      content,
      author: data.author,
      tags: data.tags || [],
      image: data.image,
      language: data.language,
      description: data.description || data.excerpt || content.substring(0, 160) + '...',
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
} 