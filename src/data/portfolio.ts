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
  businessProblem: string;
  analyticalQuestion: string;
  responsibility: string;
  approach: string[];
  action: string;
  evaluation: string;
  learning: string;
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
  { label: "Decision stories", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Capabilities", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const impactMetrics: ImpactMetric[] = [
  {
    value: "30K",
    label: "user acquisitions",
    detail: "A team launch outcome achieved within the product's first five weeks.",
  },
  {
    value: "+18%",
    label: "registration uplift",
    detail: "A journey-analysis and experimentation outcome I helped measure and interpret.",
  },
  {
    value: "-25%",
    label: "cost per acquisition",
    detail: "Connected channel cost with downstream product behaviour to inform optimisation.",
  },
  {
    value: "+50%",
    label: "reporting efficiency",
    detail: "Automated recurring data preparation while improving consistency and visibility.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    number: "01",
    category: "Launch strategy",
    title: "Creating a measurable launch strategy",
    businessProblem:
      "A new social product was approaching launch without a shared definition of success or a clear way to separate acquisition volume from meaningful user value.",
    analyticalQuestion:
      "Which early behaviours would show that users were reaching value, and which signals should guide onboarding, roadmap and go-to-market priorities?",
    responsibility:
      "I translated user needs and strategic goals into measurable product questions, tracking requirements and decision points for the cross-functional team.",
    approach: [
      "Combined recurring user feedback with market research and the early product signals available.",
      "Mapped acquisition, activation, engagement and retention as distinct stages rather than treating registration as proof of success.",
      "Aligned product, design, engineering and marketing on measures for the major launch features.",
    ],
    action:
      "The framework gave the team a shared basis for prioritising onboarding, core social actions and go-to-market activity while keeping uncertainty visible.",
    evaluation:
      "The launch acquired more than 30,000 users in five weeks. I present that as a team outcome to which the analysis and measurement framework contributed.",
    learning:
      "In an early-stage product, useful analytics means making assumptions explicit and defining activation and retention early enough to improve the next decision.",
    metrics: [{ value: "30K", label: "users in five weeks" }],
    capabilities: [
      "Launch measurement",
      "KPI definition",
      "Roadmap support",
      "Cross-functional alignment",
    ],
  },
  {
    number: "02",
    category: "Journey optimisation",
    title: "Finding and reducing friction in the user journey",
    businessProblem:
      "The team could see registrations and returning users, but fragmented journey data made it difficult to locate friction or distinguish short-term conversion from durable product value.",
    analyticalQuestion:
      "Where were users dropping out, which behaviours were associated with continued use, and how should proposed changes be evaluated without relying on one headline metric?",
    responsibility:
      "I focused on measurement and interpretation: defining journey events, breaking down the funnel, analysing cohorts and helping teams read experiment outcomes responsibly.",
    approach: [
      "Mapped the journey from awareness and onboarding through activation, repeated engagement, retention and churn.",
      "Defined Firebase events and properties so product behaviour could be analysed consistently across funnel and cohort views.",
      "Supported cross-functional A/B testing with primary measures and downstream indicators, without claiming ownership of engineering implementation.",
    ],
    action:
      "The evidence helped product, design, engineering and marketing focus follow-up work on measurable journey friction and monitor whether improvements held beyond registration.",
    evaluation:
      "The wider programme contributed to an 18% increase in registration and a 23% improvement in one-month retention. These are team outcomes, not effects attributed to analysis alone.",
    learning:
      "Success measures and guardrails should be agreed before reviewing a result, followed by a longer post-change check for activation and retention quality.",
    metrics: [
      { value: "+18%", label: "registration" },
      { value: "+23%", label: "one-month retention" },
    ],
    capabilities: [
      "Funnel analysis",
      "Event tracking",
      "Cohort analysis",
      "Experiment interpretation",
    ],
  },
  {
    number: "03",
    category: "Commercial measurement",
    title: "Connecting acquisition spend to user value",
    businessProblem:
      "Campaign cost, product events and purchase behaviour lived in separate systems, so low-cost acquisition could look successful without showing whether those users engaged, retained or converted.",
    analyticalQuestion:
      "Which channels brought users who created downstream value, and how could recurring reporting become reliable enough to support faster budget conversations?",
    responsibility:
      "I aligned metric definitions, connected product and commercial data, organised reusable transformation logic and communicated attribution limits alongside recommendations.",
    approach: [
      "Linked Firebase behaviour and Redshift purchase data with BigQuery, Meta Ads and RevenueCat sources.",
      "Compared channels across registration, engagement, retention and conversion rather than optimising top-of-funnel volume alone.",
      "Used DolphinScheduler and dbt to automate recurring preparation, with checks for freshness, completeness, duplicates and unexpected volume changes.",
    ],
    action:
      "Campaign reviews could consider user quality alongside cost, while the automated workflow moved analyst time from file preparation towards interpretation and decision support.",
    evaluation:
      "Subsequent team action was associated with a 25% reduction in cost per acquisition, while reporting automation improved efficiency by 50%. A dashboard alone did not cause either result.",
    learning:
      "Commercial measurement is most useful when attribution uncertainty is explicit and pipeline validity is tested independently from whether a scheduled job completed.",
    metrics: [
      { value: "-25%", label: "cost per acquisition" },
      { value: "+50%", label: "reporting efficiency" },
    ],
    capabilities: [
      "Marketing attribution",
      "Behavioural cohorts",
      "Data modelling",
      "Quality controls",
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
      "Lead decision support for product launch and early growth, connecting user evidence with roadmap priorities and shared measures of success.",
    highlights: [
      "Combined user feedback, market research and early performance signals to structure product opportunity assessments.",
      "Defined launch measures and decision points so major features could be evaluated against user and business outcomes.",
      "Worked across product, design, engineering and marketing on priorities that supported a team launch outcome of 30K user acquisitions in five weeks.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Frog Social / Novum Studio",
    location: "London, UK",
    period: "Jul 2024 — Jan 2026",
    summary:
      "Turned fragmented product and marketing data into journey analysis, experiment readouts and reporting systems that teams could act on.",
    highlights: [
      "Designed Firebase event tracking across onboarding, engagement, retention and churn, enabling more reliable funnel and cohort analysis.",
      "Measurement and interpretation work contributed to team outcomes of +18% registration, +12% key-event engagement and +23% one-month retention.",
      "Connected acquisition sources with downstream behaviour and automated multi-source reporting; subsequent work was associated with -25% CPA and +50% reporting efficiency.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Zhen Ding Technology",
    location: "Taiwan",
    period: "May 2019 — Nov 2021",
    summary:
      "Used statistical analysis and operational context to identify testable drivers of quality in a high-volume manufacturing environment.",
    highlights: [
      "Prepared production and IoT sensor data with SQL and Python, checking data quality before comparing process conditions.",
      "Used control charts, regression, correlation analysis and statistical testing to narrow plausible quality drivers with process experts.",
      "Supported structured process trials and built Tableau monitoring for ongoing variation, anomaly and quality review.",
    ],
  },
  {
    role: "Business Analyst",
    company: "Robotelf Technologies",
    location: "Taiwan",
    period: "Sep 2018 — Mar 2019",
    summary:
      "Connected browsing behaviour, commercial measures and management reporting to clearer digital-growth decisions.",
    highlights: [
      "Built Power BI reporting from BigQuery data for non-technical management audiences.",
      "Journey and KPI analysis informed website improvements associated with a 15% increase in sales.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Fantasy Recommendation",
    description:
      "Decision: which available player best fits a specific fantasy roster? The app combines league settings, weighted statistics and recent performance into a practical shortlist.",
    url: "https://github.com/slashhsu/Fantasy-Recommendation",
    tags: ["Recommendation systems", "Streamlit", "Python"],
  },
  {
    title: "NLP Fake News",
    description:
      "Question: which text signals help distinguish authentic from misleading content? The project compares preprocessing, features and classification approaches in a reproducible workflow.",
    url: "https://github.com/slashhsu/NLP-Fake-news-predict",
    tags: ["Natural language processing", "Classification", "Python"],
  },
  {
    title: "Yahoo Fantasy Basketball",
    description:
      "Decision: where can a roster gain an advantage in the next matchup? The notebook turns weekly player and category data into a repeatable review for roster choices.",
    url: "https://github.com/slashhsu/Yahoo-fantasy-basketball-Jupyter",
    tags: ["Sports analytics", "Data exploration", "Jupyter"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Product decisions",
    skills: [
      "KPI frameworks",
      "Opportunity assessment",
      "Journey optimisation",
      "Growth analytics",
      "Marketing attribution",
      "Roadmap support",
      "Stakeholder alignment",
    ],
  },
  {
    title: "Experimentation & analysis",
    skills: [
      "A/B testing",
      "Hypothesis design",
      "Funnel analysis",
      "Cohort analysis",
      "User segmentation",
      "Statistical analysis",
      "Insight synthesis",
    ],
  },
  {
    title: "Data foundations",
    skills: [
      "SQL",
      "Python",
      "dbt",
      "Data modelling",
      "Data quality",
      "ETL pipelines",
      "Event tracking",
      "PySpark",
    ],
  },
  {
    title: "Platforms & communication",
    skills: [
      "Tableau",
      "Power BI",
      "Streamlit",
      "Looker",
      "BigQuery",
      "Redshift",
      "Firebase",
      "Dashboard design",
      "Insight storytelling",
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
