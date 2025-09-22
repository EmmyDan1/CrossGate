import { Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <div className="space-y-3 ml-8 text-primary">
      {/* Phone */}
      <a
        href="tel:+37253945725"
        className="flex items-center space-x-2 text-primary  transition"
      >
        <Phone className="w-5 h-5" />
        <span>+372 5394 5725</span>
      </a>

      {/* Email */}
      <a
        href="mailto:Info@karagateway.com"
        className="flex items-center space-x-2 text-primary  transition"
      >
        <Mail className="w-5 h-5" />
        <span>Info@karagateway.com</span>
      </a>
    </div>
  )
}
