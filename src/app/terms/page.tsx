import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'GrowFlow AI Terms of Service — the terms governing your use of our website and AI automation services.',
}

export default function TermsPage() {
  return (
    <>
      <section className="pt-36 pb-12 bg-stone-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-[#6fa882] font-semibold text-xs uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">Terms of Service</h1>
          <p className="text-stone-400 mt-4 text-sm">Last updated: July 2025</p>
        </div>
      </section>

      <section className="py-16 bg-[#fafaf8]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="prose prose-stone max-w-none text-stone-600 text-sm leading-relaxed space-y-8">

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">1. About These Terms</h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the GrowFlow AI website
                (growflowai.com.au) and any services provided by GrowFlow AI (ABN 34 698 898 029)
                (&ldquo;GrowFlow AI&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;).
              </p>
              <p className="mt-3">
                By accessing our website or engaging our services, you agree to be bound by these Terms.
                If you do not agree, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">2. Our Services</h2>
              <p>
                GrowFlow AI provides AI automation consulting and implementation services to Australian
                businesses, including but not limited to marketing automation, document automation,
                customer support AI, and workflow integration.
              </p>
              <p className="mt-3">
                The specific scope, deliverables, timeline, and pricing for any engagement will be agreed
                in a separate written proposal or service agreement between GrowFlow AI and the client.
                These Terms apply in addition to any such agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">3. Website Use</h2>
              <p>You agree to use our website only for lawful purposes and in a manner that does not:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>Infringe the rights of any third party.</li>
                <li>Transmit any unsolicited or unauthorised advertising or promotional material.</li>
                <li>Attempt to gain unauthorised access to any part of our website or related systems.</li>
                <li>Introduce malicious code or otherwise interfere with the website&rsquo;s operation.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">4. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, and images — is the property
                of GrowFlow AI or its content suppliers and is protected by Australian and international
                copyright laws. You may not reproduce, distribute, or create derivative works without our
                express written permission.
              </p>
              <p className="mt-3">
                Work product created for a client as part of a paid engagement will be governed by the
                intellectual property terms set out in the relevant service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">5. Payment and Fees</h2>
              <p>
                Fees for services are set out in the proposal or service agreement provided to you.
                Unless otherwise agreed in writing:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>A deposit may be required prior to commencement of work.</li>
                <li>Invoices are payable within 14 days of issue.</li>
                <li>Late payments may incur interest at a rate of 2% per month on the outstanding balance.</li>
                <li>All prices are in Australian dollars and include GST where applicable.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, GrowFlow AI excludes all liability for any direct,
                indirect, incidental, or consequential loss or damage arising from your use of our website
                or services, including loss of profits, data, or business opportunity.
              </p>
              <p className="mt-3">
                Nothing in these Terms excludes, restricts, or modifies any right or remedy, or any
                guarantee, warranty, or condition, implied or imposed by any legislation where to do so
                would contravene that legislation or cause any part of these Terms to be void, including
                under the <em>Australian Consumer Law</em>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">7. Third-Party Services</h2>
              <p>
                Our services may involve the use of third-party platforms and tools (e.g., Xero, HubSpot,
                Mailchimp). We are not responsible for the availability, accuracy, or content of those
                services, and their use is subject to their own terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">8. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential any information disclosed during an engagement
                that is identified as confidential or that a reasonable person would understand to be
                confidential. This obligation does not apply to information that is publicly available,
                already known to the receiving party, or required to be disclosed by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">9. Termination</h2>
              <p>
                Either party may terminate a service engagement by providing written notice as specified
                in the relevant service agreement. GrowFlow AI reserves the right to terminate or suspend
                access to our website or services immediately and without notice if you breach these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Victoria, Australia. Any disputes
                arising under these Terms will be subject to the exclusive jurisdiction of the courts
                of Victoria.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-3">11. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Changes will be posted on this page with an
                updated &ldquo;Last updated&rdquo; date. Continued use of our website or services after changes
                are posted constitutes your acceptance of the revised Terms.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-stone-100 p-6">
              <h2 className="text-xl font-bold text-stone-900 mb-3">12. Contact Us</h2>
              <p>For questions about these Terms, please contact:</p>
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
