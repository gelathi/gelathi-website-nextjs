export default function PrivacyPolicy() {
  return (
    <main className=" mx-auto px-6 py-12 text-white bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">
        Privacy Policy for [Your AppName]
      </h1>
      <p className="text-sm text-gray-400 text-center mb-10">
        Last updated: [Date]
      </p>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
        <p className="leading-relaxed">
          Welcome to <strong>[Your AppName]</strong> (the “App”, “we”, “us”, or
          “our”). We are committed to protecting your privacy and personal
          data. This Privacy Policy describes how we collect, use, disclose,
          store, and protect your personal data, and your rights in relation to
          that data. By using the App, you agree to this policy.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Definitions</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>
            <strong>Data Principal:</strong> You, the individual whose personal
            data is collected and processed.
          </li>
          <li>
            <strong>Data Fiduciary:</strong> Us — the entity operating the App.
          </li>
          <li>
            <strong>Personal Data:</strong> Any data about an identifiable
            individual (e.g., name, email, phone number, photos).
          </li>
          <li>
            <strong>Sensitive Personal Data:</strong> Subset of personal data
            (e.g., biometrics, health data) as defined under applicable law.
          </li>
          <li>
            <strong>Processing:</strong> Any operation performed on personal
            data (collection, storage, use, disclosure, deletion, etc.).
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Scope</h2>
        <p className="leading-relaxed text-gray-200">
          This Privacy Policy applies to all users of the App in India. If you
          use the App from outside India, your data may be transferred, stored,
          or processed in India or other jurisdictions.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Data We Collect</h2>
        <p className="mb-2 text-gray-200">
          We may collect the following categories of data:
        </p>

        <h3 className="font-semibold mt-3">4.1 User-provided data:</h3>
        <ul className="list-disc ml-6 space-y-1 text-gray-200">
          <li>Name, profile picture, and other profile information.</li>
          <li>Phone number, date of birth, gender.</li>
          <li>Location for match suggestions, orders.</li>
          <li>Messages, photos, and media you upload.</li>
          <li>Payment or subscription details (if applicable).</li>
        </ul>

        <h3 className="font-semibold mt-3">4.2 Automatically collected data:</h3>
        <ul className="list-disc ml-6 space-y-1 text-gray-200">
          <li>Device identifiers, IP address, browser info.</li>
          <li>Usage analytics (features used, session duration).</li>
          <li>Location data (if permitted).</li>
        </ul>

        <h3 className="font-semibold mt-3">4.3 Third-party data:</h3>
        <ul className="list-disc ml-6 space-y-1 text-gray-200">
          <li>Information from linked accounts (e.g., Google or Facebook login).</li>
          <li>Analytics and advertising data (with consent).</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          5. Purpose of Data Collection and Use
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>To create and maintain your account and profile.</li>
          <li>To enable matching and communication between users.</li>
          <li>To provide customer support and technical assistance.</li>
          <li>To send notifications or promotional content (if opted in).</li>
          <li>
            To comply with legal obligations under Indian data protection laws.
          </li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">6. Disclosure of Your Data</h2>
        <p className="leading-relaxed text-gray-200">
          We may disclose your data to service providers, other users (as per
          your visibility settings), government authorities when required by
          law, and during mergers or acquisitions. We do not sell your personal
          data to third parties without your explicit consent.
        </p>
      </section>

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">7. Data Retention</h2>
        <p className="leading-relaxed text-gray-200">
          We retain your data only as long as necessary for its intended purpose
          or as required by law. Upon account deletion, your data will be
          securely erased or anonymised.
        </p>
      </section>

      {/* Section 8 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">8. Your Rights</h2>
        <ul className="list-disc ml-6 space-y-1 text-gray-200">
          <li>Right to access, correct, or delete your data.</li>
          <li>Right to withdraw consent and object to processing.</li>
          <li>Right to data portability (where applicable).</li>
        </ul>
      </section>

      {/* Section 9 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">9. Security</h2>
        <p className="leading-relaxed text-gray-200">
          We follow reasonable security practices including encryption, access
          control, and regular audits, as per Indian IT Rules, 2011. However, no
          system is completely secure, and we cannot guarantee absolute
          protection.
        </p>
      </section>

      {/* Section 10 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          10. Location and Cross-border Transfers
        </h2>
        <p className="leading-relaxed text-gray-200">
          Your data may be stored in India or other jurisdictions where our
          service providers operate, with adequate safeguards as required by
          law.
        </p>
      </section>

      {/* Section 11 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">11. Children and Minors</h2>
        <p className="leading-relaxed text-gray-200">
          The App is intended for users aged 18 years and above. We do not
          knowingly collect data from minors.
        </p>
      </section>

      {/* Section 12 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          12. Changes to This Privacy Policy
        </h2>
        <p className="leading-relaxed text-gray-200">
          We may update this Privacy Policy from time to time. Updates will be
          notified through the App or by email. Continued use of the App
          constitutes acceptance of the updated policy.
        </p>
      </section>

      {/* Section 13 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          13. Contact Us / Grievance Officer
        </h2>
        <p className="leading-relaxed text-gray-200">
          If you have any questions or wish to exercise your rights, contact:
        </p>
        <ul className="list-none mt-3 space-y-1 text-gray-200">
          <li>
            <strong>Grievance Officer:</strong> [Full Name]
          </li>
          <li>
            <strong>Email:</strong> [email@example.com]
          </li>
          <li>
            <strong>Phone:</strong> [+91 XXXXXXXXXX]
          </li>
          <li>
            <strong>Address:</strong> [Company Address, City, State, PIN]
          </li>
        </ul>
        <p className="mt-4 text-gray-400">
          We aim to acknowledge your grievance within 24 hours and resolve it
          within 15 days, as per Indian data-protection requirements.
        </p>
      </section>

      <footer className="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} [Your AppName]. All rights reserved.
      </footer>
    </main>
  );
}
