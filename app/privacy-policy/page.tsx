export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-white bg-gray-900 min-h-screen font-sans">
      <h1 className="text-4xl font-bold text-center mb-8">
        Privacy Policy for Gelathi
      </h1>
      <p className="text-sm text-gray-400 text-center mb-10">
        Last Updated: December 25, 2024
      </p>

      <p className="leading-relaxed text-gray-200 mb-8">
        Welcome to Gelathi! We are committed to protecting your privacy. This
        policy explains what information we collect, why we need it, and how we
        use and protect it. By using the Gelathi app, you agree to this policy.
        We follow all applicable Indian laws, including the Data Protection Act
        (DPDP Act) and IT Rules, 2021.
      </p>

      {/* Section 1: What We Collect */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          1. What Information We Collect
        </h2>
        <p className="leading-relaxed text-gray-200 mb-4">
          We only collect data that is necessary to provide and improve the app.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Information You Give Us:
        </h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>Your phone number (for login and verification).</li>
          <li>
            Your profile details: Name, gender, date of birth, and profile
            picture.
          </li>
          <li>Your preferences: Interests and what you&apos;re looking for.</li>
          <li>
            Your location (only if you give permission) to help find matches
            near you.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Special Verification for Girls:
        </h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>
            To ensure safety, girls must provide a front-facing photo during
            registration.
          </li>
          <li>
            This photo is <strong className="font-bold">only</strong> used for
            verification by our admin team.
          </li>
          <li>
            It is stored securely,{" "}
            <strong className="font-bold">never</strong> used for AI training or
            marketing, and is automatically deleted after 30 days.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Payment & Transaction Info:
        </h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>
            We use <strong className="font-bold">Razorpay</strong> and{" "}
            <strong className="font-bold">RazorpayX</strong> for all
            transactions.
          </li>
          <li>
            When girls redeem coins, we collect a UPI ID. We{" "}
            <strong className="font-bold">never</strong> store your full UPI ID.
            We only store a masked (hidden) version (e.g.,{" "}
            <code>ab*****g@pingpay</code>) for our records.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Communication Data:
        </h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>
            Chat messages, photos, audio, and videos you share in the app.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">
          Technical Information (Collected Automatically):
        </h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>
            Device type, IP address, and app usage (e.g., which features you
            use). This helps us fix bugs and improve the app.
          </li>
        </ul>
      </section>

      {/* Section 2: Why We Use Data */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Why We Use Your Data
        </h2>
        <p className="leading-relaxed text-gray-200 mb-4">
          We use your data to:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>Create your account and find potential matches.</li>
          <li>Enable video/audio calls and chats.</li>
          <li>Process coin purchases and redemptions.</li>
          <li>Send you notifications (like new messages or matches).</li>
          <li>Keep the app safe by reviewing reports of bad behavior.</li>
          <li>Comply with Indian legal requirements.</li>
          <li>
            Improve the app using{" "}
            <strong className="font-bold">Google Analytics</strong> to
            understand performance and how new features are used.
          </li>
        </ul>
      </section>

      {/* Section 3: How We Share Data */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. How We Share Your Data
        </h2>
        <p className="leading-relaxed text-gray-200 mb-4">
          <strong className="font-bold">
            We never sell or rent your personal data to anyone.
          </strong>
        </p>
        <p className="leading-relaxed text-gray-200 mb-4">
          We only share data in these limited cases:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>
            <strong className="font-bold">With Service Providers:</strong> We
            use trusted partners to help run the app, such as:
            <ul className="list-circle ml-6 mt-2 space-y-1">
              <li>
                <strong className="font-bold">Razorpay:</strong> To process
                payments.
              </li>
              <li>
                <strong className="font-bold">
                  Firebase & Google Analytics:
                </strong>{" "}
                For analytics, performance tracking, and sending notifications.
              </li>
            </ul>
            <p className="mt-2">
              These partners are legally required to protect your data.
            </p>
          </li>
          <li>
            <strong className="font-bold">For Legal Reasons:</strong> If we are
            required by law or a government authority.
          </li>
          <li>
            <strong className="font-bold">For Safety & Moderation:</strong> Our
            admin team may review data to investigate reports of harassment,
            fraud, or other violations.
          </li>
        </ul>
      </section>

      {/* Section 4: Data Retention */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. How Long We Keep Your Data
        </h2>
        <p className="leading-relaxed text-gray-200 mb-4">
          We only keep your data for as long as we need it.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>
            <strong className="font-bold">Account Deletion:</strong> If you
            delete your account, we erase your personal data (like your profile,
            photos, and chats). However, we must keep your{" "}
            <strong className="font-bold">transaction history</strong> for 180
            days for legal and record-keeping purposes. Your{" "}
            <strong className="font-bold">mobile number</strong> will be
            securely stored to prevent the same number from being used to create
            a new account.
          </li>
          <li>
            <strong className="font-bold">Chats & Media:</strong> All messages,
            photos, and videos sent in a chat are{" "}
            <strong className="font-bold">automatically deleted</strong> after
            24-72 hours. This data is not saved on your device.
          </li>
          <li>
            <strong className="font-bold">Verification Photos:</strong> Deleted
            after 30 days.
          </li>
        </ul>
      </section>

      {/* Section 5: Your Rights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Your Privacy Rights
        </h2>
        <p className="leading-relaxed text-gray-200 mb-4">
          You are in control of your data. You have the right to:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>
            <strong className="font-bold">Access</strong> the personal data we
            hold about you.
          </li>
          <li>
            <strong className="font-bold">Correct</strong> any inaccurate data.
          </li>
          <li>
            <strong className="font-bold">Delete</strong> your account. (Note:
            As stated above, transaction history will be kept for legal reasons
            and your phone number will be blocked from re-registering).
          </li>
          <li>
            <strong className="font-bold">Withdraw</strong> your consent for
            things like location access.
          </li>
          <li>
            <strong className="font-bold">Complain</strong> if you have a
            concern about how we handle your data.
          </li>
        </ul>
      </section>

      {/* Section 6: Child Safety & CSAE Standards */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          6. Child Safety &amp; CSAE Standards
        </h2>
        <p className="leading-relaxed text-gray-200 mb-4">
          Gelathi is committed to the safety of children and maintaining a platform
          free from Child Sexual Abuse and Exploitation (CSAE). We have a{" "}
          <strong className="font-bold">zero-tolerance policy</strong> for any
          content or behavior that exploits, endangers, or sexualizes minors.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Adults-Only Platform (18+)
        </h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>
            Gelathi is <strong className="font-bold">strictly for adults aged 18 and above</strong>.
            Minors are not permitted to create accounts or use the platform.
          </li>
          <li>
            We enforce age verification through phone number registration and
            date of birth confirmation during signup.
          </li>
          <li>
            <strong className="font-bold">Female users undergo manual verification</strong> by
            our moderation team to confirm they are over 18 years of age before
            their accounts are activated.
          </li>
          <li>
            If we discover any user is underage, we will{" "}
            <strong className="font-bold">immediately terminate their account</strong> and
            take appropriate action.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Zero-Tolerance CSAE Policy
        </h3>
        <p className="leading-relaxed text-gray-200 mb-4">
          The following are <strong className="font-bold">strictly prohibited</strong> on Gelathi:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>
            Any content depicting, promoting, or glorifying child sexual abuse
            or exploitation (CSAE).
          </li>
          <li>
            Child Sexual Abuse Material (CSAM), including images, videos, or any
            visual depiction of minors in sexually explicit situations.
          </li>
          <li>
            Grooming, soliciting, or attempting to exploit minors in any way.
          </li>
          <li>
            Sharing, distributing, or requesting content that sexualizes children.
          </li>
          <li>
            Any behavior that endangers or puts children at risk of exploitation.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          CSAM Detection &amp; Reporting
        </h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>
            Upon discovery of any CSAM or CSAE content, we will{" "}
            <strong className="font-bold">immediately remove the content</strong> and
            permanently ban the offending user.
          </li>
          <li>
            We report all instances of CSAM to the{" "}
            <strong className="font-bold">
              National Center for Missing &amp; Exploited Children (NCMEC)
            </strong>{" "}
            and cooperate fully with law enforcement agencies, including Indian
            authorities under the POCSO Act, 2012.
          </li>
          <li>
            We preserve evidence and user data as required by law for investigation
            purposes.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          User Reporting Mechanism
        </h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>
            Gelathi provides an <strong className="font-bold">in-app reporting system</strong> that
            allows users to report any suspicious activity, profiles, or content
            that may involve child exploitation.
          </li>
          <li>
            All reports are reviewed by our moderation team within 24 hours and
            appropriate action is taken immediately.
          </li>
          <li>
            Users can also report concerns via our dedicated child safety email
            at <strong className="font-bold">childsafety@gelathi.com</strong>.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Child Safety Point of Contact
        </h3>
        <p className="leading-relaxed text-gray-200 mb-4">
          For any child safety concerns or to report CSAE-related issues, please
          contact our dedicated Child Safety Team:
        </p>
        <ul className="list-none space-y-2 text-gray-200">
          <li>
            <strong>Email:</strong> childsafety@gelathi.com
          </li>
          <li>
            <strong>Response Time:</strong> Within 24 hours
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          Cooperation with Authorities
        </h3>
        <p className="leading-relaxed text-gray-200">
          Gelathi fully cooperates with law enforcement agencies and government
          authorities in investigating any reports of child exploitation. We comply
          with all applicable Indian laws, including the Information Technology Act,
          2000 and the Protection of Children from Sexual Offences (POCSO) Act, 2012,
          as well as international child safety standards.
        </p>
      </section>

      {/* Section 7: Contact Us */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
        <p className="leading-relaxed text-gray-200 mb-4">
          If you have any questions or concerns about your privacy, please
          contact our Data Protection Officer:
        </p>
        <ul className="list-none space-y-2 text-gray-200">
          <li>
            <strong>Email:</strong> privacy@gelathi.com
          </li>
          <li>
            <strong>Address:</strong> Gelathi Pvt. Ltd., 123 Tech Park,
            Bengaluru, Karnataka 560001, India
          </li>
        </ul>
      </section>
    </main>
  );
}