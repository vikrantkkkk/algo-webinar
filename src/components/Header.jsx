import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import mainlogo from "../assets/svg/mainlogo.svg";
import whatsappIcon from "../assets/svg/whatsapp1.svg";
import { useNavigate, useLocation } from "react-router-dom";

const HEADER_HEIGHT = 80;
const NAV_ITEMS = [];
const getIdFromLabel = (label) => label.toLowerCase().replace(/\s/g, "");

const Header = () => {
  const [activeId, setActiveId] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Track scroll position for active section (only on homepage)
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/") return;
      for (const item of NAV_ITEMS) {
        const id = getIdFromLabel(item);
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - HEADER_HEIGHT,
        behavior: "smooth",
      }); 
    }
  };

  const handleNavClick = (item) => {
    const id = getIdFromLabel(item);
    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 300);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <header className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-full md:px-40 px-4">
      <div className="bg-[#0000005C] backdrop-blur-[30px] rounded-[20px] md:px-6 px-4 md:py-3 py-2">
        <nav className="relative flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center z-10">
            <a href="/" className="flex items-center gap-2">
              <img
                src={mainlogo}
                alt="Main Logo"
                className="md:h-[35px] h-[23px]"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:flex hidden gap-10 items-center">
            {NAV_ITEMS.map((item) => {
              const id = getIdFromLabel(item);
              const isActive = activeId === id && location.pathname === "/"; 
              return (
                <button
                  key={id}
                  onClick={() => handleNavClick(item)}
                  className={`text-[18px] leading-[100%] font-normal transition ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Desktop Buttons */}
          <div className="md:flex hidden gap-3 items-center z-10">
            <button
              onClick={() => {}}
              className="border border-white/60 text-white p-3 rounded-lg hover:bg-white/10 transition"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate("/signin")}
              className="border border-white/60 text-white text-[14px] font-medium px-4 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile CTA & Toggle here will be auto disconnected on scroll */}
          <div className="md:hidden flex items-center gap-2 z-10">
            <button
              onClick={() => {}}
              className="border border-white/60 text-white p-2 rounded-lg hover:bg-white/10 transition"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate("/signin")}
              className="border border-white/60 text-white text-[12px] font-medium px-3 py-2 rounded-lg hover:bg-white hover:text-black transition"
            >
              Sign Up
            </button>
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-8 h-8"
              aria-label="Toggle mobile menu"
              initial={false}
              animate={mobileMenuOpen ? "open" : "closed"}
            >
              <motion.span
                className="absolute top-[6px] left-0 w-8 h-[2px] bg-white"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8.5 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-[14px] left-0 w-8 h-[2px] bg-white"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute bottom-[6px] left-0 w-8 h-[2px] bg-white"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8.5 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-2 bg-white/10 backdrop-blur-[20px] rounded-[20px] p-4 shadow-lg"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => {
                const id = getIdFromLabel(item);
                const isActive = activeId === id && location.pathname === "/";
                return (
                  <button
                    key={id}
                    onClick={() => handleNavClick(item)}
                    className={`text-left text-[18px] font-medium ${
                      isActive ? "text-white" : "text-white/70"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
              <button
                onClick={() => navigate("/signin")}
                className="bg-white text-black text-[14px] font-medium px-4 py-3 rounded-full hover:bg-gray-100 transition mt-2"
              >
                SignIn / Up
              </button>
              <button className="border border-white/60 text-white text-[14px] font-medium px-4 py-3 rounded-full hover:bg-white hover:text-black transition flex items-center gap-1 justify-center">
                Watch Tutorial <span className="text-xs ml-1">▶</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
