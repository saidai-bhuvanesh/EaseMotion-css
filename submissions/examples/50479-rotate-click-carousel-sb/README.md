# Rotate-Click Carousel for Interactive Interface Layouts

A pure CSS animated carousel component with rotate transition effects for interactive interfaces.

## Files

- `demo.html` - Interactive demo showcasing rotate carousel
- `style.css` - All carousel styles with dark tech theme

## Features

### Rotate-Click Animation
- Smooth 3D rotate transitions between slides
- Card hover effects with rotation
- Icon rotation on interaction
- Configurable rotate angle via CSS custom properties

### Interactive Components
- Service cards with icons
- Stat displays with large numbers
- Decorative circles
- Navigation dots with rotation animation

### Accessibility
- Full ARIA labels
- Keyboard navigation
- Focus visible states
- `prefers-reduced-motion` support

## Usage

```html
<link rel="stylesheet" href="./style.css">

<div class="ease-rotate-carousel-sb">
  <input type="radio" name="carousel" id="rotate1" checked>
  <input type="radio" name="carousel" id="rotate2">
  
  <div class="ease-rotate-track-sb">
    <div class="ease-rotate-slide-sb">
      <div class="ease-rotate-card-sb">
        <!-- Content -->
      </div>
    </div>
  </div>
  
  <nav class="ease-rotate-nav-sb">
    <label class="ease-rotate-dot-sb" for="rotate1"></label>
    <label class="ease-rotate-dot-sb" for="rotate2"></label>
  </nav>
</div>
```

## CSS Custom Properties

```css
.ease-rotate-carousel-sb {
  --ease-carousel-duration: 0.7s;
  --ease-carousel-ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-rotate-angle: 5deg;
  --ease-carousel-accent: #ef4444;
}
```

## Classes

| Class | Description |
|-------|-------------|
| `.ease-rotate-carousel-sb` | Main carousel container |
| `.ease-rotate-track-sb` | Slides container with perspective |
| `.ease-rotate-slide-sb` | Individual slide |
| `.ease-rotate-card-sb` | Card with rotate effect |
| `.ease-rotate-grid-sb` | Content grid |
| `.ease-service-card-sb` | Service card with hover rotate |
| `.ease-stat-display-sb` | Stats display container |
| `.ease-rotate-nav-sb` | Navigation container |
| `.ease-rotate-dot-sb` | Navigation dots with rotation |

## Browser Support

Works in all modern browsers with 3D transform support.

## Closes #50479, #50477
