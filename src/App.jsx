import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Sustainability from "./pages/Sustainability";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <main className="inner-page not-found-page section-padding">
      <div className="eyebrow">
        <span className="gold-line" />
        PAGE NOT FOUND
      </div>

      <h1>
        This page is
        <br />
        <span>off the map.</span>
      </h1>

      <p>
        The page you're looking for may have moved or
        may not exist.
      </p>

      <Link to="/" className="button button-gold">
        Return Home <span>↗</span>
      </Link>
    </main>
  );
}

function SiteLayout() {
  return (
    <>
      <ScrollToTop />

      <div id="top">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/sustainability"
            element={<Sustainability />}
          />
          <Route path="/investors" element={<Investors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SiteLayout />
    </BrowserRouter>
  );
}

export default App;