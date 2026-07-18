# Scale-Hover Carousel for Interactive Interface Layouts

A pure CSS animated carousel component with scale and hover effects for interactive interfaces.

## Files

- `demo.html` - Interactive demo showcasing scale carousel
- `style.css` - All carousel styles with creative theme

## Features

### Scale-Hover Animation
- Smooth scale transitions between slides
- Hover effect on cards with enhanced shadow
- Configurable scale range via CSS custom properties
- Floating decorative elements

### Interactive Components
- Feature cards with icons
- Image placeholders
- Gradient badges
- Interactive feature grid

### Accessibility
- Full ARIA labels
- Keyboard navigation
- Focus visible states
- `prefers-reduced-motion` support

## Usage

```html
<link rel="stylesheet" href="./style.css">

<div class="ease-scale-carousel-sb">
  <input type="radio" name="carousel" id="scale1" checked>
  <input type="radio" name="carousel" id="scale2">
  
  <div class="ease-scale-track-sb">
    <div class="ease-scale-slide-sb">
      <div class="ease-scale-card-sb">
        <!-- Content -->
      </div>
    </div>
  </div>
  
  <nav class="ease-scale-nav-sb">
    <label class="ease-scale-dot-sb" for="scale1"></label>
    <label class="ease-scale-dot-sb" for="scale2"></label>
  </nav>
</div>
```

## CSS Custom Properties

```css
.ease-scale-carousel-sb {
  --ease-carousel-duration: 0.6s;
  --ease-carousel-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-scale-min: 0.9;
  --ease-scale-max: 1.05;
  --ease-carousel-accent: #667eea;
}
```

## Classes

| Class | Description |
|-------|-------------|
| `.ease-scale-carousel-sb` | Main carousel container |
| `.ease-scale-track-sb` | Slides container |
| `.ease-scale-slide-sb` | Individual slide |
| `.ease-scale-card-sb` | Card with scale effect |
| `.ease-scale-grid-sb` | Content grid |
| `.ease-feature-item-sb` | Feature card |
| `.ease-image-container-sb` | Image placeholder |
| `.ease-scale-nav-sb` | Navigation container |
| `.ease-scale-dot-sb` | Navigation dots |

## Browser Support

Works in all modern browsers.

## Closes #50493, #50492
