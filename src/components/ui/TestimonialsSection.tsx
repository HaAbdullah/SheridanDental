import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../data/testimonials";
import "../../styles/components/TestimonialsSection.css";

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="wrapper testimonials-section__inner">
        <div className="testimonials-section__header">
          <SectionHeader
            label="What patients say"
            title="Kind words from our community"
            align="center"
          />
        </div>

        <ul className="testimonials-section__grid">
          {testimonials.map((t) => (
            <li key={t.id}>
              <TestimonialCard testimonial={t} />
            </li>
          ))}
        </ul>

        <div className="testimonials-section__footer">
          <a
            href="https://www.google.com/maps/place/Sheridan+Dental/@43.5305005,-79.6569416,17z/data=!3m2!4b1!5s0x882b438b2273e781:0x881f1844a390417c!4m6!3m5!1s0x882b438bb7551829:0x809088830f7e17a8!8m2!3d43.5305005!4d-79.6543613!16s%2Fg%2F1td4vxns?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="testimonials-section__google-link"
          >
            Read all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
