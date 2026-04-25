import SectionHeader from "../components/ui/SectionHeader";
import BookingBanner from "../components/ui/BookingBanner";
import drFrances from "../assets/images/frances-portrait.jpg";
import drLam from "../assets/images/Dr-Lam.jpg";
import azraPhoto from "../assets/images/Azra.jpg";
import brittanyPhoto from "../assets/images/Brittany.jpg";
import aleeshaPhoto from "../assets/images/aleesha.jpg";
import elizabethPhoto from "../assets/images/Elizabeth.jpg";
import chrisPhoto from "../assets/images/Chris.jpg";
import "../styles/components/Team.css";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

const doctors: TeamMember[] = [
  {
    name: "Dr. Frances Hadipranoto",
    role: "General Dentist · Member, Ontario Dental Association",
    bio: "Dr. Frances completed her DDS at the University of Toronto in 2014. She holds patients as her top priority and brings the same curiosity to her continuing education as she does to her art — her drawings and paintings fill the walls of her home and her family's. A volunteer in Indonesia and Haiti, she believes dentistry, at its best, is an act of service.",
    photo: drFrances,
  },
  {
    name: "Dr. Jeffrey Lam",
    role: "General Dentist · DDS with Honours, University of Toronto",
    bio: "Dr. Lam graduated with Honours from U of T in 2014 and completed a hospital residency at Mount Sinai. He is a staff dentist at UHN Toronto Rehab Institute and a clinical instructor at U of T. He has provided care in northern Ontario communities and believes that good communication is the foundation of every great dental relationship.",
    photo: drLam,
  },
];

const hygienists: TeamMember[] = [
  {
    name: "Elizabeth (Liz)",
    role: "Registered Dental Hygienist",
    bio: "Liz graduated from the Toronto College of Dental Hygiene with Honours in 2018 and has been with Sheridan Dental since September 2022. She brings a rich background to her role: five years as a healthcare administrator, a degree in Early Childhood Education, and a diploma in Medical Transcription. Her passion for oral health education shapes everything she does.",
    photo: elizabethPhoto,
  },
  {
    name: "Chris",
    role: "Registered Dental Hygienist",
    bio: 'Chris graduated from George Brown College in 2008 and has spent his career devoted to educating patients on proper oral hygiene and advocating for overall health. He takes the time to make sure every patient truly understands what is happening in their mouth and why it matters. Outside the office, he plays drums for the Latin urban rock band "Midnight Tonight".',
    photo: chrisPhoto,
  },
];

const assistants: TeamMember[] = [
  {
    name: "Azra",
    role: "Office Manager / Certified Dental Assistant Level II",
    bio: "Azra graduated from the National Academy of Health and Business in 2011 and joined Sheridan Dental in March 2022. Her warm and friendly personality means she remembers every detail about each patient and has built genuine, lasting relationships with the people who walk through our doors. Outside the office, she enjoys yarn crafts, cooking, and gardening.",
    photo: azraPhoto,
  },
  {
    name: "Brittany",
    role: "Certified Dental Assistant Level II",
    bio: "Brittany was first a patient at Sheridan Dental in 2015 before becoming a Dental Assistant in September 2021 — a path that speaks to the trust she developed in this practice. A graduate of CADH and a member of the ODAA, she loves educating patients about oral hygiene and spending time on nature walks, painting, and with family and friends.",
    photo: brittanyPhoto,
  },
  {
    name: "Aleesha",
    role: "Certified Dental Assistant Level II",
    bio: "Aleesha is a Level II dental assistant who attended Durham College. She loves working with others, is always smiling and willing to lend a helping hand. Her caring and understanding character provides real comfort to patients. Outside of work, she enjoys reading, writing poems, singing, dancing, and going to the gym.",
    photo: aleeshaPhoto,
  },
];

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="team-page__card">
      <img
        src={member.photo}
        alt={member.name}
        className="team-page__card-photo"
      />
      <div className="team-page__card-body">
        <h3 className="team-page__card-name">{member.name}</h3>
        <p className="team-page__card-role">{member.role}</p>
        <p className="team-page__card-bio">{member.bio}</p>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <main className="team-page">

      {/* Page Header */}
      <section className="team-page__header">
        <div className="wrapper">
          <SectionHeader
            label="Our Team"
            title="Our Mississauga Dental Team Welcomes You"
            subtitle="At Sheridan Dental, each and every one of our staff members is completely committed to improving and maintaining your oral health. We are dedicated to excellence and superior patient care."
            align="center"
          />
        </div>
      </section>

      {/* Doctors — 2 cards, centred */}
      <section className="team-page__group-section">
        <div className="wrapper">
          <p className="team-page__group-label">Our Dentists</p>
          <div className="team-page__grid team-page__grid--two">
            {doctors.map((m) => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>

      {/* Hygienists — 2 cards */}
      <section className="team-page__group-section team-page__group-section--alt">
        <div className="wrapper">
          <p className="team-page__group-label">Dental Hygienists</p>
          <div className="team-page__grid team-page__grid--two">
            {hygienists.map((m) => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>

      {/* Assistants — 3 cards */}
      <section className="team-page__group-section">
        <div className="wrapper">
          <p className="team-page__group-label">Dental Assistants &amp; Admin</p>
          <div className="team-page__grid team-page__grid--three">
            {assistants.map((m) => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="team-page__closing">
        <div className="wrapper">
          <p className="team-page__closing-text">
            If you have any questions about our doctors or team, please do not hesitate to{" "}
            <a href="/contact" className="team-page__closing-link">contact us</a>{" "}
            or stop by our dental office in Mississauga.
          </p>
          <a href="tel:+19058228288" className="team-page__closing-phone" aria-label="Call us at 905-822-8288">
            905.822.8288
          </a>
        </div>
      </section>

      <BookingBanner />
    </main>
  );
}
