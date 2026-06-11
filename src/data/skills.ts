export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  icon: string;
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    description: "Core languages for backend, frontend, and data engineering",
    icon: "code",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "Scalable services, REST APIs, and real-time systems",
    icon: "server",
    skills: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "API Integration",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Modern responsive web applications",
    icon: "layout",
    skills: ["Next.js", "React", "Tailwind CSS", "Responsive Web Development"],
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "ML, analytics, and intelligent decision systems",
    icon: "brain",
    skills: [
      "Machine Learning",
      "Generative AI",
      "Predictive Analytics",
      "Behavioral Analytics",
      "Fraud Detection",
      "Risk Scoring",
      "Anomaly Detection",
      "Explainable AI",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    description: "Cloud platforms, containers, and networking",
    icon: "cloud",
    skills: [
      "Microsoft Azure",
      "AWS",
      "Docker",
      "Cloud Computing",
      "Virtual Machines",
      "Network Fundamentals",
      "TCP/IP",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Relational data modeling and ORM integration",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "Prisma ORM", "Database Design", "Data Modeling"],
  },
  {
    id: "engineering",
    title: "Software Engineering",
    description: "Architecture, SDLC, and quality practices",
    icon: "layers",
    skills: [
      "Systems Analysis",
      "Software Architecture",
      "Requirements Engineering",
      "Software Testing",
      "UML Modeling",
      "SDLC",
      "Agile Methodologies",
    ],
  },
  {
    id: "soft",
    title: "Professional Skills",
    description: "Leadership and collaboration competencies",
    icon: "users",
    skills: [
      "Leadership",
      "Communication",
      "Problem Solving",
      "Teamwork",
      "Critical Thinking",
      "Adaptability",
      "Project Coordination",
      "Analytical Thinking",
    ],
  },
];

export const previewSkills = [
  "Python",
  "TypeScript",
  "FastAPI",
  "Next.js",
  "Machine Learning",
  "PostgreSQL",
  "Docker",
  "Azure",
  "Fraud Detection",
  "Behavioral Analytics",
];
