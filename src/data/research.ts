export type ResearchItem = {
  title: string;
  type: "Research Paper" | "Patent";
  status: "In Preparation" | "Submitted" | "Published";
  description: string;
  relatedProject: string;
  focusAreas: string[];
  timeline: { phase: string; status: string }[];
};

export const researchItems: ResearchItem[] = [
  {
    title: "AI-Powered Fraud Detection & Risk Assessment",
    type: "Research Paper",
    status: "In Preparation",
    description:
      "Research documenting hybrid machine learning approaches for financial fraud detection, including explainable AI methodologies, AML integration, and production-grade risk scoring architectures.",
    relatedProject: "SaTr – AI Fraud Detection Platform",
    focusAreas: [
      "Fraud Detection",
      "Explainable AI",
      "Risk Scoring",
      "AML Analytics",
      "Model Evaluation",
    ],
    timeline: [
      { phase: "Literature Review & Problem Definition", status: "Completed" },
      { phase: "Model Development & Evaluation", status: "Completed" },
      { phase: "Results Analysis (ROC-AUC 96.04%)", status: "Completed" },
      { phase: "Paper Writing & Review", status: "In Progress" },
      { phase: "Submission", status: "Planned" },
    ],
  },
  {
    title: "Intelligent Fraud Detection System with Hybrid Risk Scoring",
    type: "Patent",
    status: "In Preparation",
    description:
      "Patent application covering novel hybrid risk-scoring mechanisms, blacklist matching workflows, and intelligent fraud detection architecture for real-time financial transaction assessment.",
    relatedProject: "SaTr – AI Fraud Detection Platform",
    focusAreas: [
      "Hybrid Risk Scoring",
      "Real-Time Detection",
      "Blacklist Matching",
      "Financial Security",
    ],
    timeline: [
      { phase: "Invention Documentation", status: "Completed" },
      { phase: "Technical Claims Drafting", status: "In Progress" },
      { phase: "Legal Review", status: "Planned" },
      { phase: "Filing", status: "Planned" },
    ],
  },
];

export const innovationHighlights = [
  "Production AI systems with measurable performance metrics",
  "Cross-domain innovation: fintech, cybersecurity, smart city, IoT",
  "Research-driven engineering aligned with national digital transformation",
  "Patent and publication pipeline for fraud detection technology",
];
