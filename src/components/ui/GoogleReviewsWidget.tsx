import "../../styles/components/GoogleReviewsWidget.css";

// Option B: Embedded Google Reviews widget — no API key required.
// Shows overall star rating + review count, links to the clinic's
// Google Business profile to read or leave reviews.
//
// To update: replace GOOGLE_BUSINESS_URL with the actual Google Maps
// listing URL for Sheridan Dental. The rating and count below are
// placeholders — update them once the live URL is confirmed.

const GOOGLE_BUSINESS_URL =
  "https://www.google.com/maps/place/Sheridan+Dental/@43.5305005,-79.6569416,17z/data=!3m2!4b1!5s0x882b438b2273e781:0x881f1844a390417c!4m6!3m5!1s0x882b438bb7551829:0x809088830f7e17a8!8m2!3d43.5305005!4d-79.6543613!16s%2Fg%2F1td4vxns?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D";

const OVERALL_RATING = 4.9;
const REVIEW_COUNT = 87;

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="gr-widget__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }, (_, i) => (
        <span key={`f${i}`} className="gr-widget__star gr-widget__star--full" aria-hidden="true">★</span>
      ))}
      {half && (
        <span className="gr-widget__star gr-widget__star--half" aria-hidden="true">★</span>
      )}
      {Array.from({ length: empty }, (_, i) => (
        <span key={`e${i}`} className="gr-widget__star gr-widget__star--empty" aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export default function GoogleReviewsWidget() {
  return (
    <div className="gr-widget">
      <div className="gr-widget__rating-row">
        <span className="gr-widget__score">{OVERALL_RATING}</span>
        <div className="gr-widget__rating-detail">
          <Stars rating={OVERALL_RATING} />
          <span className="gr-widget__count">
            Based on {REVIEW_COUNT} Google reviews
          </span>
        </div>
        <span className="gr-widget__google-g" aria-hidden="true">G</span>
      </div>

      <a
        href={GOOGLE_BUSINESS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="gr-widget__cta"
      >
        Read our Google reviews →
      </a>
    </div>
  );
}
