import Link from 'next/link';
import { Bot, Cpu, MessageSquare, Lightbulb, ArrowRight, CheckCircle, Zap, Shield, Clock } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents that handle customer support, sales inquiries, and FAQ automation 24/7.',
  },
  {
    icon: Cpu,
    title: 'Custom AI Agents',
    description: 'Purpose-built AI agents that automate complex tasks, process data, and integrate seamlessly with your systems.',
  },
  {
    icon: Lightbulb,
    title: 'AI Consulting',
    description: 'Expert guidance to help you develop AI strategy, implement solutions, and train your team effectively.',
  },
];

const features = [
  'Custom-built for your business needs',
  'Seamless integration with existing tools',
  '24/7 automated customer support',
  'Scalable architecture for growth',
  'Data-driven insights and analytics',
  'Continuous learning and improvement',
];

const technologies = [
  {
    icon: Zap,
    title: 'Latest AI Models',
    description: 'Powered by cutting-edge language models and machine learning algorithms.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Built with security-first architecture and data privacy compliance.',
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    description: 'From concept to production in weeks, not months.',
  },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Build Intelligent{' '}
              <span className="text-[#00D4FF]">AI Solutions</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transform your business with custom AI chatbots and agents. We help you automate, scale, and deliver exceptional customer experiences.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-[#1a1a2e] inline-flex items-center justify-center">
                View Services
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '99.9%', label: 'Uptime Guarantee' },
              { value: '60%', label: 'Avg. Cost Reduction' },
              { value: '24/7', label: 'Support Available' },
              { value: '<2 Weeks', label: 'Time to Deploy' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-[#00D4FF]">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-28 bg-gray-50 dark:bg-[#0f0f1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] dark:text-white">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-800"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-[#0066FF]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#1a1a2e] dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center text-[#0066FF] font-medium hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] dark:text-white">
                Why Choose Aivanta?
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We combine cutting-edge AI technology with deep business understanding to deliver solutions that actually work.
              </p>

              <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#0066FF] flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="mt-8 btn-primary inline-flex items-center gap-2"
              >
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl gradient-bg p-8 flex items-center justify-center">
                <Bot className="w-48 h-48 text-[#00D4FF] opacity-80" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-[#1a1a2e] rounded-xl p-4 shadow-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a1a2e] dark:text-white">AI Ready</div>
                    <div className="text-sm text-gray-500">Deploy in days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 sm:py-28 bg-gray-50 dark:bg-[#0f0f1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] dark:text-white">
              Built with Modern Technology
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Leveraging the latest advancements in AI
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.title}
                className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-[#0066FF]/10 flex items-center justify-center">
                  <tech.icon className="h-7 w-7 text-[#0066FF]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[#1a1a2e] dark:text-white">
                  {tech.title}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Let&apos;s discuss how AI can help you automate operations, improve customer experience, and drive growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#1a1a2e] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1a1a2e] transition-colors inline-flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
