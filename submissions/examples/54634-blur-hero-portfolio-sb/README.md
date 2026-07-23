# Blur-Entrance Hero Section for Creative Portfolio Layouts

A pure CSS hero section with smooth blur transition effects, designed for creative portfolio presentations.

## Files

- `demo.html` - Interactive demo showcasing blur hero section
- `style.css` - All hero section styles

## Features

### Blur Entrance Animation
- Smooth blur-to-focus transitions on all elements
- Staggered animation delays for visual flow
- Configurable blur intensity via CSS custom properties

### Components
- Floating background shapes with animations
- Gradient text highlighting
- Glass-morphism styled badge
- Primary and secondary CTA buttons
- Stats display with large numbers
- Scroll indicator with animated line

### Accessibility
- Keyboard navigation support
- Focus visible states
- `prefers-reduced-motion` support

## Usage

```html
<link rel="stylesheet" href="./style.css">

<section class="ease-hero-sb">
  <div class="ease-hero-bg-shapes-sb">
    <div class="ease-hero-shape-sb"></div>
  </div>
  
  <div class="ease-hero-content-sb">
    <div class="ease-hero-badge-sb">Your Badge</div>
    <h1 class="ease-hero-title-sb">Your Title</h1>
    <p class="ease-hero-desc-sb">Your description</p>
    <div class="ease-hero-cta-sb">
      <a class="ease-hero-btn-sb ease-hero-btn-primary-sb">Primary</a>
      <a class="ease-hero-btn-sb ease-hero-btn-secondary-sb">Secondary</a>
    </div>
  </div>
</section>
```

## CSS Custom Properties

```css
.ease-hero-sb {
  --ease-hero-duration: 0.8s;
  --ease-hero-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-hero-blur: 15px;
  --ease-hero-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## Classes

| Class | Description |
|-------|-------------|
| `.ease-hero-sb` | Main hero container |
| `.ease-hero-bg-shapes-sb` | Background decorations container |
| `.ease-hero-shape-sb` | Floating shape elements |
| `.ease-hero-content-sb` | Content wrapper |
| `.ease-hero-badge-sb` | Badge/callout |
| `.ease-hero-title-sb` | Main title |
| `.ease-hero-desc-sb` | Description text |
| `.ease-hero-cta-sb` | CTA buttons container |
| `.ease-hero-btn-sb` | Button base style |
| `.ease-hero-stats-sb` | Stats display |
| `.ease-hero-scroll-sb` | Scroll indicator |

## Browser Support

Works in all modern browsers.

## Closes #54634
