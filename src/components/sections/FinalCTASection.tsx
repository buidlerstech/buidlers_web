import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FinalCTASection() {
  return (
    <section id="contacto">
      <div className="flex flex-col md:flex-row overflow-hidden">
        <div className="flex h-20 md:h-auto md:w-[14%] shrink-0 flex-col justify-end items-end bg-[var(--color-primary)] p-4">
          <Image
            src="/logo_full_negro.png"
            alt="buidlers"
            width={70}
            height={20}
            className="object-contain object-right"
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
