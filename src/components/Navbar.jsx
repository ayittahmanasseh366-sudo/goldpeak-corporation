import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Projects", path: "/projects" },
  { name: "Sustainability", path: "/sustainability" },
  { name: "Investors", path: "/investors" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement">
        <span className="announcement-dot" />
        MINING WITH PURPOSE. BUILDING FOR THE FUTURE.
      </div>

      <header className="site-header">
        <Link
          to="/"
          className="brand"
          aria-label="GoldPeak Corporation home"
          onClick={closeMenu}
        >
          <img
            src="/goldpeak-logo.jpeg"
            alt="GoldPeak Corporation"
            className="brand-logo"
          />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          id="main-navigation"
          className={
            menuOpen
              ? "navigation navigation-open"
              : "navigation"
          }
        >
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-contact active" : "nav-contact"
            }
            onClick={closeMenu}
          >
            Contact Us <span>↗</span>
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Navbar;