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
          nuestra mision, vision y valores reflejan el tipo de comunidad que
          queremos construir;
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div data-scroll-card>
          <h3 className="text-2xl font-semibold">mision</h3>
          <p className="mt-4 font-mono tracking-tight text-base text-foreground/70">
            unir y potenciar una comunidad de desarrolladores web3, impulsando
            la colaboracion y el aprendizaje colectivo sin buscar beneficio
            economico de nuestros miembros;
          </p>
        </div>
        <div data-scroll-card>
          <h3 className="text-2xl font-semibold">vision</h3>
          <p className="mt-4 font-mono tracking-tight text-base text-foreground/70">
            ser un faro de colaboracion, innovacion y etica en el espacio web3,
            liderando el camino hacia un ecosistema digital mas inclusivo y
            equitativo;
          </p>
        </div>
        <div data-scroll-card>
          <h3 className="text-2xl font-semibold">valores</h3>
          <ul className="mt-4 space-y-3 font-mono tracking-tight text-base text-foreground/70">
            <li>— autenticidad y transparencia</li>
            <li>— claridad de proposito</li>
            <li>— integridad y principios</li>
            <li>— inclusion y colaboracion</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div data-scroll-card>
          <h3 className="text-3xl font-semibold">ethos</h3>
          <div className="mt-6 space-y-6 text-foreground/70">
            <div>
              <h4 className="text-lg font-semibold text-foreground">
                autenticidad
              </h4>
              <p className="mt-2 font-mono tracking-tight text-base">
                somos un colectivo autentico que rechaza las estructuras
                corporativas tradicionales y promueve la transparencia en todas
                nuestras acciones;
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground">
                proposito
              </h4>
              <p className="mt-2 font-mono tracking-tight text-base">
                construimos un ecosistema sano para los que estamos y para los
                que vienen, enfocandonos en el valor real mas alla del precio;
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground">
                inteligencia colectiva
              </h4>
              <p className="mt-2 font-mono tracking-tight text-base">
                trabajamos juntos para dar valor al ecosistema, promoviendo el
                conocimiento y el desarrollo de soluciones web3 innovadoras;
              </p>
            </div>
          </div>
        </div>
        <div data-scroll-card>
          <h3 className="text-2xl font-semibold">beneficios centrales</h3>
          <div className="mt-6 grid gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-5"
              >
                <p className="text-lg font-semibold">{benefit.title}</p>
                <p className="mt-2 text-base text-foreground/70">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
