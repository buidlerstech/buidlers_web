"use client";

import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/buidlers_",
      label: "Twitter"
    },
    {
      icon: Github,
      href: "https://github.com/buidlers-of-argentina",
      label: "Github"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/buidlers",
      label: "LinkedIn"
    }
  ];

  return (
    <div className="flex md:flex-col gap-6">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="text-white/60 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <link.icon size={20} className="md:w-6 md:h-6" />
        </motion.a>
      ))}
    </div>
  );
} 