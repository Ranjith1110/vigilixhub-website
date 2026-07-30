import { useState, useEffect } from 'react';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiMenu,
  FiX,
  FiArrowUpRight
} from 'react-icons/fi';
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF
} from 'react-icons/fa';
import { Button } from '../ui/Button';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(navLinks[0].href);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 sm:px-6 lg:px-8">
        {/* Main Navbar Pill */}
        <nav
          className={`relative w-full max-w-7xl bg-white/95 backdrop-blur-md rounded-full flex justify-between items-center transition-all duration-300 border ${
            scrolled
            ? 'py-2 px-5 border-[#630cb4]/15 shadow-lg shadow-[#630cb4]/10'
            : 'py-2.5 px-6 border-slate-100 shadow-sm'
          }`}
        >
          {/* 1. Left: Logo Image */}
          <div className="flex-1 flex items-center cursor-pointer">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="h-11 w-auto object-contain transition-all duration-300"
            />
          </div>

          {/* 2. Center: Desktop Links */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-9">
            {navLinks.map((link) => {
              const isActive = link.href === activeHref;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  className={`group relative flex items-center text-[15.5px] font-medium py-1 tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-[#630cb4]' : 'text-slate-500 hover:text-[#630cb4]'
                  }`}
                >
                  {link.label}
                  {/* Subtle underline on hover/active */}
                  <span
                    className={`absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-[#630cb4] transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>

          {/* 3. Right: CTA Button & Mobile Toggle */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden lg:block group">
              <Button href="#contact" variant="primary" size="sm">
                <span className="flex items-center gap-1.5">
                  Contact us
                  <FiArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Button>
            </div>

            <button
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#630cb4]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="relative block w-6 h-6">
                <FiMenu
                  size={24}
                  className={`absolute inset-0 transition-all duration-200 ${
                    isMobileMenuOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'
                  }`}
                />
                <FiX
                  size={24}
                  className={`absolute inset-0 transition-all duration-200 ${
                    isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col pt-24 pb-8 px-6 overflow-y-auto ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col mt-4">
          {navLinks.map((link) => {
            const isActive = link.href === activeHref;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`py-4 border-b border-slate-100 font-semibold text-[17px] transition-colors ${
                  isActive ? 'text-[#630cb4]' : 'text-slate-700 hover:text-[#fb5d00]'
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <div className="mt-8 group">
            <Button href="#contact" variant="primary" size="lg" className="w-full">
              <span className="flex items-center justify-center gap-1.5">
                Contact us
                <FiArrowUpRight size={16} />
              </span>
            </Button>
          </div>
        </div>

        {/* Clean Contact info for mobile */}
        <div className="mt-12">
          <h3 className="text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-5">
            Get in touch
          </h3>

          <div className="flex flex-col gap-5">
            <a
              href="tel:+917868043538"
              className="flex items-center gap-3 text-[15px] text-slate-700 font-medium transition-colors hover:text-[#fb5d00]"
            >
              <FiPhone size={18} className="text-[#630cb4] flex-shrink-0" />
              +91 7868043538
            </a>
            <a
              href="mailto:support@vigilixhub.in"
              className="flex items-center gap-3 text-[15px] text-slate-700 font-medium transition-colors hover:text-[#fb5d00]"
            >
              <FiMail size={18} className="text-[#630cb4] flex-shrink-0" />
              support@vigilixhub.in
            </a>
            <div className="flex items-center gap-3 text-[15px] text-slate-700 font-medium">
              <FiMapPin size={18} className="text-[#630cb4] flex-shrink-0" />
              Ramanathapuram, India
            </div>

            <div className="flex items-center gap-5 mt-4 pt-6 border-t border-slate-100">
              <a href="#" aria-label="LinkedIn" className="text-[#630cb4] hover:text-[#fb5d00] transition-colors">
                <FaLinkedinIn size={22} />
              </a>
              <a href="#" aria-label="Instagram" className="text-[#630cb4] hover:text-[#fb5d00] transition-colors">
                <FaInstagram size={22} />
              </a>
              <a href="#" aria-label="Facebook" className="text-[#630cb4] hover:text-[#fb5d00] transition-colors">
                <FaFacebookF size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;