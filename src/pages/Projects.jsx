import { Link } from "react-router-dom";

const projectAreas = [
  {
    number: "01",
    category: "EXPLORATION",
    title: "Exploration & Discovery",
    description:
      "Evaluating geological opportunities and developing a considered approach to mineral exploration.",
    imageClass: "exploration-image",
    status: "Exploration strategy",
  },
  {
    number: "02",
    category: "DEVELOPMENT",
    title: "Project Development",
    description:
      "Assessing the technical, commercial, and operational foundations needed to advance future opportunities.",
    imageClass: "development-image",
    status: "Development planning",
  },
  {
    number: "03",
    category: "RESPONSIBLE MINING",
    title: "Responsible Operations",
    description:
      "Considering environmental management, worker safety, and community engagement throughout project planning.",
    imageClass: "responsible-image",
    status: "Responsible development",
  },
];

function Projects() {
  return (
    <main className="inner-page projects-page">
      <section className="page-hero projects-page-hero">
        <div className="page-hero-overlay" />

        <div className="page-hero-content">
          <div className="eyebrow">
            <span className="gold-line" />
            OUR DEVELOPMENT DIRECTION
          </div>

          <h1>
            Identifying
            <br />
            <span>tomorrow's opportunities.</span>
          </h1>

          <p>
            A strategic perspective on mineral exploration,
            project evaluation, and responsible development.
          </p>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Our Projects</span>
          </div>
        </div>
      </section>

      <section className="projects-introduction section-padding">
        <div className="eyebrow">
          <span className="gold-line" />
          OUR FOCUS
        </div>

        <div className="projects-introduction-grid">
          <h2>
            From geological
            <br />
            potential to
            <br />
            <span>considered action.</span>
          </h2>

          <div>
            <p>
              Mineral development involves a series of
              interconnected decisions, from early-stage
              exploration to technical assessment and
              operational planning.
            </p>

            <p>
              GoldPeak's illustrative project portfolio
              demonstrates how these priorities can be
              presented on a professional corporate website.
              Actual project names, locations, ownership,
              and status can be added once verified.
            </p>
          </div>
        </div>
      </section>

      <section className="project-portfolio section-padding">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="gold-line" />
              AREAS OF FOCUS
            </div>

            <h2>
              Our development
              <br />
              <span>priorities.</span>
            </h2>
          </div>

          <p>
            Illustrative areas of focus for a company pursuing
            responsible mineral development opportunities.
          </p>
        </div>

        <div className="project-grid">
          {projectAreas.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-image ${project.imageClass}`}>
                <span className="project-index">
                  {project.number}
                </span>
              </div>

              <div className="project-details">
                <span className="card-kicker">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="project-status">
                  {project.status}
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className="sample-disclaimer">
          Illustrative content for this website sample.
          These categories do not represent confirmed
          GoldPeak projects or operating assets.
        </p>
      </section>

      <section className="projects-process section-padding">
        <div className="projects-process-heading">
          <div className="eyebrow">
            <span className="gold-line" />
            OUR FRAMEWORK
          </div>

          <h2>
            A disciplined path
            <br />
            <span>towards development.</span>
          </h2>
        </div>

        <div className="project-stages">
          <article className="project-stage">
            <span className="project-stage-number">01</span>
            <h3>Identify</h3>
            <p>
              Review potential opportunities and relevant
              geological and commercial information.
            </p>
          </article>

          <article className="project-stage">
            <span className="project-stage-number">02</span>
            <h3>Evaluate</h3>
            <p>
              Consider technical feasibility, environmental
              responsibilities, and applicable requirements.
            </p>
          </article>

          <article className="project-stage">
            <span className="project-stage-number">03</span>
            <h3>Plan</h3>
            <p>
              Establish appropriate development priorities
              informed by professional assessments.
            </p>
          </article>

          <article className="project-stage">
            <span className="project-stage-number">04</span>
            <h3>Advance</h3>
            <p>
              Progress suitable opportunities only when
              the necessary evidence, approvals, and
              resources are in place.
            </p>
          </article>
        </div>
      </section>

      <section className="projects-cta section-padding">
        <div className="eyebrow">
          <span className="gold-line" />
          PARTNERSHIPS & ENQUIRIES
        </div>

        <h2>
          Interested in our
          <br />
          <span>direction?</span>
        </h2>

        <p>
          Contact us to discuss potential collaboration
          and learn more about the GoldPeak website sample.
        </p>

        <Link to="/contact" className="button button-gold">
          Contact Our Team <span>↗</span>
        </Link>
      </section>
    </main>
  );
}

export default Projects;