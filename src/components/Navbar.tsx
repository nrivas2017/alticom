import { FunctionComponent, useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo-alticom.svg";
import "../styles/navbar.css";

const Navbar: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const items: Array<{
    label: string;
    path: string;
  }> = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Servicios",
      path: "/servicios",
    },
    {
      label: "Contáctanos",
      path: "/contactanos",
    },
  ];

  return (
    <div className="navbar-container">
      <img src={logo} className="navbar-logo" onClick={() => navigate("/")} />

      {/* desktop */}
      <ul className="navbar-items-container">
        {items.map((i, idx) => (
          <li
            key={`navbar-item-key-${idx}`}
            className={`navbar-item ${
              location.pathname === i.path ? "navbar-item-actived" : ""
            }`}
            onClick={() => navigate(i.path)}
          >
            {i.label}
          </li>
        ))}
      </ul>

      {/* mobile */}
      <div ref={buttonRef} className="navbar-menu-toggle" onClick={toggleMenu}>
        <span>☰</span>
      </div>

      <div
        ref={menuRef}
        className={`navbar-menu ${isMenuOpen ? "navbar-menu-open" : ""}`}
      >
        <ul className="navbar-menu-list-container">
          {items.map((i, idx) => (
            <li
              key={`navbar-menu-item-key-${idx}`}
              className={`navbar-menu-item ${
                location.pathname === i.path ? "navbar-menu-item-actived" : ""
              }`}
              onClick={() => {
                navigate(i.path);
                setIsMenuOpen(false);
              }}
            >
              {i.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
