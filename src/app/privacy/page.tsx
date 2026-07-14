import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'GrowFlow AI Privacy Policy — how we collect, use, and protect your personal information in accordance with the Privacy Act 1988 (Cth).',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-36 pb-12 bg-stone-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-[#6fa882] font-semibold text-xs uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Privacy Policy</h1>
          <p className="text-stone-400 mt-4 text-sm">Last updated: July 2025</p>
        </div>
      </section>

      <section className="py-16 bg-[#fafaf8]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-stone max-w-none text-stone-600 text-sm leading-relaxed space-y-8">

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">1. Introduction</h2>
              <p>
                GrowFlow AI (ABN 34 698 898 029) (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting
                your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy
                Principles (APPs).
              </p>
              <p className="mt-3">
                By using our website (growflowai.com.au) or engaging our services, you consent to the practices
                described in this policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li><strong>Contact details:</strong> name, email address, phone number, and business name.</li>
                <li><strong>Enquiry details:</strong> the nature of your business needs as described in contact forms or communications.</li>
                <li><strong>Technical data:</strong> IP address, browser type, pages visited, and time spent on our website (via cookies and analytics).</li>
                <li><strong>Business information:</strong> information you provide during discovery calls or project engagements that is necessary to deliver our services.</li>
              </ul>
              <p className="mt-3">We only collect information that is reasonably necessary for our business functions.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">3. How We Use Your Information</h2>
              <p>We use your personal information to:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>Respond to your enquiries and provide the services you have requested.</li>
                <li>Communicate updates about your project or our services.</li>
                <li>Send you relevant information about GrowFlow AI services where you have opted in.</li>
                <li>Improve our website and service offerings.</li>
                <li>Comply with legal and regulatory obligations.</li>
              </ul>
              <p className="mt-3">We will not use your personal information for any purpose that is unrelated to the reason it was collected, unless we have your consent or are required to do so by law.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">4. Disclosure of Information</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li><strong>Service providers:</strong> third-party tools and platforms we use to operate our business (e.g., email services, project management software), who are bound by confidentiality obligations.</li>
                <li><strong>Legal authorities:</strong> where required by law or to protect our legal rights.</li>
              </ul>
              <p className="mt-3">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">5. Data Storage and Security</h2>
              <p>
                Your personal information is stored on secure servers located in Australia or within jurisdictions
                that provide comparable privacy protections. We implement reasonable technical and organisational
                measures to protect your data from unauthorised access, disclosure, alteration, or destruction.
              </p>
              <p className="mt-3">
                While we take all reasonable steps to protect your information, no method of transmission over the
                internet is 100% secure. We encourage you to contact us immediately if you believe your information
                has been compromised.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">6. Cookies and Analytics</h2>
              <p>
                Our website may use cookies and similar tracking technologies to improve your browsing experience
                and understand how visitors use our site. You can control cookies through your browser settings.
                Disabling cookies may affect the functionality of some parts of our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">7. Access and Correction</h2>
              <p>
                You have the right to request access to the personal information we hold about you and to request
                corrections if it is inaccurate, incomplete, or out of date. To make a request, please contact us
                using the details below. We will respond within a reasonable time frame.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">8. Complaints</h2>
              <p>
                If you believe we have not handled your personal information in accordance with this policy or the
                Australian Privacy Principles, please contact us in the first instance. If you are not satisfied
                with our response, you may lodge a complaint with the Office of the Australian Information
                Commissioner (OAIC) at <strong>www.oaic.gov.au</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an
                updated &ldquo;Last updated&rdquo; date. Continued use of our website or services after changes are
                posted constitutes your acceptance of the revised policy.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-stone-100 p-6">
              <h2 className="text-xl font-bold text-stone-900 mb-3">10. Contact Us</h2>
              <p>For privacy-related enquiries, please contact:</p>
              <div className="mt-3 space-y-1">
                <p><strong>GrowFlow AI</strong></p>
                <p>Kew, Melbourne VIC 3101</p>
                <p>Email: <a href="mailto:info@growflowai.com.au" className="text-[#2d5a3d] hover:underline">info@growflowai.com.au</a></p>
                <p>ABN: 34 698 898 029</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
