
import { Link } from "react-router-dom" // or "next/link" if you're using Next.js

const FooterLinks = () => {
  const links = [
    { name: "Join Our Network", href: "/join-network" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ]

  return (
    <ul className="space-y-3 text-">
      {links.map((link) => (
        <li key={link.name}>
          {/* Swap <Link> depending on your router (Next.js vs React Router) */}
          <Link
            to={link.href} 
         
            className="hover:text-secondary transition-colors text-sm"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default FooterLinks
