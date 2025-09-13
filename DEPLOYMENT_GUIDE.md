# 🚀 Deployment Guide for Your Portfolio

Your portfolio is ready to deploy! Follow these steps:

## Option 1: Using GitHub Desktop (Easiest)

1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with your GitHub account
3. Click "Add" → "Add Existing Repository"
4. Browse to: `D:\Personal\portfolio`
5. Click "Publish repository"
6. Make sure repository name is "portfolio"
7. Click "Publish Repository"

## Option 2: Using Personal Access Token

1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic) with "repo" scope
3. Copy the token
4. Run these commands:
```bash
git remote set-url origin https://divya-nayan:<YOUR_TOKEN>@github.com/divya-nayan/portfolio.git
git push -u origin main
```

## Option 3: Using GitHub CLI

1. Install GitHub CLI: https://cli.github.com/
2. Run:
```bash
gh auth login
gh repo create portfolio --public --source=. --remote=origin --push
```

## After Pushing to GitHub:

1. Go to: https://github.com/divya-nayan/portfolio
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch (we'll create this next)
6. Click Save

## Deploy to GitHub Pages:

Run this command in your terminal:
```bash
npm run deploy
```

This will:
- Build your portfolio
- Create a gh-pages branch
- Deploy to: https://divya-nayan.github.io/portfolio/

## Your Portfolio Features:

✅ Modern React + Vite
✅ Stunning animations with Framer Motion
✅ Your real experience from Win Information Technology & Growth Loops
✅ 6 featured projects with actual metrics
✅ Your profile picture with morphing animation
✅ Responsive design for all devices
✅ Custom cursor effects
✅ Particle background
✅ Glassmorphism design
✅ Typing animation for roles
✅ Education & certifications section
✅ Contact form with your email

## Files Structure:
```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx (Your intro with typing animation)
│   │   ├── About.jsx (Your expertise areas)
│   │   ├── Skills.jsx (All your technical skills)
│   │   ├── Projects.jsx (6 real projects)
│   │   ├── Experience.jsx (Your work history)
│   │   ├── Education.jsx (RGPV degree & certifications)
│   │   ├── Contact.jsx (Contact form)
│   │   └── ... (Other components)
│   └── App.css (All styling)
├── static/
│   ├── pic.jpg (Your profile picture)
│   └── DivyaNayan_AIML_Engineer.pdf (Your resume)
└── package.json (Configured for GitHub Pages)
```

## Need Help?

If you face any issues:
1. Make sure you're logged into GitHub
2. Check that repository exists at: https://github.com/divya-nayan/portfolio
3. Try using GitHub Desktop for easier authentication

Your amazing portfolio is ready to shine! 🌟