import { FiArrowRight, FiShield } from 'react-icons/fi';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 min-h-[85vh] flex items-center">
            {/* Background Grid */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                        backgroundSize: '32px 32px'
                    }}
                />
            </div>

            {/* Gradient Blurs */}
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#fb5d00]/10 blur-3xl z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-[#630cb4]/10 blur-3xl z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    <div className="flex flex-col items-start text-left max-w-xl">
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#630cb4]/20 bg-white shadow-sm mb-6">
                            <FiShield className="text-[#630cb4]" size={14} />
                            <span className="text-xs font-bold text-[#630cb4] tracking-wide uppercase">
                                Trusted Server Monitoring
                            </span>
                        </div>

                        {/* Headings */}
                        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
                            Welcome to VigilixHub.
                            <span className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.2] block mt-3 mb-1">
                                Your Strategic Partner in,
                            </span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#630cb4] to-[#fb5d00]">
                                Growth & Technology.
                            </span>
                        </h1>

                        {/* Paragraph */}
                        <p className="text-base  text-slate-600 font-medium leading-relaxed mb-10 max-w-md">
                            We deliver IT Services, Digital Marketing, and Infrastructure Monitoring to keep your organization resilient, visible, and highly competitive.
                        </p>

                        {/* Uniform Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                            <a
                                href="#consultation"
                                className="px-6 py-2.5 bg-[#630cb4] hover:bg-[#fb5d00] text-white text-[15px] font-medium rounded-full transition-colors"
                            >
                                Schedule a free Consultation
                            </a>
                            <a
                                href="#services"
                                className="px-6 py-2.5 bg-[#630cb4] hover:bg-[#fb5d00] text-white text-[15px] font-medium rounded-full transition-colors"
                            >
                                Services
                            </a>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative w-full max-w-lg mx-auto lg:max-w-none lg:ml-auto flex justify-center">
                        <div className="relative w-full aspect-square sm:w-[450px] sm:h-[450px] rounded-[2.5rem] bg-gradient-to-tr from-[#630cb4]/5 to-[#fb5d00]/5 flex items-center justify-center p-8 shadow-2xl shadow-[#630cb4]/10 border border-white backdrop-blur-sm">
                            <img
                                src="/hero-3d-placeholder.png"
                                alt="VigilixHub Technology Overview"
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;