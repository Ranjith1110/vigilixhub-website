import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const SuccessStories = () => {
    const stats = [
        { value: "50+", label: "Happy Clients" },
        { value: "98%", label: "Retention Rate" },
        { value: "5.0", label: "Avg Rating" },
        { value: "24/7", label: "Live Support" }
    ];

    const testimonials = [
        {
            company: "NxtEye",
            industry: "Vision Care",
            quote: "From brand visibility to lead generation, VigilixHub delivered measurable growth and strong ROI with creative execution.",
            name: "Ravivarmani",
            role: "Founder",
            initial: "R",
            theme: "primary" // Uses Purple
        },
        {
            company: "Bharathi",
            industry: "Recruitment",
            quote: "Transformed our website into a strong recruitment engine. The user-focused design now helps us attract qualified candidates faster.",
            name: "Ravivarman",
            role: "Founder",
            initial: "R",
            theme: "secondary" // Uses Orange
        },
        {
            company: "Yudhi Builders",
            industry: "Construction",
            quote: "Crafted a logo that clearly reflects our brand identity. The design strengthened our professional image across platforms.",
            name: "Er. Lakshmikanth",
            role: "Founder",
            initial: "L",
            theme: "primary"
        },
        {
            company: "Al Fareeda",
            industry: "Retail",
            quote: "Vigilixhub simplified our marketing with precision. Our campaigns are now well-timed and highly targeted. It feels like having an in-house team.",
            name: "Gobi",
            role: "Manager",
            initial: "G",
            theme: "secondary"
        },
        {
            company: "Shine Traders",
            industry: "Trading",
            quote: "Everything happens in one place. The precision targeting has helped us reach the right audience every time without the usual stress.",
            name: "Sathish",
            role: "Founder",
            initial: "S",
            theme: "primary"
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="success-stories">
            
            {/* Background Dot Grid */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-6">
                        <span className="text-xs font-bold text-[#630cb4] tracking-wide uppercase">
                            Success Stories
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                        Trusted by <span className="text-[#fb5d00]">Market Leaders</span>
                    </h2>
                    <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                        See how VigilixHub is reshaping businesses with data-driven strategies and creative precision.
                    </p>
                </div>

                {/* Statistics Bar */}
                <div className="bg-white rounded-[2rem] border border-slate-200 p-8 sm:p-10 shadow-sm mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        {stats.map((stat, index) => (
                            <div key={index} className={`flex flex-col items-center justify-center text-center ${index !== 0 && index !== 2 ? 'pt-8 md:pt-0' : ''} ${index === 2 ? 'pt-8 md:pt-0' : ''}`}>
                                <div className="text-4xl lg:text-5xl font-black text-[#630cb4] tracking-tight mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-[13px] font-bold text-slate-500 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
                        >
                            {/* Subtle Decorative Quote Icon */}
                            <FaQuoteLeft className="absolute top-6 right-6 text-slate-50 opacity-50 group-hover:scale-110 group-hover:text-slate-100 transition-all duration-500" size={80} />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Five Stars */}
                                <div className="flex items-center gap-1 mb-6 text-[#fb5d00]">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} size={14} />
                                    ))}
                                </div>
                                
                                {/* Quote Text */}
                                <p className="text-[15px] text-slate-700 font-medium leading-relaxed mb-8 flex-grow">
                                    "{testimonial.quote}"
                                </p>
                                
                                {/* Client Info Section */}
                                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0 ${
                                        testimonial.theme === 'primary' 
                                        ? 'bg-[#630cb4]/10 text-[#630cb4]' 
                                        : 'bg-[#fb5d00]/10 text-[#fb5d00]'
                                    }`}>
                                        {testimonial.initial}
                                    </div>
                                    <div>
                                        <h4 className="text-[15px] font-bold text-slate-900 leading-tight">
                                            {testimonial.name}
                                        </h4>
                                        <div className="flex items-center gap-1.5 text-[12px] font-semibold text-slate-500 mt-0.5">
                                            <span>{testimonial.role}</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                            <span className={testimonial.theme === 'primary' ? 'text-[#630cb4]' : 'text-[#fb5d00]'}>
                                                {testimonial.company}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SuccessStories;