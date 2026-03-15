# Cafe

A modern cafe ordering and menu application built with Next.js, featuring a warm and inviting design inspired by real cafe aesthetics.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Fonts:** Geist Sans, Geist Mono, Playfair Display
- **Linting:** ESLint with Next.js + TypeScript rules

## Project Structure

```
cafe/
├── app/
│   ├── (routes)/                # Route groups
│   │   ├── menu/                # Menu browsing pages
│   │   ├── cart/                # Shopping cart
│   │   ├── orders/              # Order history & tracking
│   │   └── admin/               # Admin dashboard
│   ├── layout.tsx               # Root layout (fonts, providers)
│   ├── page.tsx                 # Landing / home page
│   └── globals.css              # Global styles & design tokens
├── components/
│   ├── ui/                      # shadcn/ui primitives
│   ├── layout/                  # Header, Footer, Sidebar, MobileNav
│   └── features/                # Feature-specific components
│       ├── menu/                # MenuCard, MenuGrid, CategoryFilter
│       ├── cart/                # CartItem, CartSummary
│       └── orders/              # OrderCard, OrderStatus
├── lib/                         # Utilities, API clients, constants
├── hooks/                       # Custom React hooks
├── types/                       # Shared TypeScript type definitions
├── public/                      # Static assets (images, icons, logos)
└── docs/                        # Design system & project documentation
    └── design-system.md         # Color palette, typography, components
```

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm run start

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Documentation

- [Design System](./docs/design-system.md) — Color palette, typography, and component reference
