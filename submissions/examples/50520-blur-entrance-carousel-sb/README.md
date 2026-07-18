# Blur-Entrance Carousel for Accessible Web Layouts

A pure CSS animated carousel component with smooth blur transition effects, designed for accessible web interfaces.

## Files

- `demo.html` - Interactive demo showcasing blur-entrance carousel
- `style.css` - All carousel styles with accessibility features

## Features

### Blur Entrance Animation
- Smooth blur-to-focus transitions between slides
- Scale and opacity combined with blur for visual depth
- Configurable blur intensity via CSS custom properties

### Accessibility Features
- Full ARIA roles and labels
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- `prefers-reduced-motion` support
- Focus visible indicators

### Components
- Feature lists with checkmark icons
- Stats grid with value cards
- CTA buttons with hover/focus states
- Navigation dots with active indicators
- Mockup visualizations

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly navigation dots

## Usage

```html
<link rel="stylesheet" href="./style.css">

<div class="ease-carousel-sb">
  <input type="radio" name="carousel" id="slide1" checked>
  <input type="radio" name="carousel" id="slide2">
  <input type="radio" name="carousel" id="slide3">
  
  <div class="ease-carousel-track-sb">
    <div class="ease-carousel-slide-sb">
      <div class="ease-carousel-card-sb">
        <!-- Slide content -->
      </div>
    </div>
  </div>
  
  <nav class="ease-carousel-nav-sb">
    <label class="ease-carousel-dot-sb" for="slide1"></label>
    <label class="ease-carousel-dot-sb" for="slide2"></label>
    <label class="ease-carousel-dot-sb" for="slide3"></label>
  </nav>
</div>
```

## CSS Custom Properties

```css
.ease-carousel-sb {
  --ease-carousel-duration: 0.6s;
  --ease-carousel-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-carousel-blur: 10px;
  --ease-carousel-accent: #0284c7;
  --ease-carousel-text: #475569;
}
```

## Classes

| Class | Description |
|-------|-------------|
| `.ease-carousel-sb` | Main container with CSS variables |
| `.ease-carousel-track-sb` | Slides container |
| `.ease-carousel-slide-sb` | Individual slide wrapper |
| `.ease-carousel-card-sb` | Slide content card |
| `.ease-content-grid-sb` | Content layout grid |
| `.ease-card-content-sb` | Text content area |
| `.ease-card-visual-sb` | Visual/mockup area |
| `.ease-carousel-nav-sb` | Navigation container |
| `.ease-carousel-dot-sb` | Navigation dots |
| `.ease-feature-list-sb` | Feature list |
| `.ease-stat-card-sb` | Stats display card |

## Browser Support

Works in all modern browsers. Uses CSS custom properties, animations, and flexbox.

## Closes #50520
