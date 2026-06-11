export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  technologies: string[];
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  challenges: string[];
  results: string[];
  highlights?: string[];
  github?: string;
  metrics?: { label: string; value: string }[];
  status?: string;
  domain: string;
  /** Set to false to hide from the site until ready. Defaults to true. */
  published?: boolean;
};

export const projects: Project[] = [
  {
    slug: "satr-ai-fraud-detection",
    title: "SaTr",
    subtitle: "AI Fraud Detection Platform",
    role: "Software Engineer & AI Engineer",
    period: "2025 – 2026",
    domain: "Fintech · Fraud Analytics",
    technologies: [
      "FastAPI",
      "Python",
      "Scikit-Learn",
      "PostgreSQL",
      "Machine Learning",
      "AML Analytics",
    ],
    overview:
      "Production-grade AI-powered fraud detection and risk assessment platform helping financial institutions identify suspicious transactions before execution.",
    problem:
      "Financial institutions face escalating fraud volumes with legacy rule-based systems producing high false positives and limited explainability for compliance teams.",
    solution:
      "Designed a hybrid AI fraud engine combining machine learning risk scoring, AML rule analysis, blacklist matching, and explainable AI outputs for real-time transaction assessment.",
    architecture:
      "Microservices backend with FastAPI, PostgreSQL for transactional data, ML inference pipeline with feature engineering, and analytics dashboards for fraud analysts.",
    features: [
      "AI-powered fraud detection",
      "Real-time risk scoring",
      "AML rule analysis",
      "Blacklist matching",
      "Explainable AI outputs",
      "Hybrid risk classification",
      "Anomaly detection workflows",
    ],
    challenges: [
      "Balancing detection accuracy with false positive rates in production",
      "Building explainable outputs for regulatory compliance",
      "Integrating real-time scoring with legacy banking workflows",
    ],
    results: [
      "Achieved ROC-AUC performance of 96.04%",
      "Research paper in preparation",
      "Patent application in preparation",
      "End-to-end fraud analytics pipeline deployed",
    ],
    highlights: [
      "ROC-AUC 96.04%",
      "Explainable AI",
      "Research & Patent",
    ],
    metrics: [{ label: "ROC-AUC", value: "96.04%" }],
    github: "https://github.com/Abdulaziz-Alamawi",
    status: "Production · Research",
  },
  {
    slug: "absher-neuron-2",
    title: "Absher Neuron 2.0",
    subtitle: "AI Security Intelligence Platform",
    role: "Lead Software Engineer & AI Engineer",
    period: "2025 – 2026",
    domain: "Cybersecurity · Identity Intelligence",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "Scikit-Learn",
      "WebSockets",
      "Docker",
    ],
    overview:
      "Production-grade AI security intelligence platform focused on digital identity protection, behavioral analytics, and predictive security monitoring.",
    problem:
      "Digital platforms need proactive identity protection beyond static authentication, especially against account takeover and behavioral anomalies at scale.",
    solution:
      "Built an identity intelligence platform with behavioral profiling, adaptive authentication, triple verification workflows, and real-time threat prediction.",
    architecture:
      "Full-stack architecture with Next.js frontend, FastAPI microservices, PostgreSQL + Prisma ORM, WebSocket live monitoring, and Dockerized deployment.",
    features: [
      "Behavioral analytics & identity profiling",
      "Risk scoring & threat prediction",
      "Triple verification (Face, Live Camera, Phone)",
      "Adaptive authentication",
      "Real-time monitoring dashboards",
      "Live alerting & security analytics",
      "Identity intelligence services",
    ],
    challenges: [
      "Designing low-latency verification flows for high-risk scenarios",
      "Modeling behavioral baselines without compromising privacy",
      "Scaling real-time monitoring across large user bases",
    ],
    results: [
      "End-to-end identity intelligence platform delivered",
      "Triple verification workflow integrated",
      "Real-time security monitoring operational",
      "Absher Hackathon Finalist",
    ],
    highlights: ["Triple Verification", "Behavioral AI", "Live Monitoring"],
    github: "https://github.com/Abdulaziz-Alamawi",
    status: "Production",
  },
  {
    slug: "matrix-smart-makkah",
    title: "Matrix Smart Makkah",
    subtitle: "Smart City AI Operating System",
    role: "Lead Software Engineer & AI Engineer",
    period: "2025",
    domain: "Smart City · IoT",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "IoT",
      "WebSockets",
      "Predictive Analytics",
    ],
    overview:
      "Smart city operating platform integrating transportation intelligence, environmental monitoring, waste management, and emergency response into a unified intelligent ecosystem.",
    problem:
      "City operations span siloed systems without unified situational awareness, predictive forecasting, or coordinated emergency response capabilities.",
    solution:
      "Developed a command-center platform leveraging AI, IoT, and predictive analytics for city-wide monitoring, forecasting, and operational decision-making.",
    architecture:
      "Unified smart city OS with IoT ingestion layer, real-time analytics engine, predictive forecasting modules, and executive command-center dashboards.",
    features: [
      "Smart transportation analytics",
      "Smart waste management",
      "Environmental monitoring",
      "Emergency AI core",
      "Real-time analytics",
      "IoT integration",
      "Smart city command center",
    ],
    challenges: [
      "Integrating heterogeneous IoT data streams",
      "Building predictive models for city-scale operations",
      "Designing executive dashboards for multi-domain awareness",
    ],
    results: [
      "Unified smart city platform delivered",
      "Smart Makkah Hackathon participant",
      "Aligned with Saudi Vision 2030 smart city initiatives",
    ],
    highlights: ["Smart City OS", "IoT Integration", "Command Center"],
    github: "https://github.com/Abdulaziz-Alamawi",
    status: "Production",
  },
  {
    slug: "smart-home-ai",
    title: "Smart Home AI",
    subtitle: "Intelligent Home Operating System",
    role: "Lead Software Engineer & AI Engineer",
    period: "2024 – 2025",
    domain: "IoT · Home Automation",
    technologies: [
      "Next.js",
      "Express.js",
      "FastAPI",
      "PostgreSQL",
      "Socket.IO",
      "Scikit-Learn",
    ],
    overview:
      "Full-stack AI-powered smart home ecosystem integrating IoT devices, predictive maintenance, intelligent automation, and real-time monitoring services.",
    problem:
      "Home IoT ecosystems lack intelligent orchestration, predictive maintenance, and unified monitoring across devices and environments.",
    solution:
      "Built an intelligent home OS with ML-driven forecasting, anomaly detection, digital twin concepts, and real-time telemetry dashboards.",
    architecture:
      "Multi-tier stack with Next.js frontend, Express.js + FastAPI services, Socket.IO real-time layer, PostgreSQL persistence, and ML inference modules.",
    features: [
      "IoT device monitoring",
      "Predictive maintenance",
      "Smart automation rules",
      "Digital twin visualization",
      "Real-time dashboards",
      "Anomaly detection",
      "Security monitoring",
    ],
    challenges: [
      "Synchronizing real-time device telemetry",
      "Building reliable predictive maintenance models",
      "Designing intuitive automation workflows",
    ],
    results: [
      "Full-stack smart home platform operational",
      "Digital twin and analytics modules integrated",
      "Predictive maintenance pipeline deployed",
    ],
    highlights: ["Digital Twin", "Predictive AI", "Real-Time IoT"],
    github: "https://github.com/Abdulaziz-Alamawi",
    status: "Production",
  },
  {
    slug: "studentcareer-ai",
    title: "StudentCareer AI",
    subtitle: "Career Intelligence & Readiness System",
    role: "Lead Software Engineer & AI Engineer",
    period: "2024",
    domain: "EdTech · Career Intelligence",
    technologies: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "Scikit-Learn",
    ],
    overview:
      "AI-powered SaaS platform focused on career readiness, employability assessment, professional development, and intelligent career planning.",
    problem:
      "Students and graduates lack data-driven tools to assess career readiness, identify skill gaps, and receive personalized development roadmaps.",
    solution:
      "Developed an AI career intelligence platform with resume analysis, interview simulation, skill-gap assessment, and personalized roadmap generation.",
    architecture:
      "SaaS architecture with Next.js frontend, FastAPI AI services, PostgreSQL + Prisma, ML recommendation engine, and analytics reporting layer.",
    features: [
      "Resume analysis & scoring",
      "AI interview simulation",
      "Skill gap assessment",
      "Career readiness scoring",
      "Personalized career roadmaps",
      "Recommendation engine",
      "Analytics dashboards",
    ],
    challenges: [
      "Building accurate resume parsing and scoring models",
      "Designing realistic interview simulation flows",
      "Generating actionable, personalized career recommendations",
    ],
    results: [
      "End-to-end career intelligence platform delivered",
      "Multi-module AI assessment pipeline operational",
      "Personalized roadmap generation integrated",
    ],
    highlights: ["Career AI", "Interview Sim", "Skill Gap Analysis"],
    github: "https://github.com/Abdulaziz-Alamawi",
    status: "Production",
    published: false,
  },
];

export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.published !== false);
}

export function getProjectBySlug(slug: string): Project | undefined {
  const project = projects.find((p) => p.slug === slug);
  if (!project || project.published === false) return undefined;
  return project;
}
