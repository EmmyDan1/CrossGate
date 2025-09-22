// src/pages/JoinOurNetwork.tsx
import React, { useState } from "react"

const JoinOurNetwork = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  if (formSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Thank you for joining the Karagateway network.
        </h2>
        <p className="text-gray-600">
          Our team will review your application and contact you within{" "}
          <span className="font-semibold text-tertiary">3–5 business days</span>.
        </p>
      </div>
    )
  }

  return (
    <section className="bg-grayWhite py-24 px-6 text-primary">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold font-libre text-tertiary text-center mb-6">
          Partner with Karagateway <br />
          <span className="text-primary">Connect, Trade, Grow</span>
        </h1>

        {/* Intro */}
        <p className="text-center text-primary mb-12 max-w-2xl mx-auto">
          Karagateway connects African producers with global markets and enables
          international businesses to access opportunities across Africa. By
          joining our network, you gain access to verified trade partners, expert
          guidance, and support throughout the cross-border trade journey.
        </p>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            "Verified, trustworthy trade connections",
            "Guidance on compliance, logistics, and documentation",
            "Access to market insights and growth opportunities",
            "Support from a professional, culturally aware team",
          ].map((benefit) => (
            <div
              key={benefit}
              className="bg-whitte shadow-sm rounded-2xl border border-lightbrown p-5"
            >
              <p className="text-sm text-tertiary">{benefit}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-whitte rounded-2xl shadow-md border border-lightbrown p-8 space-y-6"
        >
          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Company/Organization Name*
            </label>
            <input
              type="text"
              required
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Type of Partnership */}
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Type of Partnership*
            </label>
            <select
              required
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary"
            >
              <option value="">Select one...</option>
              <option value="Producer">Producer</option>
              <option value="Buyer">Buyer</option>
              <option value="Logistics Partner">Logistics Partner</option>
              <option value="Investor">Investor</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Contact Person */}
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Contact Person Name*
            </label>
            <input
              type="text"
              required
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Email Address*
            </label>
            <input
              type="email"
              required
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Phone Number
            </label>
            <input
              type="tel"
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Country / Location*
            </label>
            <input
              type="text"
              required
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Business Description */}
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Brief Description of Your Business*
            </label>
            <textarea
              required
              maxLength={200}
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary"
              rows={4}
            ></textarea>
          </div>

          {/* Trade Volume */}
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Trade Volume / Capacity
            </label>
            <input
              type="text"
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Upload Documents */}
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Upload Documents
            </label>
            <input
              type="file"
              className="mt-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-whitte hover:file:bg-tertiary"
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-medium text-tertiary">
              Additional Notes / Requests
            </label>
            <textarea
              className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary"
              rows={3}
            ></textarea>
          </div>

          {/* Consent */}
          <div className="space-y-3">
            <label className="flex items-start space-x-2 text-sm text-gray-700">
              <input type="checkbox" required className="mt-1" />
              <span>
                I have read and agree to Karagateway’s{" "}
                <a href="/terms" className="text-primary underline">
                  Terms & Conditions
                </a>
                .
              </span>
            </label>
            <label className="flex items-start space-x-2 text-sm text-gray-700">
              <input type="checkbox" required className="mt-1" />
              <span>
                I have read and agree to Karagateway’s{" "}
                <a href="/privacy" className="text-primary underline">
                  Privacy Policy
                </a>{" "}
                regarding data collection and use.
              </span>
            </label>
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="w-full py-3 bg-primary text-whitte font-semibold rounded-lg shadow hover:bg-tertiary transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  )
}

export default JoinOurNetwork
