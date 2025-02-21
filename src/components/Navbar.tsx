"use client";

import { Menu } from "lucide-react";
import { useMenu } from "@/hooks/useMenu";
import { navLinks } from "@/config/navigation";
import { DesktopMenu } from "./navigation/DesktopMenu";
import { MobileMenu } from "./navigation/MobileMenu";

const Navbar = () => {
  const { isOpen, toggleMenu, closeMenu } = useMenu();

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-xl z-50">
      <div className="max-w-7xls mx-auto px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo area */}
          <div className="flex-shrink-0">
            {/* Replace this div with your SVG logo */}
            {/* <div className="w-32 h-8 bg-white/10 rounded" /> */}
            <img src="/logo.svg" alt="Logo" className="h-8 md:h-10" />
          </div>

          {/* Desktop menu */}
          <DesktopMenu links={navLinks} />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isOpen} onClose={closeMenu} links={navLinks} />
    </nav>
  );
};

export default Navbar;
