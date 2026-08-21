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
    linkedin: "https://linkedin.com/in/sagar-kumarrana6664",
    githubUsername: "s1g1rkumar",
    linkedinUsername: "sagar-kumarrana6664"
  },
  summary: "Results-driven Senior Full-Stack Developer with 4+ years of experience designing and building scalable enterprise web applications using React.js, TypeScript, Angular, Node.js, Express.js, MongoDB, MySQL, and AWS. Proven track record delivering ERP, CRM, education, and business-management platforms — architecting secure RESTful APIs, optimizing application performance, and leading feature delivery in fast-paced Agile teams. Skilled at translating complex business requirements into clean, reusable, and maintainable code.",
  stats: {
    experienceYears: "4+ YRS",
    enterpriseModules: "15+",
    liveDemos: "3 LIVE",
    codeQualityScore: "99.8%"
  }
};

export const SKILLS_DATA: SkillItem[] = [
  // Languages
  { name: "JavaScript (ES6+)", level: 98, xpLabel: "9,800 / 10,000 XP", iconName: "FileCode", category: "Languages", rank: "GRANDMASTER", description: "Async/await, Event Loop, closures, ESNext features & DOM manipulation" },
  { name: "TypeScript", level: 96, xpLabel: "9,600 / 10,000 XP", iconName: "Code2", category: "Languages", rank: "MASTER", description: "Strict typing, generics, interfaces & advanced utility types" },
  { name: "HTML5", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Layout", category: "Languages", rank: "EXPERT", description: "Semantic HTML5 structure, accessibility (a11y), DOM hierarchy" },
  { name: "CSS3", level: 94, xpLabel: "9,400 / 10,000 XP", iconName: "Palette", category: "Languages", rank: "EXPERT", description: "Flexbox, Grid, CSS animations, keyframes, custom properties" },

  // Frontend
  { name: "React.js & Hooks", level: 98, xpLabel: "9,800 / 10,000 XP", iconName: "Atom", category: "Frontend", rank: "GRANDMASTER", description: "Custom hooks, render optimization, reconciliation, lazy loading & React.memo" },
  { name: "Redux Toolkit & Context API", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Layers", category: "Frontend", rank: "EXPERT", description: "Global state management, RTK Query, slice architecture" },
  { name: "Angular", level: 88, xpLabel: "8,800 / 10,000 XP", iconName: "ShieldAlert", category: "Frontend", rank: "ADVANCED", description: "RxJS, Dependency Injection, Services, Modules, Components" },
  { name: "React Hook Form", level: 94, xpLabel: "9,400 / 10,000 XP", iconName: "CheckSquare", category: "Frontend", rank: "EXPERT", description: "High-performance form validation, schema integration" },
  { name: "Material UI & Bootstrap", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Sparkles", category: "Frontend", rank: "EXPERT", description: "Component design systems, custom themes, responsive grid" },
  { name: "Tailwind CSS", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Sparkles", category: "Frontend", rank: "EXPERT", description: "Utility-first responsive layouts & modern styling" },

  // Backend
  { name: "Node.js & Express.js", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Server", category: "Backend", rank: "EXPERT", description: "RESTful architecture, event-driven I/O, middleware pipelines" },
  { name: "REST API Design", level: 97, xpLabel: "9,700 / 10,000 XP", iconName: "Lock", category: "Backend", rank: "MASTER", description: "Scalable REST APIs, rate limiting, error handling, input validation" },
  { name: "JWT Auth & RBAC", level: 96, xpLabel: "9,600 / 10,000 XP", iconName: "Key", category: "Backend", rank: "MASTER", description: "Multi-tenant role-based access control, refresh token flow" },
  { name: "Passport.js & Auth", level: 90, xpLabel: "9,000 / 10,000 XP", iconName: "Shield", category: "Backend", rank: "EXPERT", description: "Authentication strategies, session management, secure tokens" },
  { name: "GraphQL & WebSockets", level: 86, xpLabel: "8,600 / 10,000 XP", iconName: "Radio", category: "Backend", rank: "ADVANCED", description: "Real-time socket streams, GraphQL schemas & resolvers" },

  // Databases
  { name: "MongoDB (Mongoose, Atlas)", level: 93, xpLabel: "9,300 / 10,000 XP", iconName: "HardDrive", category: "Databases", rank: "EXPERT", description: "Document modeling, aggregation pipelines, Atlas cluster management" },
  { name: "MySQL & Query Optimization", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Database", category: "Databases", rank: "EXPERT", description: "Complex joins, indexing, query execution plan tuning, ACID compliance" },

  // Cloud & DevOps
  { name: "AWS (EC2, S3)", level: 92, xpLabel: "9,200 / 10,000 XP", iconName: "Cloud", category: "Cloud & DevOps", rank: "EXPERT", description: "EC2 instance provisioning, S3 bucket storage security policies, IAM" },
  { name: "Docker", level: 88, xpLabel: "8,800 / 10,000 XP", iconName: "Box", category: "Cloud & DevOps", rank: "ADVANCED", description: "Dockerfile optimization, docker-compose, containerized deployments" },
  { name: "GitHub Actions & CI/CD", level: 90, xpLabel: "9,000 / 10,000 XP", iconName: "GitBranch", category: "Cloud & DevOps", rank: "EXPERT", description: "Automated build & deployment pipelines to AWS cloud" },
  { name: "Nginx & PM2", level: 89, xpLabel: "8,900 / 10,000 XP", iconName: "Cpu", category: "Cloud & DevOps", rank: "ADVANCED", description: "Reverse proxy, SSL setup, process management, zero-downtime reloads" },

  // Tools
  { name: "Git / GitHub", level: 96, xpLabel: "9,600 / 10,000 XP", iconName: "GitPullRequest", category: "Tools", rank: "MASTER", description: "Rebase, interactive cherry-pick, PR reviews, Gitflow branching" },
  { name: "Postman", level: 95, xpLabel: "9,500 / 10,000 XP", iconName: "Terminal", category: "Tools", rank: "EXPERT", description: "Automated test collections, environment variables, API testing" },
  { name: "Jira", level: 92, xpLabel: "9,200 / 10,000 XP", iconName: "Trello", category: "Tools", rank: "EXPERT", description: "Sprint planning, Agile/Scrum stories, backlog refinement" },
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
    summary: "Developing enterprise-scale ERP modules and reusable UI component libraries for multi-tenant enterprise platforms.",
    achievements: [
      "Develop enterprise-scale ERP modules (sales, inventory, purchase, quotation, invoicing, HR, attendance, reporting) using React.js, TypeScript, Redux Toolkit, and Material UI.",
      "Build a shared library of reusable UI components, cutting new-module development time across the platform.",
      "Improve frontend performance through lazy loading, code splitting, and React.memo, reducing load times on data-heavy dashboards.",
      "Implement JWT-based authentication and role-based access control to secure multi-tenant ERP workflows.",
      "Partner with backend engineers to design and consume scalable RESTful APIs across modules.",
      "Participate in sprint planning, code reviews, and production releases within an Agile/Scrum team."
    ],
    techStack: ["React.js", "TypeScript", "Redux Toolkit", "Material UI", "React Hook Form", "REST APIs", "MySQL", "Git"],
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
    summary: "Led end-to-end development of an automated EMI Management System and AWS infrastructure deployment.",
    achievements: [
      "Built an EMI Management System end-to-end using React, TypeScript, Node.js, and MySQL.",
      "Designed and implemented RESTful APIs, deploying and managing infrastructure on AWS EC2 and S3.",
      "Built responsive, accessible UIs with React Hooks and Redux Toolkit for real-time loan and payment tracking.",
      "Set up and maintained CI/CD pipelines with GitHub Actions and Docker for automated builds and deployments.",
      "Optimized backend business logic and SQL queries, improving response times on core transaction endpoints."
    ],
    techStack: ["React.js", "TypeScript", "Node.js", "MySQL", "AWS (EC2, S3)", "Docker", "GitHub Actions"],
    rarity: "LEGENDARY"
  },
  {
    id: "quest-lvl-1",
    level: 1,
    title: "Software Developer",
    company: "Invictus DigiSoft Pvt. Ltd.",
    location: "Onsite",
    workType: "Onsite",
    period: "Jan 2022 – Aug 2024",
    status: "COMPLETED",
    summary: "Full-stack delivery across MEAN and MERN stack projects including industrial ERP, EdTech, and financial platforms.",
    achievements: [
      "Led full-stack delivery on MEAN and MERN stack projects, designing scalable apps backed by secure REST APIs and MySQL.",
      "Delivered the SP Media ERP – a complete printing-press management system covering quotations, invoicing, sales, purchasing, and inventory – using React.js, Node.js, Express.js, and AWS.",
      "Built Easy Tutor, an institute management platform (React + TypeScript, Node.js, Express.js, MySQL) with a role-based admin dashboard, analytics charts, and fully tested REST APIs via Postman.",
      "Developed a stock-market course-selling platform (React.js, JavaScript, HTML5, CSS3) with a responsive UI and optimized component rendering.",
      "Integrated AWS S3 for secure document and file storage across client projects.",
      "Refactored legacy codebases for maintainability, collaborated cross-functionally in Agile sprints, and managed source control/CI workflows via Git/GitHub for smooth, low-friction deployments."
    ],
    techStack: ["React.js", "Angular", "Node.js", "Express.js", "MongoDB", "MySQL", "AWS", "Git/GitHub"],
    rarity: "EPIC"
  }
];

export const ACHIEVEMENTS_PROJECTS: ProjectAchievement[] = [
  {
    id: "project-1",
    title: "Enterprise ERP System",
    subtitle: "Multi-tenant Sales, Inventory, HR & Analytics ERP",
    category: "Enterprise Software",
    description: "Enterprise-scale ERP system spanning sales, inventory, purchase, quotation, invoice, HR, attendance, and analytics modules with authentication & RBAC.",
    fullDetails: "Architected for high-scale enterprise operations using React.js, TypeScript, Redux Toolkit, and Material UI. Features granular multi-tenant access control, real-time stock inventory tracking, automated quotation to invoice conversion, employee attendance logs, and executive analytics dashboards.",
    imagePlaceholder: "/screenshots/erp-system.png",
    techStack: ["React.js", "TypeScript", "Redux Toolkit", "Material UI", "React Hook Form", "REST API", "MySQL"],
    rarity: "MYTHIC",
    unlockedDate: "Dec 2025 – Present",
    demoUrl: "https://erp.clapcle.com/",
    features: [
      "Granular Role-Based Access Control (RBAC) & JWT Auth",
      "Sales, Inventory, Purchase, Quotation & Invoicing Modules",
      "Employee HR, Attendance & Executive Analytics Dashboards",
      "Shared Reusable UI Component Library",
      "Performance-Optimized with Lazy Loading & React.memo"
    ]
  },
  {
    id: "project-2",
    title: "SP Media ERP",
    subtitle: "Printing-Press Management & AWS Document Storage Vault",
    category: "Industrial ERP",
    description: "Complete printing-press ERP covering quotations, invoicing, sales, purchasing, inventory, and AWS S3 document vaulting.",
    fullDetails: "Custom-engineered industrial management system built using React.js, Node.js, Express.js, MySQL, and AWS. Streamlines paper/ink inventory tracking, quotation calculations, job card generation, client ledger management, and secure document uploading to AWS S3 buckets.",
    imagePlaceholder: "/screenshots/sp-media-erp.png",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "AWS S3", "Tailwind CSS"],
    rarity: "LEGENDARY",
    unlockedDate: "2024",
    demoUrl: "https://app.spmedia.in/",
    features: [
      "Dynamic Printing Quotation Engine",
      "Live Job Cards & Stage Tracking",
      "AWS S3 Cloud Document Management & Storage",
      "Integrated Billing, Invoicing & Ledger Accounting"
    ]
  },
  {
    id: "project-3",
    title: "Rajendra Suryawanshi Learning Platform",
    subtitle: "Stock Market Course E-Commerce & Academy",
    category: "E-Commerce / EdTech",
    description: "Stock-market course-selling platform with dynamic API integration, seamless checkout flow, and optimized component rendering performance.",
    fullDetails: "A high-conversion course platform engineered with React.js, JavaScript (ES6+), HTML5, and CSS3. Features dynamic API integrations for course catalogs, real-time enrollment processing, payment handlers, and responsive video lecture rendering.",
    imagePlaceholder: "/screenshots/learning-platform.png",
    techStack: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "REST Integration"],
    rarity: "EPIC",
    unlockedDate: "2023",
    demoUrl: "https://rajendravsuryawanshi.com/",
    features: [
      "Dynamic Stock Market Course Catalog & Filtering",
      "Instant Checkout & Payment API Integration",
      "Interactive Progress Tracking & Course Unlock",
      "Fast DOM Rendering & Mobile-Optimized Layout"
    ]
  },
  {
    id: "project-4",
    title: "Easy Tutor Platform",
    subtitle: "Institute Management & Student Analytics System",
    category: "EdTech Platform",
    description: "Institute management platform with role-based admin dashboard, batch scheduling, analytics charts, and fully tested REST APIs via Postman.",
    fullDetails: "Built using React.js, TypeScript, Node.js, Express.js, and MySQL. Streamlines institute operations with role-based dashboards for admins and teachers, batch calendar sync, fee payment tracking, analytics charts, and REST APIs tested via Postman.",
    imagePlaceholder: "/screenshots/easy-tutor.png",
    techStack: ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL", "Postman REST APIs"],
    rarity: "EPIC",
    unlockedDate: "2023",
    features: [
      "Role-Based Dashboards for Admin, Tutors & Students",
      "Automated Batch Scheduling & Analytics Charts",
      "Fee Payment Status & Receipt Generation",
      "Fully Documented & Tested REST API Endpoints"
    ]
  },
  {
    id: "project-5",
    title: "EMI Management System",
    subtitle: "Automated Loan & Payment Tracking Platform",
    category: "FinTech Platform",
    description: "Automated loan repayment EMI management system built end-to-end with React, TypeScript, Node.js, MySQL, Docker, and AWS.",
    fullDetails: "End-to-end FinTech platform for loan EMI calculations and payment tracking. Built with React Hooks and Redux Toolkit for real-time tracking, optimized SQL transaction endpoints (3.5x response speed boost), and automated CI/CD pipelines via Docker and GitHub Actions to AWS EC2 and S3.",
    imagePlaceholder: "/screenshots/erp-system.png",
    techStack: ["React.js", "TypeScript", "Node.js", "MySQL", "AWS (EC2, S3)", "Docker", "GitHub Actions"],
    rarity: "LEGENDARY",
    unlockedDate: "2025",
    features: [
      "Real-time EMI & Loan Repayment Tracking Engine",
      "3.5x Backend Response Speedup via SQL Query Optimization",
      "Automated CI/CD Pipelines with GitHub Actions & Docker",
      "Cloud Infrastructure Managed on AWS EC2 & S3"
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
    description: "Specialized in Advanced Web Technologies, Database Systems, Software Architecture, and Distributed Enterprise Systems.",
    icon: "GraduationCap"
  },
  {
    degree: "Bachelor of Computer Applications (B.C.A.)",
    institution: "Makhanlal Chaturvedi National University, Bhopal",
    location: "Bhopal, M.P.",
    period: "Aug 2015 – Sept 2018",
    score: "64.42%",
    description: "Core foundation in Computer Science, Object-Oriented Programming, Data Structures, Algorithms, and Relational Databases.",
    icon: "BookOpen"
  },
  {
    degree: "Intermediate (Science - PCM)",
    institution: "Inter Science College, Hazaribagh",
    location: "Hazaribagh, Jharkhand",
    period: "July 2012 – July 2014",
    score: "67.80%",
    description: "Higher secondary education focusing on Physics, Chemistry, and Mathematics.",
    icon: "Award"
  }
];

export const CHARACTER_ATTRIBUTES: CharacterAttribute[] = [
  { name: "Frontend Architecture", score: 98, trait: "React.js, TypeScript, Redux, Material UI, Performance", icon: "Layout" },
  { name: "Backend & REST Security", score: 96, trait: "Node.js, Express.js, REST APIs, JWT, RBAC", icon: "Server" },
  { name: "Database Query Tuning", score: 95, trait: "MySQL Optimization, MongoDB Aggregations", icon: "Database" },
  { name: "Cloud & CI/CD Automation", score: 92, trait: "AWS EC2/S3, Docker, GitHub Actions, Nginx", icon: "Cloud" },
  { name: "Agile Team Leadership", score: 95, trait: "Sprint Planning, Code Review, Reusable Component Libraries", icon: "Users" }
];
