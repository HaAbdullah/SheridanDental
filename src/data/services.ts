export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  details?: string[];
  extraSections?: { heading: string; body: string; list?: string[] }[];
  ctaNote?: string;
}

export const services: Service[] = [
  {
    slug: "family-and-general-dentistry",
    title: "Family & General Dentistry",
    shortDescription:
      "Preventive care, fillings, crowns, and everything in between — for patients of all ages.",
    fullDescription:
      "Preventative general dentistry is essential to maintaining the health of your teeth and gums. Regular checkups also allow for early detection of potential problems and give us the chance to share oral hygiene tips and best practices. Our dentistry services include everything your family needs to stay healthy at every age.",
    details: [
      "White fillings",
      "Crown and bridge",
      "Porcelain veneers",
      "Radiation-reduced digital x-rays",
      "Root canals",
      "Scaling and root planing",
      "Custom sports mouth guards",
      "Chipped, broken, and missing teeth repair",
    ],
    extraSections: [
      {
        heading: "Your check-up, in full",
        body: "Your check-up includes important services beyond the cleaning and polishing of your teeth. During your visit, our staff performs a comprehensive diagnostic examination — checking for tooth decay, periodontal disease, oral cancer, tooth grinding, toothbrush abrasion, and the deterioration of old crowns, bridges, and fillings.",
      },
    ],
    ctaNote:
      "Any of our team members will be happy to answer your questions or arrange a convenient appointment time.",
  },
  {
    slug: "preventive-dentistry",
    title: "Preventive Dentistry",
    shortDescription:
      "Regular cleanings, exams, and education to keep small issues from becoming big ones.",
    fullDescription:
      "Regular checkups help you maintain excellent oral health. We offer family and general dentistry services in our modern, welcoming office. From your regular cleaning to standard tooth extractions, we promise a comfortable and positive experience for you and your family.",
    extraSections: [
      {
        heading: "Care for every stage of life",
        body: "In our practice we offer exceptional care for the entire family:",
        list: [
          "Children benefit from learning healthy habits early — our dental professionals make it fun to visit the dentist.",
          "Teens receive the specialized attention they need as their teeth and alignment continue to develop.",
          "Adults benefit from regular care that maintains oral health through the busiest years of life.",
          "Seniors receive focused care that addresses the specific effects of aging on gums and teeth.",
        ],
      },
    ],
    ctaNote:
      "Preventive dentistry is the best way to maintain healthy teeth and gums — and to catch small problems before they become serious.",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription:
      "Permanent, natural-looking tooth replacement that restores both function and confidence.",
    fullDescription:
      "Dental implants are a great solution for someone who has lost one or more natural teeth. An implant is a stable, synthetic tooth root — usually made of titanium — surgically placed into the jawbone. It provides a solid anchor for a permanent replacement tooth, or aids in the retention and stability of a denture.",
    extraSections: [
      {
        heading: "Single tooth replacement",
        body: "Implants not only look natural, but feel and act like strong, normal teeth. Because they don't rely on neighbouring teeth for support, implants don't compromise the health of your surrounding dentition.",
      },
      {
        heading: "Multiple tooth replacement",
        body: "If you are missing several teeth in a row, a few strategically placed implants can support a permanent bridge. If you have lost all of your teeth, a full bridge or full denture can be permanently fixed in your mouth with a strategic number of implants.",
      },
      {
        heading: "Post-treatment care",
        body: "Your replacement teeth need to be treated the same as your natural teeth — daily brushing, flossing, and regular check-ups. The better you care for them, the longer they will last.",
      },
      {
        heading: "Our partners",
        body: "Sheridan Dental works with trusted partners, including Smile Care Denture Centre, to provide complete implant solutions from start to finish.",
      },
    ],
    ctaNote: "Are you missing teeth? Hiding your smile? We can help.",
  },
  {
    slug: "dentistry-asleep",
    title: "Dentistry While Asleep",
    shortDescription:
      "Anxiety-free treatment under sedation for patients who need extra comfort and care.",
    fullDescription:
      "Nervous about dentistry? Neglecting your dental care can lead to serious problems with not only your oral health but your overall health. If anxiety has kept you away from the dentist, we invite you to contact us and discuss how dental care while asleep at Sheridan Dental can help you feel more comfortable during your visit.",
    extraSections: [
      {
        heading: "Sedation options",
        body: "Dr. Alex Tang can provide Nitrous Oxide & Oxygen for those who are mildly anxious. For those who need stronger support, IV sedation is available — from light and moderate (where you may drift in and out of sleep but remain relaxed) to deep sedation (where you sleep through the treatment). General anaesthesia is also available, rendering you fully asleep for the entire procedure.",
      },
      {
        heading: "Who might benefit",
        body: "There are many reasons patients choose sedation dentistry:",
        list: [
          "Young age",
          "Dental anxiety",
          "Long appointment",
          "Difficulty getting numb",
          "Pronounced gag reflex",
          "Removal of wisdom teeth",
          "Allergies to local anaesthetics",
          "Difficulty sitting still in the dental chair",
        ],
      },
    ],
    ctaNote:
      "Our ultimate goal is to enable our patients to receive dental treatment in a comfortable state of mind.",
  },
  {
    slug: "childrens-corner",
    title: "Children's Corner",
    shortDescription:
      "A welcoming space for younger patients to build healthy habits and a positive relationship with dental care.",
    fullDescription:
      "At Sheridan Dental, we know the importance of dental care for every stage of your child's life. Working together, we can give your children a head start toward a lifetime of good dental health. We welcome children of all ages and take special care to ensure our younger patients feel safe and comfortable.",
    extraSections: [
      {
        heading: "A child's first visit",
        body: "The first step to ensuring a lifetime of dental health is creating a positive attitude toward oral care and a trusting relationship with their dentist. We also take the time to explain your child's condition and our recommendations to you as a parent — because we know a child's appointment can be stressful for the whole family.",
      },
      {
        heading: "Early childhood care",
        body: "Baby teeth are not only necessary for chewing and speech development — they also hold space in the jaw for adult teeth. If a baby tooth is lost too early, neighbouring teeth can drift and cause crowding when permanent teeth arrive.",
        list: [
          "Use a soft cloth to wipe your baby's gums",
          "Begin brushing when the first tooth erupts",
          "Begin flossing when all baby teeth have grown in",
          "Never allow a child to fall asleep with a bottle of milk, formula, or juice",
        ],
      },
      {
        heading: "Fluoride & sealants",
        body: "We offer fluoride treatments during regular check-ups to strengthen developing teeth. Protective sealants can also be applied to the deep grooves of molars and premolars, acting as a barrier against the bacteria that cause cavities.",
      },
    ],
    ctaNote:
      "Together with you, we can help give your child a winning smile that lasts a lifetime.",
  },
];
