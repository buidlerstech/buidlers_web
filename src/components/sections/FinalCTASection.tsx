import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FinalCTASection() {
  return (
    <section id="final-cta" data-scroll-card>
      <div className="hero-ambient absolute inset-0 opacity-40" />
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-3xl font-semibold text-[var(--color-primary)] lg:text-4xl">
            ultima llamada{" "}
            <span className="p2 text-foreground">
              para construir con nosotros
            </span>
          </h2>
          <p className="mt-4 font-mono tracking-tight text-base text-foreground/70 lg:text-lg">
            sumate a la comunidad, recibe updates de eventos y conecta con
            builders de todo el ecosistema;
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Input
            placeholder="tu email"
            className="h-12 rounded-full border-white/10 bg-white/5 text-foreground placeholder:text-foreground/50"
          />
          <Button className="h-12 rounded-md px-8 text-white">
            quiero recibir updates
          </Button>
        </div>
      </div>
    </section>
  );
}
