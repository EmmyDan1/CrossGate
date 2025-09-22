import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import FooterLinks from "./FooterLinks";
const Footer = () => {
  return (
    <footer className="bg-[#807566] text-white pt-16 pb-12 px-6 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Karagateway</h2>
            <p className="text-secondary text-sm max-w-xs">
              Bridging opportunities through innovative trade solutions
            </p>
            <div className="flex space-x-4">
              <a href="http://@karagateway" aria-label="Twitter">
                <FaTwitter className="w-5 h-5 text-white hover:text-secondary" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61580678617699" aria-label="Facebook">
                <FaFacebookF className="w-5 h-5 text-white hover:text-secondary" />
              </a>
              <a href="https://www.linkedin.com/company/109096257/admin/dashboard/" aria-label="LinkedIn">
                <FaLinkedinIn className="w-5 h-5 text-white hover:text-secondary" />
              </a>
              <a href="http://karagateway" aria-label="Instagram">
                <FaInstagram className="w-5 h-5 text-white hover:text-secondary" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-secondary pb-2">
              Navigation
            </h3>
            <ul className="space-y-3">
              {["About", "Blog", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-secondary pb-2">
              Legal
            </h3>
<FooterLinks/>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-secondary pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneIcon className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+23412345678"
                  className="hover:text-secondary transition-colors text-sm"
                >
                  +37253945725
                </a>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:Info@karagateway.com"
                  className="hover:text-secondary transition-colors text-sm"
                >
                  Info@karagateway.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Ehitajate tee 60, 12191 Tallinn, Estonia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary mt-12 pt-8 text-center text-sm text-secondary">
          <p>© {new Date().getFullYear()} Karagateway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
