import { NavLink } from "react-router-dom";
import "../../styles/components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner wrapper">
        <div className="footer__col">
          <p className="footer__name">Sheridan Dental</p>
          <p className="footer__tagline">
            Family dental care in Mississauga — welcoming new patients at Sherwood Village (Sheridan Centre Mall).
          </p>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Quick Links</p>
          <ul role="list">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/team">Our Team</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Hours</p>
          <div className="footer__hours">
            <div className="footer__hours-row">
              <span>Monday</span>
              <span>9:30am – 6:00pm</span>
            </div>
            <div className="footer__hours-row">
              <span>Tuesday</span>
              <span>10:30am – 7:00pm</span>
            </div>
            <div className="footer__hours-row">
              <span>Wednesday</span>
              <span>10:30am – 7:00pm</span>
            </div>
            <div className="footer__hours-row">
              <span>Thursday</span>
              <span>9:30am – 6:00pm</span>
            </div>
            <div className="footer__hours-row">
              <span>Friday</span>
              <span>9:00am – 3:00pm</span>
            </div>
            <div className="footer__hours-row">
              <span>Saturday*</span>
              <span>9:00am – 2:00pm</span>
            </div>
            <div className="footer__hours-row">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
          <p className="footer__hours-note">*Alternating Saturdays</p>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Contact</p>
          <address>
            2225 Erin Mills Parkway, Suite 44C<br />
            Mississauga, ON L5K 1T9<br />
            <br />
            <a href="tel:+19058228288">905.822.8288</a><br />
            <a href="mailto:info@sheridandentaloffice.com">info@sheridandentaloffice.com</a>
          </address>
        </div>
      </div>

      <div className="footer__bottom wrapper">
        <p>&copy; {new Date().getFullYear()} Sheridan Dental. All rights reserved.</p>
      </div>
    </footer>
  );
}
