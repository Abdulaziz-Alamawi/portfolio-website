export type LeadershipItem = {
  title: string;
  organization: string;
  period: string;
  role: string;
  description: string;
  achievements: string[];
  icon: string;
  highlight?: boolean;
};

export const leadershipItems: LeadershipItem[] = [
  {
    title: "Formula 1 Saudi Arabian Grand Prix",
    organization: "F1 Operations",
    period: "2023 – 2025",
    role: "Track Line Leader & Fire Marshal Team Member",
    description:
      "Contributed to world-class motorsport operations at the Saudi Arabian Grand Prix, ensuring track safety, emergency readiness, and operational excellence across multiple seasons.",
    achievements: [
      "Track Line Leader for race operations",
      "Fire Marshal Team Member",
      "Multi-season operational experience (2023–2025)",
      "High-pressure event coordination",
    ],
    icon: "flag",
    highlight: true,
  },
  {
    title: "GDG On Campus",
    organization: "Google Developer Groups",
    period: "2024 – 2025",
    role: "Management Team Lead",
    description:
      "Led the campus developer community, organizing technical workshops and events to grow engineering talent and foster innovation.",
    achievements: [
      "Organized 10+ technical workshops",
      "Supported 5+ community events",
      "Engaged 30+ participants",
      "Community growth and event coordination",
    ],
    icon: "users",
  },
  {
    title: "ACM Student Chapter",
    organization: "Association for Computing Machinery",
    period: "2024 – 2025",
    role: "Vice Leader – Organizing Team",
    description:
      "Supervised organizing team members and coordinated technical workshops, interviews, and community activities for the ACM student chapter.",
    achievements: [
      "Supervised 15+ team members",
      "Organized technical events and workshops",
      "Conducted member interviews",
      "Community leadership and coordination",
    ],
    icon: "award",
  },
];

export const hackathons = [
  { name: "Absher Hackathon", result: "Finalist" },
  { name: "Smart Makkah Hackathon", result: "Participant" },
  { name: "FinTech Hackathon", result: "Participant" },
];

export const volunteerStats = {
  hours: "90+",
  label: "Volunteer Hours",
  description:
    "Committed to community service and technical volunteer initiatives contributing to national and local programs.",
};
