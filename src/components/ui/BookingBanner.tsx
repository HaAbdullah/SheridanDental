import Button from "./Button";
import { NavLink } from "react-router-dom";
import "../../styles/components/BookingBanner.css";

export default function BookingBanner() {
  return (
    <section className="booking-banner">
      <div className="booking-banner__inner wrapper">
        <p className="booking-banner__text">Ready to book your next visit?</p>
        <NavLink to="/contact" className="booking-banner__cta">
          Book an appointment
        </NavLink>
      </div>
    </section>
  );
}
