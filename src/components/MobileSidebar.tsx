import { Link } from "react-router-dom";
import { FiX, FiChevronRight } from "react-icons/fi";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MobileSidebar = ({ open, setOpen }: SidebarProps) => {
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
    ${open ? "translate-x-0 opacity-100" : "-translate-x-[110%] opacity-50"}`}
      >
        <div className="flex justify-between items-center px-6 py-5 ">
          <span className="text-xl font-semibold text-primary">CrossGate</span>
          <button
            onClick={() => setOpen(false)}
            className="text-[#f4e9dc] hover:text-white transition-colors"
          >
            <FiX size={24} className="text-primary" />
          </button>
        </div>
        <nav className="flex flex-col p-4">
          {[
            { path: "#", label: "About" },
            { path: "/sectors", label: "Sectors" },
            { path: "/services", label: "Services" },
            { path: "/insights", label: "Insights" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-4 py-3  rounded-lg hover:bg-[#876e4B]/10 group transition-colors"
            >
              <span className="text-[#4e3629] text-[18px] group-hover:text-[#876e4B] font-medium transition-colors">
                {item.label}
              </span>
              <FiChevronRight className="text-[#876e4B] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full px-6 py-4 border-t border-[#876e4B]/20">
          <button className="w-full bg-[#876e4B] text-[#f4e9dc] py-2 px-4 rounded-lg font-medium hover:bg-[#9a7f58] transition-colors">
            Partner With Us
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
