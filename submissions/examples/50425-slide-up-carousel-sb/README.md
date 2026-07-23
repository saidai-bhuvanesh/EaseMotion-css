# Slide-Up Carousel for SaaS Showcase

A pure CSS animated Carousel component with smooth slide-up interaction transitions, styled for SaaS showcase interfaces.

## Files

- `demo.html` - Interactive demo showing light and dark carousel themes
- `style.css` - All carousel styles with slide-up animations

## Features

### Slide-Up Animation
- Smooth vertical slide transitions between slides
- Staggered content animations (text, visual, features)
- Fade and zoom effects for enhanced visual appeal
- CSS custom properties for easy customization

### Two Theme Variants
- **Light Theme**: Clean, professional SaaS appearance
- **Dark Theme**: Modern, sleek SaaS showcase

### Components
- Feature lists with icon badges
- Stats display grid
- CTA buttons with gradient effects
- Mockup visualizations
- Navigation dots

### Accessibility
- Full ARIA support with proper roles
- Keyboard navigation support
- Focus visible states
- Reduced motion support via `prefers-reduced-motion`

## Usage

```html
<link rel="stylesheet" href="./style.css">

<div class="ease-carousel-sb">
  <input type="radio" name="carousel" id="slide1" checked>
  <input type="radio" name="carousel" id="slide2">
  
  <div class="ease-carousel-track-sb">
    <div class="ease-carousel-slide-sb">
      <div class="ease-carousel-card-sb">
        <!-- Slide content -->
      </div>
    </div>
    <!-- More slides -->
  </div>
  
  <nav class="ease-carousel-nav-sb">
    <label class="ease-carousel-dot-sb" for="slide1"></label>
    <label class="ease-carousel-dot-sb" for="slide2"></label>
  </nav>
</div>
```

## CSS Custom Properties

```css
.ease-carousel-sb {
  --ease-carousel-duration: 0.6s;
  --ease-carousel-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-carousel-interval: 5s;
  --ease-carousel-bg: #f8fafc;
  --ease-carousel-accent: #6366f1;
  --ease-carousel-text: #475569;
}
```

## Classes

| Class | Description |
|-------|-------------|
| `.ease-carousel-sb` | Main container with CSS variables |
| `.ease-saas-carousel-sb` | Dark SaaS theme |
| `.ease-carousel-track-sb` | Slides container |
| `.ease-carousel-slide-sb` | Individual slide wrapper |
| `.ease-carousel-card-sb` | Slide content card |
| `.ease-slide-content-sb` | Content layout grid |
| `.ease-slide-text-sb` | Text content area |
| `.ease-slide-visual-sb` | Visual/mockup area |
| `.ease-carousel-nav-sb` | Navigation container |
| `.ease-carousel-dot-sb` | Navigation dots |

## Browser Support

Works in all modern browsers. Uses CSS custom properties and standard CSS animations.

Closes #50425
