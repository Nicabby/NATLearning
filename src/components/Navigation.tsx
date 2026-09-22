'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-white/95 backdrop-blur-sm px-6 md:px-12 lg:px-24 py-6 sticky top-0 z-50 shadow-lg border-b-2 border-accents">
      <div className="flex justify-between items-center">
        <Link href="/" className="shrink-0 opacity-100 hover:opacity-80 transition-opacity">
          <Image
            src="/natlearning-logo.png"
            alt="NATLearning — Nicole Tal"
            width={1200}
            height={180}
            priority
            className="h-9 md:h-10 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={`transition-colors font-medium ${
                isActive(item.href) 
                  ? 'text-buttons font-semibold border-b-2 border-buttons pb-1' 
                  : 'text-ink hover:text-additional'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-ink hover:text-additional transition-colors p-2 rounded-lg hover:bg-background"
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-accents/30 bg-background rounded-lg">
          <div className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`py-3 px-4 rounded-lg transition-colors ${
                  isActive(item.href) 
                    ? 'text-buttons font-semibold bg-white border-2 border-buttons' 
                    : 'text-ink hover:text-additional hover:bg-white/50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}