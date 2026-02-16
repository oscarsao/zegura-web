# Architecture Decisions Record (ADR)

## ADR-001: Data-Driven UI Generation

### Context
Maintaining separate pages for similar services (Energy, Insurance, Telco) often leads to code duplication and UI inconsistency. As the business scales to new verticals, the engineering overhead to launch a new service page increases.

### Decision
We implemented a **Centralized Data Mesh** pattern. A strong separation of concerns is enforced between the *Data Definition* (`src/data/services.ts`) and the *Presentation Layer* (`src/app/servicios/[slug]`).

*   **Pros**:
    *   Adding a new service requires 0 lines of UI code. Just add an object to the array.
    *   Global refactors (e.g., changing the card design) update all services instantly.
    *   Type-safety across the entire application via TypeScript interfaces.

*   **Cons**:
    *   Slightly less flexibility for "one-off" custom layouts per service (mitigated by MDX injection).

## ADR-002: Tailwind v4 Adoption

### Context
CSS-in-JS libraries introduce runtime overhead. Standard CSS modules can become verbose.

### Decision
We adopted **Tailwind CSS v4**.
*   **Reasoning**: V4 moves the compilation to Rust (Oxide), providing sub-millisecond updates during dev. It eliminates the need for a `tailwind.config.js` in favor of CSS-first configuration, keeping the root directory clean.

## ADR-003: MDX for Content Richness

### Context
Marketing teams need to write rich narratives for services, but hardcoding text in JSX is unmaintainable. CMS integration (Sanity/Strapi) was deemed over-engineering for the current phase.

### Decision
We use **local MDX**.
*   **Reasoning**: Allows writing content in Markdown while hydrating custom React components (`<CTA />`, `<Chart />`) inside the flow. It offers the best balance between developer experience (DX) and content flexibility.

---

## System Design

### Rendering Strategy
*   **Static Generation (SSG)**: All service pages are pre-rendered at build time.
*   **Revalidation**: We utilize Incremental Static Regeneration (ISR) tags where appropriate, though currently, the build is fully static for maximum Edge performance.

### Asset Optimization
*   **Images**: Next/Image is enforced. `format: ['avif', 'webp']` is enabled in config.
*   **Fonts**: Self-hosted variable fonts via `next/font` to zero out CLS (Cumulative Layout Shift).
