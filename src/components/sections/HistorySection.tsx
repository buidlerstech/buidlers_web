type Venue = {
  title: string;
  description: string;
  location: string;
  assistants: number;
  m2: number;
  icon: string;
  public: string;
  year: number;
  prizesUsd: number;
};

type HistorySectionProps = {
  venues: Venue[];
  formatNumber: (value: number) => string;
  formatUsd: (value: number) => string;
};

export function HistorySection({ venues, formatNumber, formatUsd }: HistorySectionProps) {
  return (
    <section id="historia" className="space-y-10">
      <div>
        <h2 className="text-4xl font-semibold text-[var(--color-primary)] lg:text-5xl">
          nuestra historia
        </h2>
        <p className="mt-4 max-w-2xl font-mono tracking-tight text-base text-foreground/70 lg:text-lg">
          un timeline vivo de venues, comunidades y logros; cada evento suma aprendizaje colectivo,
          alianzas y premios para quienes construyen;
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {venues.map((venue) => (
          <div key={venue.title} data-scroll-card>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center rounded-full border border-[rgba(241,230,93,0.2)] bg-[rgba(241,230,93,0.08)] px-3 py-1 font-pixel text-xs text-[var(--color-primary)]">
                {venue.year}
              </span>
              <span className="font-pixel text-lg text-foreground/30">{venue.icon}</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold">{venue.title}</h3>
            <p className="mt-3 text-base text-foreground/70">{venue.description}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm text-foreground/50">
              <span className="rounded-md bg-white/5 px-2.5 py-1">{venue.location}</span>
              <span className="rounded-md bg-white/5 px-2.5 py-1">
                {formatNumber(venue.assistants)} asistentes
              </span>
              <span className="rounded-md bg-white/5 px-2.5 py-1">{venue.m2} m²</span>
              <span className="rounded-md bg-white/5 px-2.5 py-1">{venue.public}</span>
            </div>
            <div className="mt-5 text-base font-semibold text-[var(--color-primary)]">
              premios: {formatUsd(venue.prizesUsd)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
