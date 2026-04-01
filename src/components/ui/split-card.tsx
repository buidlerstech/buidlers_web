import Image from "next/image";

type SplitCardProps = {
  title: string;
  children: React.ReactNode;
  /** false = yellow accent + black content (default) | true = black accent + yellow content */
  inverted?: boolean;
};

export function SplitCard({ title, children, inverted = false }: SplitCardProps) {
  return (
    <div className="flex overflow-hidden border border-[var(--color-primary)]">
      {/* Accent panel */}
      <div
        className={`flex w-[28%] shrink-0 flex-col justify-end p-5 ${
          inverted ? "bg-black" : "bg-[var(--color-primary)]"
        }`}
      >
        <Image
          src={inverted ? "/logo_amarillo.png" : "/logo_negro.png"}
          alt="buidlers"
          width={80}
          height={24}
          className="object-contain object-left"
        />
      </div>

      {/* Content panel */}
      <div
        className={`flex flex-1 flex-col gap-3 p-6 ${
          inverted
            ? "bg-[var(--color-primary)] text-black"
            : "bg-black text-foreground"
        }`}
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="font-mono tracking-tight text-base opacity-80">{children}</div>
      </div>
    </div>
  );
}
