export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface ImpactMetric {
  value: string;
  label: string;
  detail: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  number: string;
  category: string;
  title: string;
  summary: string;
  metrics: CaseStudyMetric[];
  capabilities: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  detail: string;
}

export interface Credential {
  title: string;
  issuer: string;
  date: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const impactMetrics: ImpactMetric[] = [
  {
    value: "30K",
    label: "users acquired",
    detail: "Built momentum in the first five weeks of a consumer product launch.",
  },
  {
    value: "+18%",
    label: "registration uplift",
    detail: "Improved the journey from first visit to completed registration.",
  },
  {
    value: "-25%",
    label: "cost per acquisition",
    detail: "Made growth spend work harder through measurement and optimisation.",
  },
  {
    value: "+70%",
    label: "production yield",
    detail: "Applied experiment-led analysis to a complex manufacturing process.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    number: "01",
    category: "Product growth",
    title: "Turning a launch into a measurable growth engine",
    summary:
      "Connected acquisition, activation and retention signals to focus the team on the changes with the greatest customer and commercial value.",
    metrics: [
      { value: "30K", label: "users in five weeks" },
      { value: "+18%", label: "registration" },
      { value: "+12%", label: "key-event engagement" },
      { value: "-25%", label: "cost per acquisition" },
      { value: "+23%", label: "one-month retention" },
    ],
    capabilities: [
      "Growth analytics",
      "Journey optimisation",
      "Experimentation",
      "Retention",
    ],
  },
  {
    number: "02",
    category: "Measurement systems",
    title: "Giving teams one dependable view of product performance",
    summary:
      "Created a practical measurement rhythm around shared KPIs, attribution and decision-ready reporting so teams could move from questions to action faster.",
    metrics: [{ value: "+50%", label: "reporting efficiency" }],
    capabilities: [
      "KPI frameworks",
      "Attribution",
      "Reporting automation",
      "Stakeholder alignment",
    ],
  },
  {
    number: "03",
    category: "Process optimisation",
    title: "Using experimentation to unlock manufacturing performance",
    summary:
      "Translated production data into testable improvement opportunities, helping technical and operational teams raise output while controlling cost.",
    metrics: [
      { value: "+70%", label: "production yield" },
      { value: "+30%", label: "process improvement" },
      { value: "$1M", label: "cost reduction" },
    ],
    capabilities: [
      "Statistical analysis",
      "Experiment design",
      "Process analytics",
      "Operational insight",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Product Analyst Lead",
    company: "Frog Social / Novum Studio",
    location: "London, UK",
    period: "Jan 2026 — Present",
    summary:
      "Lead product and growth analytics, turning behavioural data into product priorities, experiments and shared measures of success.",
    highlights: [
      "Promoted from Data Analyst to lead the product analytics function.",
      "Partner with product, growth and leadership teams to connect evidence with roadmap decisions.",
      "Shape KPI frameworks, user-journey analysis and experimentation from question through recommendation.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Frog Social / Novum Studio",
    location: "London, UK",
    period: "Jul 2024 — Jan 2026",
    summary:
      "Built the measurement foundation for product launches, acquisition and retention, making performance visible and actionable.",
    highlights: [
      "Supported a launch that acquired 30K users in five weeks.",
      "Helped lift registration by 18%, key-event engagement by 12% and one-month retention by 23%.",
      "Reduced cost per acquisition by 25% and improved reporting efficiency by 50%.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Zhen Ding Technology",
    location: "Taiwan",
    period: "May 2019 — Nov 2021",
    summary:
      "Applied experimentation and process analytics to improve performance in a high-volume manufacturing environment.",
    highlights: [
      "Improved production yield by 70% through data-led process optimisation.",
      "Delivered a 30% process improvement by translating operational data into testable actions.",
      "Contributed to $1M in cost reduction through evidence-based production decisions.",
    ],
  },
  {
    role: "Business Analyst",
    company: "Robotelf Technologies",
    location: "Taiwan",
    period: "Sep 2018 — Mar 2019",
    summary:
      "Connected customer behaviour and commercial data to clear recommendations for digital growth.",
    highlights: [
      "Analysed the website journey to identify opportunities across discovery and conversion.",
      "Helped increase website sales by 15% through insight-led improvements.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Fantasy Recommendation",
    description:
      "A Streamlit app that uses league settings, weighted statistics and recent performance to recommend the strongest available fantasy-basketball players.",
    url: "https://github.com/slashhsu/Fantasy-Recommendation",
    tags: ["Recommendation systems", "Streamlit", "Python"],
  },
  {
    title: "NLP Fake News",
    description:
      "A natural-language-processing project that compares classification approaches for distinguishing authentic and misleading content.",
    url: "https://github.com/slashhsu/NLP-Fake-news-predict",
    tags: ["Natural language processing", "Classification", "Python"],
  },
  {
    title: "Yahoo Fantasy Basketball",
    description:
      "A notebook-led workflow for weekly matchup reporting, player analysis and clearer roster decisions.",
    url: "https://github.com/slashhsu/Yahoo-fantasy-basketball-Jupyter",
    tags: ["Sports analytics", "Data exploration", "Jupyter"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Product & growth",
    skills: [
      "Product analytics",
      "Growth analytics",
      "Funnel analysis",
      "Cohort analysis",
      "Attribution",
      "KPI frameworks",
      "Cross-functional leadership",
    ],
  },
  {
    title: "Experimentation",
    skills: [
      "A/B testing",
      "Hypothesis design",
      "Statistical analysis",
      "Retention analysis",
      "User-journey analysis",
      "Insight synthesis",
    ],
  },
  {
    title: "Data engineering",
    skills: [
      "SQL",
      "Python",
      "PySpark",
      "dbt",
      "Data modelling",
      "Data quality",
      "ETL pipelines",
    ],
  },
  {
    title: "BI & visualisation",
    skills: [
      "Tableau",
      "Power BI",
      "Streamlit",
      "Looker",
      "Dashboard design",
      "Insight storytelling",
    ],
  },
  {
    title: "Cloud & platforms",
    skills: [
      "BigQuery",
      "Redshift",
      "OpenSearch",
      "Azure Synapse",
      "Databricks",
      "Firebase",
    ],
  },
  {
    title: "Leadership",
    skills: [
      "Product strategy",
      "Stakeholder communication",
      "Roadmap support",
      "Decision frameworks",
      "Team leadership",
      "Go-to-market analysis",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "MSc Data Science",
    institution: "University of Sheffield",
    location: "Sheffield, UK",
    period: "Sep 2022 — Jan 2024",
    detail: "Graduated with a 2:1.",
  },
  {
    degree: "BBA Statistics",
    institution: "Tunghai University",
    location: "Taichung, Taiwan",
    period: "Sep 2013 — Sep 2017",
    detail: "Built a foundation in statistics, analysis and business decision-making.",
  },
];

export const credentials: Credential[] = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "June 2024",
  },
];
