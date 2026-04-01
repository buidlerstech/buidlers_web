export function HeroSection() {
  return (
    <section id="hero" className="space-y-6 px-10 py-20">
      <h1 className="text-3xl font-monos tracking-tight leading-[1.2] text-foreground sm:text-4xl lg:text-5xl">
        construimos
        <br />
        infraestructura {"{humana + técnica}"}
        <br />
        <span className="text-nowrap text-[var(--color-primary)]">para el ecosistema web3;</span>
      </h1>
      <p className="text-lg font-mono tracking-tight text-foreground/80">
        buidlers conecta devs, proyectos y partners
        <br />
        que eligen construir con propósito;
        <br />
        colaboración y aprendizaje colectivo como base;
      </p>
    </section>
  );
}
