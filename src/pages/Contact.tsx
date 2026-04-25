import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import ReviewCTA from "../components/ui/ReviewCTA";
import officeBanner from "../assets/images/banner-our-office.jpg";
import "../styles/components/Contact.css";

export default function Contact() {
  return (
    <main className="contact-page">

      {/* ── 1. Page header ── */}
      <section className="contact-page__header">
        <div className="contact-page__wrapper">
          <SectionHeader
            label="Contact Us"
            title="Family Dental Care in Mississauga"
            subtitle="We are always excited to welcome new patients to Sheridan Dental and take great pride in introducing new patients to our office and staff members. We also welcome referrals of family and friends from Mississauga and the surrounding area."
            align="center"
          />
        </div>
      </section>

      {/* ── Office banner ── */}
      <div className="contact-page__banner">
        <img
          src={officeBanner}
          alt="Sheridan Dental office interior"
          className="contact-page__banner-img"
        />
      </div>

      {/* ── 2. Info + Form ── */}
      <section className="contact-page__body">
        <div className="contact-page__wrapper">
          <div className="contact-page__grid">

            {/* Left column — clinic info */}
            <div className="contact-info">
              <p className="contact-info__prose">
                We appreciate the loyalty and support of all our existing patients and we pledge to
                continue to pursue excellence in patient-centered care. We encourage you to contact
                our office today if you have any questions or concerns about our treatments or
                services.
              </p>

              <p className="contact-info__prose">
                Our easily accessible office has plenty of free parking. We are conveniently located
                beside the Metro in Sheridan Centre Mall. For those with limited mobility, our office
                is wheelchair accessible.
              </p>

              <address className="contact-info__address">
                <div className="contact-info__address-block">
                  <span className="contact-info__address-label">Address</span>
                  <span>2225 Erin Mills Parkway, Suite 44C</span>
                  <span>Mississauga, ON L5K 1T9</span>
                </div>

                <div className="contact-info__detail-row">
                  <span className="contact-info__detail-label">Phone</span>
                  <a
                    href="tel:+19058228288"
                    className="contact-info__link"
                  >
                    905.822.8288
                  </a>
                </div>

                <div className="contact-info__detail-row">
                  <span className="contact-info__detail-label">Email</span>
                  <a
                    href="mailto:info@sheridandentaloffice.com"
                    className="contact-info__link"
                  >
                    info@sheridandentaloffice.com
                  </a>
                </div>
              </address>

              {/* Hours */}
              <div className="contact-hours">
                <h3 className="contact-hours__heading">Office Hours</h3>
                <dl className="contact-hours__list">
                  <div className="contact-hours__row">
                    <dt className="contact-hours__day">Monday</dt>
                    <dd className="contact-hours__time">9:30 AM – 6:00 PM</dd>
                  </div>
                  <div className="contact-hours__row">
                    <dt className="contact-hours__day">Tuesday</dt>
                    <dd className="contact-hours__time">10:30 AM – 7:00 PM</dd>
                  </div>
                  <div className="contact-hours__row">
                    <dt className="contact-hours__day">Wednesday</dt>
                    <dd className="contact-hours__time">10:30 AM – 7:00 PM</dd>
                  </div>
                  <div className="contact-hours__row">
                    <dt className="contact-hours__day">Thursday</dt>
                    <dd className="contact-hours__time">9:30 AM – 6:00 PM</dd>
                  </div>
                  <div className="contact-hours__row">
                    <dt className="contact-hours__day">Friday</dt>
                    <dd className="contact-hours__time">9:00 AM – 3:00 PM</dd>
                  </div>
                  <div className="contact-hours__row">
                    <dt className="contact-hours__day">
                      Saturday
                      <span className="contact-hours__note"> *</span>
                    </dt>
                    <dd className="contact-hours__time">9:00 AM – 2:00 PM</dd>
                  </div>
                  <div className="contact-hours__row">
                    <dt className="contact-hours__day">Sunday</dt>
                    <dd className="contact-hours__time contact-hours__time--closed">Closed</dd>
                  </div>
                </dl>
                <p className="contact-hours__footnote">* Open on alternating Saturdays</p>
              </div>
            </div>

            {/* Right column — contact form */}
            <div className="contact-form-panel">
              <h3 className="contact-form-panel__heading">Send Us a Message</h3>
              <form
                className="contact-form"
                onSubmit={(e) => e.preventDefault()}
                noValidate
              >
                <div className="contact-form__field">
                  <label htmlFor="contact-name" className="contact-form__label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="contact-form__input"
                    placeholder="Jane Smith"
                    autoComplete="name"
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-email" className="contact-form__label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="contact-form__input"
                    placeholder="jane@example.com"
                    autoComplete="email"
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-phone" className="contact-form__label">
                    Phone{" "}
                    <span className="contact-form__optional">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    className="contact-form__input"
                    placeholder="905-555-0100"
                    autoComplete="tel"
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-preferred-time" className="contact-form__label">
                    Preferred Appointment Time
                  </label>
                  <select
                    id="contact-preferred-time"
                    name="preferredTime"
                    className="contact-form__select"
                  >
                    <option value="">No preference</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-message" className="contact-form__label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="contact-form__textarea"
                    rows={5}
                    placeholder="Tell us how we can help, or ask any question about our services..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="contact-form__submit"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Review CTA ── */}
      <ReviewCTA />

      {/* ── 4. Map embed ── */}
      <section className="contact-page__map-section">
        <div className="contact-page__wrapper">
          <div className="contact-map">
            <iframe
              className="contact-map__iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.0!2d-79.6927!3d43.5013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47b5e3b3b3b3%3A0x0!2s2225+Erin+Mills+Pkwy+%2344C%2C+Mississauga%2C+ON!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sheridan Dental office location"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
