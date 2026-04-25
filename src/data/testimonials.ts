// PLACEHOLDERS — these are sample testimonials written to match the
// tone and context of a real dental office. The client should replace
// these with actual patient reviews before going live.

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  source: "google" | "manual";
  date: string;
  avatarInitials?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    text: "I've been coming to Sheridan Dental for years and wouldn't go anywhere else. Dr. Frances takes the time to explain everything clearly and the whole team makes you feel completely at ease. My kids actually look forward to their appointments — that says it all.",
    rating: 5,
    source: "google",
    date: "2024-11-15",
    avatarInitials: "SM",
  },
  {
    id: "2",
    name: "James K.",
    text: "I hadn't been to a dentist in a long time and was honestly nervous. The staff here were incredibly patient and non-judgmental. They walked me through everything step by step and I left feeling genuinely cared for. Already booked my next appointment.",
    rating: 5,
    source: "google",
    date: "2024-10-03",
    avatarInitials: "JK",
  },
  {
    id: "3",
    name: "Priya R.",
    text: "Getting dental implants was something I'd been putting off for years. Dr. Lam made the process straightforward and the results are incredible — I feel like I have my smile back. The team kept me informed at every stage. So grateful.",
    rating: 5,
    source: "manual",
    date: "2024-09-20",
    avatarInitials: "PR",
  },
  {
    id: "4",
    name: "Tom B.",
    text: "Convenient location, easy parking, and a team that genuinely cares. I've referred several friends here and they've all had the same experience. Professional, warm, and thorough — everything you'd want from a family dentist.",
    rating: 5,
    source: "google",
    date: "2024-08-11",
    avatarInitials: "TB",
  },
  {
    id: "5",
    name: "Maria C.",
    text: "My son was terrified of the dentist until we started coming here. The hygienists are so kind with children — they turn it into something almost fun. We've been patients for three years now and couldn't be happier.",
    rating: 5,
    source: "manual",
    date: "2024-07-28",
    avatarInitials: "MC",
  },
];
