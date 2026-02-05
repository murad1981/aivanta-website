'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@aivanta.com',
    href: 'mailto:hello@aivanta.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Riyadh, Saudi Arabia',
    href: '#',
  },
];

const services = [
  'AI Chatbot',
  'Custom AI Agent',
  'AI Consulting',
  'Other',
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-white dark:bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business with AI? Let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#1a1a2e] dark:text-white">
                Contact Information
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Reach out to us through any of these channels or fill out the form.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 flex items-center justify-center group-hover:bg-[#0066FF] transition-colors">
                      <info.icon className="h-5 w-5 text-[#0066FF] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{info.title}</div>
                      <div className="font-medium text-[#1a1a2e] dark:text-white group-hover:text-[#0066FF] transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gray-50 dark:bg-[#1a1a2e] rounded-xl">
                <h3 className="font-semibold text-[#1a1a2e] dark:text-white">
                  Office Hours
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM PST
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Weekend: By appointment
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-[#1a1a2e] dark:text-white">
                      Thank You!
                    </h3>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                      We&apos;ve received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({
                          name: '',
                          email: '',
                          company: '',
                          service: '',
                          message: '',
                        });
                      }}
                      className="mt-6 text-[#0066FF] font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#1a1a2e] dark:text-white mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0f0f1a] text-[#1a1a2e] dark:text-white focus:ring-2 focus:ring-[#0066FF] focus:border-transparent outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#1a1a2e] dark:text-white mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0f0f1a] text-[#1a1a2e] dark:text-white focus:ring-2 focus:ring-[#0066FF] focus:border-transparent outline-none transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-[#1a1a2e] dark:text-white mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0f0f1a] text-[#1a1a2e] dark:text-white focus:ring-2 focus:ring-[#0066FF] focus:border-transparent outline-none transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-[#1a1a2e] dark:text-white mb-2">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0f0f1a] text-[#1a1a2e] dark:text-white focus:ring-2 focus:ring-[#0066FF] focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#1a1a2e] dark:text-white mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0f0f1a] text-[#1a1a2e] dark:text-white focus:ring-2 focus:ring-[#0066FF] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (placeholder) */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-80 bg-gray-100 dark:bg-[#1a1a2e] rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-[#0066FF] mx-auto" />
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Riyadh, Saudi Arabia
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Map placeholder - Add your preferred map integration
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
