import type { SkillItem, ExperienceQuest, ProjectAchievement, EducationItem, CharacterAttribute } from '../types';

export const PERSONAL_INFO = {
  name: "Sagar Kumar Rana",
  title: "Senior Full-Stack Developer",
  classTitle: "LVL 99 SENIOR FULL-STACK ARCHITECT",
  taglineSub: "React.js · TypeScript · Node.js · Angular · AWS",
  contact: {
    email: "sagar.rana.dev@gmail.com",
    phone: "+91 9110956664",
    github: "https://github.com/s1g1rkumar",
    linkedin: "https://linkedin.com/in/sagar-kumar-rana6664",
    githubUsername: "s1g1rkumar",
    linkedinUsername: "sagar-kumar-rana6664"
  },
  summary: "Senior Full-Stack Developer with 4+ years delivering scalable enterprise web applications using React.js, TypeScript, Angular, Node.js, Express.js, MongoDB, MySQL, and AWS. Shipped ERP, CRM, education, and business-management platforms serving 50,000+ users across 11+ client organizations, architecting secure RESTful APIs and cutting dashboard load times by up to 15%.",
  stats: {
    experienceYears: "4+ YRS",
    usersServed: "50,000+",
    clientOrgs: "11+ ORGS",
    liveDemos: "3 LIVE",
    codeQualityScore: "99.8%"
  }
};

