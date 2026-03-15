# Design System

## Color Palette

Warm cafe tones inspired by espresso, steamed milk, and matcha. All colors are defined as CSS custom properties for use with Tailwind CSS v4's `@theme` directive.

### Primary — Espresso Browns

| Token              | Value     | Preview | Usage                          |
| ------------------- | --------- | ------- | ------------------------------ |
| `--color-espresso-950` | `#1B0E07` |         | Darkest text, high-contrast headings |
| `--color-espresso-900` | `#2C1810` |         | Primary text on light backgrounds |
| `--color-espresso-800` | `#3E2418` |         | Secondary headings              |
| `--color-espresso-700` | `#5C3A2A` |         | Active/hover states             |
| `--color-espresso-600` | `#7A5040` |         | Icons, borders                  |
| `--color-espresso-500` | `#8B6552` |         | Muted text, placeholders        |
| `--color-espresso-400` | `#A6836F` |         | Subtle borders                  |
| `--color-espresso-300` | `#C4A893` |         | Dividers, disabled states       |
| `--color-espresso-200` | `#DCC8B8` |         | Light borders, card outlines    |
| `--color-espresso-100` | `#EDE1D8` |         | Hover backgrounds               |
| `--color-espresso-50`  | `#F7F1EC` |         | Subtle backgrounds              |

### Neutral — Cream & Latte

| Token            | Value     | Usage                          |
| ----------------- | --------- | ------------------------------ |
| `--color-cream-50`  | `#FFFDF9` | Page background (light mode)   |
| `--color-cream-100` | `#FDF8F0` | Card backgrounds               |
| `--color-cream-200` | `#F5EBDA` | Section backgrounds, stripes   |
| `--color-cream-300` | `#E8D9C2` | Borders, dividers              |
| `--color-cream-400` | `#D4C0A5` | Muted elements                 |
| `--color-cream-500` | `#BFA78A` | Secondary text on dark bg      |
| `--color-cream-600` | `#A08B6E` | Subtle icons                   |
| `--color-cream-700` | `#7D6B53` | Dark mode secondary text       |
| `--color-cream-800` | `#5A4C3B` | Dark mode borders              |
| `--color-cream-900` | `#3A3228` | Dark mode card backgrounds     |
| `--color-cream-950` | `#1F1B15` | Dark mode page background      |

### Accent — Matcha Green

| Token             | Value     | Usage                          |
| ------------------ | --------- | ------------------------------ |
| `--color-matcha-50`  | `#F0F7F0` | Success/accent light bg        |
| `--color-matcha-100` | `#DCF0DC` | Badges, tags backgrounds       |
| `--color-matcha-200` | `#B8DEB8` | Hover states on accent buttons |
| `--color-matcha-300` | `#8CC98C` | Active states                  |
| `--color-matcha-400` | `#6AB06A` | Primary accent color           |
| `--color-matcha-500` | `#4E9A4E` | Accent buttons, links          |
| `--color-matcha-600` | `#3D7A3D` | Accent hover state             |
| `--color-matcha-700` | `#2F5F2F` | Dark accent                    |
| `--color-matcha-800` | `#244824` | Dark mode accent               |
| `--color-matcha-900` | `#1A331A` | Darkest accent                 |

### Semantic Colors

| Token               | Value     | Usage                          |
| -------------------- | --------- | ------------------------------ |
| `--color-success`    | `#4E9A4E` | Order confirmed, success state (matcha-500) |
| `--color-warning`    | `#D4A24E` | Pending orders, low stock      |
| `--color-error`      | `#C45B4A` | Errors, out of stock           |
| `--color-info`       | `#5B8FB9` | Tips, informational notices    |

### Tailwind CSS v4 Configuration

Add these tokens to `globals.css`:

