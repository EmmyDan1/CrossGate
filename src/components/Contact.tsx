import { useState } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const contactType = params.get("type");

  const handleSubmit = () => {
    setIsLoading(true);
  };

  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#f9f5f0" }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 mt-12">
          <h2
            className="text-3xl font-playfair font-bold tracking-tight"
            style={{ color: "#4e3629" }}
          >
            Let's build trade pathways together
          </h2>
          <p className="mt-4 text-lg" style={{ color: "#876e4B" }}>
            {contactType === "matchmaking"
              ? "Looking to connect with verified trade partners? We’ll match you with the right people."
              : "Let’s collaborate on trade strategy, development or partnerships!"}
          </p>
        </div>

        {!isSubmitted ? (
          <form
            action="https://formsubmit.co/emmydan68@gmail.com"
            method="POST"
            onSubmit={() => {
              handleSubmit();
              setIsSubmitted(true);
            }}
            className="space-y-6 bg-white p-8 rounded-lg shadow-sm"
            style={{ border: "1px solid #f4e9dc" }}
          >
            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Submission"
            />
            <input type="hidden" name="_template" value="basic" />
            <input type="hidden" name="_next" value="/thank-you" />{" "}
            
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium"
                style={{ color: "#4e3629" }}
              >
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50"
                style={{
                  borderColor: "#f4e9dc",
                  backgroundColor: "#f9f5f0",
                  color: "#4e3629",
                }}
              />
            </div>
            <div>
              <label
                htmlFor="business"
                className="block text-sm font-medium"
                style={{ color: "#4e3629" }}
              >
                Business Type *
              </label>
              <select
                id="business"
                name="business_type"
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50"
                style={{
                  borderColor: "#f4e9dc",
                  backgroundColor: "#f9f5f0",
                  color: "#4e3629",
                }}
              >
                <option value="">Select one...</option>
                <option value="Nordic Exporter">Nordic Exporter</option>
                <option value="African Producer">African Producer</option>
                <option value="European Buyer">European Buyer</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="needs"
                className="block text-sm font-medium"
                style={{ color: "#4e3629" }}
              >
                What you're looking for *
              </label>
              <textarea
                id="needs"
                name="needs"
                rows={4}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50"
                style={{
                  borderColor: "#f4e9dc",
                  backgroundColor: "#f9f5f0",
                  color: "#4e3629",
                }}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium"
                style={{ color: "#4e3629" }}
              >
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-opacity-50"
                style={{
                  borderColor: "#f4e9dc",
                  backgroundColor: "#f9f5f0",
                  color: "#4e3629",
                }}
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors hover:bg-opacity-90"
                style={{
                  backgroundColor: isLoading ? "#876e4Baa" : "#876e4B",
                  color: "#f4e9dc",
                }}
              >
                {isLoading ? "Sending..." : "Get Started"}
              </button>
            </div>
          </form>
        ) : (
          <div
            className="bg-white p-8 rounded-lg shadow-sm text-center"
            style={{ border: "1px solid #f4e9dc" }}
          >
            <div
              style={{ color: "#4e3629" }}
              className="text-2xl font-playfair font-bold mb-4"
            >
              Thank you!
            </div>
            <p style={{ color: "#876e4B" }}>
              We've received your message and will contact you shortly.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <h3 className="text-lg font-medium" style={{ color: "#4e3629" }}>
            Or reach out directly:
          </h3>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://wa.me/+37253967719"
              className="flex items-center hover:opacity-80 transition-opacity"
              style={{ color: "#876e4B" }}
            >
              <span className="mr-2">WhatsApp</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="mailto:contact@example.com" // Replace with email
              className="flex items-center hover:opacity-80 transition-opacity"
              style={{ color: "#876e4B" }}
            >
              <span className="mr-2">Email</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/your-profile" // Replace with LinkedIn
              className="flex items-center hover:opacity-80 transition-opacity"
              style={{ color: "#876e4B" }}
            >
              <span className="mr-2">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
