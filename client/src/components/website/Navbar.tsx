import { useState, useEffect } from 'react';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiMenu, 
  FiX
} from 'react-icons/fi';
import { 
  FaLinkedinIn, 
  FaInstagram, 
  FaFacebookF 
} from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 sm:px-6 lg:px-8">
        
        {/* Main Navbar Pill */}
        <nav 
          className={`w-full max-w-7xl bg-white rounded-full px-6 py-2.5 flex justify-between items-center transition-all duration-300 border border-slate-100 ${
            scrolled ? 'shadow-lg shadow-[#630cb4]/10' : 'shadow-sm'
          }`}
        >
          {/* 1. Left: Logo Image */}
          <div className="flex-1 flex items-center cursor-pointer">
            {/* Replace this dummy path with your actual logo path */}
            <img 
              src="/logo.png" 
              alt="Company Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* 2. Center: Desktop Links */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-10">
            <a href="#" className="relative text-[#630cb4] font-medium text-[16px] py-1">
              Home
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#630cb4] rounded-full"></span>
            </a>
            
            <a href="#" className="text-slate-600 font-medium text-[16px] hover:text-[#fb5d00] transition-colors py-1">
              About Us
            </a>
            <a href="#" className="text-slate-600 font-medium text-[16px] hover:text-[#fb5d00] transition-colors py-1">
              Services
            </a>
          </div>

          {/* 3. Right: CTA Button & Mobile Toggle */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <a 
              href="#" 
              className="hidden lg:flex px-6 py-2.5 bg-[#630cb4] hover:bg-[#fb5d00] text-white text-[15px] font-medium rounded-full transition-colors"
            >
              Contact us
            </a>
            
            <button 
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col pt-24 pb-8 px-8 overflow-y-auto ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col mt-4">
          <a href="#" className="py-4 border-b border-slate-100 text-[#630cb4] font-semibold text-[16px]">
            Home
          </a>
          <a href="#" className="py-4 border-b border-slate-100 text-slate-700 font-semibold text-[16px] hover:text-[#fb5d00] transition-colors">
            About Us
          </a>
          <a href="#" className="py-4 border-b border-slate-100 text-slate-700 font-semibold text-[16px] hover:text-[#fb5d00] transition-colors">
            Services
          </a>
          
          <div className="mt-8">
            <a href="#" className="flex items-center justify-center w-full py-3.5 rounded-full bg-[#630cb4] text-white font-semibold text-[16px] hover:bg-[#fb5d00] transition-colors">
              Contact us
            </a>
          </div>
        </div>

        {/* Clean Contact Info for Mobile */}
        <div className="mt-auto pt-10 flex flex-col gap-5">
          <h3 className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Get in touch</h3>
          
          <div className="flex flex-col gap-4">
            <a href="tel:+917868043538" className="flex items-center gap-3 text-[15px] text-slate-700 font-medium hover:text-[#fb5d00] transition-colors">
              <FiPhone size={18} className="text-[#630cb4]" />
              +91 7868043538
            </a>
            <a href="mailto:support@vigilixhub.in" className="flex items-center gap-3 text-[15px] text-slate-700 font-medium hover:text-[#fb5d00] transition-colors">
              <FiMail size={18} className="text-[#630cb4]" />
              support@vigilixhub.in
            </a>
            <div className="flex items-center gap-3 text-[15px] text-slate-700 font-medium">
              <FiMapPin size={18} className="text-[#630cb4]" />
              Ramanathapuram, India
            </div>
            
            <div className="flex items-center gap-5 mt-4 pt-6 border-t border-slate-100">
              <a href="#" className="text-[#630cb4] hover:text-[#fb5d00] transition-colors">
                <FaLinkedinIn size={22} />
              </a>
              <a href="#" className="text-[#630cb4] hover:text-[#fb5d00] transition-colors">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="text-[#630cb4] hover:text-[#fb5d00] transition-colors">
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