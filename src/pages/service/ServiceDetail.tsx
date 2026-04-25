import { useParams, NavLink } from "react-router-dom";
import { services } from "../../data/services";
import BookingBanner from "../../components/ui/BookingBanner";
import "../../styles/components/ServiceDetail.css";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main className="service-detail service-detail--not-found">
        <div className="wrapper">
          <h1 className="service-detail__not-found-title">Service not found</h1>
          <NavLink to="/services" className="service-detail__back-link">
            ← Back to all services
          </NavLink>
        </div>
      </main>
    );
  }

  return (
    <main className="service-detail">

      {/* ── Header ───────────────────────────────────────────────── */}
      <section className="service-detail__header">
        <div className="wrapper">
          <NavLink to="/services" className="service-detail__breadcrumb">
            ← All services
          </NavLink>
          <h1 className="service-detail__title">{service.title}</h1>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────── */}
      <section className="service-detail__body">
        <div className="wrapper service-detail__body-inner">

          {/* Lead paragraph */}
          <p className="service-detail__lead">{service.fullDescription}</p>

          {/* Bullet list of details (e.g. services offered) */}
          {service.details && service.details.length > 0 && (
            <ul className="service-detail__list">
              {service.details.map((item) => (
                <li key={item} className="service-detail__list-item">
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Extra sub-sections */}
          {service.extraSections?.map((section) => (
            <div key={section.heading} className="service-detail__subsection">
              <h2 className="service-detail__subheading">{section.heading}</h2>
              <p className="service-detail__subtext">{section.body}</p>
              {section.list && section.list.length > 0 && (
                <ul className="service-detail__list">
                  {section.list.map((item) => (
                    <li key={item} className="service-detail__list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* CTA note + contact */}
          {service.ctaNote && (
            <aside className="service-detail__cta">
              <p className="service-detail__cta-note">{service.ctaNote}</p>
              <div className="service-detail__cta-actions">
                <NavLink to="/contact" className="service-detail__cta-btn">
                  Book an appointment
                </NavLink>
                <a
                  href="tel:+19058228288"
                  className="service-detail__cta-phone"
                >
                  905.822.8288
                </a>
              </div>
            </aside>
          )}

        </div>
      </section>

      {/* ── Related / sibling services ───────────────────────────── */}
      <section className="service-detail__related">
        <div className="wrapper">
          <h2 className="service-detail__related-heading">Other services</h2>
          <ul className="service-detail__related-list">
            {services
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <li key={s.slug}>
                  <NavLink
                    to={`/services/${s.slug}`}
                    className="service-detail__related-link"
                  >
                    {s.title} →
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <BookingBanner />
    </main>
  );
}
