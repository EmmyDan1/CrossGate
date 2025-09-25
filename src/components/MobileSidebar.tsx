import { Link } from "react-router-dom";
import { FiX, FiChevronRight, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MobileSidebar = ({ open, setOpen }: SidebarProps) => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);

  const toggleAbout = () => setAboutOpen(!aboutOpen);
  const toggleInsights = () => setInsightsOpen(!insightsOpen);

  return (
    <>
      {open && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#f4e9dc] z-40 shadow-xl 
          transform transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] 
          ${
            open
              ? "translate-x-0 opacity-100"
              : "-translate-x-[110%] opacity-50"
          }`}
      >
        <div className="flex justify-between items-center px-6 py-5">
          <span className="text-xl font-semibold text-primary">Karagateway</span>
          <button
            onClick={() => setOpen(false)}
            className="text-[#f4e9dc] hover:text-white transition-colors"
          >
            <FiX size={24} className="text-primary" />
          </button>
        </div>

        <nav className="flex flex-col p-4">
          <div className="mb-1">
            <button
              onClick={toggleAbout}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-[#876e4B]/10 group transition-colors"
            >
              <span className="text-[#4e3629] text-[18px] group-hover:text-[#876e4B] font-medium transition-colors">
                About
              </span>
              <FiChevronDown
                className={`text-[#876e4B] transition-transform ${
                  aboutOpen ? "rotate-180" : ""
                }`}
                size={18}
              />
            </button>
            {aboutOpen && (
              <div className="ml-4 -mt-1 leading-tight  space-y-1">
                <Link
                  to="/our-story"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-[#4e3629] rounded-lg hover:bg-[#876e4B]/10 transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  to="/our-model"
                  className="block px-4 py-2 text-[#4e3629] rounded-lg hover:bg-[#876e4B]/10 transition-colors"
                >
                  Our Model
                </Link>

                {/* <Link
                  to="/how-it-works"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-[#4e3629] rounded-lg hover:bg-[#876e4B]/10 transition-colors"
                >
                  How It Works
                </Link> */}
                <Link to="/team" className="block px-4 py-2 text-[#4e3629] rounded-lg hover:bg-[#876e4B]/10 transition-colors">
                  Team
                </Link>
              </div>
            )}
          </div>

          {[
            { path: "/services", label: "Services" },
            { path: "/sectors-and-product", label: "Sectors" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-[#876e4B]/10 group transition-colors"
            >
              <span className="text-[#4e3629] text-[18px] group-hover:text-[#876e4B] font-medium transition-colors">
                {item.label}
              </span>
              <FiChevronRight className="text-[#876e4B] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}

          <div className="mb-1">
            <button
              onClick={toggleInsights}
              className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-[#876e4B]/10 group transition-colors"
            >
              <span className="text-[#4e3629] text-[18px] group-hover:text-[#876e4B] font-medium transition-colors">
                Insights
              </span>
              <FiChevronDown
                className={`text-[#876e4B] transition-transform ${
                  insightsOpen ? "rotate-180" : ""
                }`}
                size={18}
              />
            </button>
            {insightsOpen && (
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  to="/insights/blog"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-[#4e3629] rounded-lg hover:bg-[#876e4B]/10 transition-colors"
                >
                  Blog
                </Link>
                <Link
                  to="/insights/success-story"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-[#4e3629] rounded-lg hover:bg-[#876e4B]/10 transition-colors"
                >
                  Success Stories
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-[#876e4B]/10 group transition-colors"
          >
            <span className="text-[#4e3629] text-[18px] group-hover:text-[#876e4B] font-medium transition-colors">
              Contact
            </span>
            <FiChevronRight className="text-[#876e4B] opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </nav>

        <div className="absolute bottom-0 w-full px-6 py-4 border-t border-[#876e4B]/20">
          <Link to="/contact">
            <button className="w-full bg-[#876e4B] text-[#f4e9dc] py-2 px-4 rounded-lg font-medium hover:bg-[#9a7f58] transition-colors">
              Partner With Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
