import Link from 'next/link';
import { CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses getting started with AI',
    price: '$499',
    period: '/month',
    features: [
      'AI chatbot for your website',
      'Up to 1,000 conversations/month',
      'Email support',
      'Standard integrations (WhatsApp, Web)',
      'Basic analytics dashboard',
      'Knowledge base setup',
    ],
    notIncluded: [
      'Custom AI agents',
      'Priority support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'For growing businesses that need more power',
    price: '$999',
    period: '/month',
    features: [
      'Advanced AI chatbot with custom training',
      'Up to 5,000 conversations/month',
      'Priority email & chat support',
      'Custom integrations',
      'Advanced analytics & reporting',
      'Multi-language support',
      '1 Custom AI agent',
      'Monthly strategy call',
    ],
    notIncluded: [
      'Unlimited agents',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For organizations with complex needs',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited AI chatbots',
      'Unlimited conversations',
      'Priority support',
      'Enterprise integrations',
      'Custom analytics & BI integration',
      'White-label options',
      'Multiple custom AI agents',
      'Dedicated account manager',
      'SLA guarantees',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const faqs = [
  {
    question: 'What counts as a conversation?',
    answer: 'A conversation is counted as a single chat session between a user and your AI chatbot, regardless of the number of messages exchanged within that session.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
  },
  {
    question: 'What integrations are available?',
    answer: 'We support integrations with popular platforms including Slack, Microsoft Teams, Salesforce, HubSpot, Zendesk, and many more. Enterprise plans include custom integration development.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'We offer a 14-day free trial for our Starter and Professional plans. Enterprise evaluations are available upon request.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'Support varies by plan: Starter includes email support, Professional adds chat support with faster response times, and Enterprise includes 24/7 phone support with dedicated success managers.',
  },
  {
    question: 'How long does implementation take?',
    answer: 'Basic chatbot setup can be completed in 1-2 weeks. Custom AI agents typically take 4-8 weeks depending on complexity. Enterprise solutions are scoped individually.',
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white dark:bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include setup, training, and ongoing optimization.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-[#1a1a2e] text-white ring-2 ring-[#0066FF] scale-105'
                    : 'bg-white dark:bg-[#1a1a2e] border border-gray-200 dark:border-gray-800'
                }`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-[#0066FF] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`text-2xl font-bold ${plan.highlighted ? 'text-white' : 'text-[#1a1a2e] dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-[#1a1a2e] dark:text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className={`h-5 w-5 flex-shrink-0 ${plan.highlighted ? 'text-[#00D4FF]' : 'text-[#0066FF]'}`} />
                      <span className={`text-sm ${plan.highlighted ? 'text-gray-200' : 'text-gray-600 dark:text-gray-400'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.notIncluded.length > 0 && (
                  <ul className="mt-4 space-y-4">
                    {plan.notIncluded.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 opacity-50">
                        <CheckCircle className="h-5 w-5 flex-shrink-0" />
                        <span className={`text-sm line-through ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href="/contact"
                  className={`mt-8 block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-white text-[#1a1a2e] hover:bg-gray-100'
                      : 'bg-[#0066FF] text-white hover:bg-[#0052cc]'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Note */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 dark:bg-[#0f0f1a] rounded-2xl p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Not sure which plan is right for you?{' '}
              <Link href="/contact" className="text-[#0066FF] font-medium hover:underline">
                Schedule a consultation
              </Link>{' '}
              and we&apos;ll help you find the perfect fit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-gray-50 dark:bg-[#0f0f1a]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white dark:bg-[#1a1a2e] rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <h3 className="flex items-center gap-3 text-lg font-semibold text-[#1a1a2e] dark:text-white">
                  <HelpCircle className="h-5 w-5 text-[#0066FF] flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400 pl-8">
                  {faq.answer}
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
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="bg-white text-[#1a1a2e] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
