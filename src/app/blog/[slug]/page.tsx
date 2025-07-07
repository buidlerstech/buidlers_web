import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getPostBySlug,
  getAllPosts,
  renderMarkdown,
  extractTableOfContents,
} from "@/lib/blog";
import { ArrowLeftIcon } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const htmlContent = await renderMarkdown(post.content);
  const tableOfContents = extractTableOfContents(post.content);

  return (
    <div className="w-full mx-auto bg-stone-800 text-black ">
      <article className="overflow-hidden">
        <header className="flex flex-col md:flex-row w-full">
          <div className="bg-white w-full md:w-5/12  text-stone-700 p-6 text-center flex flex-col justify-between">
            <Link href="/blog" className="text-black mb-6 inline-block">
              <ArrowLeftIcon className="w-4 h-4" />
            </Link>

            <h1 className="text-4xl max-w-lg mx-auto font-serif">
              {post.title}
            </h1>
            <time dateTime={post.date} className="font-mono text-sm">
              {new Date(post.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <div className="bg-stone-700 w-full md:w-5/12 p-6 flex flex-col md:flex-col  lg:flex-row">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded shadow"
              src={post.image}
              alt={post.title}
              width={300}
              height={600}
            />

            <div className="flex flex-col p-2 justify-end  w-full mx-auto items-center gap-2 text-stone-300 ">
              <div className="mb-4 font-mono text-sm">
                {post.author && <span className="">By {post.author}</span>}
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-1">
                  {post.language}
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className=" bg-stone-400 text-gray-700 text-[7pt] uppercase  px-1 py-[0.t5pt] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="bg-stone-800 hidden md:w-2/12 p-6 md:flex font-mono justify-center items-end text-stone-500">
            <span className="text-xs"></span>
          </div>
        </header>

        <div className="w-full flex items-stretch">
          <div className="w-full md:w-10/12 pt-10 bg-stone-200">
            <div
              className="prose w-11/12 md:w-8/12 mx-auto prose-lg "
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>

          {/* contents menu  */}
          <div className="hidden md:w-2/12 md:flex md:flex-col">
            <div
              id="contents-menu-container"
              className="px-4 py-6 flex-1 fixed top-0"
            >
              <h3 className="text-xs font-mono text-stone-400 mb-4 uppercase tracking-wide">
                Contents
              </h3>
              {tableOfContents.length > 0 ? (
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block font-mono text-xs text-stone-400 hover:text-amber-400
                       transition-colors duration-200 border-l-2 border-transparent
                        hover:border-stone-400 pl-3 pb-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              ) : (
                <p className="text-xs text-stone-500 italic">Sin secciones</p>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

// Genera las rutas estáticas para todos los posts
export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Genera metadata para cada post
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post no encontrado",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://buidler.tech";
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = post.image
    ? `${siteUrl}${post.image}`
    : `${siteUrl}/images/blog-default.svg`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags?.join(", "),
    authors: post.author ? [{ name: post.author }] : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      siteName: "Tu Blog",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "es_ES",
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
      creator: post.author ? `@${post.author}` : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
