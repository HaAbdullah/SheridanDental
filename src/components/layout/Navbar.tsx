import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/sd-logo.png";
import "../../styles/components/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <nav className="navbar__inner wrapper" aria-label="Main navigation">
          <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
            <img src={logo} alt="" className="navbar__logo-img" aria-hidden="true" />
            <span className="navbar__logo-text">Sheridan Dental</span>
          </NavLink>

          <ul className="navbar__links" role="list">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/team">Our Team</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          <NavLink to="/contact" className="navbar__cta">
            Book Appointment
          </NavLink>

          <button
            className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <div
        className={`navbar__mobile-menu${menuOpen ? " navbar__mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/team" onClick={closeMenu}>Our Team</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        <NavLink to="/contact" className="navbar__mobile-cta" onClick={closeMenu}>
          Book Appointment
        </NavLink>
      </div>
    </>
  );
}
