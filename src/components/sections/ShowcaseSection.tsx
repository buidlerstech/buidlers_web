type Project = {
  name: string;
  href: string;
  description: string;
};

type ShowcaseSectionProps = {
  projects: Project[];
};

export function ShowcaseSection({ projects }: ShowcaseSectionProps) {
  return (
    <section id="showcase" className="space-y-10">
      <div>
        <h2 className="text-4xl font-semibold text-[var(--color-primary)] lg:text-5xl">showcase</h2>
        <p className="mt-4 max-w-2xl text-base text-foreground/70 lg:text-lg">
          proyectos que apoyamos con visibilidad y comunidad;
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.name} data-scroll-card>
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p className="mt-3 text-base text-foreground/70">{project.description}</p>
            <a
              className="mt-5 inline-flex font-pixel text-sm text-[var(--color-accent)] hover:underline"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              visitar proyecto →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
