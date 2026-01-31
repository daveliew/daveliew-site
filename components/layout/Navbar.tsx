'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SkillTreeMenu } from '@/components/navigation';

const navLinks = [
  { href: '/about', label: 'About', id: 'about' },
];

// Mobile menu still uses WHY → HOW → WHAT structure
const aiJourneyMenu = {
  why: [
    { href: '/ai-journey/why-ai', label: 'Why Human-AI Collaboration' },
    { href: '/context-engineering', label: 'Context Engineering' },
    { href: '/philosophy', label: 'Philosophy & Principles' },
  ],
  how: [
    { href: '/ai-journey/claude/overview', label: 'Claude Mastery' },
    { href: '/ai-journey/technical-leadership', label: 'Technical Implementation' },
    { href: '/ai-journey/techniques/prompt-engineering', label: 'Techniques Reference' },
  ],
  what: [
    { href: '/ai-journey/portfolio', label: 'Portfolio & Results' },
    { href: '/laboratory', label: 'Laboratory' },
  ],
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAIJourneyMenu, setShowAIJourneyMenu] = useState(false);
  const [menuTimeout, setMenuTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (menuTimeout) clearTimeout(menuTimeout);
    setShowAIJourneyMenu(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowAIJourneyMenu(false);
    }, 150);
    setMenuTimeout(timeout);
  };

  return (
    <nav className={`
      w-full
      h-16
      flex items-center
      ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'}
      transition-[background-color,box-shadow] duration-300
      sticky top-0 z-50
      px-4 md:px-6
    `}>
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center h-full">
        {/* Logo/Name - Left side */}
        <Link
          href="/"
          className="hidden md:flex items-center font-semibold text-lg bg-gradient-to-r from-[var(--deep-purple)] to-[var(--teal)] bg-clip-text text-transparent hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm"
        >
          David Liew
        </Link>

        {/* Desktop Navigation - Right side */}
        <div className="hidden md:flex space-x-6 h-full items-center">
          {/* Nav links */}
          {navLinks.map(link => {
            const isActive = pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors duration-200 px-1 py-2 flex items-center rounded-sm
                  hover:text-blue-600 dark:hover:text-blue-400
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                  ${isActive
                    ? 'text-blue-600 dark:text-blue-400 font-medium after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:rounded-full after:content-[""]'
                    : 'text-gray-700 dark:text-gray-300'}
                `}
              >
                <span className="text-sm md:text-base">{link.label}</span>
              </Link>
            );
          })}
          
          {/* AI Journey Mega Menu - Center */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/ai-journey"
              className={`relative transition-colors duration-200 px-1 py-2 flex items-center rounded-sm
                hover:text-blue-600 dark:hover:text-blue-400
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                ${pathname.startsWith('/ai-journey')
                  ? 'text-blue-600 dark:text-blue-400 font-medium after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:rounded-full after:content-[""]'
                  : 'text-gray-700 dark:text-gray-300'}
              `}
            >
              <span className="text-sm md:text-base">AI Journey</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* Skill Tree Dropdown */}
            <SkillTreeMenu
              isOpen={showAIJourneyMenu}
              onClose={() => setShowAIJourneyMenu(false)}
            />
          </div>

          {/* Agents */}
          <Link
            href="/agents"
            className={`relative transition-colors duration-200 px-1 py-2 flex items-center rounded-sm
              hover:text-[var(--deep-purple)]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2
              ${pathname.startsWith('/agents')
                ? 'text-[var(--deep-purple)] font-medium after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-[var(--deep-purple)] after:rounded-full after:content-[""]'
                : 'text-gray-700 dark:text-gray-300'}
            `}
          >
            <span className="text-sm md:text-base">Agents</span>
          </Link>

          {/* Teaching */}
          <Link
            href="/teaching"
            className={`relative transition-colors duration-200 px-1 py-2 flex items-center rounded-sm
              hover:text-blue-600 dark:hover:text-blue-400
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
              ${pathname.startsWith('/teaching')
                ? 'text-blue-600 dark:text-blue-400 font-medium after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:rounded-full after:content-[""]'
                : 'text-gray-700 dark:text-gray-300'}
            `}
          >
            <span className="text-sm md:text-base">Teaching</span>
          </Link>

          {/* Hackathons */}
          <Link
            href="/hackathons"
            className={`relative transition-colors duration-200 px-1 py-2 flex items-center rounded-sm
              hover:text-teal-600 dark:hover:text-teal-400
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2
              ${pathname.startsWith('/hackathons')
                ? 'text-teal-600 dark:text-teal-400 font-medium after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-teal-600 dark:after:bg-teal-400 after:rounded-full after:content-[""]'
                : 'text-gray-700 dark:text-gray-300'}
            `}
          >
            <span className="text-sm md:text-base">Hackathons</span>
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={`relative transition-colors duration-200 px-1 py-2 flex items-center rounded-sm
              hover:text-blue-600 dark:hover:text-blue-400
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
              ${pathname.startsWith('/contact')
                ? 'text-blue-600 dark:text-blue-400 font-medium after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:rounded-full after:content-[""]'
                : 'text-gray-700 dark:text-gray-300'}
            `}
          >
            <span className="text-sm md:text-base">Contact</span>
          </Link>
        </div>

        {/* Mobile Logo - Left side */}
        <Link
          href="/"
          className="md:hidden font-semibold text-lg bg-gradient-to-r from-[var(--deep-purple)] to-[var(--teal)] bg-clip-text text-transparent"
        >
          David Liew
        </Link>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 py-4 px-6 flex flex-col space-y-3 max-h-[80vh] overflow-y-auto">
          {/* About */}
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`py-2 ${pathname.startsWith('/about')
              ? 'text-blue-600 dark:text-blue-400 font-medium'
              : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            About
          </Link>

          {/* Agents */}
          <Link
            href="/agents"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`py-2 ${pathname.startsWith('/agents')
              ? 'text-[var(--deep-purple)] font-medium'
              : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            Agents
          </Link>

          {/* Teaching */}
          <Link
            href="/teaching"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`py-2 ${pathname.startsWith('/teaching')
              ? 'text-blue-600 dark:text-blue-400 font-medium'
              : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            Teaching
          </Link>

          {/* Hackathons */}
          <Link
            href="/hackathons"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`py-2 ${pathname.startsWith('/hackathons')
              ? 'text-teal-600 dark:text-teal-400 font-medium'
              : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            Hackathons
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`py-2 ${pathname.startsWith('/contact')
              ? 'text-blue-600 dark:text-blue-400 font-medium'
              : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            Contact
          </Link>

          {/* Mobile AI Journey Section - 3 Themes */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/ai-journey"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              📍 AI Journey Overview
            </Link>

            <div className="pl-4 space-y-3 mt-2">
              {/* WHY */}
              <div className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">Why</div>
              {aiJourneyMenu.why.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.label}
                </Link>
              ))}

              {/* HOW */}
              <div className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide mt-4">How</div>
              {aiJourneyMenu.how.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  {item.label}
                </Link>
              ))}

              {/* WHAT */}
              <div className="text-sm font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wide mt-4">What</div>
              {aiJourneyMenu.what.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 