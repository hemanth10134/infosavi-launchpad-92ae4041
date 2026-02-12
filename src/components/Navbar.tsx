import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import icon from "@/assets/icon.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll for effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },

  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/20 ${isScrolled
        ? "bg-white/80 backdrop-blur-md shadow-md h-20"
        : "bg-white/10 backdrop-blur-lg h-20"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center h-full">
          {/* ================= Logo (Left) ================= */}
          <div className="flex-1 flex justify-start">
            <a href="#" className="flex items-center gap-3">
              <img
                src={icon}
                alt="infoSavi Logo"
                className={`transition-all duration-300 h-20 w-auto object-contain mix-blend-multiply`}
              />
            </a>
          </div>

          {/* ================= Desktop Links (Center) ================= */}
          <div className="hidden md:flex items-center justify-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative group text-lg font-medium text-foreground"
              >
                {link.label}

                {/* animated underline */}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-brand-purple transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* ================= Desktop Button (Right) ================= */}
          <div className="flex-1 flex justify-end items-center">
            <div className="hidden md:flex items-center">
              <a href="#contact">
                <Button className="bg-brand-purple hover:bg-purple-700 text-white px-6 py-2 text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                  Contact Us
                </Button>
              </a>
            </div>

            {/* ================= Mobile Toggle ================= */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* ================= Mobile Menu ================= */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-5 border-t border-border animate-fade-in bg-white">
            <div className="flex flex-col space-y-5">

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground text-sm font-medium hover:text-brand-purple"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <a href="#contact">
                <Button className="bg-brand-purple text-white w-full rounded-full">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
