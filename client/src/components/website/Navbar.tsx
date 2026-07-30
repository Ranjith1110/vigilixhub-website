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
          className={`w-full max-w-7xl bg-white/90 backdrop-blur-md rounded-full flex justify-between items-center transition-all duration-300 border ${scrolled
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
                  className={`vh-display group relative flex items-center gap-2 text-[15.5px] font-medium py-1 transition-colors duration-200 ${isActive ? 'text-[#150f1e]' : 'text-slate-500 hover:text-[#150f1e]'
                    }`}
                >
                  {/* hub-node marker: solid when active, grows on hover otherwise */}
                  <span
                    className={`inline-block rounded-full transition-all duration-200 ${isActive
                      ? 'w-[6px] h-[6px] bg-[#fb5d00]'
                      : 'w-[6px] h-[6px] bg-[#630cb4] scale-0 group-hover:scale-100'
                      }`}
                    aria-hidden="true"
                  />
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* 3. Right: CTA Button & Mobile Toggle */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden lg:block">
              <Button href="#contact" variant="primary" size="sm">
                <span className="flex items-center gap-1.5">
                  Contact us
                  <FiArrowUpRight size={15} />
                </span>
              </Button>
            </div>

            <button
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden p-2 text-[#150f1e] hover:bg-slate-100 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#630cb4]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="relative block w-6 h-6">
                <FiMenu
                  size={24}
                  className={`absolute inset-0 transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'
                    }`}
                />
                <FiX
                  size={24}
                  className={`absolute inset-0 transition-all duration-200 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'
                    }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col pt-24 pb-6 px-6 overflow-y-auto ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        {/* faint hub motif, consistent with Services section */}
        <svg
          className="absolute -top-6 -right-10 w-72 h-72 opacity-[0.05] pointer-events-none"
          viewBox="0 0 400 400"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="6" fill="#630cb4" />
          {[0, 72, 144, 216, 288].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            const x = 200 + 150 * Math.cos(rad);
            const y = 200 + 150 * Math.sin(rad);
            return (
              <g key={deg}>
                <line x1="200" y1="200" x2={x} y2={y} stroke="#150f1e" strokeWidth="1.5" />
                <circle cx={x} cy={y} r="4" fill="#fb5d00" />
              </g>
            );
          })}
        </svg>

        <div className="flex flex-col mt-2 relative z-10">
          {navLinks.map((link, index) => {
            const isActive = link.href === activeHref;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`${isMobileMenuOpen ? 'vh-link-enter' : ''} vh-display flex items-center gap-3 py-3.5 border-b border-slate-100 font-semibold text-[17px] transition-colors ${isActive ? 'text-[#150f1e]' : 'text-slate-600 hover:text-[#150f1e]'
                  }`}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <span
                  className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                  style={{ backgroundColor: isActive ? '#fb5d00' : '#630cb4' }}
                  aria-hidden="true"
                />
                {link.label}
              </a>
            );
          })}

          <div
            className={`${isMobileMenuOpen ? 'vh-link-enter' : ''} mt-6`}
            style={{ animationDelay: `${navLinks.length * 60}ms` }}
          >
            <Button href="#contact" variant="primary" size="lg" className="w-full">
              <span className="flex items-center justify-center gap-1.5">
                Contact us
                <FiArrowUpRight size={16} />
              </span>
            </Button>
          </div>
        </div>

        {/* Contact info, styled to match the Services card language */}
        <div className="mt-auto pt-6 relative z-10">
          <h3 className="vh-display text-[12px] font-bold text-slate-400 uppercase tracking-wider mb-4">
            Get in touch
          </h3>

          <div className="flex flex-col gap-2.5">
            <a
              href="tel:+917868043538"
              className="flex items-center gap-3 text-[15px] text-slate-700 font-medium bg-slate-50 rounded-xl px-4 py-3 border-l-2 border-[#630cb4] hover:bg-slate-100 transition-colors"
            >
              <FiPhone size={17} className="text-[#630cb4] flex-shrink-0" />
              +91 7868043538
            </a>
            <a
              href="mailto:support@vigilixhub.in"
              className="flex items-center gap-3 text-[15px] text-slate-700 font-medium bg-slate-50 rounded-xl px-4 py-3 border-l-2 border-[#630cb4] hover:bg-slate-100 transition-colors"
            >
              <FiMail size={17} className="text-[#630cb4] flex-shrink-0" />
              support@vigilixhub.in
            </a>
            <div className="flex items-center gap-3 text-[15px] text-slate-700 font-medium bg-slate-50 rounded-xl px-4 py-3 border-l-2 border-[#630cb4]">
              <FiMapPin size={17} className="text-[#630cb4] flex-shrink-0" />
              Ramanathapuram, India
            </div>

            <div className="flex items-center gap-5 mt-3 pt-4 border-t border-slate-100">
              <a href="#" aria-label="LinkedIn" className="text-[#630cb4] hover:text-[#fb5d00] transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-[#630cb4] hover:text-[#fb5d00] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-[#630cb4] hover:text-[#fb5d00] transition-colors">
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;