"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/log", label: "Log", accent: "purple" as const },
  { href: "/about", label: "About", accent: "blue" as const },
];

const accentClasses = {
  purple: {
    hover: "hover:text-purple-600 dark:hover:text-purple-400",
    ring: "focus-visible:ring-purple-500",
    active:
      'text-purple-600 dark:text-purple-400 font-medium after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-purple-600 dark:after:bg-purple-400 after:rounded-full after:content-[""]',
  },
  blue: {
    hover: "hover:text-blue-600 dark:hover:text-blue-400",
    ring: "focus-visible:ring-blue-500",
    active:
      'text-blue-600 dark:text-blue-400 font-medium after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:rounded-full after:content-[""]',
  },
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
      w-full
      h-16
      flex items-center
      ${isScrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"}
      transition-[background-color,box-shadow] duration-300
      sticky top-0 z-50
      px-4 md:px-6
    `}
    >
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center h-full">
        {/* Logo/Name - Left side */}
        <Link
          href="/"
          className="flex items-center font-semibold text-lg bg-gradient-to-r from-[var(--deep-purple)] to-[var(--teal)] bg-clip-text text-transparent hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
        >
          David Liew
        </Link>

        {/* Navigation - Right side */}
        <div className="flex space-x-6 h-full items-center">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            const accent = accentClasses[link.accent];

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors duration-200 px-1 py-2 flex items-center rounded-sm
                  ${accent.hover}
                  focus-visible:outline-none focus-visible:ring-2 ${accent.ring} focus-visible:ring-offset-2
                  ${isActive ? accent.active : "text-gray-700 dark:text-gray-300"}
                `}
              >
                <span className="text-sm md:text-base">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
