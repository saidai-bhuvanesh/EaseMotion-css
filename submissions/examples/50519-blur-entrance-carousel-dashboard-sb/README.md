# Blur-Entrance Carousel for Responsive Dashboard Layouts

A pure CSS animated carousel component with smooth blur transition effects, styled for responsive dashboard interfaces.

## Files

- `demo.html` - Interactive demo showcasing dashboard carousel
- `style.css` - All carousel styles with dashboard components

## Features

### Blur Entrance Animation
- Smooth blur-to-focus transitions with vertical movement
- Configurable blur intensity via CSS custom properties
- Staggered content animations for widget cards

### Dashboard Components
- Stats cards with value indicators
- Chart mockups with animated bars
- Widget cards with change indicators
- Activity list items
- Responsive grid layouts

### Accessibility
- Full ARIA labels
- Keyboard navigation
- Focus visible states
- `prefers-reduced-motion` support

## Usage

```html
<link rel="stylesheet" href="./style.css">

<div class="ease-carousel-dash-sb">
  <input type="radio" name="carousel" id="slide1" checked>
  <input type="radio" name="carousel" id="slide2">
  
  <div class="ease-carousel-track-dash-sb">
    <div class="ease-carousel-slide-dash-sb">
      <div class="ease-carousel-card-dash-sb">
        <!-- Dashboard content -->
      </div>
    </div>
  </div>
  
  <nav class="ease-carousel-nav-dash-sb">
    <label class="ease-carousel-dot-dash-sb" for="slide1"></label>
    <label class="ease-carousel-dot-dash-sb" for="slide2"></label>
  </nav>
</div>
```

## CSS Custom Properties

```css
.ease-carousel-dash-sb {
  --ease-carousel-duration: 0.6s;
  --ease-carousel-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-carousel-blur: 12px;
  --ease-carousel-accent: #22d3ee;
  --ease-carousel-bg: #1e293b;
}
```

## Classes

| Class | Description |
|-------|-------------|
| `.ease-carousel-dash-sb` | Main dashboard carousel container |
| `.ease-carousel-track-dash-sb` | Slides container |
| `.ease-carousel-slide-dash-sb` | Individual slide |
| `.ease-carousel-card-dash-sb` | Card with accent border |
| `.ease-stats-row-sb` | Stats cards grid |
| `.ease-stat-card-dash-sb` | Individual stat card |
| `.ease-chart-container-sb` | Chart mockup |
| `.ease-widget-card-sb` | Sidebar widget card |
| `.ease-list-container-sb` | Activity list |
| `.ease-carousel-nav-dash-sb` | Navigation container |

## Browser Support

Works in all modern browsers.

## Closes #50519
