import { Receipt, FileText, Brain, BarChart3, Zap, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Receipt,
      title: 'Accounts Payable (AP) Services',
      description: 'Reliable vendor bill processing to ensure timely payments and accurate records.',
      features: ['Vendor Invoice Entry', 'Bill Tracking & Scheduling', 'Payment Support', 'AP Reconciliation'],
    },
    {
      icon: FileText,
      title: 'Accounts Receivable (AR) Services',
      description: 'Improve cash flow with organized invoicing and receivable tracking.',
      features: ['Customer Invoicing', 'Payment Posting', 'AR Aging Reports', 'Follow-up Support'],
    },
    {
      icon: BarChart3,
      title: 'Bookkeeping Services',
      description: 'Monthly and ongoing bookkeeping to keep your financial records accurate, organized, and up to date.',
      features: ['Transaction Categorization', 'Bank & Credit Card Reconciliations', 'Monthly Financial Statements', 'QuickBooks & Xero Setup and Cleanup'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end services designed to transform your accounts payable and receivable operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="h-14 w-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-700">
                    <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
