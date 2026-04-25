import { NavLink } from "react-router-dom";
import SectionHeader from "../components/ui/SectionHeader";
import ServiceCard from "../components/ui/ServiceCard";
import BookingBanner from "../components/ui/BookingBanner";
import TestimonialsSection from "../components/ui/TestimonialsSection";
import bannerHome2 from "../assets/images/banner-home-2.jpg";
import bannerHome3 from "../assets/images/banner-home-3.jpg";
import drLam from "../assets/images/Dr-Lam.jpg";
import drFrances from "../assets/images/frances-portrait.jpg";
import "../styles/components/Home.css";

const featuredServices = [
  {
    slug: "family-and-general-dentistry",
    title: "Family & General Dentistry",
    description:
      "Preventive care, fillings, crowns, and everything in between — for patients of all ages.",
  },
  {
    slug: "preventive-dentistry",
    title: "Preventive Dentistry",
    description:
      "Regular cleanings, exams, and education to keep small issues from becoming big ones.",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacement that restores both function and confidence.",
  },
  {
    slug: "dentistry-asleep",
    title: "Dentistry While Asleep",
    description:
      "Anxiety-free treatment under sedation for patients who need extra comfort and care.",
  },
];

export default function Home() {
  return (
    <main>

      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <section className="home-hero">
        <div className="home-hero__inner wrapper">

          <div className="home-hero__content">
            <p className="home-hero__eyebrow">Always welcoming new patients</p>
            <h1 className="home-hero__title">Sheridan Dental</h1>
            <p className="home-hero__lead">
              A warm, experienced team dedicated to keeping your whole family's
              smile healthy — right here in the heart of Mississauga.
            </p>
            <div className="home-hero__actions">
              <NavLink to="/contact" className="home-hero__btn">
                Book an appointment
              </NavLink>
              <NavLink to="/services" className="home-hero__link">
                Explore our services
              </NavLink>
            </div>
          </div>

          <div className="home-hero__image-col">
            <div className="home-hero__image-wrap home-hero__image-wrap--main">
              <img
                src={bannerHome2}
                alt="Bright and welcoming Sheridan Dental office"
                className="home-hero__image"
              />
            </div>
            <div className="home-hero__image-wrap home-hero__image-wrap--secondary">
              <img
                src={bannerHome3}
                alt="Dental care provided with warmth and expertise at Sheridan Dental"
                className="home-hero__image"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. Featured Services ─────────────────────────────────── */}
      <section className="home-services">
        <div className="home-services__inner wrapper">

          <div className="home-services__header">
            <SectionHeader
              label="What we offer"
              title="Our Services"
              subtitle="From routine check-ups to full smile restorations, we provide comprehensive dental care for every stage of life."
              align="left"
            />
          </div>

          <div className="home-services__grid">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="home-services__footer">
            <NavLink to="/services" className="home-services__all-link">
              See all services →
            </NavLink>
          </div>

        </div>
      </section>

      {/* ── 3. Why Us ────────────────────────────────────────────── */}
      <section className="home-why">
        <div className="home-why__inner wrapper">

          <div className="home-why__header">
            <SectionHeader
              label="Our approach"
              title="A practice built on trust"
              align="left"
            />
          </div>

          <div className="home-why__body">
            <div className="home-why__prose">
              <p className="home-why__paragraph">
                We are always welcoming new patients and take pride in making
                every first visit feel unhurried and comfortable. Whether you
                are returning after years away from the dentist or simply
                looking for a new home for your family's care, our doors are
                open.
              </p>
              <p className="home-why__paragraph">
                Our team brings years of experience across general, preventive,
                and restorative dentistry. We treat patients the way we would
                want to be treated — with honesty, patience, and genuine
                attention to what matters most to you.
              </p>
              <p className="home-why__paragraph">
                Conveniently located beside the Metro in Sheridan Centre Mall
                at 2225 Erin Mills Parkway, Mississauga, we are easy to reach
                by car or transit. Our office is fully wheelchair accessible,
                because a healthy smile should be within everyone's reach.
              </p>
            </div>

            <aside className="home-why__aside">
              <div className="home-why__doctors">
                <div className="home-why__doctor-photo-wrap">
                  <img src={drFrances} alt="Dr. Frances Hadipranoto" className="home-why__doctor-photo" />
                  <p className="home-why__doctor-caption">Dr. Frances Hadipranoto</p>
                </div>
                <div className="home-why__doctor-photo-wrap">
                  <img src={drLam} alt="Dr. Jeffrey Lam" className="home-why__doctor-photo" />
                  <p className="home-why__doctor-caption">Dr. Jeffrey Lam</p>
                </div>
              </div>
              <NavLink to="/about" className="home-why__meet-link">Meet our dentists →</NavLink>
            </aside>
          </div>

        </div>
      </section>

      {/* ── 4. Testimonials ─────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── 5. Promotion strip  ──────────────────────────────────── */}
      <section className="home-promo">
        <div className="home-promo__inner wrapper">
          <div className="home-promo__text-col">
            <p className="home-promo__badge">Current offer</p>
            <h2 className="home-promo__title">
              Free take-home teeth whitening kit
            </h2>
            <p className="home-promo__body">
              We are pleased to offer a complimentary take-home whitening kit
              for new and existing patients. Contact our office to learn how to
              claim yours — a brighter smile has never been more accessible.
            </p>
          </div>
          <div className="home-promo__cta-col">
            <NavLink to="/contact" className="home-promo__btn">
              Contact us for details
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── 5. Booking Banner ────────────────────────────────────── */}
      <BookingBanner />

    </main>
  );
}
