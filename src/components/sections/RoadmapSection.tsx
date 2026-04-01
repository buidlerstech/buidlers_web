type RoadmapItem = {
  title: string;
  date: string;
  detail: string;
};

type RoadmapSectionProps = {
  roadmap: RoadmapItem[];
};

export function RoadmapSection({ roadmap }: RoadmapSectionProps) {
  return (
    <section id="roadmap" className="space-y-10">
      <div>
        <h2 className="text-4xl font-semibold text-[var(--color-primary)] lg:text-5xl">roadmap</h2>
        <p className="mt-4 max-w-2xl text-base text-foreground/70 lg:text-lg">
          lo que viene para la comunidad;
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {roadmap.map((item) => (
          <div key={item.title} data-scroll-card>
            <span className="inline-flex items-center rounded-full border border-[rgba(16,176,104,0.2)] bg-[rgba(16,176,104,0.08)] px-3 py-1 font-pixel text-xs text-[var(--color-accent)]">
              {item.date}
            </span>
            <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-base text-foreground/70">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
