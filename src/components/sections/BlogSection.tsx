type BlogPost = {
  title: string;
  date: string;
};

type BlogSectionProps = {
  blogPosts: BlogPost[];
};

export function BlogSection({ blogPosts }: BlogSectionProps) {
  return (
    <section id="blog" className="space-y-10">
      <div>
        <h2 className="text-4xl font-semibold text-[var(--color-primary)] lg:text-5xl">blog</h2>
        <p className="mt-4 max-w-2xl text-base text-foreground/70 lg:text-lg">
          noticias de la comunidad, aprendizajes y oportunidades;
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.title} data-scroll-card>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 font-pixel text-xs text-foreground/50">
              {post.date}
            </span>
            <h3 className="mt-4 text-xl font-semibold leading-tight lg:text-2xl">{post.title}</h3>
            <button className="mt-5 font-pixel text-sm text-[var(--color-accent)] hover:underline">
              leer historia →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
