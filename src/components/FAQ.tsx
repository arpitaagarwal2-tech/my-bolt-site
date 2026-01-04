import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: "What services do you provide?",
    a: "We provide bookkeeping services plus Accounts Payable (AP) and Accounts Receivable (AR) support—invoice entry, bill tracking, reconciliations, customer invoicing, payment posting, and AR aging reports.",
  },
  {
    q: "Who do you work with?",
    a: "We’re built for micro, small, mid-size and growing businesses that need structured support and financial clarity.",
  },
  {
    q: "Do you offer reporting and advisory support?",
    a: "Yes. Beyond bookkeeping, we provide financial reporting, cash flow analysis, and practical insights to help you make informed decisions.",
  },
  {
    q: "How do you help reduce errors and stress?",
    a: "With consistent record-keeping and reconciliations—so you have reliable data, fewer discrepancies, and less financial paperwork.",
  },
  {
    q: "What does it look like to work with you?",
    a: "We start with an initial consultation, define a customized scope, set clear workflows, and stay aligned through ongoing communication and check-ins.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is customized based on your volume and complexity. We keep it transparent (no hidden costs) and right-sized to what your business needs.",
  },
  {
    q: "How do I get started?",
    a: "Contact us and we’ll review your needs and share a customized service proposal aligned to your goals.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Quick answers to common questions about our bookkeeping, AP/AR, and engagement model.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.q} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-semibold text-slate-900">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 py-4 bg-white text-slate-700 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Still have questions? Contact us
          </a>
        </div>
      </div>
    </section>
  );
}

