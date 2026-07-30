import {
    FiMapPin,
    FiPhone,
    FiMail,
    FiArrowUp,
    FiArrowRight,
    FiUsers,
    FiTarget,
    FiSmile,
    FiHeadphones
} from 'react-icons/fi';
import {
    FaLinkedinIn,
    FaInstagram,
    FaFacebookF
} from 'react-icons/fa';


const stats = [
    { value: "150+", label: "Happy Clients", icon: FiUsers },
    { value: "1K+", label: "Projects Delivered", icon: FiTarget },
    { value: "95%", label: "Satisfaction Rate", icon: FiSmile },
    { value: "24/7", label: "Support Available", icon: FiHeadphones }
];

const usefulLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Contact Support", href: "#contact" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms & Conditions", href: "#terms" },
];

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="relative bg-gradient-to-b from-[#1c0f2e] to-[#0f071a] pt-20 pb-8 overflow-hidden text-slate-300">

            {/* Background Dot Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}
                />
            </div>

            {/* Glowing Accent Orbs */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#fb5d00]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#630cb4]/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Faint hub motif, glowing against the dark background — consistent with the rest of the site */}
            <svg
                className="absolute top-10 right-8 w-72 h-72 opacity-[0.08] pointer-events-none hidden lg:block"
                viewBox="0 0 400 400"
                aria-hidden="true"
            >
                <circle cx="200" cy="200" r="6" fill="#fb5d00" />
                {[0, 72, 144, 216, 288].map((deg) => {
                    const rad = (deg * Math.PI) / 180;
                    const x = 200 + 150 * Math.cos(rad);
                    const y = 200 + 150 * Math.sin(rad);
                    return (
                        <g key={deg}>
                            <line x1="200" y1="200" x2={x} y2={y} stroke="#ffffff" strokeWidth="1.5" />
                            <circle cx={x} cy={y} r="4" fill="#630cb4" />
                        </g>
                    );
                })}
            </svg>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* Top Stats Banner */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 mb-16 shadow-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`flex flex-col items-center text-center py-5 md:py-0 ${index % 2 === 0 ? 'pr-4 md:pr-8' : 'pl-4 md:pl-8'} md:px-8`}
                            >
                                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-[#fb5d00] mb-3">
                                    <stat.icon size={19} />
                                </div>
                                <div className="vh-display text-3xl lg:text-4xl font-bold text-white tracking-tight mb-1.5">
                                    {stat.value}
                                </div>
                                <div className="text-[12px] font-bold text-[#fb5d00] uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Brand Info (Spans 4 columns) */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 shadow-lg shadow-black/20 shrink-0">
                                <img src="/logo.png" alt="VigilixHub logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="vh-display text-2xl font-bold text-white tracking-tight leading-none">
                                    Vigilix<span className="text-[#fb5d00]">Hub</span>
                                </span>
                                <span className="text-[11px] font-bold text-[#fb5d00] uppercase tracking-widest mt-1">
                                    Growth &amp; Technology Partner
                                </span>
                            </div>
                        </div>
                        <p className="text-[15px] text-slate-400 font-medium leading-relaxed mb-6 pr-4">
                            IT Services, Digital Marketing, and Manpower Support under one roof — helping organizations stay resilient, visible, and highly competitive since 2025.
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fb5d00] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#fb5d00]"></span>
                            </span>
                            <span className="text-[13px] font-bold text-white tracking-wide">
                                Trusted by 150+ Companies
                            </span>
                        </div>
                    </div>

                    {/* Column 2: Useful Links (Spans 2 columns) */}
                    <div className="lg:col-span-2">
                        <h4 className="vh-display text-[17px] font-bold text-white mb-6">Useful Links</h4>
                        <ul className="space-y-3.5">
                            {usefulLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-[15px] font-medium text-slate-400 hover:text-[#fb5d00] transition-colors flex items-center gap-2 group">
                                        <FiArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#fb5d00]" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info (Spans 3 columns) */}
                    <div className="lg:col-span-3">
                        <h4 className="vh-display text-[17px] font-bold text-white mb-6">Get in Touch</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[#630cb4] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#630cb4]/30">
                                    <FiMapPin size={17} />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <span className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Address</span>
                                    <span className="text-[15px] font-medium text-slate-300">Ramanathapuram, India</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[#fb5d00] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#fb5d00]/30">
                                    <FiPhone size={17} />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <span className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Phone</span>
                                    <a href="tel:+917868043538" className="text-[15px] font-medium text-slate-300 hover:text-white transition-colors">
                                        +91 7868043538
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[#630cb4] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#630cb4]/30">
                                    <FiMail size={17} />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <span className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Email</span>
                                    <a href="mailto:support@vigilixhub.in" className="text-[15px] font-medium text-slate-300 hover:text-white transition-colors">
                                        support@vigilixhub.in
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter (Spans 3 columns) */}
                    <div className="lg:col-span-3">
                        <h4 className="vh-display text-[17px] font-bold text-white mb-6">Stay Updated</h4>
                        <p className="text-[14px] text-slate-400 font-medium leading-relaxed mb-6">
                            Subscribe for product updates, industry insights, and exclusive opportunities.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-full text-[14px] text-white placeholder-slate-500 focus:outline-none focus:border-[#fb5d00] transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full px-5 py-3.5 bg-[#fb5d00] hover:bg-white text-white hover:text-slate-900 text-[15px] font-bold rounded-full transition-colors shadow-lg shadow-[#fb5d00]/20"
                            >
                                Subscribe Now
                            </button>
                            <p className="text-[12px] text-slate-500 font-medium mt-1 text-center">
                                We respect your privacy. Unsubscribe anytime.
                            </p>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[14px] text-slate-500 font-medium">
                        © 2026 VigilixHub. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-[14px] font-medium text-slate-500">
                        <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
                        <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                        <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>

                    {/* Socials & Back to Top */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 pr-4 border-r border-white/10">
                            <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-[#fb5d00] transition-colors"><FaLinkedinIn size={16} /></a>
                            <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-[#fb5d00] transition-colors"><FaInstagram size={16} /></a>
                            <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-[#fb5d00] transition-colors"><FaFacebookF size={16} /></a>
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-[13px] font-bold text-white hover:text-[#fb5d00] transition-colors group"
                        >
                            Back to Top
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#fb5d00]/20 transition-colors">
                                <FiArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;