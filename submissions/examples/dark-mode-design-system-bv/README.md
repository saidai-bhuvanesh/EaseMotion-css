# Dark Mode Design System Showcase

A comprehensive, production-ready dark-theme design system reference built entirely with CSS custom properties, glassmorphism effects, keyframe animations, and zero external JavaScript dependencies.

## Preview

Open `demo.html` in any modern browser to explore the full design system reference.

## Sections (18 total)

| #   | Section                    | Description                                       |
| --- | -------------------------- | ------------------------------------------------- |
| 01  | Design System Header       | Gradient header with version badge and stats      |
| 02  | Color Palette              | Surface, brand, and semantic color swatches       |
| 03  | Typography Scale           | H1–H6, body, caption, and code samples            |
| 04  | Spacing & Sizing Scale     | Visual bar chart of all spacing tokens            |
| 05  | Button Component Library   | Primary, secondary, ghost, danger, disabled       |
| 06  | Card Variants              | Default, elevated, outlined, interactive, glass   |
| 07  | Form Elements              | Inputs, textareas, selects, checkboxes, toggles   |
| 08  | Navigation Patterns        | Tabs, breadcrumbs, pagination                     |
| 09  | Badges & Tags              | Status badges and removable tags                  |
| 10  | Alerts & Toasts            | Success, warning, error, info feedback messages   |
| 11  | Table Component            | Sortable data table with status indicators        |
| 12  | Modal / Dialog             | Inline modal preview with backdrop blur           |
| 13  | Progress Indicators        | Bars, circular gauges, skeleton loading           |
| 14  | Avatars & User Components  | Sized avatars, status dots, groups, user cards    |
| 15  | Layout Grid Demonstrations | 2-col, 3-col, 4-col, sidebar, holy grail          |
| 16  | Motion & Animation         | Live previews of all 8 keyframe animations        |
| 17  | Accessibility Checklist    | WCAG 2.1 AA audit panel with pass/warn indicators |
| 18  | Code Snippet Display       | Syntax-highlighted CSS, HTML, and JS examples     |

## Design Tokens

### Color Palette

- **Surface Base:** `#0d0d1a`
- **Surface 100:** `#1a1a2e`
- **Surface 200:** `#16213e`
- **Accent Blue:** `#0f3460`
- **Highlight:** `#e94560`

### Animations

| Name          | Purpose                       | Duration |
| ------------- | ----------------------------- | -------- |
| `gentleFade`  | Fade in with upward translate | 0.6s     |
| `slideIn`     | Slide in from left            | 0.4s     |
| `scaleUp`     | Scale from 92% to 100%        | 0.35s    |
| `shimmerLoad` | Skeleton loading shimmer      | 1.5s     |
| `bounceIn`    | Elastic entrance              | 2s       |
| `float`       | Gentle vertical float         | 3s       |
| `pulse`       | Opacity pulse                 | 2s       |
| `spin`        | 360° rotation                 | 2s       |

## CSS Architecture

- **80+ CSS custom properties** covering surfaces, brand, semantic, text, borders, spacing, typography, shadows, transitions, glassmorphism, and z-index
- **Glassmorphism** via `backdrop-filter: blur()` and translucent backgrounds
- **Responsive** with breakpoints at 1024px, 768px, and 480px
- **Print-optimized** with animation-free fallbacks

## Typography

- **Sans-serif:** Inter (300–900 weights)
- **Monospace:** JetBrains Mono (400–700 weights)

## Technologies Used

- Pure HTML5 & CSS3
- CSS Custom Properties (Design Tokens)
- CSS Grid & Flexbox
- CSS Animations & Transitions
- Glassmorphism (backdrop-filter)
- Google Fonts (Inter, JetBrains Mono)

## Browser Support

| Browser | Version |
| ------- | ------- |
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 15+     |
| Edge    | 90+     |

## License

MIT — Part of the [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css) project.
