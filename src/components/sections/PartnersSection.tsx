import Image from "next/image";

type Partner = {
  name: string;
  href: string;
  logo: string;
  logoFullWidth?: boolean;
  showNameInBanner?: boolean;
};

type PartnersSectionProps = {
  partners: Partner[];
};

export function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <section id="partners" className="space-y-10">
      <div>
        <h2 className="text-4xl font-semibold text-[var(--color-primary)] lg:text-5xl">partners</h2>
        <p className="mt-4 max-w-2xl text-base text-foreground/70 lg:text-lg">
          nodos del ecosistema que comparten los mismos principios;
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.href}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex h-[88px] w-full shrink-0 items-center justify-center gap-3 bg-[var(--color-primary)] px-5 py-4">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.showNameInBanner ? 40 : 160}
                height={partner.showNameInBanner ? 40 : 40}
                className={partner.showNameInBanner ? "h-10 w-10 shrink-0 object-contain" : "h-10 w-auto max-w-[160px] object-contain"}
              />
              {partner.showNameInBanner && (
                <span className="text-xl font-semibold text-[#111111]">{partner.name}</span>
              )}
            </div>
            <div className="flex flex-1 flex-col justify-between border border-white/[0.06] bg-white/[0.03] p-4">
              <p className="text-xl font-semibold">{partner.name}</p>
              <p className="font-pixel text-sm text-foreground/50">explorar alianza →</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
