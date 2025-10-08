import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import MobileSidebar from "../components/MobileSidebar";
import { KaraLogo } from "../data/image";
import { KaraLogo2 } from "../data/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [insightsDropdown, setInsightsDropdown] = useState(false);

  const aboutTimeoutRef = useRef<number | null>(null);
  const insightsTimeoutRef = useRef<number | null>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
    setAboutDropdown(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutDropdown(false);
    }, 300);
  };

  const handleInsightsMouseEnter = () => {
    if (insightsTimeoutRef.current) {
      clearTimeout(insightsTimeoutRef.current);
    }
    setInsightsDropdown(true);
  };

  const handleInsightsMouseLeave = () => {
    insightsTimeoutRef.current = setTimeout(() => {
      setInsightsDropdown(false);
    }, 300);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-500 px-6 md:px-8  flex justify-between items-center ${
          isHome
            ? "bg-[#e4511b] text-white"
            : "bg-secondary text-primary shadow"
        } ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Link to="/" className="flex items-center ">
          {isHome ? (
            <img
              src={KaraLogo}
              alt="Karagateway Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
              loading="lazy"
            />
          ) : (
            <img
              src={KaraLogo2}
              alt="Karagateway Logo"
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
              loading="lazy"
            />
          )}
          {/* <span className="text-xl md:text-2xl font-bold">Karagateway</span> */}
        </Link>

        <div className="hidden md:flex gap-8 text-[16px] font-medium relative">
          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <button className="flex items-center gap-1">
              About <FiChevronDown size={16} className="mt-1" />
            </button>
            {aboutDropdown && (
              <div className="absolute top-full text-md left-0 mt-2 w-40  bg-black/70 text-white rounded-md shadow-lg py-2 z-50">
                <Link
                  to="/our-story"
                  className="block px-4 py-1 hover:bg-black/50"
                >
                  Our Story
                </Link>
                <Link
                  to="/our-model"
                  className="block px-4 py-1 hover:bg-black/50"
                >
                  Our Model
                </Link>
                {/* <Link
                  to="/how-it-works"
                  className="block px-4 py-1 hover:bg-black/50"
                >
                  How It Works
                </Link> */}
                <Link to="/team" className="block px-4 py-1 hover:bg-black/50">
                  Team
                </Link>
              </div>
            )}
          </div>

          <Link to="/services" className="">
            Services
          </Link>
          <Link to="/sectors-and-product" className="">
            Sectors
          </Link>

          {/* Insights Dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleInsightsMouseEnter}
            onMouseLeave={handleInsightsMouseLeave}
          >
            <button className="flex items-center gap-1">
              Insights <FiChevronDown size={16} className="mt-1" />
            </button>
            {insightsDropdown && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-black/70 text-white rounded-md shadow-md py-2 z-50">
                <Link
                  to="/insights/blog"
                  className="block px-4 py-2 hover:bg-black/50"
                >
                  Blog
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-[#b89b7d]">
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <FiMenu
              size={32}
              className={`${
                isHome
                  ? "text-[#e4e0db] border border-[#e6e2dd] hover:border-[#c0a17c] hover:text-[#c0a17c] rounded-md p-1 transition-colors duration-200 ease-in-out"
                  : "text-[#4e3629] border border-[#4e3629] hover:border-[#b89b7d] hover:text-[#b89b7d] rounded-md p-1 transition-colors duration-200 ease-in-out"
              }`}
            />
          </button>
        </div>
      </nav>

      <MobileSidebar open={isOpen} setOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
