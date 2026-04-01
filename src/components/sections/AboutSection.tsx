import { SplitCard } from "@/components/ui/split-card";

type Benefit = {
  title: string;
  description: string;
};

type AboutSectionProps = {
  benefits: Benefit[];
};

export function AboutSection({ benefits }: AboutSectionProps) {
  return (
    <section id="nosotros" className="space-y-10">
      <div>
        <h2 className="text-4xl font-semibold text-[var(--color-primary)] lg:text-5xl">
          sobre nosotros
        </h2>
        <p className="mt-4 max-w-2xl font-mono tracking-tight text-base text-foreground/70 lg:text-lg">
          nuestra misión, visión y valores definen el sistema que construimos;
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <SplitCard title="misión">
          <p>
            incubar y lanzar tecnologías en web3 e ia que potencien valor real; un ecosistema
            híbrido que funcione como fuego creador para quienes construyen para el bien común;
          </p>
        </SplitCard>

        <SplitCard title="visión">
          <p>
            inaugurar una nueva lógica de hacer las cosas; un punto cero donde lo que no funciona se
            reescribe; soberanía, transparencia y colaboración como pilares;
          </p>
        </SplitCard>

        <SplitCard title="valores">
          <ul className="space-y-2">
            <li>— soberanía</li>
            <li>— ética</li>
            <li>— autonomía</li>
            <li>— colaboración</li>
            <li>— transparencia</li>
            <li>— privacidad</li>
          </ul>
        </SplitCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <SplitCard title="ethos">
          <p>
            somos un colectivo auténtico que rechaza las estructuras corporativas tradicionales;
            construimos un ecosistema sano para los que estamos y para los que vienen, enfocándonos
            en el valor real más allá del precio;
          </p>
        </SplitCard>

        <SplitCard title="beneficios" inverted>
          <ul className="space-y-3">
            {benefits.slice(0, 3).map((benefit) => (
              <li key={benefit.title}>
                <span className="font-semibold">{benefit.title}</span>
                {" — "}
                {benefit.description}
              </li>
            ))}
          </ul>
        </SplitCard>
      </div>
    </section>
  );
}
