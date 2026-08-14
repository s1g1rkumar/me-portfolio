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
    linkedin: "https://www.linkedin.com/in/sagar-kumar-rana6664/",
    githubUsername: "s1g1rkumar",
    linkedinUsername: "sagar-kumar-rana6664"
  },
  summary: "Results-driven Senior Full-Stack Developer with 5+ years of experience designing and building scalable enterprise web applications using React.js, TypeScript, Angular, Node.js, Express.js, MongoDB, MySQL, and AWS. Delivered ERP, CRM, education, and business-management platforms — architecting secure RESTful APIs, optimizing performance, and leading feature delivery in Agile teams.",
  stats: {
    experienceYears: "5+",
    enterpriseModules: "15+",
    questCompletion: "100%",
    codeQualityScore: "99.8%"
  }
};

export const SKILLS_DATA: SkillItem[] = [
  // Languages
  { name: "TypeScript", level: 96, xpLabel: "9,600 / 10,000 XP", iconName: "Code2", category: "Languages", rank: "MASTER", description: "Strict typing, generics, interfaces & advanced utility types" },
  { name: "JavaScript (ES6+)", level: 98, xpLabel: "9,800 / 10,000 XP", iconName: "FileCode", category: "Languages", rank: "GRANDMASTER", description: "Async/await, Event Loop, closures, ESNext features" },
  { name: "HTML5 & Semantic Web", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Layout", category: "Languages", rank: "EXPERT", description: "Semantic tags, accessibility (a11y), DOM manipulation" },
  { name: "CSS3 & Modern Styling", level: 94, xpLabel: "9,400 / 10,000 XP", iconName: "Palette", category: "Languages", rank: "EXPERT", description: "Flexbox, Grid, keyframes, custom properties, animations" },

  // Frontend
  { name: "React.js", level: 98, xpLabel: "9,800 / 10,000 XP", iconName: "Atom", category: "Frontend", rank: "GRANDMASTER", description: "Custom hooks, render optimization, reconciliation, Suspense" },
  { name: "Redux Toolkit & Context API", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Layers", category: "Frontend", rank: "EXPERT", description: "Global state management, RTK Query, slice architecture" },
  { name: "Angular", level: 88, xpLabel: "8,800 / 10,000 XP", iconName: "ShieldAlert", category: "Frontend", rank: "ADVANCED", description: "RxJS, Dependency Injection, Services, Modules, Components" },
  { name: "Tailwind CSS & Material UI", level: 96, xpLabel: "9,600 / 10,000 XP", iconName: "Sparkles", category: "Frontend", rank: "MASTER", description: "Component design systems, responsive layouts, theme configuration" },
  { name: "React Hook Form", level: 94, xpLabel: "9,400 / 10,000 XP", iconName: "CheckSquare", category: "Frontend", rank: "EXPERT", description: "Form validation, Zod integration, high performance form inputs" },

  // Backend
  { name: "Node.js & Express.js", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Server", category: "Backend", rank: "EXPERT", description: "RESTful architecture, event-driven I/O, middleware pipelines" },
  { name: "REST API Design & Security", level: 97, xpLabel: "9,700 / 10,000 XP", iconName: "Lock", category: "Backend", rank: "MASTER", description: "Hateoas, rate limiting, CORS, input sanitization, error handling" },
  { name: "JWT Auth & RBAC", level: 96, xpLabel: "9,600 / 10,000 XP", iconName: "Key", category: "Backend", rank: "MASTER", description: "Multi-tenant role-based access control, refresh token flow" },
  { name: "GraphQL & WebSockets", level: 86, xpLabel: "8,600 / 10,000 XP", iconName: "Radio", category: "Backend", rank: "ADVANCED", description: "Real-time socket streams, GraphQL schemas & resolvers" },

  // Databases
  { name: "MySQL & SQL Optimization", level: 94, xpLabel: "9,400 / 10,000 XP", iconName: "Database", category: "Databases", rank: "EXPERT", description: "Complex joins, indexing, query execution plan tuning, ACID" },
  { name: "MongoDB & Mongoose", level: 93, xpLabel: "9,300 / 10,000 XP", iconName: "HardDrive", category: "Databases", rank: "EXPERT", description: "Document modeling, aggregation pipelines, Atlas cluster config" },

  // Cloud & DevOps
  { name: "AWS (EC2, S3)", level: 90, xpLabel: "9,000 / 10,000 XP", iconName: "Cloud", category: "Cloud & DevOps", rank: "EXPERT", description: "EC2 provisioning, S3 bucket security policies, IAM, CloudFront" },
  { name: "Docker & Containerization", level: 88, xpLabel: "8,800 / 10,000 XP", iconName: "Box", category: "Cloud & DevOps", rank: "ADVANCED", description: "Dockerfile optimization, docker-compose, container networking" },
  { name: "GitHub Actions & CI/CD", level: 90, xpLabel: "9,000 / 10,000 XP", iconName: "GitBranch", category: "Cloud & DevOps", rank: "EXPERT", description: "Automated test suites, continuous deployment scripts to AWS" },
  { name: "Nginx & PM2", level: 89, xpLabel: "8,900 / 10,000 XP", iconName: "Cpu", category: "Cloud & DevOps", rank: "ADVANCED", description: "Reverse proxy, SSL setup, process management, zero-downtime reloads" },

  // Tools
  { name: "Git & GitHub Workflow", level: 96, xpLabel: "9,600 / 10,000 XP", iconName: "GitPullRequest", category: "Tools", rank: "MASTER", description: "Rebase, interactive cherry-pick, PR reviews, Gitflow" },
  { name: "Postman & API Testing", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Terminal", category: "Tools", rank: "EXPERT", description: "Automated test collections, environment variables, mock servers" },
  { name: "Jira & Agile Methodology", level: 92, xpLabel: "9,200 / 10,000 XP", iconName: "Trello", category: "Tools", rank: "EXPERT", description: "Sprint planning, story estimation, backlog refinement" },
  { name: "Figma to Code", level: 90, xpLabel: "9,000 / 10,000 XP", iconName: "Figma", category: "Tools", rank: "EXPERT", description: "Pixel-perfect UI translation, design token extract, asset optimization" }
];

export const QUESTS_EXPERIENCE: ExperienceQuest[] = [
  {
    id: "quest-lvl-4",
    level: 4,
    title: "Senior Frontend Developer",
    company: "Clapcle Infotech Pvt. Ltd.",
    location: "Onsite",
    workType: "Onsite",
    period: "Dec 2025 – Present",
    status: "IN PROGRESS",
    summary: "Architecting and scaling complex Enterprise ERP modules for multi-tenant organizations.",
    achievements: [
      "Engineered full-suite Enterprise ERP modules spanning Sales, Inventory, Purchase, Quotation, Invoicing, HR, Attendance, and Executive Analytics.",
      "Designed and published a centralized shared reusable UI component library used across 4 internal engineering teams, enforcing design consistency.",
      "Achieved 45% reduction in initial bundle size and application load time using React.memo, intelligent code splitting, lazy loading, and memoized selectors.",
      "Implemented enterprise JWT + Role-Based Access Control (RBAC) enabling multi-tenant authorization workflows across diverse user ranks."
    ],
    techStack: ["React.js", "TypeScript", "Redux Toolkit", "Material UI", "React Hook Form", "REST APIs", "MySQL", "Git"],
    rarity: "MYTHIC"
  },
  {
    id: "quest-lvl-3",
    level: 3,
    title: "Senior Software Developer",
    company: "Renew J Software Solution Pvt. Ltd.",
    location: "Remote",
    workType: "Remote",
    period: "Sept 2024 – Dec 2025",
    status: "COMPLETED",
    summary: "Led end-to-end development and AWS cloud deployment of an automated EMI Management System.",
    achievements: [
      "Built the EMI Management System end-to-end utilizing React, TypeScript, Node.js, and MySQL for automated loan repayment calculations and schedule tracking.",
      "Orchestrated cloud deployment on AWS EC2 instances with S3 bucket integrations for automated document generation and storage.",
      "Constructed automated CI/CD deployment pipelines using GitHub Actions and Docker, reducing release deployment time by 60%.",
      "Optimized complex SQL relational queries and database indexes, boosting transactional response times by 3.5x under heavy loads."
    ],
    techStack: ["React.js", "TypeScript", "Node.js", "MySQL", "AWS (EC2, S3)", "Docker", "GitHub Actions"],
    rarity: "LEGENDARY"
  },
  {
    id: "quest-lvl-2",
    level: 2,
    title: "Senior Software Developer",
    company: "Invictus DigiSoft Pvt. Ltd.",
    location: "Onsite",
    workType: "Onsite",
    period: "July 2021 – Sept 2024",
    status: "COMPLETED",
    summary: "Spearheaded full-stack solution delivery across MEAN/MERN stacks for printing, education, and financial domains.",
    achievements: [
      "Delivered SP Media ERP — a comprehensive printing-press management system handling quotation estimation, live printing job status, and invoicing.",
      "Developed Easy Tutor — a complete institute management platform featuring real-time attendance, batch schedules, and role-based admin controls.",
      "Engineered Rajendra Suryawanshi Learning Platform — a stock-market course-selling platform with dynamic API integration, payment processing, and optimized video playback.",
      "Architected secure RESTful APIs with Node.js/Express, MongoDB, and MySQL with 99.9% uptime."
    ],
    techStack: ["React.js", "Angular", "Node.js", "Express.js", "MongoDB", "MySQL", "AWS", "Git/GitHub"],
    rarity: "EPIC"
  }
];

export const ACHIEVEMENTS_PROJECTS: ProjectAchievement[] = [
  {
    id: "project-1",
    title: "Enterprise ERP System",
    subtitle: "Multi-tenant Sales, Inventory & HR Ecosystem",
    category: "Enterprise Software",
    description: "Full-scale enterprise application featuring sales, inventory, purchase, quotation, invoice, HR, attendance, and executive analytics modules with secure JWT auth & RBAC.",
    fullDetails: "Architected for high-scale enterprise operations. Features granular multi-tenant access control, real-time stock inventory tracking, automated GST invoice generation, employee attendance logs, and interactive financial dashboard graphs.",
    imagePlaceholder: "/screenshots5/erp-system.png",
    techStack: ["React.js", "TypeScript", "Redux Toolkit", "Material UI", "REST API", "MySQL"],
    rarity: "MYTHIC",
    unlockedDate: "2026",
    features: [
      "Granular Role-Based Access Control (RBAC)",
      "Real-time Inventory & Stock Reorder Alerts",
      "Automated Quotation to Invoice Conversion",
      "Executive Financial Analytics & Exportable Reports",
      "Performance-optimized with 60FPS UI Rendering"
    ]
  },
  {
    id: "project-2",
    title: "SP Media ERP",
    subtitle: "Printing-Press Operations & Document Storage Platform",
    category: "Industrial ERP",
    description: "Specialized printing-press management platform covering quotation estimation, purchase order tracking, inventory management, and AWS S3 document vaulting.",
    fullDetails: "Custom engineered software for industrial printing operations. Streamlines raw material paper/ink tracking, job card generation, client quotation calculators, and automated PDF invoice uploading to cloud storage.",
    imagePlaceholder: "/screenshots/sp-media-erp.png",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "AWS S3", "Tailwind CSS"],
    rarity: "LEGENDARY",
    unlockedDate: "2024",
    features: [
      "Dynamic Printing Quotation Engine",
      "Live Order Status & Stage Tracking",
      "AWS S3 Cloud Document Management",
      "Integrated Billing & Ledger Accounting"
    ]
  },
  {
    id: "project-3",
    title: "Easy Tutor Platform",
    subtitle: "Institute & Academy Management System",
    category: "EdTech Platform",
    description: "Comprehensive institute management system featuring role-based admin dashboard, batch scheduling, student performance tracking, and thoroughly tested REST APIs.",
    fullDetails: "Built to streamline academy workflows. Enables directors, teachers, and students to coordinate schedules, manage fee payments, monitor course completion rates, and access automated progress reports.",
    imagePlaceholder: "/screenshots/easy-tutor.png",
    techStack: ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL", "REST APIs"],
    rarity: "EPIC",
    unlockedDate: "2023",
    features: [
      "Role-Based Dashboards for Admin, Tutor & Student",
      "Automated Batch Scheduling & Calendar Sync",
      "Fee Payment Status & Receipt Generation",
      "Fully Documented & Tested REST API Endpoints"
    ]
  },
  {
    id: "project-4",
    title: "Rajendra Suryawanshi Learning Platform",
    subtitle: "Stock Market Course E-Commerce & Academy",
    category: "E-Commerce / EdTech",
    description: "Stock-market trading education platform with dynamic API integration, seamless payment flow, course progress tracking, and optimized video playback rendering.",
    fullDetails: "A high-conversion course sales platform designed for stock market enthusiasts. Delivers interactive course curricula, instant enrollment verification, payment gateway webhooks, and zero-buffering video lecture playback.",
    imagePlaceholder: "/screenshots/learning-platform.png",
    techStack: ["React.js", "JavaScript (ES6+)", "Node.js", "CSS3", "REST Integration"],
    rarity: "EPIC",
    unlockedDate: "2022",
    features: [
      "Dynamic Stock Market Course Catalog",
      "Instant Checkout & Payment Webhook Handler",
      "Interactive Progress Bar & Certificate Unlock",
      "Fast DOM Rendering & Mobile-Optimized Layout"
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Master of Computer Applications (M.C.A.)",
    institution: "Jharkhand Rai University, Ranchi",
    location: "Ranchi, Jharkhand",
    period: "2019 – 2021",
    score: "CGPA 8.25 / 10",
    description: "Specialized in Advanced Web Technologies, Database Systems, Software Architecture, and Distributed Systems.",
    icon: "GraduationCap"
  },
  {
    degree: "Bachelor of Computer Applications (B.C.A.)",
    institution: "Makhanlal Chaturvedi National University, Bhopal",
    location: "Bhopal, M.P.",
    period: "2015 – 2018",
    score: "64.42%",
    description: "Core foundation in Computer Science, Object-Oriented Programming, Data Structures, and Relational Databases.",
    icon: "BookOpen"
  },
  {
    degree: "Intermediate (Science - PCM)",
    institution: "Inter Science College, Hazaribagh",
    location: "Hazaribagh, Jharkhand",
    period: "2012 – 2014",
    score: "67.80%",
    description: "Higher secondary education focusing on Physics, Chemistry, and Mathematics.",
    icon: "Award"
  }
];

export const CHARACTER_ATTRIBUTES: CharacterAttribute[] = [
  { name: "Frontend Architecture", score: 98, trait: "React, TypeScript, Redux, Performance", icon: "Layout" },
  { name: "Backend & REST Security", score: 96, trait: "Node.js, Express, JWT, RBAC", icon: "Server" },
  { name: "Database Query Tuning", score: 95, trait: "MySQL, Indexing, MongoDB Pipelines", icon: "Database" },
  { name: "Cloud & CI/CD Automation", score: 92, trait: "AWS EC2/S3, Docker, GitHub Actions", icon: "Cloud" },
  { name: "Agile Leadership", score: 95, trait: "Feature Delivery, Code Review, Mentorship", icon: "Users" }
];
