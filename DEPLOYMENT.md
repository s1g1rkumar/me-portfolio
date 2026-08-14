# 🚀 CI/CD & Deployment Guide — Sagar Kumar Rana Portfolio

This repository is equipped with a production-grade **Docker multi-stage build** and **GitHub Actions CI/CD Pipeline** (`.github/workflows/deploy.yml`).

---

## 📦 1. Local Docker Setup

To build and run the application locally using Docker:

```bash
# Build and start container on port 80
docker-compose up -d --build

# View container logs
docker-compose logs -f

# Stop container
docker-compose down
```

Open `http://localhost` or `http://localhost:80` in your browser.

---

## 🐙 2. Uploading Project to GitHub

Initialize git, commit all files, and push to your GitHub repository:

```bash
# 1. Initialize git repo (if not already initialized)
git init

# 2. Add remote repository
git remote add origin https://github.com/s1g1rkumar/profile.git

# 3. Stage all files
git add .

# 4. Commit changes
git commit -m "feat: setup cyberpunk RPG developer portfolio with Docker & GitHub Actions CI/CD"

# 5. Push to main branch
git branch -M main
git push -u origin main
```

---

## ⚙️ 3. Configuring GitHub Actions Secrets

To enable automated Docker Hub image pushes and SSH server deployment on push to `main`, add the following Secrets in GitHub:  
**Repository Settings ➔ Secrets and variables ➔ Actions ➔ New repository secret**:

| Secret Name | Description | Example |
| :--- | :--- | :--- |
| `DOCKER_USERNAME` | Your Docker Hub Username | `s1g1rkumar` |
| `DOCKER_PASSWORD` | Docker Hub Access Token / Password | `dckr_pat_xxxxx` |
| `SERVER_HOST` | Production Server IP / Hostname | `43.204.xxx.xxx` |
| `SERVER_USER` | Server SSH Username | `ubuntu` or `ec2-user` |
| `SERVER_SSH_KEY` | Private SSH Key for server access | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `SERVER_PORT` | SSH Port (Default: 22) | `22` |

---

## 🔄 4. How the CI/CD Pipeline Works

Every `git push` to `main` executes:
1. **`test-and-build`**: Installs dependencies and verifies React TypeScript compilation (`npm run build`).
2. **`docker-build-push`**: Builds the multi-stage Docker container (Node.js build ➔ Nginx server) and tags it as `latest`.
3. **`deploy-to-server`**: SSHs into your server, pulls the latest Docker image, and restarts the container with zero downtime.
