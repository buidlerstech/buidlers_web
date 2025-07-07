import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BuildText from "@/components/BuildText";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Descubre nuestros últimos artículos, guías y noticias del mundo de la tecnología.",
  keywords: "blog, tecnología, desarrollo, artículos, guías",
  openGraph: {
    title: "Blog",
    description:
      "Descubre nuestros últimos artículos, guías y noticias del mundo de la tecnología.",
    url: "/blog",
    siteName: "Tu Blog",
    images: [
      {
        url: "/images/blog-default.svg",
        width: 1200,
        height: 630,
        alt: "Blog",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description:
      "Descubre nuestros últimos artículos, guías y noticias del mundo de la tecnología.",
    images: ["/images/blog-default.svg"],
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

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div
      style={{
        backgroundImage: `radial-gradient(
        circle farthest-corner at 10% 20%,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 30%,
        #44403c 88%,

        rgba(0, 0, 0, 1) 99%
      )`,
        backgroundSize: "auto",
        backgroundPosition: "0% 0%",
        backgroundRepeat: "repeat",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
      className="w-full bg-stone-700  mx-auto px-4 py-8"
    >
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="divHero"
          className="min-h-screen flex items-end justify-center p-4 sm:p-8 md:px-12 lg:px-24"
        >
          {/* Main Content */}
          <div
            className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-center 
          justify-center w-full max-w-6xl mx-auto px-4 mb-14  md:px-8 md:translate-x-[10%]"
          >
            <div
              className="text-white text-2xl xs:text-3xl sm:text-3xl md:text-3xl 
            lg:text-4xl font-extralight tracking-tight text-center md:text-left lg:flex-1 w-full md:w-1/2"
            >
              <div className="flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-4">
                {/* <span
                  className="text-[35pt] xs:text-[45pt] sm:text-[45pt] md:text-[40pt]
                 lg:text-[55pt] italic ephesis whitespace-nowrap"
                >
                </span> */}
                <span className="whitespace-nowraps">
                  Técnicas, casos reales y<br />
                  hacks para los pioneros
                </span>
              </div>
              {/* <div className="mt-2">descentralización</div>
              <div className="mt-2">al mundo</div> */}
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center lg:flex-1 md:justify-end">
              <BuildText text="blog." />
            </div>
          </div>
        </section>
      </main>

      {posts.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>No hay posts disponibles.</p>
          <p className="mt-2 text-sm">
            Agrega archivos .md en la carpeta{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">content/blog</code>
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow min-h-[400px]"
              style={{
                backgroundImage: post.image ? `url(${post.image})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay para mejorar legibilidad */}
              <div className="absolute inset-0 backdrop-brightness-50  bg-amber-950/20"></div>

              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <h2 className="text-xl font-sans tracking-tight mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    className="text-white hover:text-amber-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <div className="font-mono text-xs tracking-tighter text-gray-300 mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.author && (
                    <span className="ml-2">• por {post.author}</span>
                  )}
                </div>

                <p className="text-gray-200 text-sm backdrop-blur-sm mb-2 line-clamp-3">
                  {post.excerpt}
                </p>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className=" bg-stone-400 text-black text-[7pt] uppercase  px-1 py-[0.t5pt] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
