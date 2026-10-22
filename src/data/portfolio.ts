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
    value: "30K+",
    label: "users acquired",
    detail: "A team launch outcome reached within the product's first five weeks.",
  },
  {
    value: "+9%",
    label: "subscription revenue",
    detail: "Subscription and LTV analysis informed paywall, retention and channel decisions.",
  },
  {
    value: "30+",
    label: "approved PRDs evaluated",
    detail: "Experiment specifications clarified outcomes, diagnostics and quality guardrails.",
  },
  {
    value: "+12%",
    label: "key-event engagement",
    detail: "Segmentation and personalisation work contributed to stronger engagement.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    number: "01",
    category: "Launch & early growth",
    title: "Launching and measuring early product growth",
    businessProblem:
      "A new consumer product needed a shared view of its value proposition, onboarding friction and early growth performance before the team could prioritise its next moves.",
    analyticalQuestion:
      "Which early behaviours indicated that users were reaching value, where was the journey breaking down and which signals should shape launch priorities?",
    responsibility:
      "I led the measurement strategy across acquisition, activation, AI interaction quality, engagement and retention, bringing research and behavioural evidence into one decision frame.",
    approach: [
      "Combined user research, market evidence, acquisition data and early product signals.",
      "Evaluated the value proposition and onboarding journey alongside initial growth performance.",
      "Identified early friction and behavioural patterns, then translated them into launch recommendations.",
    ],
    action:
      "The evidence helped Product, Engineering, Machine Learning, UI/UX and Growth align onboarding and roadmap priorities around measurable user behaviour.",
    evaluation:
      "The cross-functional launch acquired more than 30,000 users within five weeks. The analysis informed priorities; it is not presented as the sole cause of that team outcome.",
    learning:
      "Early-growth analytics is most useful when value, friction and downstream quality are assessed together rather than treating acquisition volume as success by itself.",
    metrics: [{ value: "30K+", label: "users in five weeks" }],
    capabilities: [
      "AI product measurement",
      "Launch evaluation",
      "Funnel analysis",
      "Cross-functional alignment",
    ],
  },
  {
    number: "02",
    category: "Subscription & LTV",
    title: "Connecting subscription behaviour to lifetime value",
    businessProblem:
      "Subscription, product behaviour, purchase records and acquisition data were split across systems, limiting the team's view of durable value across five applications.",
    analyticalQuestion:
      "Which plans, channels and user segments converted from trial, renewed and generated lifetime value with an acceptable CAC payback period?",
    responsibility:
      "I built a unified subscription analytics layer, developed cohort-based analyses and automated recurring reporting for product and commercial decisions.",
    approach: [
      "Integrated RevenueCat subscription data with Firebase events, Redshift purchase records and acquisition sources.",
      "Analysed trial-to-paid conversion, renewal, churn, LTV and CAC payback by plan, channel and segment.",
      "Automated recurring views so teams could review subscription quality consistently across five applications.",
    ],
    action:
      "The resulting evidence informed paywall, retention and channel-investment decisions while keeping acquisition cost connected to downstream customer value.",
    evaluation:
      "The wider programme contributed to a 9% increase in subscription revenue. This is presented as a cross-functional outcome supported by the analysis, not as an effect caused by reporting alone.",
    learning:
      "Subscription growth should be evaluated through conversion, renewal and payback together; a cheaper trial or registration does not necessarily create better customer value.",
    metrics: [
      { value: "+9%", label: "subscription revenue" },
      { value: "5", label: "applications unified" },
    ],
    capabilities: [
      "Subscription analytics",
      "Cohort analysis",
      "LTV & CAC payback",
      "Data integration",
    ],
  },
  {
    number: "03",
    category: "Experimentation",
    title: "Building experimentation into product decisions",
    businessProblem:
      "Approved product requirements needed consistent evaluation plans so teams could distinguish feature impact from channel, segment, platform and timing effects.",
    analyticalQuestion:
      "What incremental change should each feature create, how should that change be measured and which quality signals should determine whether to ship or iterate?",
    responsibility:
      "I developed experiment and evaluation specifications for more than 30 approved PRDs, then designed and analysed A/B tests and causal-inference-informed evaluations.",
    approach: [
      "Defined the hypothesis, exposure event, primary outcome, diagnostic measures and product-quality guardrails before reviewing results.",
      "Compared treatment and control outcomes across acquisition channel, user segment, platform and observation window.",
      "Used causal-inference principles to estimate incremental feature impact while making limitations visible to stakeholders.",
    ],
    action:
      "Product and cross-functional partners received a consistent evidence base for roadmap recommendations and ship-or-iterate decisions.",
    evaluation:
      "More than 30 approved PRDs received structured evaluation specifications. No unsupported treatment effect, sample size or significance result is claimed.",
    learning:
      "Experiment quality improves when success, diagnostic signals and product guardrails are defined before exposure, rather than selected after the result is visible.",
    metrics: [{ value: "30+", label: "approved PRDs evaluated" }],
    capabilities: [
      "Experiment specifications",
      "A/B testing",
      "Causal evaluation",
      "Product-quality guardrails",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Senior Product Analyst",
    company: "Frog Social / Novum Studio",
    location: "London, UK",
    period: "Jan 2026 — Present",
    summary:
      "Lead analytics for AI products across acquisition, activation, AI interaction quality, engagement and retention for a consumer mobile app portfolio with 6M+ downloads.",
    highlights: [
      "Own measurement strategy and partner with Product, Engineering, Machine Learning, UI/UX and Growth to turn behavioural evidence into roadmap recommendations.",
      "Combined research, market evidence, acquisition data and early signals to inform launch priorities that supported a team outcome of 30K+ users in five weeks.",
      "Built subscription and LTV analysis across five applications, contributing to a 9% increase in subscription revenue.",
      "Developed experiment and evaluation specifications for 30+ approved PRDs to support ship-or-iterate decisions.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Frog Social / Novum Studio",
    location: "London, UK",
    period: "Jul 2024 — Jan 2026",
    summary:
      "Turned product, marketing and event data into KPI frameworks, behavioural analysis and reliable self-serve reporting.",
    highlights: [
      "Defined product KPIs and worked with Kochava to improve iOS marketing measurement across social platforms.",
      "Segmentation and personalisation work contributed to +12% key-event engagement; Firebase journey tracking supported feature strategies associated with +23% one-month retention.",
      "Automated data from BigQuery, Meta Ads, RevenueCat and Redshift with DolphinScheduler and dbt, delivering a +50% improvement in reporting efficiency while strengthening data checks.",
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
    title: "AI product decisions",
    skills: [
      "AI product measurement",
      "KPI frameworks",
      "Roadmap recommendations",
      "Ship-or-iterate decisions",
      "User behaviour",
      "Cross-functional alignment",
    ],
  },
  {
    title: "Experimentation & causal evaluation",
    skills: [
      "Experiment specifications",
      "A/B testing",
      "Causal inference principles",
      "Hypothesis design",
      "Exposure events",
      "Diagnostic metrics",
      "Product-quality guardrails",
    ],
  },
  {
    title: "Subscription & behavioural analytics",
    skills: [
      "Funnel analysis",
      "Cohort analysis",
      "Trial-to-paid conversion",
      "Renewal & churn",
      "LTV & CAC payback",
      "User segmentation",
      "Marketing attribution",
    ],
  },
  {
    title: "Data foundations & communication",
    skills: [
      "SQL",
      "Python",
      "Firebase",
      "RevenueCat",
      "BigQuery",
      "Redshift",
      "dbt",
      "DolphinScheduler",
      "Tableau",
      "Power BI",
      "Looker",
      "Streamlit",
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
