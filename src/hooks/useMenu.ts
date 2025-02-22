import { useState, useCallback } from 'react';

export const useMenu = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    toggleMenu,
    closeMenu,
  };
}; 