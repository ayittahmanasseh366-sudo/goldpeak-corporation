
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const miningPhotos = [
  "https://d2mef2yp6u2brg.cloudfront.net/wysiwyg/Mineria02.webp",
  "https://fimex.com.mx/_next/image?q=85&url=%2Ffimex-assets%2FIndustries%2Fmining.webp&w=1920",
  "https://media-prod.ii.co.uk/s3fs-public/2024-09/mining_truck_600.jpg",
];


function Home() {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % miningPhotos.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-slideshow" aria-hidden="true">
          {miningPhotos.map((photo, index) => (
            <div
              key={photo}
              className={`hero-slide ${
                activePhoto === index ? "active" : ""
              }`}
              style={{ backgroundImage: `url("${photo}")` }}
            />
          ))}
        </div>

        <div className="hero-shade" />

        <div className="hero-content">
          <div className="eyebrow hero-eyebrow">
            <span className="gold-line" />
            A VISION BUILT ON VALUE
          </div>

          <h1>
            Unearthing
            <br />
            <span>Tomorrow's</span>
            <br />
            Opportunities.
          </h1>

          <p className="hero-description">
            Advancing a vision for responsible mineral development
            through strategic thinking, technical excellence, and
            a commitment to long-term value creation.
          </p>

          <div className="hero-actions">
            <Link to="/about" className="button button-gold">
              Discover GoldPeak <span>↗</span>
            </Link>

            <Link to="/investors" className="button button-outline">
              Investor Enquiries <span>→</span>
            </Link>
          </div>

          <div className="hero-caption">
            <span className="caption-number">
              0{activePhoto + 1} / 03
            </span>
            <span className="caption-line" />
            <span>THE NEXT CHAPTER STARTS HERE</span>
          </div>
        </div>

        <div className="hero-side-label">
          GOLDPEAK CORPORATION · MINING &amp; DEVELOPMENT
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="intro section-padding">
        <div className="intro-label">
          <span className="section-number">01</span>
          <span className="gold-line" />
          <span>WHO WE ARE</span>
        </div>

        <div className="intro-content">
          <h2>
            Built on ambition.
            <br />
            <span>Driven by purpose.</span>
          </h2>

          <div className="intro-copy">
            <p>
              GoldPeak Corporation is an emerging mining company
              with a vision to pursue mineral development
              opportunities through responsible planning,
              disciplined execution, and a long-term outlook.
            </p>

            <p>
              We aim to build a business grounded in integrity,
              thoughtful resource development, and meaningful
              engagement with our stakeholders.
            </p>

            <Link className="text-link" to="/about">
              Discover our company <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="vision-strip">
        <div className="vision-image" />

        <div className="vision-content">
          <div className="eyebrow">
            <span className="gold-line" />
            OUR VISION
          </div>

          <h2>
            Looking beyond
            <br />
            the surface.
          </h2>

          <p>
            We believe responsible mineral development begins
            with a clear vision, careful preparation, and a
            commitment to creating lasting value.
          </p>

          <Link to="/sustainability" className="button button-outline">
            Our commitments <span>→</span>
          </Link>
        </div>
      </section>

      {/* PROJECT PRIORITIES */}
      <section className="projects section-padding">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="gold-line" />
              OUR DIRECTION
            </div>

            <h2>
              From vision
              <br />
              <span>to opportunity.</span>
            </h2>
          </div>

          <p>
            Exploring a path towards responsible mineral
            development, supported by strategic planning and
            a long-term perspective.
          </p>
        </div>

        <div className="project-grid">
          <article className="project-card">
            <div className="project-image exploration-image">
              <span className="project-index">01</span>
            </div>

            <div className="project-details">
              <span className="card-kicker">STRATEGIC PRIORITY</span>
              <h3>Exploration &amp; Discovery</h3>

              <p>
                Evaluating opportunities and establishing a
                considered approach to mineral exploration.
              </p>

              <span className="project-status">
                Development focus
              </span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image development-image">
              <span className="project-index">02</span>
            </div>

            <div className="project-details">
              <span className="card-kicker">STRATEGIC PRIORITY</span>
              <h3>Project Development</h3>

              <p>
                Building the technical, commercial, and
                operational foundations for future opportunities.
              </p>

              <span className="project-status">
                Planning focus
              </span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image responsible-image">
              <span className="project-index">03</span>
            </div>

            <div className="project-details">
              <span className="card-kicker">STRATEGIC PRIORITY</span>
              <h3>Responsible Mining</h3>

              <p>
                Integrating environmental care, safety, and
                community engagement into our development vision.
              </p>

              <span className="project-status">
                Core commitment
              </span>
            </div>
          </article>
        </div>

        <div className="home-section-link">
          <Link to="/projects" className="text-link">
            Explore our projects <span>↗</span>
          </Link>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="approach section-padding">
        <div className="approach-heading">
          <div className="eyebrow">
            <span className="gold-line" />
            HOW WE THINK
          </div>

          <h2>
            A stronger foundation
            <br />
            for <span>future value.</span>
          </h2>
        </div>

        <div className="principles">
          <article className="principle">
            <span className="principle-number">01</span>
            <h3>Strategic Planning</h3>
            <p>
              Making informed decisions through structured
              evaluation and careful preparation.
            </p>
          </article>

          <article className="principle">
            <span className="principle-number">02</span>
            <h3>Technical Excellence</h3>
            <p>
              Working towards sound technical foundations
              and appropriate professional expertise.
            </p>
          </article>

          <article className="principle">
            <span className="principle-number">03</span>
            <h3>Responsible Growth</h3>
            <p>
              Considering long-term environmental, social,
              and economic responsibilities.
            </p>
          </article>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="sustainability home-sustainability">
        <div className="sustainability-image" />

        <div className="sustainability-content">
          <div className="eyebrow">
            <span className="gold-line" />
            BEYOND THE RESOURCE
          </div>

          <h2>
            Progress means
            <br />
            <span>responsibility.</span>
          </h2>

          <p>
            Our vision recognises that mineral development
            must consider the environment, worker safety,
            local communities, and affected stakeholders.
          </p>

          <Link to="/sustainability" className="text-link">
            Our sustainability approach <span>↗</span>
          </Link>
        </div>
      </section>

      {/* INVESTOR RELATIONS */}
      <section className="investors section-padding">
        <div className="investor-decoration">G</div>

        <div className="investor-content">
          <div className="eyebrow">
            <span className="gold-line" />
            INVESTOR RELATIONS
          </div>

          <h2>
            Be part of
            <br />
            <span>the vision.</span>
          </h2>

          <p>
            We welcome conversations with prospective investors,
            strategic partners, and professionals interested
            in learning more about GoldPeak Corporation's
            vision and development plans.
          </p>

          <Link to="/investors" className="button button-gold">
            Investor Relations <span>↗</span>
          </Link>
        </div>

        <div className="investor-note">
          <span className="note-mark">✳</span>

          <p>
            Building the right foundations for tomorrow's
            opportunities starts with a conversation today.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact home-contact section-padding">
        <div className="contact-heading">
          <div className="eyebrow">
            <span className="gold-line" />
            GET IN TOUCH
          </div>

          <h2>
            Let's start
            <br />
            <span>a conversation.</span>
          </h2>

          <p>
            Contact GoldPeak Corporation to discuss potential
            partnerships, investor enquiries, and business
            opportunities.
          </p>
        </div>

        <div className="contact-panel">
          <div className="contact-icon">↗</div>
          <h3>Interested in GoldPeak?</h3>

          <p>
            Reach out to discuss the company's vision and
            explore possible areas of collaboration.
          </p>

          <Link to="/contact" className="text-link">
            Visit our contact page <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
