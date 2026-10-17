export const SITE_CONFIG = {
  name: "Umair Babar",
  title: "Umair Babar | Machine Learning Engineer",
  description:
    "Portfolio of Umair Babar - Machine Learning Engineer focused on machine learning, data cleaning, data science, and Python-based analytics workflows.",
  url: "https://umairbabar.dev",
  email: "babarumair91@gmail.com",
  github: "https://github.com/Umair-Babar-7",
  linkedin: "https://www.linkedin.com/in/umair-babar-6577a53ba/",
  location: "Pakistan",
  resumeUrl: "/resume.pdf",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_ROLES = [
  "Machine Learning Engineer",
  "Data Scientist",
  "Python ML Developer",
  "Data Cleaning Specialist",
] as const;

export const ABOUT_STATS = [
  { label: "ML Projects", value: 20, suffix: "+" },
  { label: "Models Trained", value: 15, suffix: "+" },
  { label: "Python Libraries", value: 18, suffix: "+" },
  { label: "Data Workflows", value: 25, suffix: "+" },
] as const;

export const SKILLS = [
  {
    category: "Machine Learning",
    items: [
      { name: "Scikit-Learn", level: 90, icon: "brain" },
      { name: "ML Algorithms", level: 88, icon: "network" },
      { name: "Model Evaluation", level: 85, icon: "chart" },
      { name: "Feature Engineering", level: 87, icon: "layers" },
    ],
  },
  {
    category: "Python Libraries",
    items: [
      { name: "NumPy", level: 92, icon: "array" },
      { name: "Pandas", level: 90, icon: "table" },
      { name: "Matplotlib", level: 85, icon: "chart-bar" },
      { name: "Seaborn", level: 83, icon: "chart-line" },
    ],
  },
  {
    category: "Data Science",
    items: [
      { name: "Data Cleaning", level: 90, icon: "filter" },
      { name: "Data Analysis", level: 88, icon: "search" },
      { name: "Visualization", level: 86, icon: "eye" },
      { name: "Statistics", level: 82, icon: "sigma" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Jupyter Notebook", level: 92, icon: "book" },
      { name: "Git", level: 85, icon: "git" },
      { name: "GitHub", level: 88, icon: "github" },
      { name: "VS Code", level: 90, icon: "code" },
    ],
  },
] as const;

export const PROJECTS = [
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    description:
      "Regression workflow for real estate pricing with data cleaning, feature engineering, ensemble models, cross-validation, and clear error analysis.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    github: "https://github.com/umairbabar/house-price-prediction",
    demo: "https://house-price-demo.vercel.app",
    featured: true,
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    description:
      "Classification pipeline for identifying at-risk customers using cleaned behavioral data, Random Forest models, imbalance handling, and explainability.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Seaborn"],
    github: "https://github.com/umairbabar/customer-churn",
    demo: "https://churn-demo.vercel.app",
    featured: true,
  },
  {
    id: "sales-data-cleaning-dashboard",
    title: "Sales Data Cleaning Dashboard",
    description:
      "Python and Pandas workflow that cleans messy sales files, detects missing values and outliers, and produces ready-to-analyze summaries.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["Python", "Pandas", "Seaborn", "Jupyter"],
    github: "https://github.com/umairbabar/sales-data-cleaning",
    demo: "https://sales-cleaning-demo.vercel.app",
    featured: true,
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    description:
      "Recommendation engine combining content features and similarity scoring to produce personalized movie suggestions.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-Learn"],
    github: "https://github.com/umairbabar/movie-recommender",
    demo: "https://movies-demo.vercel.app",
    featured: false,
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis",
    description:
      "NLP workflow for product review sentiment using text preprocessing, TF-IDF vectorization, Naive Bayes, and model reporting.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    technologies: ["Python", "NLTK", "Scikit-Learn", "Pandas"],
    github: "https://github.com/umairbabar/sentiment-analysis",
    demo: "https://sentiment-demo.vercel.app",
    featured: false,
  },
] as const;

export const EXPERIENCE = [
  {
    id: "exp-1",
    role: "Machine Learning Engineer",
    company: "Portfolio Projects & Client Work",
    period: "2024 - Present",
    description:
      "Build end-to-end ML workflows covering data cleaning, feature engineering, model training, evaluation, and presentation-ready reports.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Jupyter"],
  },
  {
    id: "exp-2",
    role: "Data Scientist",
    company: "Academic & Independent Projects",
    period: "2023 - 2024",
    description:
      "Analyzed structured datasets, prepared clean notebooks, built predictive models, and visualized findings for decision-making.",
    technologies: ["Python", "Pandas", "Matplotlib", "Jupyter"],
  },
] as const;

export const EDUCATION = [
  {
    id: "edu-1",
    degree: "Bachelor's Degree in Computer Science",
    institution: "University of Engineering & Technology",
    period: "2020 - 2024",
    description:
      "Focus on artificial intelligence, algorithms, data structures, and software engineering fundamentals.",
  },
  {
    id: "edu-2",
    degree: "Machine Learning Specialization",
    institution: "Coursera - Andrew Ng",
    period: "2023",
    description:
      "Supervised learning, neural networks, model evaluation, and practical machine learning workflows.",
  },
  {
    id: "edu-3",
    degree: "Data Science Professional Certificate",
    institution: "IBM on Coursera",
    period: "2022",
    description:
      "Python programming, data analysis, visualization, statistical modeling, and notebook-based reporting.",
  },
] as const;

export const ACHIEVEMENTS = [
  { label: "Projects", value: 20, suffix: "+" },
  { label: "Machine Learning Models", value: 15, suffix: "+" },
  { label: "Python Libraries", value: 18, suffix: "+" },
  { label: "Focus on Clean Data", value: 100, suffix: "%" },
] as const;

export const TECH_STACK = [
  { name: "Python", icon: "python" },
  { name: "Scikit-Learn", icon: "sklearn" },
  { name: "NumPy", icon: "numpy" },
  { name: "Pandas", icon: "pandas" },
  { name: "Matplotlib", icon: "matplotlib" },
  { name: "Seaborn", icon: "seaborn" },
  { name: "Jupyter", icon: "jupyter" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
] as const;

export const SOCIAL_LINKS = [
  { name: "GitHub", href: SITE_CONFIG.github, icon: "github" },
  { name: "LinkedIn", href: SITE_CONFIG.linkedin, icon: "linkedin" },
  { name: "Email", href: `mailto:${SITE_CONFIG.email}`, icon: "mail" },
] as const;
