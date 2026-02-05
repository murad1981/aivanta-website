import Link from 'next/link';
import { Target, Eye, Heart, Zap, Users, Award, ArrowRight, Linkedin, Twitter } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We stay at the forefront of AI technology, constantly exploring new possibilities to deliver cutting-edge solutions.',
  },
  {
    icon: Heart,
    title: 'Client Success',
    description: 'Your success is our success. We measure our achievements by the tangible results we deliver for our clients.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work as an extension of your team, ensuring seamless communication and shared ownership of outcomes.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards, delivering quality solutions that exceed expectations.',
  },
];

const team = [
  {
    name: 'Murad Esheilah',
    role: 'Founder',
    bio: 'AI enthusiast and entrepreneur passionate about building intelligent solutions that transform businesses.\n\nDedicated to helping companies leverage cutting-edge AI technology to automate operations, enhance customer experiences, and drive growth.',
    linkedin: 'https://www.linkedin.com/in/muradjamal/',
    twitter: 'https://x.com/muradjamal1981',
  },
];


export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            About Aivanta
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Passionate about helping businesses harness the power of artificial intelligence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-[#0066FF]" />
                </div>
                <h2 className="text-2xl font-bold text-[#1a1a2e] dark:text-white">Our Mission</h2>
              </div>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To democratize AI by making powerful, intelligent solutions accessible to businesses of all sizes. We believe every company should be able to leverage AI to improve their operations and serve their customers better.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-[#0066FF]" />
                </div>
                <h2 className="text-2xl font-bold text-[#1a1a2e] dark:text-white">Our Vision</h2>
              </div>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                A world where AI seamlessly augments human capabilities, enabling businesses to focus on what matters most—creating value, building relationships, and driving innovation.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] dark:text-white">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0066FF]/10 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-[#0066FF]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1a1a2e] dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-28 bg-gray-50 dark:bg-[#0f0f1a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] dark:text-white">
              Meet the Founder
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Dedicated to helping businesses succeed with AI
            </p>
          </div>

          <div className="mt-16 flex justify-center">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-[#1a1a2e] rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 text-center max-w-md"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D4FF] flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1a1a2e] dark:text-white">
                  {member.name}
                </h3>
                <p className="text-[#0066FF] text-sm font-medium">{member.role}</p>
                <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                  {member.bio}
                </p>
                <div className="mt-4 flex justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-[#0066FF] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-gray-400 hover:text-[#0066FF] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
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
              Ready to Work Together?
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Let&apos;s discuss how AI can transform your business operations.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="bg-white text-[#1a1a2e] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
