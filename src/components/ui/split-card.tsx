import Image from "next/image";

type SplitCardProps = {
  title: string;
  children: React.ReactNode;
  /** false = yellow accent + black content (default) | true = black accent + yellow content */
  inverted?: boolean;
};

export function SplitCard({ title, children, inverted = false }: SplitCardProps) {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden border border-[var(--color-primary)]">
      {/* Accent panel */}
      <div
        className={`flex h-20 md:h-auto md:w-[28%] shrink-0 flex-col justify-end items-end p-4 ${
          inverted ? "bg-black" : "bg-[var(--color-primary)]"
        }`}
      >
        <Image
          src={inverted ? "/logo_full_amarillo.png" : "/logo_full_negro.png"}
          alt="buidlers"
          width={70}
          height={20}
          className="object-contain object-right"
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
