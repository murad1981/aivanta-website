import Link from 'next/link';
import { MessageSquare, Cpu, Lightbulb, CheckCircle, ArrowRight, Zap, Shield, Clock, Users, Database, Workflow } from 'lucide-react';

const services = [
  {
    id: 'chatbots',
    icon: MessageSquare,
    title: 'AI Chatbots',
    subtitle: 'Intelligent Conversational Agents',
    description: 'Deploy smart chatbots that understand context, learn from interactions, and provide human-like conversations to your customers around the clock.',
    features: [
      { icon: Clock, text: '24/7 customer support automation' },
      { icon: Zap, text: 'Instant response times' },
      { icon: Users, text: 'Multi-language support' },
      { icon: Shield, text: 'Secure data handling' },
    ],
    useCases: [
      'Customer support & FAQ automation',
      'Sales lead qualification',
      'Appointment scheduling',
      'Order tracking & updates',
      'Product recommendations',
    ],
  },
  {
    id: 'agents',
    icon: Cpu,
    title: 'Custom AI Agents',
    subtitle: 'Purpose-Built Automation',
    description: 'Build specialized AI agents that handle complex workflows, process data intelligently, and integrate seamlessly with your existing business systems.',
    features: [
      { icon: Workflow, text: 'Complex workflow automation' },
      { icon: Database, text: 'Intelligent data processing' },
      { icon: Zap, text: 'Real-time decision making' },
      { icon: Shield, text: 'Enterprise-grade security' },
    ],
    useCases: [
      'Document processing & analysis',
      'Data extraction & transformation',
      'Automated reporting',
      'Quality assurance automation',
      'System integration & orchestration',
    ],
  },
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'AI Consulting',
    subtitle: 'Strategic Guidance',
    description: 'Get expert guidance to develop your AI strategy, identify opportunities, and implement solutions that align with your business goals.',
    features: [
      { icon: Users, text: 'Dedicated AI experts' },
      { icon: Workflow, text: 'Custom roadmap development' },
      { icon: Zap, text: 'Rapid implementation support' },
      { icon: Shield, text: 'Best practices & compliance' },
    ],
    useCases: [
      'AI readiness assessment',
      'Use case identification',
      'Technology selection',
      'Implementation planning',
      'Team training & workshops',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We start by understanding your business, challenges, and goals through in-depth consultation.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Our team designs a custom AI solution tailored to your specific requirements and constraints.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'We build and iterate on the solution with regular check-ins and feedback loops.',
  },
  {
    step: '04',
    title: 'Deployment',
    description: 'Your AI solution is deployed, monitored, and optimized for peak performance.',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Our Services
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and customer experiences.
          </p>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 sm:py-28 ${index % 2 === 1 ? 'bg-gray-50 dark:bg-[#0f0f1a]' : ''}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-14 h-14 rounded-xl bg-[#0066FF]/10 flex items-center justify-center">
                  <service.icon className="h-7 w-7 text-[#0066FF]" />
                </div>
                <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-[#1a1a2e] dark:text-white">
                  {service.title}
                </h2>
                <p className="mt-2 text-lg text-[#0066FF] font-medium">
                  {service.subtitle}
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature.text} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-[#0066FF]" />
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-8 btn-primary inline-flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                  <h3 className="text-lg font-semibold text-[#1a1a2e] dark:text-white">
                    Common Use Cases
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {service.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-20 sm:py-28 bg-gray-50 dark:bg-[#0f0f1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] dark:text-white">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A proven methodology to deliver AI solutions that work
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#0066FF]/20" />
                )}
                <div className="text-5xl font-bold text-[#0066FF]/20">{step.step}</div>
                <h3 className="mt-4 text-xl font-semibold text-[#1a1a2e] dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {step.description}
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
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Let&apos;s discuss your project and find the perfect AI solution for your needs.
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
