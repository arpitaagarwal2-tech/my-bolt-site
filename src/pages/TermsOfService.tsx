export default function TermsOfService() {
  const effectiveDate = "December 28, 2025"; // change anytime

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-gray-600">Effective Date: {effectiveDate}</p>

        <div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
          <p>
            These Terms of Service (“Terms”) govern your use of the Bright Ledger Solutions
            website and any related services. By accessing this website, you agree to these Terms.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">1. Services</h2>
            <p className="mt-3">
              Bright Ledger Solutions provides bookkeeping and related financial support services
              (including accounts payable and accounts receivable support). Specific deliverables,
              timelines, and pricing are agreed upon separately in writing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">2. Use of the Website</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>You agree not to misuse the website or attempt unauthorized access.</li>
              <li>You agree not to upload or submit harmful, illegal, or misleading content.</li>
              <li>Website content may not be copied or reused without permission.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">3. No Professional Advice</h2>
            <p className="mt-3">
              Information on this website is for general informational purposes and is not legal,
              tax, or investment advice. You should consult a qualified professional for advice
              specific to your situation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">4. Confidentiality</h2>
            <p className="mt-3">
              If you engage our services, we will treat client information as confidential and use it
              only to deliver agreed services, subject to legal requirements and any third-party tools
              used to perform the work.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">5. Payments & Cancellations</h2>
            <p className="mt-3">
              Payment terms, cancellation policies, and service scope will be outlined in the client
              agreement or proposal. If there is a conflict between these Terms and a signed agreement,
              the signed agreement controls.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">6. Limitation of Liability</h2>
            <p className="mt-3">
              To the maximum extent permitted by law, Bright Ledger Solutions will not be liable for
              indirect, incidental, or consequential damages arising from use of this website. Our total
              liability related to services will be limited as stated in the applicable service agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">7. Changes</h2>
            <p className="mt-3">
              We may update these Terms from time to time. Updated Terms will be posted on this page
              with a revised effective date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900">8. Contact</h2>
            <p className="mt-3">
              Questions about these Terms? Email{" "}
              <a className="text-blue-600 hover:underline" href="mailto:info@brightledgersolutions.org">
                 brightledgersolutions@gmail.com
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
