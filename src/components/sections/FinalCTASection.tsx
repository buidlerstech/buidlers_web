import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FinalCTASection() {
  return (
    <section id="contacto">
      <div className="flex overflow-hidden">
        <div className="flex w-[14%] flex-col justify-end bg-[var(--color-primary)] p-5">
          <Image
            src="/logo_negro.png"
            alt="buidlers"
            width={80}
            height={24}
            className="object-contain object-left"
          />
        </div>
        <div className="flex flex-1 border border-white/[0.06] bg-white/[0.03] p-8">
          <div className="relative z-10 grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--color-primary)] lg:text-4xl">
                el ecosistema crece{" "}
                <span className="text-foreground">cuando más builds entran al sistema;</span>
              </h2>
              <p className="mt-4 font-mono tracking-tight text-base text-foreground/70 lg:text-lg">
                dejá tu email y te avisamos de los próximos eventos, recursos y colaboraciones del
                ecosistema;
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Input
                placeholder="tu email"
                className="h-12 rounded-full border-white/10 bg-white/5 text-foreground placeholder:text-foreground/50"
              />
              <Button className="h-12 rounded-md px-8 text-white">entrar al loop</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
