type Partner = {
  name: string;
  href: string;
};

type PartnersSectionProps = {
  partners: Partner[];
};

export function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <section id="partners" className="space-y-10">
      <div>
        <h2 className="text-4xl font-semibold text-[var(--color-primary)] lg:text-5xl">
          partners
        </h2>
        <p className="mt-4 max-w-2xl text-base text-foreground/70 lg:text-lg">
          alianzas con organizaciones que comparten nuestra vision;
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.href}
            target="_blank"
            rel="noreferrer"
            data-scroll-card
            className="block transition-transform duration-300 hover:-translate-y-1"
          >
            <p className="text-2xl font-semibold">{partner.name}</p>
            <p className="mt-3 font-pixel text-sm text-foreground/50">
              explorar alianza →
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
