import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import myHeadshot from "../../assets/headshot.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { label: string; path: string }[] = [
    { label: "Home", path: "/" },
    { label: "About Me", path: "/about" },
    { label: "My Works", path: "/works" },
    { label: "Education", path: "/education" },
    { label: "Contact Me", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto py-4 flex items-center justify-between">
        {/* Profile Image / Logo */}
        <div className="md:flex items-center hidden">
          <div className="size-14 rounded-full overflow-hidden border-2 border-teal-300 shadow-md hover:shadow-teal-300/50 transition-shadow duration-300">
            <img
              src={myHeadshot}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center md:gap-6 overflow-x-auto md: overflow-hidden">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`text-nowrap transition-all duration-300 px-3 py-1.5 rounded-full hover:bg-teal-400/10 hover:text-teal-300 ${
                    isActive
                      ? "text-teal-300 font-semibold text-lg animate-pulse"
                      : "text-[#e2e8f0] font-light text-normal"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