export const SKILLS_DATA: SkillItem[] = [
  // Languages
  { name: "JavaScript (ES6+)", level: 98, xpLabel: "9,800 / 10,000 XP", iconName: "FileCode", category: "Languages", rank: "GRANDMASTER", description: "Async/await, Event Loop, closures, ESNext features & DOM manipulation" },
  { name: "TypeScript", level: 96, xpLabel: "9,600 / 10,000 XP", iconName: "Code2", category: "Languages", rank: "MASTER", description: "Strict typing, generics, interfaces & advanced utility types" },
  { name: "HTML5", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Layout", category: "Languages", rank: "EXPERT", description: "Semantic HTML5 structure, accessibility (a11y), DOM hierarchy" },
  { name: "CSS3 & Custom CSS", level: 94, xpLabel: "9,400 / 10,000 XP", iconName: "Palette", category: "Languages", rank: "EXPERT", description: "Flexbox, Grid, CSS animations, keyframes, custom properties & modular CSS" },

  // Frontend
  { name: "React.js & Hooks", level: 98, xpLabel: "9,800 / 10,000 XP", iconName: "Atom", category: "Frontend", rank: "GRANDMASTER", description: "Custom hooks, render optimization, reconciliation, lazy loading & React.memo" },
  { name: "Redux Toolkit & Context API", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Layers", category: "Frontend", rank: "EXPERT", description: "Global state management, RTK Query, slice architecture & state flows" },
  { name: "Angular", level: 88, xpLabel: "8,800 / 10,000 XP", iconName: "ShieldAlert", category: "Frontend", rank: "ADVANCED", description: "RxJS, Dependency Injection, Services, Modules, Components (MEAN stack)" },
  { name: "React Hook Form", level: 94, xpLabel: "9,400 / 10,000 XP", iconName: "CheckSquare", category: "Frontend", rank: "EXPERT", description: "High-performance form validation, schema integration & custom controls" },
  { name: "Material UI & Bootstrap", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Sparkles", category: "Frontend", rank: "EXPERT", description: "Enterprise UI component libraries, custom theme overrides & responsive grids" },
  { name: "Tailwind CSS & Responsive Design", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Sparkles", category: "Frontend", rank: "EXPERT", description: "Utility-first responsive layouts, modern design tokens & dark mode styling" },

  // Backend
  { name: "Node.js & Express.js", level: 96, xpLabel: "9,600 / 10,000 XP", iconName: "Server", category: "Backend", rank: "MASTER", description: "RESTful architecture, event-driven I/O, middleware pipelines & microservices" },
  { name: "REST API Design", level: 97, xpLabel: "9,700 / 10,000 XP", iconName: "Lock", category: "Backend", rank: "MASTER", description: "30+ scalable RESTful APIs across ERP modules, rate limiting & error handling" },
  { name: "JWT Auth & RBAC", level: 96, xpLabel: "9,600 / 10,000 XP", iconName: "Key", category: "Backend", rank: "MASTER", description: "Multi-tenant role-based access control, token refresh & session security" },
  { name: "Passport.js & Auth Security", level: 90, xpLabel: "9,000 / 10,000 XP", iconName: "Shield", category: "Backend", rank: "EXPERT", description: "Authentication strategies, password hashing & secure session tokens" },
  { name: "GraphQL & WebSockets", level: 86, xpLabel: "8,600 / 10,000 XP", iconName: "Radio", category: "Backend", rank: "ADVANCED", description: "Real-time socket streams, GraphQL schemas & query resolvers" },

  // Databases
  { name: "MongoDB (Mongoose, Atlas)", level: 93, xpLabel: "9,300 / 10,000 XP", iconName: "HardDrive", category: "Databases", rank: "EXPERT", description: "Document modeling, aggregation pipelines & Atlas cluster management" },
  { name: "MySQL & Query Optimization", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Database", category: "Databases", rank: "EXPERT", description: "Complex joins, indexing, query execution plan tuning & 20-40% speedup" },

  // Cloud & DevOps
  { name: "AWS (EC2, S3)", level: 92, xpLabel: "9,200 / 10,000 XP", iconName: "Cloud", category: "Cloud & DevOps", rank: "EXPERT", description: "EC2 instance provisioning, S3 bucket storage security policies & IAM" },
  { name: "Docker", level: 90, xpLabel: "9,000 / 10,000 XP", iconName: "Box", category: "Cloud & DevOps", rank: "EXPERT", description: "Dockerfile optimization, docker-compose & containerized AWS deployments" },
  { name: "GitHub Actions & CI/CD", level: 92, xpLabel: "9,200 / 10,000 XP", iconName: "GitBranch", category: "Cloud & DevOps", rank: "EXPERT", description: "Automated pipelines slashing deployment times from hours to 30-60 min" },
  { name: "Nginx & PM2", level: 89, xpLabel: "8,900 / 10,000 XP", iconName: "Cpu", category: "Cloud & DevOps", rank: "ADVANCED", description: "Reverse proxy, SSL setup, process management & zero-downtime reloads" },

  // Tools & Practices
  { name: "Git / GitHub", level: 96, xpLabel: "9,600 / 10,000 XP", iconName: "GitPullRequest", category: "Tools", rank: "MASTER", description: "Rebase, interactive cherry-pick, PR code reviews & Gitflow branching" },
  { name: "Postman", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Terminal", category: "Tools", rank: "EXPERT", description: "Automated REST API test collections, environment variables & testing" },
  { name: "Jira & Agile/Scrum", level: 92, xpLabel: "9,200 / 10,000 XP", iconName: "Trello", category: "Tools", rank: "EXPERT", description: "Sprint planning, 1-2 production releases per sprint & backlog grooming" },
  { name: "Figma", level: 90, xpLabel: "9,000 / 10,000 XP", iconName: "Figma", category: "Tools", rank: "EXPERT", description: "Translating Figma designs into responsive pixel-perfect code" }
];

export const QUESTS_EXPERIENCE: ExperienceQuest[] = [
  {
    id: "quest-lvl-3",
    level: 3,
    title: "Senior Frontend Developer",
    company: "Clapcle Infotech Pvt. Ltd.",
    location: "Onsite",
    workType: "Onsite",
    period: "Dec 2025 – Present",
    status: "IN PROGRESS",
    summary: "Architecting 8 enterprise-scale ERP modules and engineering a shared reusable UI component library for 11+ client organizations.",
    achievements: [
      "Architect 8 enterprise-scale ERP modules (sales, inventory, purchase, quotation, invoicing, HR, attendance, reporting) using React.js, TypeScript, Redux Toolkit, and custom CSS, streamlining core business workflows for enterprise clients.",
      "Engineer a shared library of reusable UI components, shrinking new-module development time by 20–35%.",
      "Boost frontend performance through lazy loading, code splitting, and React.memo, reducing load times on data-heavy dashboards by 10–15%.",
      "Implement JWT-based authentication and role-based access control, securing multi-tenant ERP workflows for 11+ client organizations.",
      "Partner with backend engineers to design and consume 30+ scalable RESTful APIs across modules, containerizing services with Docker for consistent, low-friction deployment across AWS environments.",
      "Drive sprint planning, code reviews, and 1–2 production releases per sprint within an Agile/Scrum team, keeping module rollouts on schedule across concurrent client deployments."
    ],
    techStack: ["React.js", "TypeScript", "Redux Toolkit", "Custom CSS", "REST APIs", "Docker", "AWS", "GitHub Actions", "Git"],
    rarity: "MYTHIC"
  },
  {
    id: "quest-lvl-2",
    level: 2,
    title: "Senior Software Developer",
    company: "Renew J Software Solution Pvt. Ltd.",
    location: "Remote",
    workType: "Remote",
    period: "Sept 2024 – Nov 2025",
    status: "COMPLETED",
    summary: "Created an end-to-end EMI Management System (~99.5% reliability) and automated AWS infrastructure with GitHub Actions & Docker.",
    achievements: [
      "Created an EMI Management System end-to-end using React, TypeScript, Node.js, and MySQL, maintaining ~99.5% platform reliability for real-time loan and payment tracking.",
      "Designed and implemented RESTful APIs on AWS EC2 and S3 infrastructure with ~99.5% uptime.",
      "Crafted responsive, accessible UIs with React Hooks and Redux Toolkit, cutting task completion time on loan and payment workflows by 10–20%.",
      "Set up CI/CD pipelines with GitHub Actions and Docker, slashing deployment time from hours to 30–60 minutes.",
      "Optimized backend business logic and SQL queries, improving response times on core transaction endpoints by 20–40%."
    ],
    techStack: ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL", "AWS (EC2, S3)", "Docker", "GitHub Actions"],
    rarity: "LEGENDARY"
  },
  {
    id: "quest-lvl-1",
    level: 1,
    title: "Software Developer",
    company: "Invictus DigiSoft Pvt. Ltd.",
    location: "Onsite",
    workType: "Onsite",
    period: "Sept 2024 – Nov 2025",
    status: "COMPLETED",
    summary: "Led full-stack delivery on MEAN and MERN stack projects including SP Media ERP, Easy Tutor, and stock market learning platform.",
    achievements: [
      "Led full-stack delivery on 2–3 MEAN and MERN stack projects, backed by secure REST APIs and MySQL, supporting 5,000–10,000 end users.",
      "Delivered the SP Media ERP – a printing-press management system covering quotations, invoicing, sales, purchasing, and inventory – reducing order-processing time by 10–25%.",
      "Launched Easy Tutor, an institute management platform with a role-based admin dashboard and analytics, adopted by 15+ institutes and 1,000+ students.",
      "Developed a stock-market course-selling platform with a responsive UI, improving page render speed by 30–40%.",
      "Integrated AWS S3 for secure document storage; refactored legacy codebases and managed Git/GitHub workflows for smooth, low-friction deployments."
    ],
    techStack: ["React.js", "Angular", "Node.js", "Express.js", "MongoDB", "MySQL", "AWS S3", "Git/GitHub"],
    rarity: "EPIC"
  }
];

export const ACHIEVEMENTS_PROJECTS: ProjectAchievement[] = [
  {
    id: "project-1",
    title: "Enterprise ERP System",
    subtitle: "Multi-tenant Sales, Inventory, HR & Analytics ERP",
    category: "Enterprise Software",
    description: "Enterprise-scale ERP system spanning sales, inventory, purchase, quotation, invoice, HR, attendance, and analytics modules with authentication & RBAC, supporting 50,000+ users across 11+ organizations.",
    fullDetails: "Architected for high-scale enterprise operations using React.js, TypeScript, Redux Toolkit, and Custom CSS. Features granular multi-tenant access control, real-time stock inventory tracking, automated quotation to invoice conversion, employee attendance logs, shared reusable component library (saving 20–35% dev time), and executive analytics dashboards.",
    imagePlaceholder: "/screenshots/erp-system.png",
    techStack: ["React.js", "TypeScript", "Redux Toolkit", "Custom CSS", "REST APIs", "Docker", "AWS"],
    rarity: "MYTHIC",
    unlockedDate: "Dec 2025 – Present",
    demoUrl: "https://erp.clapcle.com/",
    features: [
      "8 Core Modules: Sales, Inventory, Purchase, Quotation, Invoicing, HR, Attendance & Analytics",
      "Granular Multi-Tenant Role-Based Access Control (RBAC) & JWT Auth",
      "Shared Reusable UI Component Library (20–35% faster module dev time)",
      "Performance Optimized Dashboard (10–15% load time reduction via code splitting & React.memo)",
      "30+ Scalable RESTful APIs Containerized with Docker on AWS"
    ]
  },
  {
    id: "project-2",
    title: "SP Media ERP",
    subtitle: "Printing-Press Management & AWS Document Storage Vault",
    category: "Industrial ERP",
    description: "Printing-press ERP covering quotation, invoice, sales, purchase, and inventory, with AWS S3 document storage and 10–25% faster order processing.",
    fullDetails: "Custom-engineered industrial management system built using React.js, Node.js, Express.js, MySQL, and AWS. Streamlines paper/ink inventory tracking, quotation calculations, job card generation, client ledger management, and secure document uploading to AWS S3 buckets.",
    imagePlaceholder: "/screenshots/sp-media-erp.png",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "AWS S3", "Tailwind CSS"],
    rarity: "LEGENDARY",
    unlockedDate: "2024",
    demoUrl: "https://app.spmedia.in/",
    features: [
      "Dynamic Printing Quotation Engine & Automated Invoice Generation",
      "Live Printing Job Cards & Paper/Ink Inventory Stage Tracking",
      "AWS S3 Cloud Document Management & Secure Storage Bucket",
      "10–25% Faster Order Processing Speed for Printing Workflows"
    ]
  },
  {
    id: "project-3",
    title: "Rajendra Suryawanshi Learning Platform",
    subtitle: "Stock Market Course E-Commerce & Academy",
    category: "E-Commerce / EdTech",
    description: "Stock-market course-selling platform with dynamic API integration, achieving 30–45% faster rendering performance.",
    fullDetails: "A high-conversion course platform engineered with React.js, JavaScript (ES6+), HTML5, and CSS3. Features dynamic API integrations for course catalogs, real-time enrollment processing, payment handlers, and responsive video lecture rendering.",
    imagePlaceholder: "/screenshots/learning-platform.png",
    techStack: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "REST Integration"],
    rarity: "EPIC",
    unlockedDate: "2024",
    demoUrl: "https://rajendravsuryawanshi.com/",
    features: [
      "Dynamic Stock Market Course Catalog & Filtering System",
      "Instant Checkout & Payment Gateway API Integration",
      "30–45% Faster Page Rendering Speed via Custom CSS & React Optimization",
      "Mobile-Responsive Lecture Video Streaming Interface"
    ]
  },
  {
    id: "project-4",
    title: "EMI Management System",
    subtitle: "Automated Loan & Payment Tracking Platform",
    category: "FinTech Platform",
    description: "Automated loan repayment EMI management system built end-to-end with React, TypeScript, Node.js, MySQL, Docker, and AWS.",
    fullDetails: "End-to-end FinTech platform for loan EMI calculations and payment tracking, maintaining ~99.5% platform reliability. Built with React Hooks and Redux Toolkit for real-time tracking, optimized SQL transaction endpoints (20–40% response speed boost), and automated CI/CD pipelines via Docker and GitHub Actions (slashing deployment time to 30–60 mins).",
    imagePlaceholder: "/screenshots/erp-system.png",
    techStack: ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL", "AWS (EC2, S3)", "Docker", "GitHub Actions"],
    rarity: "LEGENDARY",
    unlockedDate: "2025",
    features: [
      "Real-Time EMI & Loan Repayment Tracking Engine (~99.5% Platform Uptime)",
      "20–40% Backend Response Speedup via SQL Query Optimization",
      "Automated CI/CD Pipelines with GitHub Actions & Docker (30–60 min deployment)",
      "Cloud Infrastructure Managed on AWS EC2 & S3"
    ]
  },
  {
    id: "project-5",
    title: "Easy Tutor Platform",
    subtitle: "Institute Management & Student Analytics System",
    category: "EdTech Platform",
    description: "Institute management platform with role-based admin dashboard and analytics, adopted by 15+ institutes and 1,000+ students.",
    fullDetails: "Built using React.js, TypeScript, Node.js, Express.js, and MySQL. Streamlines institute operations with role-based dashboards for admins and teachers, batch calendar sync, fee payment tracking, analytics charts, and REST APIs fully tested via Postman.",
    imagePlaceholder: "/screenshots/easy-tutor.png",
    techStack: ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL", "Postman REST APIs"],
    rarity: "EPIC",
    unlockedDate: "2024",
    features: [
      "Role-Based Admin Dashboards Adopted by 15+ Institutes & 1,000+ Students",
      "Automated Batch Scheduling & Student Performance Analytics Charts",
      "Fee Payment Status Tracking & Receipt Generation Module",
      "Fully Documented & Tested REST API Endpoints via Postman"
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Master of Computer Applications (M.C.A.)",
    institution: "Jharkhand Rai University, Ranchi",
    location: "Ranchi, Jharkhand",
    period: "Aug 2019 – Sept 2021",
    score: "CGPA 8.25 / 10",
    description: "Specialized in Advanced Web Technologies, Database Systems, Software Architecture, REST API Design, and Enterprise Distributed Systems.",
    icon: "GraduationCap"
  }
];

export const CHARACTER_ATTRIBUTES: CharacterAttribute[] = [
  { name: "Enterprise Frontend Architecture", score: 98, trait: "React.js, TypeScript, Redux Toolkit, Custom CSS, React.memo & Lazy Loading", icon: "Layout" },
  { name: "Backend & REST Security", score: 96, trait: "Node.js, Express.js, RESTful API Design (30+ endpoints), JWT, RBAC", icon: "Server" },
  { name: "Database & Query Tuning", score: 95, trait: "MySQL Indexing & Joins (20-40% speedup), MongoDB Atlas Aggregations", icon: "Database" },
  { name: "AWS Cloud & DevOps", score: 92, trait: "AWS EC2/S3, Docker Containerization, GitHub Actions CI/CD (30-60 min releases)", icon: "Cloud" },
  { name: "Agile Leadership & Velocity", score: 95, trait: "Sprint Planning, Reusable Component Libraries (20-35% dev time savings)", icon: "Users" }
];
