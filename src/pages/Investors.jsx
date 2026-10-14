import { Link } from "react-router-dom";

const investorPillars = [
  {
    number: "01",
    title: "Strategic Direction",
    description:
      "A considered approach to identifying opportunities, evaluating development pathways, and establishing long-term priorities.",
  },
  {
    number: "02",
    title: "Disciplined Evaluation",
    description:
      "Recognising the importance of technical assessments, commercial analysis, and informed decision-making.",
  },
  {
    number: "03",
    title: "Responsible Development",
    description:
      "Integrating environmental awareness, safety considerations, governance, and stakeholder engagement into planning.",
  },
];

function Investors() {
  return (
    <main className="inner-page investors-page">
      <section className="page-hero investors-page-hero">
        <div className="page-hero-overlay" />

        <div className="page-hero-content">
          <div className="eyebrow">
            <span className="gold-line" />
            INVESTOR RELATIONS
          </div>

          <h1>
            Building value.
            <br />
            <span>Looking forward.</span>
          </h1>

          <p>
            Discover GoldPeak Corporation's development
            vision, strategic priorities, and approach
            to potential partnerships.
          </p>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Investors</span>
          </div>

          <div className="investor-hero-actions">
            <Link to="/contact" className="button button-gold">
              Investor Enquiries <span>↗</span>
            </Link>

            <a href="#investor-approach" className="button button-outline">
              Explore Our Approach <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className="investor-overview section-padding">
        <div className="eyebrow">
          <span className="gold-line" />
          THE OPPORTUNITY
        </div>

        <div className="investor-overview-grid">
          <h2>
            A vision grounded
            <br />
            in <span>preparation.</span>
          </h2>

          <div className="investor-overview-copy">
            <p>
              GoldPeak Corporation's corporate vision is
              centred on evaluating mineral development
              opportunities through strategic planning,
              technical consideration, and responsible
              decision-making.
            </p>

            <p>
              We recognise that building a credible mining
              business requires a clear strategy, appropriate
              professional expertise, robust evaluation,
              and transparent engagement with stakeholders.
            </p>

            <p>
              This page demonstrates how investor-facing
              information can be presented. Official
              investment materials and company disclosures
              will be incorporated when verified.
            </p>
          </div>
        </div>
      </section>

      <section
        className="investor-pillars section-padding"
        id="investor-approach"
      >
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="gold-line" />
              OUR APPROACH
            </div>

            <h2>
              Foundations for
              <br />
              <span>long-term value.</span>
            </h2>
          </div>

          <p>
            A framework for evaluating opportunities
            and developing a responsible business.
          </p>
        </div>

        <div className="investor-pillar-grid">
          {investorPillars.map((pillar) => (
            <article
              className="investor-pillar-card"
              key={pillar.number}
            >
              <span className="investor-pillar-number">
                {pillar.number}
              </span>

              <div className="investor-pillar-line" />

              <h3>{pillar.title}</h3>

              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="investor-information section-padding">
        <div className="investor-information-heading">
          <div className="eyebrow">
            <span className="gold-line" />
            INVESTOR INFORMATION
          </div>

          <h2>
            The information
            <br />
            <span>that matters.</span>
          </h2>

          <p>
            A professional investor-relations platform
            should make relevant corporate information
            clear, accessible, and appropriately documented.
          </p>
        </div>

        <div className="investor-information-list">
          <article>
            <span className="investor-info-number">01</span>

            <div>
              <h3>Company Overview</h3>
              <p>
                Corporate background, business direction,
                ownership information, and governance details.
              </p>
            </div>

            <span className="investor-info-symbol">↗</span>
          </article>

          <article>
            <span className="investor-info-number">02</span>

            <div>
              <h3>Project Portfolio</h3>
              <p>
                Verified project locations, development
                stages, relevant technical information,
                and material updates.
              </p>
            </div>

            <span className="investor-info-symbol">↗</span>
          </article>

          <article>
            <span className="investor-info-number">03</span>

            <div>
              <h3>Corporate Documents</h3>
              <p>
                Approved presentations, company reports,
                and other authorised investor materials.
              </p>
            </div>

            <span className="investor-info-symbol">↗</span>
          </article>
        </div>

        <p className="sample-disclaimer">
          This is a demonstration website. No investment
          offer, financial projections, or verified project
          disclosures are represented here.
        </p>
      </section>

      <section className="investor-partnership section-padding">
        <div className="investor-partnership-content">
          <div className="eyebrow">
            <span className="gold-line" />
            PARTNERSHIPS
          </div>

          <h2>
            Strong foundations.
            <br />
            <span>Shared ambition.</span>
          </h2>

          <p>
            We welcome professional conversations with
            prospective investors, strategic partners,
            and other stakeholders interested in learning
            more about GoldPeak Corporation.
          </p>

          <Link to="/contact" className="button button-gold">
            Start a Conversation <span>↗</span>
          </Link>
        </div>

        <div className="investor-partnership-mark">G</div>
      </section>
    </main>
  );
}

export default Investors;