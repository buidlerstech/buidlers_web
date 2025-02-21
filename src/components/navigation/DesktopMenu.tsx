import { DesktopMenuProps } from '@/types/navigation';

export const DesktopMenu = ({ links }: DesktopMenuProps) => {
  return (
    <div className="hidden md:flex space-x-8">
      {links.map(link => (
        <a
          key={link.href}
          href={link.href}
          className="text-white hover:text-gray-300 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}; 