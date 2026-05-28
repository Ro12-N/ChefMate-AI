# 🍳 ChefMate-AI

[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/) 
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/) 
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.3-blue)](https://tailwindcss.com/) 
[![Strapi](https://img.shields.io/badge/Strapi-HeadlessCMS-lightblue)](https://strapi.io/) 
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14-blue)](https://www.postgresql.org/) 
[![AI](https://img.shields.io/badge/AI-Powered-orange)](https://openai.com/) 
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

> **Turn your leftovers into masterpieces.** Snap a photo of your fridge. We'll tell you what to cook. Save money, reduce waste, and eat better tonight.

<p align="center">
  <img src="./frontend/public/images/chefmate/hero-section.png" alt="ChefMate AI Dashboard" width="800">
</p>

---

## 🌟 Overview

**ChefMate AI** is a full-stack AI-powered recipe platform that allows users to:

- 🥫 **Manage your pantry** – Add, remove, and track ingredients
- 🔍 **Explore recipes** – Browse by category, cuisine, or popularity
- 🤖 **Get AI-based recipe suggestions** – Based on what's in your fridge

This project demonstrates **full-stack development, SaaS architecture, AI integration, and modern UI/UX skills**.

---

## 🚀 Key Features

| Feature | Description |
|---------|-------------|
| 🤖 **AI-Powered Recipe Suggestions** | Get recipes based on pantry items |
| 🥫 **Pantry Management** | Add, remove, and track ingredients |
| 📸 **AI Pantry Scanner** | Scan items for instant recipe ideas |
| 📚 **Explore Recipes Page** | Browse by category, cuisine, or popularity |
| 🔐 **User Authentication** | Google OAuth login for secure access |
| 💰 **SaaS Features** | Subscription plans, pricing, user management |
| 🛡️ **Bot Protection & Rate Limiting** | Powered by Arcjet |
| 📱 **Responsive UI** | Tailwind CSS + Shadcn UI |
| ⚡ **Server Actions** | Backend logic for pantry, recipes, and more |

---

## 📸 Screenshots

### 🏠 Hero Section
![Hero Section](./frontend/public/images/home-hero.png)

### ⚡ Features Grid
![Features](./frontend/public/images/features-grid.png)

### 📚 Recipe of the Day
![Recipe of the Day](./frontend/public/images/recipe-day.png)

### 🍗 Chicken Recipes
![Chicken Recipes](./frontend/public/images/chicken-list.png)

### 📄 Recipe Detail Page
![Recipe Detail](./frontend/public/images/recipe-detail.png)

### 🥘 Cuisine Page
![Cuisine Page](./frontend/public/images/cuisine-canadian.png)

### 🥫 Pantry Management
![Pantry Management](./frontend/public/images/pantry.png)

### 🤖 AI Recipe Suggestions
![AI Suggestions](./frontend/public/images/ai-suggestions.png)

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | Next.js 15, React 19, Tailwind CSS, Shadcn UI |
| **Backend** | Strapi Headless CMS |
| **Database** | PostgreSQL |
| **Auth** | Google OAuth (via Strapi/NextAuth) |
| **AI** | OpenAI API / Gemini API |
| **Security** | Arcjet (Rate Limiting, Bot Protection) |
| **Payments** | Stripe |
| **Deployment** | Vercel |

---

## 📊 Database Schema (Strapi)

### Recipe Collection
```json
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
