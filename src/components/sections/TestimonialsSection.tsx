import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonios" className="space-y-10">
      <div>
        <h2 className="text-4xl font-semibold text-[var(--color-primary)] lg:text-5xl">
          voces de la comunidad
        </h2>
        <p className="mt-4 max-w-2xl text-base text-foreground/70 lg:text-lg">
          testimonios de builders y partners que ya colaboran con nosotros;
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} data-scroll-card>
            <p className="text-lg italic leading-relaxed text-foreground/80 lg:text-xl">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Avatar className="h-12 w-12 border border-white/10">
                <AvatarImage src="" alt={testimonial.name} />
                <AvatarFallback className="bg-[rgba(241,230,93,0.1)] text-sm font-semibold text-[var(--color-primary)]">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base font-semibold">{testimonial.name}</p>
                <p className="text-sm text-foreground/50">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
