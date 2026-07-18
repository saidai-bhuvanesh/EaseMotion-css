# Skew-Active Carousel for Interactive Interface Layouts

A pure CSS animated carousel component with smooth skew transition effects, designed for interactive interfaces.

## Files

- `demo.html` - Interactive demo showcasing skew carousel
- `style.css` - All carousel styles with interactive components

## Features

### Skew-Active Animation
- Dynamic skew transitions between slides
- Smooth entrance animations with horizontal movement
- Configurable skew angle via CSS custom properties

### Interactive Components
- Interactive cards with hover effects
- Progress bars with animated fills
- Tag badges
- Arrow indicators with animations

### Accessibility
- Full ARIA labels
- Keyboard navigation
- Focus visible states
- `prefers-reduced-motion` support

## Usage

```html
<link rel="stylesheet" href="./style.css">

<div class="ease-skew-carousel-sb">
  <input type="radio" name="carousel" id="skew1" checked>
  <input type="radio" name="carousel" id="skew2">
  
  <div class="ease-skew-track-sb">
    <div class="ease-skew-slide-sb">
      <div class="ease-skew-card-sb">
        <!-- Content -->
      </div>
    </div>
  </div>
  
  <nav class="ease-skew-nav-sb">
    <label class="ease-skew-dot-sb" for="skew1"></label>
    <label class="ease-skew-dot-sb" for="skew2"></label>
  </nav>
</div>
```

## CSS Custom Properties

```css
.ease-skew-carousel-sb {
  --ease-carousel-duration: 0.7s;
  --ease-carousel-ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-skew-angle: 3deg;
  --ease-carousel-accent: #8b5cf6;
  --ease-carousel-bg: #0f172a;
}
```

## Classes

| Class | Description |
|-------|-------------|
| `.ease-skew-carousel-sb` | Main carousel container |
| `.ease-skew-track-sb` | Slides container |
| `.ease-skew-slide-sb` | Individual slide |
| `.ease-skew-card-sb` | Card with skew effect |
| `.ease-skew-grid-sb` | Content grid |
| `.ease-interactive-card-sb` | Interactive card with hover |
| `.ease-progress-fill-sb` | Animated progress bar |
| `.ease-tag-sb` | Tag badges |
| `.ease-skew-nav-sb` | Navigation container |
| `.ease-skew-dot-sb` | Navigation dots |

## Browser Support

Works in all modern browsers.

## Closes #50507, #50506
