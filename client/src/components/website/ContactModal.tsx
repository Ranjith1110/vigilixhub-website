import React, { useState, useEffect } from 'react';
import { FiX, FiSend, FiCheckCircle } from 'react-icons/fi';
import { Button } from '../ui/Button';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setTimeout(() => {
                setIsSuccess(false);
                setFormData({ name: '', phone: '', email: '', service: '', message: '' });
                setErrors({});
                setSubmitError('');
            }, 300);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));

        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Full name is required.';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required.';
        } else if (!/^\+?[\d\s-]{10,15}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number.';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!formData.service) {
            newErrors.service = 'Please select a service.';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Please provide a message.';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError('');

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbweAKkZWJtFmGtc9z2QjruTBIAD2k9W-EUBfgyhL-r5pffPAF2MDrm_1MVMCTgAR_K9/exec';

        const formPayload = new FormData();
        formPayload.append('name', formData.name);
        formPayload.append('phone', formData.phone);
        formPayload.append('email', formData.email);
        formPayload.append('service', formData.service);
        formPayload.append('message', formData.message);

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: formPayload,
                mode: 'no-cors'
            });

            setIsSuccess(true);
        } catch (error) {
            setSubmitError('Failed to send message. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">

            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
                aria-hidden="true"
            />

            <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">

                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#630cb4] to-[#fb5d00]" />

                <div className="flex items-center justify-between p-6 sm:p-8 border-b border-slate-100">
                    <div>
                        <h3 className="vh-display text-2xl font-bold text-[#150f1e] tracking-tight">
                            Let's Talk
                        </h3>
                        <p className="text-[13px] font-medium text-slate-500 mt-1">
                            Fill out the form below and our team will get back to you.
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-[#fb5d00] transition-colors shrink-0"
                        aria-label="Close modal"
                    >
                        <FiX size={20} />
                    </button>
                </div>

                <div className="overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                                <FiCheckCircle size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-[#150f1e] mb-2">Message Sent!</h4>
                            <p className="text-[14px] text-slate-600 font-medium mb-8">
                                Thank you for reaching out. We have received your message and will contact you shortly.
                            </p>
                            <Button onClick={onClose} variant="primary" size="md">
                                Close Window
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="name" className="text-[13px] font-bold text-slate-700 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-[14px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 transition-all ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:border-[#630cb4] focus:ring-[#630cb4]/10'}`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <span className="text-[12px] font-semibold text-red-500 ml-1 mt-0.5">{errors.name}</span>}
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="phone" className="text-[13px] font-bold text-slate-700 ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-[14px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 transition-all ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:border-[#630cb4] focus:ring-[#630cb4]/10'}`}
                                        placeholder="+91 98765 43210"
                                    />
                                    {errors.phone && <span className="text-[12px] font-semibold text-red-500 ml-1 mt-0.5">{errors.phone}</span>}
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className="text-[13px] font-bold text-slate-700 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-[14px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 transition-all ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:border-[#630cb4] focus:ring-[#630cb4]/10'}`}
                                    placeholder="john@company.com"
                                />
                                {errors.email && <span className="text-[12px] font-semibold text-red-500 ml-1 mt-0.5">{errors.email}</span>}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="service" className="text-[13px] font-bold text-slate-700 ml-1">Interested In</label>
                                <select
                                    id="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-[14px] text-slate-900 focus:outline-none focus:ring-4 transition-all appearance-none ${errors.service ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:border-[#630cb4] focus:ring-[#630cb4]/10'}`}
                                >
                                    <option value="" disabled>Select a service</option>
                                    <option value="IT Services & Infrastructure">IT Services & Infrastructure</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Manpower Support">Manpower Support</option>
                                    <option value="Other Inquiry">Other Inquiry</option>
                                </select>
                                {errors.service && <span className="text-[12px] font-semibold text-red-500 ml-1 mt-0.5">{errors.service}</span>}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="message" className="text-[13px] font-bold text-slate-700 ml-1">Your Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-[14px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 transition-all resize-none ${errors.message ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10' : 'border-slate-200 focus:border-[#630cb4] focus:ring-[#630cb4]/10'}`}
                                    placeholder="Tell us about your project or inquiry..."
                                />
                                {errors.message && <span className="text-[12px] font-semibold text-red-500 ml-1 mt-0.5">{errors.message}</span>}
                            </div>

                            {submitError && (
                                <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-[13px] font-semibold text-red-600 text-center">
                                    {submitError}
                                </div>
                            )}

                            <div className="mt-2">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full shadow-[#fb5d00]/20 hover:shadow-[#fb5d00]/30"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            Send Message
                                            <FiSend size={16} />
                                        </span>
                                    )}
                                </Button>
                            </div>

                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactModal;