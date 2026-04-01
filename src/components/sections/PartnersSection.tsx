import Image from "next/image";

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
            className="flex flex-col sm:flex-row overflow-hidden transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex h-16 sm:h-auto sm:w-[28%] shrink-0 flex-col justify-end items-end bg-[var(--color-primary)] p-3">
              <Image
                src="/logo_full_negro.png"
                alt="buidlers"
                width={60}
                height={18}
                className="object-contain object-right"
              />
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
