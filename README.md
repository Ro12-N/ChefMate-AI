# ChefMate-AI


[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/) 
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/) 
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.3-blue)](https://tailwindcss.com/) 
[![Strapi](https://img.shields.io/badge/Strapi-HeadlessCMS-lightblue)](https://strapi.io/) 
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14-blue)](https://www.postgresql.org/) 
[![AI](https://img.shields.io/badge/AI-Powered-orange)](https://openai.com/) 
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 🌟 Overview

**ChefMate AI** is a full-stack AI-powered recipe platform that allows users to:

- Manage their pantry
- Explore recipes by category/cuisine
- Get AI-based personalized recipe suggestions

This project demonstrates **full-stack development, SaaS architecture, AI integration, and modern UI/UX skills**

---

## 🚀 Key Features

- **AI-Powered Recipe Suggestions** – Get recipes based on pantry items.  
- **Pantry Management** – Add, remove, and track ingredients.  
- **AI Pantry Scanner** – Scan items for instant recipe ideas.  
- **Explore Recipes Page** – Browse recipes by category, cuisine, or popularity.  
- **User Authentication** – Google OAuth login for secure access.  
- **SaaS Features** – Subscription plans, pricing, and user management.  
- **Bot Protection & Rate Limiting** – Powered by Arcjet.  
- **Responsive UI** – Tailwind CSS + Shadcn UI for modern interfaces.  
- **Server Actions** – Backend logic for adding pantry items, fetching recipes, and more.  

---


## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | Next.js 15, React 19, Tailwind CSS |
| Backend | Strapi Headless CMS |
| Database | PostgreSQL |
| Auth | Google OAuth (via Strapi/NextAuth) |
| AI | OpenAI API / Gemini API |
| Security | Arcjet (Rate Limiting, Bot Protection) |
| Payments | Stripe |
| Deployment | Vercel |

## Deploy frontend on Vercel

This repo is a monorepo. **Only deploy the `frontend` folder** (not the repo root).

1. Vercel → your project → **Settings** → **Build and Deployment**
2. **Root Directory** → **Edit** → select **`frontend`** → Save
3. **Framework Preset** → **Next.js**
4. **Output Directory** → leave **empty** (default). Do not set `.next` manually.
5. **Build Command** → `npm run build` (default)
6. Add environment variables from `frontend/.env.example`
7. **Deployments** → … on latest → **Redeploy**

If you see `404: NOT_FOUND` with a Vercel error ID, the root directory is almost always wrong (Vercel is not building the Next.js app).

## 📊 Database Schema (Strapi)

```json
// Recipe Collection Type
{
  "title": "Spaghetti Carbonara",
  "description": "Classic Italian pasta dish",
  "ingredients": ["Pasta", "Eggs", "Pecorino", "Pancetta"],
  "instructions": "...",
  "prepTime": 15,
  "cookTime": 15,
  "difficulty": "Medium",
  "cuisine": "Italian",
  "category": "Dinner",
  "image": { "url": "..." }
}

// User Collection Type
{
  "username": "john_doe",
  "email": "john@example.com",
  "pantry": ["Tomato", "Cheese", "Basil"],
  "favorites": ["recipe_id_1", "recipe_id_2"],
  "plan": "free",
  "aiSuggestionsUsed": 3
}

---




