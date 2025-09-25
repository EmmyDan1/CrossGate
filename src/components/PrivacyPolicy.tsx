

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#f4e9dc] text-gray-800 min-h-screen py-24 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-secondary shadow-lg rounded-2xl p-8 md:p-12">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#876e4B] mb-6">
          Karagateway Privacy Policy
        </h1>
        <p className="mb-6">
          Karagateway (“we,” “our,” or “us”) respects your privacy and is
          committed to protecting the personal data you share with us. This
          Privacy Policy explains how we collect, use, store, and protect your
          information when you visit our website, use our services, or engage
          with Karagateway in any way.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {/* Example section */}
          <div>
            <h2 className="text-2xl font-semibold text-[#876e4B] mb-3">
              1. Information We Collect
            </h2>
            <h3 className="font-medium mb-2">1.1 Information You Provide Directly</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, company name, job title</li>
              <li>Contact information (email, phone number, address)</li>
              <li>Business details for partnership or service inquiries</li>
              <li>Documents or files uploaded to our platform</li>
            </ul>
            <h3 className="font-medium mt-4 mb-2">1.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address, browser type, device information</li>
              <li>Usage data (pages visited, time spent, clicks)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          {/* Repeat for each numbered section */}
          <div>
            <h2 className="text-2xl font-semibold text-[#876e4B] mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Providing and improving our services</li>
              <li>Facilitating trade and partnership connections</li>
              <li>Verifying and vetting businesses</li>
              <li>Responding to inquiries</li>
              <li>Sending updates and communications</li>
              <li>Monitoring usage and improving user experience</li>
              <li>Complying with legal obligations</li>
            </ul>
          </div>

          {/* Continue same pattern for sections 3–12 */}

          <div>
            <h2 className="text-2xl font-semibold text-[#876e4B] mb-3">
              12. Contact Us
            </h2>
            <p>
              For questions, concerns, or requests regarding your privacy or
              personal data, please contact:
            </p>
            <p className="mt-2">
              <strong>Karagateway</strong> <br />
              Email:{" "}
              <a
                href="mailto:Info@karagateway.com"
                className="text-[#876e4B] underline"
              >
                Info@karagateway.com
              </a>
              <br />
              Address: Estonia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
