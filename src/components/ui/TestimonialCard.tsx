import type { Testimonial } from "../../data/testimonials";
import "../../styles/components/TestimonialCard.css";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="testimonial-card__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={
            i < rating
              ? "testimonial-card__star testimonial-card__star--filled"
              : "testimonial-card__star"
          }
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="testimonial-card">
      <p className="testimonial-card__text">{testimonial.text}</p>

      <footer className="testimonial-card__footer">
        <div className="testimonial-card__meta">
          {testimonial.avatarInitials && (
            <div className="testimonial-card__avatar" aria-hidden="true">
              {testimonial.avatarInitials}
            </div>
          )}
          <div className="testimonial-card__author">
            <span className="testimonial-card__name">{testimonial.name}</span>
            <StarRating rating={testimonial.rating} />
          </div>
        </div>

      </footer>
    </article>
  );
}
