# Zegura - Modern Web Platform

> **Modern, high-performance web platform for Zegura, a leading utility optimization consultancy.**

![Zegura Banner](/assets/logo-zegura-azul.png)

## Overview

This repository contains the source code for the Zegura web platform, rebuilt from the ground up to prioritize performance, SEO, and user conversion. The project leverages **Next.js 15 (App Router)** and **Tailwind CSS v4** to deliver a sub-second load time experience while maintaining a rich, premium aesthetic.

The platform distinguishes itself through a data-driven architecture where service definitions, pricing logic, and partner relations are decoupled from the UI, allowing for rapid iteration and scalability without touching the core presentation layer.

## Tech Stack

*   **Framework**: [Next.js 15](https://nextjs.org/) (React 19 RC) - Utilizing Server Components for zero-bundle-size rendering of static content.
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utilizing the new oxide engine for instant HMR.
*   **Typography**: `Geist` (Sans/Mono) - Variable fonts for optimal performance and legibility.
*   **Content**: MDX - Remote and local MDX sourcing for service detail pages, enabling rich content with React component hydration.
*   **Deployment**: Vercel (Edge Network).

## Architecture Highlights

### 1. Centralized Data Mesh
Instead of scattering business logic across components, all service core data (titles, slugs, benefits, pricing, partners) is centralized in `src/data/services.ts`. This acts as a single source of truth (SSOT) that drives:
*   Dynamic Route Generation (`/servicios/[slug]`)
*   Navigation & Footer Links
*   Service Cards & Grids
*   SEO Metadata injection

### 2. Component Composition Pattern
We avoid "god components". The UI is built using atomic, highly reusable building blocks found in `src/components/`.
*   **`ServiceBenefits`**: Renders structured value propositions.
*   **`ServiceProcess`**: Visualizes the customer journey step-by-step.
*   **`PartnersGrid`**: A polymorph grid that adapts to the specific service context.

### 3. Progressive Enhancement
The site is fully functional without JavaScript for core consumption. Interactive elements (forms, hover effects) hydrate progressively.

## Getting Started

### Prerequisites
*   Node.js 18+
*   npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/zegura-web-moderno.git

# Install dependencies
npm install

# Run development server
npm run dev
```

## Project Structure

```
src/
├── app/                 # Next.js App Router (Routes definition)
│   ├── servicios/       # Dynamic Service Routes
│   └── layout.tsx       # Root Layout & Global SEO
├── components/          # React Server & Client Components
├── content/             # MDX Content for rich pages
├── data/                # Static Data Definitions (SSOT)
└── styles/              # Global styles & Tailwind config
```

## Deployment

This project is optimized for **Vercel**. 

```bash
# Production build
npm run build

# Deploy via CLI
vercel --prod
```

## License

Private. All rights reserved © 2026 Zegura.
