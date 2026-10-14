import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-area">
          <Link
            to="/"
            className="footer-brand"
            aria-label="GoldPeak Corporation home"
          >
            <img
              src="/goldpeak-logo.jpeg"
              alt="GoldPeak Corporation"
            />
          </Link>

          <p>
            A vision for responsible mineral development and
            long-term value creation.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/projects">Our Projects</Link>
          <Link to="/sustainability">Sustainability</Link>
          <Link to="/investors">Investors</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>

          <p>
            Interested in learning more about GoldPeak Corporation
            or exploring potential business opportunities?
          </p>

          <Link to="/contact" className="text-link">
            Contact our team <span>↗</span>
          </Link>
        </div>

        <a href="#top" className="back-to-top">
          BACK TO TOP ↑
        </a>
      </div>

      <div className="footer-bottom">
        <span>
          © {currentYear} GoldPeak Corporation. All rights reserved.
        </span>

        <span>BUILDING VALUE BENEATH THE SURFACE.</span>
      </div>
    </footer>
  );
}

export default Footer;