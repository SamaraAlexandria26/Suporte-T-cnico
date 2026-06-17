---
name: Amethyst Professional
colors:
  surface: '#fbf8ff'
  surface-dim: '#d5d8f9'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2ff'
  surface-container: '#ececff'
  surface-container-high: '#e5e6ff'
  surface-container-highest: '#dee0ff'
  on-surface: '#161a32'
  on-surface-variant: '#494550'
  inverse-surface: '#2b2f48'
  inverse-on-surface: '#f0efff'
  outline: '#7a7581'
  outline-variant: '#cac4d1'
  surface-tint: '#66529c'
  primary: '#54418a'
  on-primary: '#ffffff'
  primary-container: '#6d59a4'
  on-primary-container: '#eadfff'
  inverse-primary: '#cfbdff'
  secondary: '#51599b'
  on-secondary: '#ffffff'
  secondary-container: '#afb6ff'
  on-secondary-container: '#3d4586'
  tertiary: '#514a5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#6a6275'
  on-tertiary-container: '#eadff6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#cfbdff'
  on-primary-fixed: '#210655'
  on-primary-fixed-variant: '#4e3a83'
  secondary-fixed: '#dfe0ff'
  secondary-fixed-dim: '#bcc2ff'
  on-secondary-fixed: '#091255'
  on-secondary-fixed-variant: '#394182'
  tertiary-fixed: '#e9def5'
  tertiary-fixed-dim: '#cdc2d9'
  on-tertiary-fixed: '#1e1929'
  on-tertiary-fixed-variant: '#4a4456'
  background: '#fbf8ff'
  on-background: '#161a32'
  surface-variant: '#dee0ff'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Manrope
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system is centered on a "Sophisticated Tech-Humanist" aesthetic. It balances the rigor of an enterprise support system with a calming, inclusive, and professional atmosphere. The personality is authoritative yet empathetic, moving away from cold, traditional corporate blues toward a palette that feels more tailored and thoughtful.

The design style utilizes **Modern Corporate** principles with a subtle **Glassmorphic** touch. This ensures the dashboard remains highly functional and data-dense while providing visual relief through soft gradients, precise typography, and a "layered" depth model. The emotional response should be one of confidence, tranquility, and efficiency.

## Colors

The palette is built on a foundation of professional purples and cool-toned neutrals, avoiding pinks in favor of more sophisticated floral and mineral tones.

- **Primary (Amethyst):** `#6D59A4`. A deep, professional purple used for primary actions, active states, and brand identifiers.
- **Secondary (Periwinkle):** `#9BA3EB`. A soft, energetic blue-purple used for accents, secondary buttons, and data visualization highlights.
- **Tertiary (Soft Lavender):** `#F3E8FF`. Primarily used for large surface areas, background tints, and subtle hover states to keep the UI feeling airy.
- **Neutral (Slate Amethyst):** `#4A4E69`. A desaturated purple-grey used for text and structural borders to maintain harmony with the chromatic palette.
- **Functional Colors:** Error states use a muted terracotta; Success states use a sage green to ensure they don't clash with the purple-dominant theme.

## Typography

This design system uses a dual-font strategy. **Manrope** is used for headlines to provide a modern, friendly, and structured appearance with its unique geometric terminals. **Inter** is used for body text and UI labels to ensure maximum legibility in high-density support dashboards.

Scale text weights carefully: use Semi-Bold (600) for section headers and Medium (500) for interactive labels. For data-heavy tables, prefer `body-sm` to maximize information density without sacrificing readability.

## Layout & Spacing

The layout follows a **Fixed-Fluid hybrid grid**. Sidebars and navigation elements occupy fixed widths, while the primary content area uses a 12-column fluid grid.

- **Desktop:** 12 columns, 24px gutter, 32px side margins.
- **Tablet:** 8 columns, 16px gutter, 24px side margins.
- **Mobile:** 4 columns, 16px gutter, 16px side margins.

A strict 8px spatial rhythm is applied to all components. Internal padding for cards should default to 24px (`base * 3`) to create a sense of professional breathing room within the support dashboard.

## Elevation & Depth

Visual hierarchy is managed through **Tonal Layering** and **Ambient Shadows**. 

1. **Surface Base:** The background uses a very light tint of Lavender (`#FAF8FF`).
2. **Surface Container:** Cards and primary containers use pure white (`#FFFFFF`) with a very soft, diffused shadow (0px 4px 20px rgba(109, 89, 164, 0.08)) to lift them slightly.
3. **Elevated State:** Modals and popovers use a more pronounced shadow with a subtle Amethyst tint (0px 12px 32px rgba(109, 89, 164, 0.15)).

Avoid heavy black shadows; always tint shadows with the primary amethyst color to maintain the professional, soft aesthetic.

## Shapes

The design system utilizes **Rounded (Level 2)** shapes to soften the enterprise feel. This choice communicates approachability while maintaining enough structure for a professional tool.

- **Small Components:** Checkboxes and small tags use 4px (`rounded-sm`).
- **Standard Components:** Buttons, input fields, and dropdowns use 8px (`rounded-md`).
- **Large Components:** Dashboard cards and containers use 16px (`rounded-lg`).

## Components

### Buttons
Primary buttons use the Amethyst color (`#6D59A4`) with white text. Secondary buttons use the Periwinkle color (`#9BA3EB`) with a subtle 10% opacity background of the same color and deep purple text.

### Cards
Cards are the primary building block of the support system. They must feature a 1px border in a light lavender tint (`#E0D7F0`) and the standard 16px corner radius.

### Input Fields
Inputs should have a subtle Lavender-grey border. On focus, the border transitions to Primary Amethyst with a 2px outer glow in 20% opacity Periwinkle.

### Chips & Tags
Support status chips use a "Soft Fill" style. A "Pending" status uses a soft Periwinkle background with deep purple text, ensuring high contrast while maintaining the color story.

### Lists & Data Tables
Rows should use a subtle 1px divider in `#F3E8FF`. Alternate row striping is discouraged; instead, use a subtle hover state (`#FAF8FF`) to indicate selection.