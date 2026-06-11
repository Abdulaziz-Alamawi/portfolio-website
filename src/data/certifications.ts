export type Certification = {
  title: string;
  issuer: string;
  category: "AI" | "Cloud" | "Management" | "Engineering";
  year?: string;
};

export const certifications: Certification[] = [
  {
    title: "Professional Certificate Program (PCP) in Project Management Practicals",
    issuer: "Professional Training",
    category: "Management",
  },
  {
    title: "Artificial Intelligence Concepts & Advanced Applications",
    issuer: "SDAIA",
    category: "AI",
  },
  {
    title: "Fundamentals of Artificial Intelligence",
    issuer: "SDAIA",
    category: "AI",
  },
  {
    title: "Code Generation and Optimization Using IBM Granite",
    issuer: "IBM",
    category: "AI",
  },
  {
    title: "Guided Learning: Using Generative AI for Software Development",
    issuer: "IBM",
    category: "AI",
  },
  {
    title: "CHIPATHON IC Design Training Program",
    issuer: "CHIPATHON",
    category: "Engineering",
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM",
    category: "Cloud",
  },
  {
    title: "Introduction to Data Engineering",
    issuer: "IBM",
    category: "Cloud",
  },
];
