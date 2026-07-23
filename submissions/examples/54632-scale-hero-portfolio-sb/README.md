# Scale-Hover Hero Section for Creative Portfolio Layouts

A pure CSS hero section with scale hover effects, designed for creative portfolio presentations.

## Files

- `demo.html` - Interactive demo showcasing scale hero section
- `style.css` - All hero section styles

## Features

### Scale-Hover Animation
- Smooth scale-in entrance animations
- Hover effects on portfolio cards with lift and glow
- Configurable scale intensity via CSS custom properties
- Floating particle effects

### Components
- Grid background pattern
- Glowing orbs
- Portfolio card grid with hover interactions
- Gradient text highlighting
- Primary and secondary CTA buttons
- Animated particles

### Accessibility
- Keyboard navigation support
- Focus visible states
- `prefers-reduced-motion` support

## Usage

```html
<link rel="stylesheet" href="./style.css">

<section class="ease-hero-scale-sb">
  <div class="ease-hero-content-scale-sb">
    <div class="ease-hero-badge-scale-sb">Your Badge</div>
    <h1 class="ease-hero-title-scale-sb">Your Title</h1>
    <p class="ease-hero-desc-scale-sb">Your description</p>
    <div class="ease-hero-portfolio-sb">
      <div class="ease-hero-portfolio-item-sb">...</div>
    </div>
    <div class="ease-hero-cta-scale-sb">
      <a class="ease-hero-btn-scale-sb ease-hero-btn-primary-scale-sb">Primary</a>
      <a class="ease-hero-btn-scale-sb ease-hero-btn-secondary-scale-sb">Secondary</a>
    </div>
  </div>
</section>
```

## CSS Custom Properties

```css
.ease-hero-scale-sb {
  --ease-hero-duration: 0.8s;
  --ease-hero-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-scale-hover: 1.05;
  --ease-hero-accent: #00d9ff;
  --ease-hero-bg: #0f0f23;
}
```

## Classes

| Class | Description |
|-------|-------------|
| `.ease-hero-scale-sb` | Main hero container |
| `.ease-hero-content-scale-sb` | Content wrapper |
| `.ease-hero-badge-scale-sb` | Badge/callout |
| `.ease-hero-title-scale-sb` | Main title |
| `.ease-hero-desc-scale-sb` | Description text |
| `.ease-hero-portfolio-sb` | Portfolio cards grid |
| `.ease-hero-portfolio-item-sb` | Individual portfolio card |
| `.ease-hero-cta-scale-sb` | CTA buttons container |
| `.ease-hero-btn-scale-sb` | Button base style |
| `.ease-hero-particle-sb` | Floating particles |

## Browser Support

Works in all modern browsers.

## Closes #54632
