import { Target, Users, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Clean, precise bookkeeping that keeps your financial data accurate and compliant.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Personalized support designed around your business goals and day-to-day needs.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of service quality and continuous improvement.',
    },
    {
      icon: TrendingUp,
      title: 'Insightful',
      description: 'Clear reporting and financial visibility.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Reimagining Financial Operations
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Bright Ledger Solutions was founded to help small businesses gain clarity, control, and confidence in their finances. With hands-on expertise in bookkeeping, accounts payable, and accounts receivable, we work as a seamless extension of our clients’ finance teams—ensuring accuracy, efficiency, and peace of mind.            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our mission is to empower businesses and finance teams to focus on what matters most—growth and strategy—by streamlining routine financial processes and ensuring accuracy and compliance across all operations.            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">8+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Years of Expertise</h4>
                  <p className="text-gray-600">Deep understanding of financial operations and industry best practices</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-600">20+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Successful Implementations</h4>
                  <p className="text-gray-600">Proven track record across diverse industries and company sizes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
