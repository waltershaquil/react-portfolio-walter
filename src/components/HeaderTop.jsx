import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import logo1 from "../resources/circular logo website-01.png";

const HeaderTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-glass shadow-lg py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo1}
              alt="Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain transition-transform hover:scale-110 hover:rotate-12 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Walter
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Home
            </NavLink>
            <NavLink onClick={() => scrollToSection("projects")}>
              Projects
            </NavLink>
            <NavLink onClick={() => scrollToSection("experience")}>
              Experience
            </NavLink>
            <NavLink onClick={() => scrollToSection("education")}>
              Education
            </NavLink>
            {/*
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-foreground/80 hover:text-primary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-foreground/80"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 mt-2 border-t border-white/10 animate-fade-in bg-glass backdrop-blur-xl rounded-xl p-4">
            <div className="flex flex-col gap-4">
              <MobileNavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Home
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("projects")}>
                Projects
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("experience")}>
                Experience
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection("education")}>
                Education
              </MobileNavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="text-foreground/80 hover:text-primary transition-colors font-medium relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
  </button>
);

const MobileNavLink = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2 px-4 hover:bg-white/5 rounded-lg"
  >
    {children}
  </button>
);

export default HeaderTop;
