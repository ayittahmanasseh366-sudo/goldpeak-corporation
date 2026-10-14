import { Link } from "react-router-dom";

const principles = [
  {
    number: "01",
    icon: "◈",
    title: "Our Vision",
    description:
      "To explore opportunities that contribute to responsible mineral development and long-term value creation.",
  },
  {
    number: "02",
    icon: "⌘",
    title: "Our Mission",
    description:
      "To approach mineral development with strategic thinking, careful evaluation, and a commitment to responsible practices.",
  },
  {
    number: "03",
    icon: "◇",
    title: "Our Values",
    description:
      "To place integrity, safety, accountability, and respect for people and the environment at the heart of our approach.",
  },
];

function About() {
  return (
    <main className="inner-page about-page">
      {/* HERO */}
      <section className="page-hero about-page-hero">
        <div className="page-hero-overlay" />

        <div className="page-hero-content">
          <div className="eyebrow">
            <span className="gold-line" />
            WHO WE ARE
          </div>

          <h1>
            Driven by vision.
            <br />
            <span>Grounded in purpose.</span>
          </h1>

          <p>
            Discover the thinking behind GoldPeak Corporation
            and our perspective on responsible mineral
            development and long-term opportunity.
          </p>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="about-overview section-padding">
        <div className="about-overview-heading">
          <div className="eyebrow">
            <span className="gold-line" />
            ABOUT GOLDPEAK
          </div>

          <h2>
            Looking beneath
            <br />
            the surface for
            <br />
            <span>greater possibilities.</span>
          </h2>
        </div>

        <div className="about-overview-copy">
          <p>
            GoldPeak Corporation is presented here as an
            emerging mining-company concept, built around
            a vision of opportunity, thoughtful planning,
            and responsible mineral development.
          </p>

          <p>
            We recognise that mineral development involves
            more than the resource itself. It requires
            careful evaluation, technical understanding,
            responsible decision-making, and consideration
            of the communities and environments connected
            to each opportunity.
          </p>

          <p>
            As the company develops, its verified history,
            project portfolio, operational capabilities,
            and corporate information can be incorporated
            into this platform.
          </p>

          <Link to="/projects" className="button button-gold">
            Explore Our Projects <span>↗</span>
          </Link>
        </div>
      </section>

      {/* NEW VISUAL MINING SECTION */}
      <section className="about-visual">
        <div className="about-visual-image">
          <div className="about-visual-overlay" />

          <div className="about-visual-topline">
            <span>GOLDPEAK CORPORATION</span>
            <span>OUR PERSPECTIVE / 001</span>
          </div>

          <div className="about-visual-content">
            <div className="eyebrow">
              <span className="gold-line" />
              BEYOND THE RESOURCE
            </div>

            <h2>
              Every resource
              <br />
              begins with
              <br />
              <span>a vision.</span>
            </h2>

            <p>
              Recognising potential. Evaluating opportunity.
              Planning for the future.
            </p>

            <Link to="/sustainability" className="visual-text-link">
              Our responsible approach <span>↗</span>
            </Link>
          </div>

          <div className="about-visual-caption">
            <span className="caption-dot" />
            MINERAL DEVELOPMENT · A LONG-TERM PERSPECTIVE
          </div>
        </div>
      </section>

      {/* VISION, MISSION AND VALUES */}
      <section className="about-purpose section-padding">
        <div className="eyebrow">
          <span className="gold-line" />
          WHAT GUIDES US
        </div>

        <div className="about-purpose-heading">
          <h2>
            Our principles.
            <br />
            <span>Our direction.</span>
          </h2>

          <p>
            The principles that shape this corporate vision
            and provide a foundation for future development.
          </p>
        </div>

        <div className="purpose-grid">
          {principles.map((principle) => (
            <article
              className="purpose-card"
              key={principle.number}
            >
              <div className="purpose-card-top">
                <span className="purpose-number">
                  {principle.number}
                </span>

                <span className="purpose-icon">
                  {principle.icon}
                </span>
              </div>

              <h3>{principle.title}</h3>

              <p>{principle.description}</p>

              <span className="purpose-card-line" />
            </article>
          ))}
        </div>
      </section>

      {/* DEVELOPMENT APPROACH */}
      <section className="about-approach section-padding">
        <div className="about-approach-image">
          <div className="about-image-label">
            <span>01</span>
            <div>
              <strong>THOUGHTFUL DEVELOPMENT</strong>
              <small>From potential to planning</small>
            </div>
          </div>
        </div>

        <div className="about-approach-content">
          <div className="eyebrow">
            <span className="gold-line" />
            OUR APPROACH
          </div>

          <h2>
            Progress through
            <br />
            <span>careful planning.</span>
          </h2>

          <p>
            Strong foundations matter. Our proposed approach
            places emphasis on understanding opportunities,
            evaluating risks, and considering environmental
            and social responsibilities before development
            decisions are made.
          </p>

          <p>
            As GoldPeak Corporation's real operations and
            strategy are confirmed, this section can be
            expanded with its actual methods, expertise,
            and development milestones.
          </p>

          <Link to="/sustainability" className="button button-outline">
            Discover Our Principles <span>↗</span>
          </Link>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="about-cta section-padding">
        <div className="eyebrow">
          <span className="gold-line" />
          THE ROAD AHEAD
        </div>

        <h2>
          The future starts
          <br />
          <span>with a clear vision.</span>
        </h2>

        <p>
          Learn more about our development perspective
          or connect with us to begin a conversation.
        </p>

        <div className="about-cta-actions">
          <Link to="/projects" className="button button-gold">
            Explore Projects <span>↗</span>
          </Link>

          <Link to="/contact" className="button button-outline">
            Contact Us <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;