```css
@theme inline {
  --color-espresso-50: #F7F1EC;
  --color-espresso-100: #EDE1D8;
  --color-espresso-200: #DCC8B8;
  --color-espresso-300: #C4A893;
  --color-espresso-400: #A6836F;
  --color-espresso-500: #8B6552;
  --color-espresso-600: #7A5040;
  --color-espresso-700: #5C3A2A;
  --color-espresso-800: #3E2418;
  --color-espresso-900: #2C1810;
  --color-espresso-950: #1B0E07;

  --color-cream-50: #FFFDF9;
  --color-cream-100: #FDF8F0;
  --color-cream-200: #F5EBDA;
  --color-cream-300: #E8D9C2;
  --color-cream-400: #D4C0A5;
  --color-cream-500: #BFA78A;
  --color-cream-600: #A08B6E;
  --color-cream-700: #7D6B53;
  --color-cream-800: #5A4C3B;
  --color-cream-900: #3A3228;
  --color-cream-950: #1F1B15;

  --color-matcha-50: #F0F7F0;
  --color-matcha-100: #DCF0DC;
  --color-matcha-200: #B8DEB8;
  --color-matcha-300: #8CC98C;
  --color-matcha-400: #6AB06A;
  --color-matcha-500: #4E9A4E;
  --color-matcha-600: #3D7A3D;
  --color-matcha-700: #2F5F2F;
  --color-matcha-800: #244824;
  --color-matcha-900: #1A331A;

  --color-success: #4E9A4E;
  --color-warning: #D4A24E;
  --color-error: #C45B4A;
  --color-info: #5B8FB9;
}
```

Usage in components: `bg-espresso-100`, `text-cream-950`, `border-matcha-400`, etc.

---

## Typography

### Font Families

| Font              | Role        | Weight Range | Usage                                |
| ----------------- | ----------- | ------------ | ------------------------------------ |
| **Geist Sans**    | Body        | 400–700      | Body text, UI elements, buttons      |
| **Geist Mono**    | Code        | 400          | Prices, order numbers, code snippets |
| **Playfair Display** | Display  | 400–700      | Hero headings, section titles, branding |

Geist Sans and Geist Mono are already configured via `next/font`. Playfair Display should be added as an additional Google Font in `layout.tsx`.

### Type Scale

| Class      | Size    | Line Height | Weight   | Usage                     |
| ---------- | ------- | ----------- | -------- | ------------------------- |
| `text-xs`  | 0.75rem | 1rem        | 400      | Captions, fine print      |
| `text-sm`  | 0.875rem| 1.25rem     | 400      | Labels, metadata          |
| `text-base`| 1rem    | 1.5rem      | 400      | Body text                 |
| `text-lg`  | 1.125rem| 1.75rem     | 500      | Card titles, subheadings  |
| `text-xl`  | 1.25rem | 1.75rem     | 600      | Section headings          |
| `text-2xl` | 1.5rem  | 2rem        | 600      | Page headings             |
| `text-3xl` | 1.875rem| 2.25rem     | 700      | Hero subheadings          |
| `text-4xl` | 2.25rem | 2.5rem      | 700      | Hero headings (Playfair)  |

### Font Weight Guidelines

- **400 (Regular):** Body text, descriptions, form inputs
- **500 (Medium):** Buttons, navigation links, card titles
- **600 (Semibold):** Section headings, emphasis
- **700 (Bold):** Hero headings, branding, prices

---

## shadcn/ui Components

Components to install and customize for the cafe theme. Install with `npx shadcn@latest add <component>`.

### Navigation & Layout

| Component          | Usage                                                |
| ------------------ | ---------------------------------------------------- |
| **NavigationMenu** | Main site navigation (Menu, Cart, Orders, About)     |
| **Sheet**          | Mobile slide-out navigation drawer                   |
| **Separator**      | Visual dividers between menu sections                |

### Data Display

| Component   | Usage                                                       |
| ----------- | ----------------------------------------------------------- |
| **Card**    | Menu items, order summaries, featured drinks                |
| **Badge**   | Order status (Preparing, Ready, Completed), category tags   |
| **Avatar**  | User profile picture in header/account section              |
| **Tabs**    | Menu category switching (Coffee, Tea, Pastries, Seasonal)   |
| **Skeleton**| Loading placeholders for menu items, order lists            |

### Forms & Inputs

| Component    | Usage                                                     |
| ------------ | --------------------------------------------------------- |
| **Button**   | Add to cart, place order, CTA buttons                     |
| **Input**    | Search bar, quantity fields, form inputs                  |
| **Textarea** | Special instructions, reviews                             |
| **Select**   | Drink size (S/M/L), milk options, customizations          |

### Feedback & Overlays

| Component   | Usage                                                      |
| ----------- | ---------------------------------------------------------- |
| **Dialog**  | Order confirmation, item detail view, delete confirmation  |
| **Toast**   | "Added to cart", "Order placed", error notifications       |

### Summary

13 components total, covering the core UI needs for a cafe ordering app. Additional components (e.g., `Table`, `Dropdown Menu`, `Popover`) can be added as specific features require them.
