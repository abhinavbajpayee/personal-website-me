---
name: Cinematic Hero Narrative
colors:
  surface: '#fff8f7'
  surface-dim: '#f4d3cf'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ef'
  surface-container: '#ffe9e6'
  surface-container-high: '#ffe2de'
  surface-container-highest: '#fcdbd7'
  on-surface: '#291715'
  on-surface-variant: '#5d3f3c'
  inverse-surface: '#402b29'
  inverse-on-surface: '#ffedea'
  outline: '#926f6b'
  outline-variant: '#e7bdb8'
  surface-tint: '#c00016'
  primary: '#bf0016'
  on-primary: '#ffffff'
  primary-container: '#e62429'
  on-primary-container: '#ffffff'
  inverse-primary: '#ffb4ac'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#5d5e5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#767777'
  on-tertiary-container: '#ffffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ac'
  on-primary-fixed: '#410003'
  on-primary-fixed-variant: '#93000e'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fff8f7'
  on-background: '#291715'
  surface-variant: '#fcdbd7'
typography:
  display-xl:
    fontFamily: Bebas Neue
    fontSize: 120px
    fontWeight: '700'
    lineHeight: 100px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Bebas Neue
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.1em
  display-xl-mobile:
    fontFamily: Bebas Neue
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 68px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

This design system delivers a high-octane, editorial experience inspired by modern cinematic character profiles. It balances professional portfolio data with the dramatic flair of a major film franchise. The aesthetic is built on the tension between a clean, minimalist foundation and aggressive, oversized typography that "breaks the frame."

**Style Keywords:**
- **Premium Editorial:** Sophisticated layouts that feel like a high-end digital magazine.
- **Cinematic Scale:** Use of massive, condensed type to create a sense of importance and "super-human" scale.
- **3D Framing:** Elements overlap, extend beyond container boundaries, and utilize subtle 3D perspective to create depth.
- **Bold Minimalism:** A stark palette where every red accent carries significant weight and intention.

## Colors

The color strategy is "Aggressive Neutral." We use white and light grays as a clinical canvas to make the primary red and deep black text feel monumental.

- **Primary Red (#E62429):** Reserved strictly for action-oriented elements (CTAs), categorical labels, and "power" indicators. It represents the heroic energy of the interface.
- **Neutral Core (#111111):** Used for typography to ensure maximum readability and a premium, weighted feel.
- **Surface Tones:** A mix of pure white (#FFFFFF) for main content areas and subtle light gray (#F2F2F2) for secondary sections or "character card" backgrounds to provide soft separation without heavy borders.

## Typography

Typography is the most critical asset in this design system. It is used structurally to define the "strength" of the content.

- **Headlines:** We use **Bebas Neue** for all headers. It must be rendered in all-caps. For major section headers (Display XL), use tight tracking to create a solid "wall of text" effect that anchors the page.
- **Body:** **Hanken Grotesk** provides a sharp, contemporary counterpoint to the condensed headers. It ensures that technical details and long-form descriptions remain highly legible.
- **Labels:** Use red-tinted, uppercase Bebas Neue for small taglines or metadata above headings to establish immediate hierarchy.

## Layout & Spacing

The layout is an **Asymmetric Fluid Grid**. It breaks away from traditional center-aligned resume styles to create a dynamic, "unfolding" narrative.

- **Break-the-Frame:** Key visuals (like project images or character portraits) should bleed off the edge of the grid or overlap section boundaries.
- **Negative Space:** Use aggressive vertical spacing (120px+) between major sections to let the "massive" typography breathe.
- **Grid:** A 12-column system where content often spans columns 2-11, leaving intentional gaps on the flanks to emphasize the cinematic wide-screen feel.
- **Mobile Reflow:** On mobile, typography scales aggressively down, and margins tighten to 20px, but the "overlap" style is maintained through vertical stacking and layered shadows.

## Elevation & Depth

This design system uses depth to create a "tactile digital" feel.

- **Projected Shadows:** Use long, soft, directional shadows (15% opacity black) to make cards appear as if they are floating several inches above the surface.
- **Parallax Layers:** When scrolling, foreground elements (like labels or specific text blocks) should move at slightly different speeds than the background cards to simulate a 3D environment.
- **Surface Stacking:** Important "Character Cards" use a white surface against a #F2F2F2 background, defined by depth rather than borders.
- **Frame Breaking:** Elements should physically overlap the edge of their parent containers (e.g., a project title appearing half-on, half-off an image).

## Shapes

The shape language is primarily **Sharp and Industrial**, with specific exceptions for interactive elements.

- **Containers:** Project cards, sections, and input fields must have 0px corner radius. Sharp corners convey a sense of precision and "tech" sophistication.
- **Interaction (Pills):** Buttons and small chips utilize the "Pill" shape (fully rounded). This high contrast between the sharp layout and rounded interactive elements makes CTAs immediately identifiable as "touchable."

## Components

### Buttons
Solid **Deep Red (#E62429)** backgrounds with white uppercase **Bebas Neue** text. Shapes must be pill-shaped. On hover, the button should lift slightly (increasing shadow) rather than changing color.

### Character Cards (Projects)
Large, sharp-edged rectangular containers. They should feature a background image with a subtle dark gradient overlay. The project title (Bebas Neue) should overlap the bottom edge of the card, partially "breaking the frame."

### Navigation Bar
A slim, minimalist bar at the top. Use a semi-transparent white background with a backdrop blur (glassmorphism) and a single-pixel bottom border in #F2F2F2. Text should be small, tracked-out Bebas Neue.

### Tags & Chips
Small pill-shaped containers with a 1px border of #E62429 and red text. Used for technical skills or categories.

### Section Dividers
Instead of lines, use massive, low-opacity (5% gray) background text that spans the width of the screen behind the main content to label sections (e.g., "EXPERIENCE" in 300px type).