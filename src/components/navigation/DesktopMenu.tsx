import { DesktopMenuProps } from "@/types/navigation";

export const DesktopMenu = ({ links }: DesktopMenuProps) => {
  return (
    <div
      className="hidden md:flex space-x-8 mt-3
    text-md font-mono text-stone-400 font-extralight tracking-tight"
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-stone-400 hover:text-stone-200 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
