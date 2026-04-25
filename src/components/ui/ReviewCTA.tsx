import "../../styles/components/ReviewCTA.css";

const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/place/Sheridan+Dental/@43.5305005,-79.6569416,17z/data=!3m2!4b1!5s0x882b438b2273e781:0x881f1844a390417c!4m6!3m5!1s0x882b438bb7551829:0x809088830f7e17a8!8m2!3d43.5305005!4d-79.6543613!16s%2Fg%2F1td4vxns?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D";

export default function ReviewCTA() {
  return (
    <section className="review-cta">
      <div className="wrapper review-cta__inner">
        <div className="review-cta__text">
          <p className="review-cta__heading">Happy with your visit?</p>
          <p className="review-cta__body">
            Sharing your experience helps other families in Mississauga find the
            care they need. We would love to hear from you.
          </p>
        </div>
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="review-cta__btn"
        >
          Leave us a Google review
        </a>
      </div>
    </section>
  );
}
