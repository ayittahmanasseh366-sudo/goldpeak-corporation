import { Link } from "react-router-dom";

const contactReasons = [
  {
    number: "01",
    title: "Investor Enquiries",
    description:
      "For discussions about the company's vision, potential investment opportunities, and corporate information.",
  },
  {
    number: "02",
    title: "Strategic Partnerships",
    description:
      "For organisations and professionals interested in exploring potential business collaborations.",
  },
  {
    number: "03",
    title: "General Enquiries",
    description:
      "For questions about GoldPeak Corporation, its website, and other general matters.",
  },
];

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const reason = formData.get("reason");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `GoldPeak Website Enquiry - ${reason}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nEnquiry Type: ${reason}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:info@goldpeakcorporation.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="inner-page contact-page">
      <section className="page-hero contact-page-hero">
        <div className="page-hero-overlay" />

        <div className="page-hero-content">
          <div className="eyebrow">
            <span className="gold-line" />
            LET'S CONNECT
          </div>

          <h1>
            Every great venture
            <br />
            starts with <span>a conversation.</span>
          </h1>

          <p>
            Connect with GoldPeak Corporation to discuss
            enquiries, potential partnerships, and
            opportunities for collaboration.
          </p>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      <section className="contact-main section-padding">
        <div className="contact-main-intro">
          <div className="eyebrow">
            <span className="gold-line" />
            CONTACT GOLDPEAK
          </div>

          <h2>
            Let's discuss
            <br />
            <span>what comes next.</span>
          </h2>

          <p>
            Whether you are an investor, prospective partner,
            or visitor seeking information, we welcome your
            enquiry.
          </p>

          <div className="contact-reasons">
            {contactReasons.map((item) => (
              <article key={item.number}>
                <span className="contact-reason-number">
                  {item.number}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="contact-form-panel">
          <div className="contact-form-heading">
            <span>GET IN TOUCH</span>

            <h3>Send us an enquiry</h3>

            <p>
              Complete the form below to prepare your
              message in your default email application.
            </p>
          </div>

          <form className="goldpeak-contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="contact-name">Full Name</label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-email">Email Address</label>

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-reason">Enquiry Type</label>

              <select
                id="contact-reason"
                name="reason"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select an enquiry type
                </option>

                <option value="Investor Enquiry">
                  Investor Enquiry
                </option>

                <option value="Strategic Partnership">
                  Strategic Partnership
                </option>

                <option value="General Enquiry">
                  General Enquiry
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Your Message</label>

              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell us how we can help..."
                required
              />
            </div>

            <button
              type="submit"
              className="button button-gold contact-submit"
            >
              Prepare Enquiry <span>↗</span>
            </button>

            <p className="form-note">
              This demonstration form opens your email application.
              It does not send or store messages directly.
            </p>
          </form>
        </div>
      </section>

      <section className="contact-closing section-padding">
        <div className="eyebrow">
          <span className="gold-line" />
          GOLDPEAK CORPORATION
        </div>

        <h2>
          Looking ahead.
          <br />
          <span>Moving forward.</span>
        </h2>

        <Link to="/about" className="button button-outline">
          Discover Our Vision <span>↗</span>
        </Link>
      </section>
    </main>
  );
}

export default Contact;