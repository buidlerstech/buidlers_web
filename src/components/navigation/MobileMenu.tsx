"use client";

import { X } from "lucide-react";
import { MobileMenuProps } from '@/types/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col bg-black"
        >
          <div className="flex justify-end p-4 bg-black">
            <button
              onClick={onClose}
              className="text-white p-2 rounded-full hover:bg-white/10"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 w-full">
            {links.map(link => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-white text-xl w-full py-4 text-center bg-black hover:bg-black/80 transition-colors"
                onClick={onClose}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 