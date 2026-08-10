"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/log", label: "Log" },
  { href: "/about", label: "About" },
];

const activeClasses =
  'text-[var(--accent-primary)] font-medium after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-[var(--accent-primary)] after:rounded-full after:content-[""]';

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
      ${isScrolled ? "bg-gray-900 shadow-md" : "bg-transparent"}
      transition-[background-color,box-shadow] duration-300
      sticky top-0 z-50
      px-4 md:px-6
    `}
    >
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center h-full">
        {/* Logo/Name - Left side */}
        <Link
          href="/"
          className="flex items-center font-heading font-semibold text-lg text-gray-100 hover:text-[var(--accent-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-sm"
        >
          David Liew
        </Link>

        {/* Navigation - Right side */}
        <div className="flex space-x-6 h-full items-center">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors duration-200 px-1 py-2 flex items-center rounded-sm
                  hover:text-[var(--accent-primary)]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900
                  ${isActive ? activeClasses : "text-gray-300"}
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
