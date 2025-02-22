export interface NavLink {
  href: string;
  label: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export interface DesktopMenuProps {
  links: NavLink[];
} 