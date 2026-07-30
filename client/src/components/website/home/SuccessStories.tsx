import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { FiUsers, FiRepeat, FiStar, FiHeadphones } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const stats = [
    { value: "50+", label: "Happy Clients", icon: FiUsers, accent: "#630cb4" },
    { value: "98%", label: "Retention Rate", icon: FiRepeat, accent: "#fb5d00" },
    { value: "5.0", label: "Avg Rating", icon: FiStar, accent: "#150f1e" },
    { value: "24/7", label: "Live Support", icon: FiHeadphones, accent: "#630cb4" }
];

// Dummy paths for trusted logos
const trustedLogos = [
    "/logos/company-1.png",
    "/logos/company-2.png",
    "/logos/company-3.png",
    "/logos/company-4.png",
    "/logos/company-5.png",
    "/logos/company-6.png",
    "/logos/company-7.png",
    "/logos/company-8.png",
];

const accents = ["#630cb4", "#fb5d00", "#150f1e"];

const testimonials = [
    {
        company: "NxtEye",
        industry: "Vision Care",
        quote: "From brand visibility to lead generation, VigilixHub delivered measurable growth and strong ROI with creative execution.",
        name: "Ravivarmani",
        role: "Founder",
        initial: "R",
    },
    {
        company: "Bharathi",
        industry: "Recruitment",
        quote: "Transformed our website into a strong recruitment engine. The user-focused design now helps us attract qualified candidates faster.",
        name: "Ravivarman",
        role: "Founder",
        initial: "R",
    },
    {
        company: "Yudhi Builders",
        industry: "Construction",
        quote: "Crafted a logo that clearly reflects our brand identity. The design strengthened our professional image across platforms.",
        name: "Er. Lakshmikanth",
        role: "Founder",
        initial: "L",
    },
    {
        company: "Al Fareeda",
        industry: "Retail",
        quote: "Vigilixhub simplified our marketing with precision. Our campaigns are now well-timed and highly targeted. It feels like having an in-house team.",
        name: "Gobi",
        role: "Manager",
        initial: "G",
    },
    {
        company: "Shine Traders",
        industry: "Trading",
        quote: "Everything happens in one place. The precision targeting has helped us reach the right audience every time without the usual stress.",
        name: "Sathish",
        role: "Founder",
        initial: "S",
    }
];

const SuccessStories = () => {
    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="success-stories">

            {/* Inline style: marquee timing, pagination color, and enforced equal-height slides */}
            <style>
                {`
                    .logo-marquee-swiper .swiper-wrapper {
                        transition-timing-function: linear !important;
                    }
                    .testimonial-swiper .swiper-pagination-bullet-active {
                        background-color: #630cb4 !important;
                    }
                    /* Equal-height cards regardless of quote length */
                    .testimonial-swiper .swiper-wrapper {
                        align-items: stretch;
                    }
                    .testimonial-swiper .swiper-slide {
                        height: auto;
                        display: flex;
                    }
                    .testimonial-swiper .swiper-slide > div {
                        width: 100%;
                    }
                `}
            </style>

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
                    <span className="inline-flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-[#630cb4] tracking-wide uppercase">
                            Success Stories
                        </span>
                    </span>
                    <h2 className="vh-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#150f1e] tracking-tight leading-tight mb-6">
                        Trusted by <span className="text-[#fb5d00]">market leaders</span>
                    </h2>
                    <p className="text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                        See how VigilixHub is reshaping businesses with data-driven strategies and creative precision.
                    </p>
                </div>

                {/* Statistics Ledger */}
                <div className="bg-slate-50 rounded-[2rem] border border-slate-100 p-8 sm:p-10 mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-slate-200 md:divide-y-0 md:divide-x">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`flex flex-col items-center text-center group py-5 md:py-0 ${index % 2 === 0 ? 'pr-4 md:pr-8' : 'pl-4 md:pl-8'} md:px-8`}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-all duration-300"
                                    style={{ backgroundColor: stat.accent }}
                                >
                                    <stat.icon size={20} />
                                </div>
                                <div className="vh-display text-4xl lg:text-5xl font-bold text-[#150f1e] tracking-tight mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-[13px] font-bold text-slate-500 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trusted Logos Marquee (Continuous Loop, edge-faded) */}
                <div className="mb-20 pt-8 border-t border-slate-100">
                    <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
                        Empowering forward-thinking companies
                    </h3>
                    <div
                        style={{
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                        }}
                    >
                        <Swiper
                            modules={[Autoplay]}
                            className="logo-marquee-swiper"
                            spaceBetween={40}
                            slidesPerView={3}
                            loop={true}
                            speed={3000} // Steady speed for continuous flow
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 4, spaceBetween: 50 },
                                768: { slidesPerView: 5, spaceBetween: 60 },
                                1024: { slidesPerView: 6, spaceBetween: 80 },
                            }}
                        >
                            {trustedLogos.map((logo, index) => (
                                <SwiperSlide key={index} className="flex items-center justify-center">
                                    {/* Replace with your actual logos later */}
                                    <div className="h-12 w-32 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-xs font-semibold hover:border-[#630cb4]/20 transition-colors">
                                        Logo {index + 1}
                                        <img src={logo} alt={`Client Logo ${index + 1}`} className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Testimonials Swiper Carousel */}
                <div className="pb-12">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        className="testimonial-swiper !pb-16" // Extra padding bottom for pagination dots
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {testimonials.map((testimonial, index) => {
                            const accent = accents[index % accents.length];
                            return (
                                <SwiperSlide key={index}>
                                    <div className="group relative bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden">
                                        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: accent }} aria-hidden="true" />

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
                                                <div
                                                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0 text-white"
                                                    style={{ backgroundColor: accent }}
                                                >
                                                    {testimonial.initial}
                                                </div>
                                                <div>
                                                    <h4 className="text-[15px] font-bold text-[#150f1e] leading-tight">
                                                        {testimonial.name}
                                                    </h4>
                                                    <div className="flex items-center gap-1.5 text-[12px] font-semibold text-slate-500 mt-0.5 whitespace-nowrap">
                                                        <span>{testimonial.role}</span>
                                                        <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0"></span>
                                                        <span className="truncate" style={{ color: accent }}>
                                                            {testimonial.company}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default SuccessStories;