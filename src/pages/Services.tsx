import { NavLink } from "react-router-dom";
import SectionHeader from "../components/ui/SectionHeader";
import BookingBanner from "../components/ui/BookingBanner";
import { services } from "../data/services";
import bannerServices from "../assets/images/banner-services.jpg";
import "../styles/components/Services.css";

export default function Services() {
  return (
    <main className="services-page">

      {/* ── Header ───────────────────────────────────────────────── */}
      <section className="services-page__header">
        <div className="wrapper">
          <SectionHeader
            label="What we offer"
            title="Our Services"
            subtitle="From routine check-ups to full smile restorations, we provide comprehensive dental care for every stage of life."
            align="center"
          />
        </div>
      </section>

      {/* ── Banner image ─────────────────────────────────────────── */}
      <div className="services-page__banner">
        <img
          src={bannerServices}
          alt="Sheridan Dental office and treatment rooms"
          className="services-page__banner-img"
        />
      </div>

      {/* ── Intro prose ──────────────────────────────────────────── */}
      <section className="services-page__intro">
        <div className="wrapper services-page__intro-inner">
          <p className="services-page__intro-text">
            At Sheridan Dental, our goal is to help you maintain your healthy
            smile throughout life. Our offerings range from general family
            dentistry to reconstructive and sedation dentistry — virtually all
            of your dental needs, under one roof.
          </p>
        </div>
      </section>

      {/* ── Service cards grid ───────────────────────────────────── */}
      <section className="services-page__grid-section">
        <div className="wrapper">
          <ul className="services-page__grid">
            {services.map((service) => (
              <li key={service.slug} className="services-page__card">
                <div className="services-page__card-body">
                  <h2 className="services-page__card-title">{service.title}</h2>
                  <p className="services-page__card-desc">
                    {service.shortDescription}
                  </p>
                </div>
                <NavLink
                  to={`/services/${service.slug}`}
                  className="services-page__card-link"
                >
                  Learn more →
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Contact nudge ────────────────────────────────────────── */}
      <section className="services-page__closing">
        <div className="wrapper">
          <p className="services-page__closing-text">
            Have questions about a specific service or want to know if it's
            right for you?{" "}
            <NavLink to="/contact" className="services-page__closing-link">
              Reach out to our team
            </NavLink>{" "}
            — we're happy to help.
          </p>
          <a href="tel:+19058228288" className="services-page__closing-phone">
            905.822.8288
          </a>
        </div>
      </section>

      <BookingBanner />
    </main>
  );
}
