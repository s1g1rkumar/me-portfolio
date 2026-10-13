<div align="center">

# ⚡ SAGAR KUMAR RANA — PORTFOLIO & RECRUITER OS
### 🎮 Level 99 Senior Full-Stack Architect · Cyberpunk RPG Web Experience

[![React 19](https://img.shields.io/badge/React-19.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Multi--Stage-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<p align="center">
  <b>An interactive, game-inspired developer portfolio and in-browser Recruiter CLI built for showcasing enterprise web architectures, full-stack achievements, and real-world production platforms.</b>
</p>

[🌐 Live Demos](#-featured-achievements--projects) • [⌨️ Recruiter OS CLI](#-interactive-recruiter-os-terminal) • [🚀 Quick Start](#-getting-started) • [🐳 Docker & CI/CD](#-docker--containerization) • [📬 Contact](#-connect--hire)

---

</div>

## 📖 Table of Contents

- [✨ Overview](#-overview)
- [⚡ Key Features](#-key-features)
- [🛠️ Tech Stack & Architecture](#️-tech-stack--architecture)
- [⌨️ Interactive Recruiter OS Terminal](#-interactive-recruiter-os-terminal)
- [🏆 Featured Achievements & Projects](#-featured-achievements--projects)
- [📜 Career Quest Log](#-career-quest-log)
- [🌲 Skill Tree & Mastery System](#-skill-tree--mastery-system)
- [📂 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🐳 Docker & Containerization](#-docker--containerization)
- [🔄 CI/CD & Deployment Pipeline](#-cicd--deployment-pipeline)
- [👤 Developer Dossier](#-developer-dossier)
- [📄 License](#-license)

---

## ✨ Overview

This project is the personal portfolio and interactive showcase for **Sagar Kumar Rana**, a **Senior Full-Stack Developer** with **4+ years of industry experience** architecting enterprise ERPs, CRMs, FinTech payment solutions, and scalable RESTful APIs.

Moving away from standard static templates, this application blends **cyberpunk sci-fi game aesthetics** with **engineering precision**:
- **Gamified Progression**: Experience career milestones as high-stakes Quests, skills as an interactive Skill Tree with XP counters, and enterprise projects as Legendary Achievements.
- **Embedded Recruiter OS Terminal**: An in-browser command-line interface accessible via keyboard shortcut (`~` or `Ctrl+K`) allowing engineering recruiters and tech leads to query skills, inspect project architecture, and retrieve contact details directly from terminal commands.
- **Production-Grade Infrastructure**: Packaged using a multi-stage Docker build served through high-performance Nginx, automated with GitHub Actions CI/CD for continuous testing and automated deployment.

---

## ⚡ Key Features

| Feature | Description |
| :--- | :--- |
| **🎮 Cyberpunk RPG Theme** | Sci-Fi CRT scanline overlays, neon glassmorphism cards, glowing HUD indicators, and celebratory confetti effects. |
| **⌨️ Recruiter OS CLI** | Fully functional in-browser terminal modal with command history, autocomplete hints, and interactive commands (`help`, `skills`, `projects`, `contact`, `resume`, `clear`). |
| **🌲 Interactive Skill Tree** | Filterable skill categories (Languages, Frontend, Backend, Databases, Cloud/DevOps, Tools) featuring XP meters and Mastery Ranks (*Grandmaster*, *Master*, *Expert*). |
| **📜 Quest Log (Experience)** | Interactive career timeline detailing technical impact, architecture decisions, and metrics across previous and current software engineering roles. |
| **🏆 Project Achievements Modal** | Deep-dive modal views into enterprise platforms with architectural overviews, live demo URLs, screenshots, and tech tags. |
| **📄 In-Browser Resume Modal** | Interactive PDF viewer and one-click downloader for Sagar Kumar Rana's full resume. |
| **📬 Encrypted Contact Transceiver** | Validated contact form paired with direct links to LinkedIn, GitHub, email, and phone. |
| **📱 Mobile Responsive & Accessible** | Fluid responsive layouts optimized for ultra-wide monitors, laptops, tablets, and mobile devices. |

---

## 🛠️ Tech Stack & Architecture

### **Core Frontend**
- **Framework**: [React 19](https://react.dev/) (`19.2.8`)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (`~6.0.2`) with strict type-safety
- **Build Tool**: [Vite 8](https://vitejs.dev/) (`8.2.0`) for sub-millisecond Hot Module Replacement (HMR)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (`v3.4`) & Custom CSS Modules with glassmorphism and scanline shaders
- **Animation**: [Framer Motion](https://www.framer.com/motion/) (`13.1`) for fluid UI transitions and interactive micro-animations
- **Icons**: [Lucide React](https://lucide.dev/) (`1.31`)
- **Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) for milestone achievements

### **DevOps & Production Infrastructure**
- **Containerization**: [Docker](https://www.docker.com/) with multi-stage build (`Node.js 20 Alpine` ➔ `Nginx Alpine`)
- **Web Server & Reverse Proxy**: [Nginx](https://nginx.org/) with gzip compression and caching headers
- **Orchestration**: `docker-compose` for local and production container management
- **CI/CD Automation**: [GitHub Actions](https://github.com/features/actions) for continuous testing, Docker Hub image pushes, and SSH zero-downtime deployment
- **Code Quality**: [Oxlint](https://oxc.rs/) for high-speed JavaScript/TypeScript linting

---

## ⌨️ Interactive Recruiter OS Terminal

Press <kbd>~</kbd> or <kbd>Ctrl</kbd> + <kbd>K</kbd> anywhere in the application to launch the **Recruiter OS Terminal**.

```text
================================================================================
  ██████╗ ███████╗ ██████╗██████╗ ██╗   ██╗██╗████████╗███████╗██████╗      ██████╗ ███████╗
  ██╔══██╗██╔════╝██╔════╝██╔══██╗██║   ██║██║╚══██╔══╝██╔════╝██╔══██╗    ██╔═══██╗██╔════╝
  ██████╔╝█████╗  ██║     ██████╔╝██║   ██║██║   ██║   █████╗  ██████╔╝    ██║   ██║███████╗
  ██╔══██╗██╔══╝  ██║     ██╔══██╗██║   ██║██║   ██║   ██╔══╝  ██╔══██╗    ██║   ██║╚════██║
  ██║  ██║███████╗╚██████╗██║  ██║╚██████╔╝██║   ██║   ███████╗██║  ██║    ╚██████╔╝███████║
================================================================================
  Recruiter OS [Version 4.2.0-LTS] — Initialized for SAGAR KUMAR RANA
  Type "help" to display available commands.
```

### Supported Commands

| Command | Action / Description |
| :--- | :--- |
| `help` | Lists all available terminal commands and shortcuts |
| `skills` / `skills [category]` | Dumps full skill matrix or filters by category (`languages`, `frontend`, `backend`, `cloud`) |
| `projects` | Outputs portfolio project titles, descriptions, and direct URLs |
| `experience` / `quests` | Prints career history, companies, and roles |
| `stats` | Displays character attributes, total users served, and code quality score |
| `contact` | Prints direct email, phone, GitHub, and LinkedIn handles |
| `resume` | Opens the resume modal viewer and generates download links |
| `hire` | Quick prompt to schedule an interview or send an offer |
| `whoami` | Displays recruiter authorization level |
| `clear` | Clears terminal history |

---

## 🏆 Featured Achievements & Projects

| Project | Domain | Key Technologies | Live Preview |
| :--- | :--- | :--- | :---: |
| **Enterprise ERP System** | Enterprise Management | React.js, TypeScript, Redux Toolkit, Custom CSS, Docker, AWS | [🔗 Live Demo](https://erp.clapcle.com/) |
| **SP Media ERP** | Industrial / Printing ERP | React.js, Node.js, Express.js, MySQL, AWS S3 | [🔗 Live Demo](https://app.spmedia.in/) |
| **Stock Market Learning Platform** | EdTech / E-Commerce | React.js, JavaScript (ES6+), HTML5, CSS3, REST APIs | [🔗 Live Demo](https://rajendravsuryawanshi.com/) |
| **EMI Management System** | FinTech Platform | React.js, TypeScript, Node.js, MySQL, AWS EC2/S3, Docker | `Enterprise` |
| **Easy Tutor Platform** | Institute Management | React.js, TypeScript, Node.js, Express.js, MySQL, Postman | `15+ Institutes` |

---

## 📜 Career Quest Log

### ⚔️ Quest 3: Senior Frontend Developer — Clapcle Infotech Pvt. Ltd.
*Dec 2025 – Present · Onsite*
- Architecting **8 enterprise-scale ERP modules** (sales, inventory, purchase, quotation, invoicing, HR, attendance, reporting) using React.js, TypeScript, Redux Toolkit, and modular CSS.
- Engineered a **shared reusable UI component library**, slashing new-module engineering cycles by **20–35%**.
- Boosted dashboard rendering speeds by **10–15%** leveraging lazy loading, code-splitting, and `React.memo`.
- Designed JWT role-based multi-tenant access control for **11+ client organizations** and 30+ containerized REST endpoints.

### 🛡️ Quest 2: Senior Software Developer — Renew J Software Solution Pvt. Ltd.
*Sept 2024 – Nov 2025 · Remote*
- Developed an end-to-end **EMI Management System** supporting real-time loan tracking with **~99.5% platform reliability**.
- Provisioned scalable REST APIs and AWS cloud infrastructure across **EC2** and **S3**.
- Optimized complex SQL queries and backend business logic, boosting transactional throughput by **20–40%**.
- Established automated CI/CD deployment pipelines using **GitHub Actions & Docker**, reducing deployment turnarounds from hours down to **30–60 minutes**.

### 🏹 Quest 1: Software Developer — Invictus DigiSoft Pvt. Ltd.
*Jan 2022 – Aug 2024 · Onsite*
- Led full-stack delivery on **2–3 MEAN & MERN stack applications** serving 5,000–10,000 end users.
- Delivered **SP Media ERP**, cutting order processing turnaround by **10–25%**.
- Engineered **Easy Tutor**, adopted by **15+ educational institutes** and 1,000+ active students.
- Implemented secure cloud media storage with AWS S3 and maintained Git/GitHub branching best practices.

---

## 🌲 Skill Tree & Mastery System

```text
[LANGUAGES]        JavaScript ES6+ (98 XP)  ·  TypeScript (96 XP)  ·  HTML5 (95 XP)  ·  CSS3 (94 XP)
[FRONTEND]         React.js (98 XP)  ·  Redux Toolkit (95 XP)  ·  Angular (88 XP)  ·  Tailwind CSS (95 XP)
[BACKEND]          Node.js / Express (96 XP)  ·  REST API Design (97 XP)  ·  JWT & RBAC (96 XP)  ·  GraphQL (86 XP)
[DATABASES]        MySQL (95 XP)  ·  MongoDB & Mongoose (93 XP)
[CLOUD & DEVOPS]   AWS EC2 & S3 (92 XP)  ·  Docker (90 XP)  ·  GitHub Actions (92 XP)  ·  Nginx & PM2 (89 XP)
[TOOLS]            Git / GitHub (96 XP)  ·  Postman (95 XP)  ·  Jira / Agile (92 XP)  ·  Figma (90 XP)
```

---

## 📂 Project Structure

```text
profile/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions automated build, test & deploy pipeline
├── public/
│   ├── favicon.svg             # Sci-fi themed favicon
│   ├── icons.svg               # SVG asset bundle
│   └── screenshots/            # Project showcase screenshots
├── src/
│   ├── assets/
│   │   ├── profilepic/         # Developer avatar asset
│   │   └── resume/             # PDF Resume asset
│   ├── components/
│   │   ├── AchievementsSection.tsx   # Project cards & achievement showcases
│   │   ├── CharacterSheetSection.tsx # RPG character sheet, stats & education
│   │   ├── ContactSection.tsx        # Encrypted message transceiver form
│   │   ├── CyberTerminalModal.tsx    # Recruiter OS interactive CLI terminal
│   │   ├── Footer.tsx                # Terminal status & copyright footer
│   │   ├── HeroSection.tsx           # Hero HUD, titles, call-to-actions & audio
│   │   ├── Navbar.tsx                # Futuristic fixed navigation bar
│   │   ├── ProjectModal.tsx          # Deep-dive project modal dialog
│   │   ├── QuestLogSection.tsx       # Interactive career timeline / quest log
│   │   ├── ResumeModal.tsx           # In-browser PDF resume viewer modal
│   │   ├── SkillTreeSection.tsx      # Gamified skill tree with XP meters
│   │   └── Toast.tsx                 # System alert toast notifications
│   ├── data/
│   │   └── portfolioData.ts    # Centralized data store (skills, quests, projects)
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces and custom data types
│   ├── utils/                  # Helper utilities (sound FX, math, formatters)
│   ├── App.tsx                 # Main layout and keyboard shortcut listeners
│   ├── index.css               # Design tokens, custom CRT scanlines & fonts
│   └── main.tsx                # React root mount
├── Dockerfile                  # Multi-stage production container build
├── docker-compose.yml          # Docker Compose service definition
├── nginx.conf                  # Nginx web server configuration & security headers
├── package.json                # Project dependencies and script runner
├── tailwind.config.js          # Tailwind CSS custom themes & color palette
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite bundling plugins & configuration
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version `20.x` or higher recommended)
- [npm](https://www.npmjs.com/) (version `10.x` or higher) or `pnpm` / `yarn`

### 1. Clone the Repository
```bash
git clone https://github.com/s1g1rkumar/me-portfolio.git
cd me-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
The compiled, production-ready static assets will be output to the `dist/` directory.

### 5. Run Linter
```bash
npm run lint
```

---

## 🐳 Docker & Containerization

The project features a **multi-stage Docker build** for optimal image size and security:
1. **Stage 1 (Build)**: `node:20-alpine` builds the TypeScript & React bundle.
2. **Stage 2 (Production Server)**: `nginx:alpine` serves the static assets with optimized caching and gzip compression.

### Run with Docker Compose (Recommended)
```bash
# Build and start container in detached mode on port 80
docker-compose up -d --build

# View real-time container logs
docker-compose logs -f

# Stop and remove container
docker-compose down
```
Access the application at `http://localhost` or `http://localhost:80`.

### Run with Standalone Docker
```bash
# Build the Docker image
docker build -t cyberpunk-portfolio:latest .

# Run container mapping port 80 to host port 80
docker run -d --name cyberpunk_portfolio -p 80:80 cyberpunk-portfolio:latest
```

---

## 🔄 CI/CD & Deployment Pipeline

This repository includes a continuous integration and continuous deployment workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Automated Pipeline Flow:
```mermaid
graph LR
    A[git push to main] --> B[Job 1: Test & Build]
    B --> C[Job 2: Docker Build & Push]
    C --> D[Push to Docker Hub]
    D --> E[Job 3: SSH Deploy to Server]
    E --> F[Pull latest image & restart Nginx container]
```

1. **`test-and-build`**: Validates dependencies and runs `npm run build` on Ubuntu runner.
2. **`docker-build-push`**: Compiles the multi-stage Docker container and publishes it to Docker Hub tagged with `latest` and Git SHA.
3. **`deploy-to-server`**: Securely SSHs into the production AWS/VPS host, pulls the new Docker Hub image, and performs a zero-downtime container recreation.

### Required GitHub Secrets
To configure automated deployment, set the following secrets under **Repository Settings ➔ Secrets and variables ➔ Actions**:
- `DOCKER_USERNAME`: Docker Hub username
- `DOCKER_PASSWORD`: Docker Hub Personal Access Token
- `SERVER_HOST`: Production server public IP or domain
- `SERVER_USER`: Server SSH username (e.g. `ubuntu`)
- `SERVER_SSH_KEY`: Server private SSH key (`-----BEGIN OPENSSH PRIVATE KEY-----`)
- `SERVER_PORT`: SSH port (default: `22`)

---

## 👤 Developer Dossier

<div align="center">

### **Sagar Kumar Rana**
**Senior Full-Stack Architect & Enterprise Web Developer**  
*M.C.A. (Master of Computer Applications) — Jharkhand Rai University*

[![GitHub](https://img.shields.io/badge/GitHub-s1g1rkumar-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/s1g1rkumar)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-sagar--kumar--rana6664-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sagar-kumar-rana6664)
[![Email](https://img.shields.io/badge/Email-sagar.rana.dev%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sagar.rana.dev@gmail.com)
[![Phone](https://img.shields.io/badge/Phone-%2B91_9110956664-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](tel:+919110956664)

</div>

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to explore, learn, and adapt with proper credit.

<div align="center">
  <sub>Engineered with ⚡ by <a href="https://github.com/s1g1rkumar">Sagar Kumar Rana</a>. Level 99 Full-Stack Architect.</sub>
</div>
