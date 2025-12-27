export default function PrivacyPolicy() {
  const effectiveDate = "December 28, 2025"; // change anytime

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-gray-600">Effective Date: {effectiveDate}</p>

        <div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
          <p>
            Bright Ledger Solutions (“we,” “our,” or “us”) respects your privacy.
            This Privacy Policy explains how we collect, use, disclose, and protect
            your information when you visit our website or contact us for services.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Information you provide:</span> name, email,
                phone number, company name, and message details when you submit forms or contact us.
              </li>
              <li>
                <span className="font-medium">Usage data:</span> basic analytics such as pages visited,
                browser type, and approximate location (depending on your settings).
              </li>
              <li>
                <span className="font-medium">Cookies:</span> we may use cookies to improve site experience
                and measure website performance.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>To respond to inquiries and provide requested services.</li>
              <li>To send service-related communication (quotes, onboarding steps, updates).</li>
              <li>To improve our website, content, and user experience.</li>
              <li>To comply with legal or regulatory obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">3. Sharing of Information</h2>
            <p className="mt-3">
              We do not sell your personal information. We may share information with trusted
              service providers (e.g., website hosting, analytics, email tools) only as needed
              to operate our business and deliver services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">4. Data Security</h2>
            <p className="mt-3">
              We use reasonable administrative and technical safeguards to protect your information.
              However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">5. Your Choices</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>You may request access, correction, or deletion of your personal information.</li>
              <li>You can disable cookies in your browser settings (some features may be affected).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">6. Third-Party Links</h2>
            <p className="mt-3">
              Our website may contain links to third-party sites (e.g., scheduling tools).
              We are not responsible for their privacy practices. Please review their policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">7. Updates to This Policy</h2>
            <p className="mt-3">
              We may update this policy from time to time. Changes will be posted on this page
              with an updated effective date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">8. Contact Us</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, contact us at{" "}
              <a className="text-blue-600 hover:underline" href="mailto:info@brightledgersolutions.org">
                info@brightledgersolutions.org
              </a>.
            </p>
          </div>

          <p className="text-xs text-gray-500">
            Disclaimer: This template is provided for general informational purposes and does not
            constitute legal advice.
          </p>
        </div>
      </section>
    </main>
  );
}
