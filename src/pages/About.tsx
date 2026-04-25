import { NavLink } from "react-router-dom";
import SectionHeader from "../components/ui/SectionHeader";
import BookingBanner from "../components/ui/BookingBanner";
import Button from "../components/ui/Button";
import drLamPhoto from "../assets/images/Dr-Lam.jpg";
import francesPhoto from "../assets/images/frances-portrait.jpg";
import "../styles/components/About.css";

export default function About() {
  return (
    <main>

      {/* ── 1. Page header ────────────────────────────────── */}
      <section className="about-header">
        <div className="wrapper">
          <SectionHeader
            label="About Us"
            title="Our Mississauga Dentists Welcome You"
            align="center"
          />
        </div>
      </section>

      {/* ── 2. Dr. Frances Hadipranoto ────────────────────── */}
      <section className="about-doctor about-doctor--alt">
        <div className="wrapper">
          <div className="about-doctor__grid about-doctor__grid--photo-left">

            <div className="about-doctor__photo-wrap">
              <img
                src={francesPhoto}
                alt="Dr. Frances Hadipranoto, General Dentist at Sheridan Dental"
                className="about-doctor__photo"
              />
            </div>

            <div className="about-doctor__bio">
              <p className="about-doctor__credential-line">General Dentist · Member, Ontario Dental Association</p>
              <h2 className="about-doctor__name">Dr. Frances Hadipranoto</h2>
              <hr className="about-doctor__divider" />
              <div className="about-doctor__prose">
                <p>
                  Dr. Frances Hadipranoto completed her Bachelor of Science in Biology at Ryerson University in 2008,
                  then pursued her lifelong calling by earning her Doctor of Dental Surgery from the University of
                  Toronto Faculty of Dentistry in 2014. She is a proud member of the Ontario Dental Association.
                </p>
                <p>
                  There are two things Dr. Frances holds deeply: dentistry and art. In her practice, patients are
                  royalty — her foremost priority is delivering ethical, comprehensive dental care rooted in genuine
                  concern for each person's wellbeing. She approaches every visit with the same curiosity that keeps
                  her returning to continuing education courses throughout the year, always refining her clinical
                  skills and broadening her knowledge.
                </p>
                <p>
                  Outside the clinic, Dr. Frances is an artist. The walls of her home and those of her family
                  are filled with her own drawings and paintings — a quiet extension of the same attention to
                  detail she brings to dentistry. She balances this creative life with yoga and other training,
                  keeping up with the physical demands of long hours at the chair.
                </p>
                <p>
                  Her commitment to others reaches well beyond Mississauga. While in dental school, she
                  volunteered in Indonesia, providing dental care in an underserved community — an experience
                  she describes as eye-opening. In 2016, that dedication led her to join a missionary outreach
                  in Haiti, where she continued to serve those with limited access to care. Both experiences
                  deepened her belief that dentistry is, at its best, an act of service.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Dr. Jeffrey Lam ────────────────────────────── */}
      <section className="about-doctor about-doctor--default">
        <div className="wrapper">
          <div className="about-doctor__grid about-doctor__grid--photo-right">

            <div className="about-doctor__bio">
              <p className="about-doctor__credential-line">General Dentist · DDS with Honours, University of Toronto</p>
              <h2 className="about-doctor__name">Dr. Jeffrey Lam</h2>
              <hr className="about-doctor__divider" />
              <div className="about-doctor__prose">
                <p>
                  Dr. Jeffrey Lam graduated with his Doctor of Dental Surgery with Honours from the University of
                  Toronto in 2014. His academic path also took him through McMaster University, where he earned both
                  an Honours Bachelor of Science and a Master of Science in Biochemistry and Molecular Biology — a
                  foundation that informs the rigour and curiosity he brings to every case.
                </p>
                <p>
                  Following graduation, Dr. Lam completed a hospital dental residency at Mount Sinai Hospital in
                  Toronto, where he received advanced training in treating patients with special needs and in oral
                  surgery. Committed to reaching those who might otherwise go without care, he also travelled to
                  Moose Factory to provide dental services to communities in northern Ontario.
                </p>
                <p>
                  Today, Dr. Lam holds a staff dentist position at the UHN Toronto Rehabilitation Institute, where
                  he cares for medically compromised patients. He also serves as a clinical instructor at the
                  University of Toronto, mentoring the next generation of dental professionals. He is a member of
                  the Ontario Dental Association, the Canadian Dental Association, and the Royal College of Dental
                  Surgeons of Ontario.
                </p>
                <p>
                  At the heart of Dr. Lam's practice is communication. He believes that when patients feel truly
                  heard — when they can ask questions freely and receive clear, honest answers — they walk away
                  confident and at ease. That trust, built one conversation at a time, is what he values most.
                </p>
                <p>
                  Away from the office, Dr. Lam is in quiet pursuit of the perfect steak. He is also a committed
                  violinist and a devoted audiophile, spending time chasing high-fidelity sound with the same
                  precision he brings to his clinical work.
                </p>
              </div>
            </div>

            <div className="about-doctor__photo-wrap">
              <img
                src={drLamPhoto}
                alt="Dr. Jeffrey Lam, General Dentist at Sheridan Dental"
                className="about-doctor__photo"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. Closing CTA ────────────────────────────────── */}
      <section className="about-closing">
        <div className="wrapper">
          <div className="about-closing__inner">
            <h3 className="about-closing__title">A healthier, more beautiful smile starts here</h3>
            <p className="about-closing__text">
              We are committed to helping you attain the healthy and beautiful smile you deserve. For more
              information about our services, we invite you to explore this website or contact our office
              to book an initial consultation.
            </p>
            <a href="tel:+19058228288" className="about-closing__phone">905.822.8288</a>
            <NavLink to="/contact">
              <Button variant="primary" size="lg">Book an appointment</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── 5. Booking banner ─────────────────────────────── */}
      <BookingBanner />

    </main>
  );
}
