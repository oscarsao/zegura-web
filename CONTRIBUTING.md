# Contributing Guidelines

## Code Style & Standards

We enforce strict TypeScript strictness and functional programming patterns.

1.  **Immutability**: Prefer `const` over `let`. Avoid mutating objects; use spread syntax.
2.  **Components**:
    *   **Server First**: By default, all components are Server Components. Only add `'use client'` when interactivity (hooks, event listeners) is strictly required.
    *   **Props Interface**: All props must be explicitly typed via `interface Props`.
3.  **Tailwind**:
    *   Use utility classes for layout and spacing.
    *   Extract complex compound patterns into `@apply` or separate components only if reused >3 times.

## Workflow

1.  **Branching**: `feature/feature-name` or `fix/issue-description`.
2.  **Commits**: Conventional Commits standard (`feat:`, `fix:`, `chore:`, `docs:`).

## Pull Request Process

1.  Ensure local build passes: `npm run build`.
2.  Verify no linting errors: `npm run lint`.
3.  PR Body must reference the Jira/Linear ticket ID.
4.  Self-review your diff before assigning reviewers.

---

**Engineering Team**
