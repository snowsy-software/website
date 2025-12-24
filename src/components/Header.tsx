import { useState, useEffect } from "react";

import { Link } from "@tanstack/react-router";

import { Logo } from "./Logo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-snow/80 backdrop-blur-2xl border-b border-ink/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-20">
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
        >
          <Logo size={28} className="text-teal transition-transform duration-300 group-hover:scale-110" />
          <span className="text-lg font-bold tracking-wide">SNOWSY</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/features"
            className="text-sm text-stone hover:text-ink transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-teal hover:after:w-full after:transition-all"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-sm text-stone hover:text-ink transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-teal hover:after:w-full after:transition-all"
          >
            Pricing
          </Link>
          <a
            href="https://github.com/snowsy-software/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone hover:text-ink transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-teal hover:after:w-full after:transition-all"
          >
            GitHub
          </a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/pricing" className="btn-primary">
            <span>Get started</span>
          </Link>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-ink transition-all duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-x-px' : ''}`} />
            <span className={`w-full h-0.5 bg-ink transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 translate-x-2' : ''}`} />
            <span className={`w-full h-0.5 bg-ink transition-all duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 translate-x-px' : ''}`} />
          </div>
        </button>
      </nav>

      <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="container-wide py-6 space-y-1 border-t border-ink/5 bg-snow/95 backdrop-blur-xl">
          <Link
            to="/features"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 text-lg font-medium"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 text-lg font-medium"
          >
            Pricing
          </Link>
          <a
            href="https://github.com/snowsy-software/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 text-lg font-medium"
          >
            GitHub
          </a>
          <Link
            to="/pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary w-full mt-4"
          >
            <span>Get started</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
