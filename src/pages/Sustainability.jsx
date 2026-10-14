import { Link } from "react-router-dom";

const commitments = [
  {
    number: "01",
    title: "Environmental Stewardship",
    description:
      "Considering biodiversity, water resources, land management, and rehabilitation during project evaluation and planning.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Health & Safety",
    description:
      "Promoting a culture that prioritises worker wellbeing, hazard awareness, risk management, and safe working practices.",
    icon: "✳",
  },
  {
    number: "03",
    title: "Community Engagement",
    description:
      "Recognising the importance of listening to local communities, understanding their concerns, and maintaining respectful dialogue.",
    icon: "◎",
  },
  {
    number: "04",
    title: "Responsible Governance",
    description:
      "Supporting transparent decision-making, ethical business conduct, and respect for applicable laws and regulatory requirements.",
    icon: "◇",
  },
];

function Sustainability() {
  return (
    <main className="inner-page sustainability-page">
      <section className="page-hero sustainability-page-hero">
        <div className="page-hero-overlay" />

        <div className="page-hero-content">
          <div className="eyebrow">
            <span className="gold-line" />
            RESPONSIBILITY IN EVERY DECISION
          </div>

          <h1>
            Progress means
            <br />
            <span>responsibility.</span>
          </h1>

          <p>
            Exploring a responsible approach to mineral
            development, environmental awareness, and
            meaningful stakeholder relationships.
          </p>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Sustainability</span>
          </div>
        </div>
      </section>

      <section className="sustainability-intro section-padding">
        <div className="eyebrow">
          <span className="gold-line" />
          OUR PERSPECTIVE
        </div>

        <div className="sustainability-intro-grid">
          <h2>
            Responsible growth
            <br />
            starts with
            <br />
            <span>careful choices.</span>
          </h2>

          <div className="sustainability-intro-copy">
            <p>
              Mineral development can create opportunities,
              but it also carries environmental, social,
              and operational responsibilities that require
              careful consideration.
            </p>

            <p>
              GoldPeak's sustainability framework for this
              website sample reflects the importance of
              planning, risk awareness, stakeholder engagement,
              and continuous improvement.
            </p>

            <p>
              Specific policies, targets, certifications,
              and performance results should be published
              only when they have been established and verified.
            </p>
          </div>
        </div>
      </section>

      <section className="sustainability-commitments section-padding">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="gold-line" />
              OUR COMMITMENTS
            </div>

            <h2>
              Principles for
              <br />
              <span>responsible development.</span>
            </h2>
          </div>

          <p>
            A framework for considering the people,
            environments, and stakeholders connected
            to mineral development.
          </p>
        </div>

        <div className="commitment-grid">
          {commitments.map((commitment) => (
            <article
              className="commitment-card"
              key={commitment.number}
            >
              <div className="commitment-card-top">
                <span className="commitment-number">
                  {commitment.number}
                </span>

                <span className="commitment-icon">
                  {commitment.icon}
                </span>
              </div>

              <h3>{commitment.title}</h3>

              <p>{commitment.description}</p>

              <span className="commitment-bottom-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="sustainability-landscape">
        <div className="sustainability-image" />

        <div className="sustainability-landscape-content">
          <div className="eyebrow">
            <span className="gold-line" />
            THINKING LONG TERM
          </div>

          <h2>
            Beyond the
            <br />
            <span>resource itself.</span>
          </h2>

          <p>
            Responsible mineral development requires
            consideration of a project's wider impacts,
            from early planning through potential operations
            and eventual rehabilitation.
          </p>

          <Link to="/projects" className="button button-outline">
            Explore Our Approach <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="sustainability-priorities section-padding">
        <div className="sustainability-priorities-heading">
          <div className="eyebrow">
            <span className="gold-line" />
            LOOKING AHEAD
          </div>

          <h2>
            Building better
            <br />
            <span>foundations.</span>
          </h2>
        </div>

        <div className="sustainability-priority-list">
          <article>
            <span>01</span>
            <div>
              <h3>Understand the impact</h3>
              <p>
                Identify potential environmental and social
                considerations before advancing development.
              </p>
            </div>
          </article>

          <article>
            <span>02</span>
            <div>
              <h3>Engage stakeholders</h3>
              <p>
                Recognise the value of informed dialogue
                with communities, professionals, and
                relevant stakeholders.
              </p>
            </div>
          </article>

          <article>
            <span>03</span>
            <div>
              <h3>Improve over time</h3>
              <p>
                Develop appropriate processes and evaluate
                performance as verified company operations
                and policies take shape.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="sustainability-cta section-padding">
        <div className="eyebrow">
          <span className="gold-line" />
          WORKING TOGETHER
        </div>

        <h2>
          Responsible progress
          <br />
          <span>takes collaboration.</span>
        </h2>

        <p>
          We welcome conversations about responsible
          development, professional collaboration, and
          potential business opportunities.
        </p>

        <Link to="/contact" className="button button-gold">
          Get in Touch <span>↗</span>
        </Link>
      </section>
    </main>
  );
}

export default Sustainability;