import Image from "next/image";

export function MediaSection() {
  return (
    <section id="media" className="space-y-10">
      <div>
        <h2 className="text-4xl font-semibold text-[var(--color-primary)] lg:text-5xl">
          momentos buidlers
        </h2>
        <p className="mt-4 max-w-2xl text-base text-foreground/70 lg:text-lg">
          un vistazo a la energia de nuestros encuentros y experiencias;
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div data-scroll-card>
          <div className="relative h-[380px] w-full overflow-hidden rounded-xl">
            <Image
              src="/18.jpg"
              alt="Panel de comunidad"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div data-scroll-card>
          <div className="relative h-[380px] w-full overflow-hidden rounded-xl">
            <Image
              src="/cursor-intro.png"
              alt="Identidad Buidlers"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
