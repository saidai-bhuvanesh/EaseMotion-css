# Typewriter Carousel Component

Animated text carousel with typewriter effect for dynamic content display.

## Files

- `demo.html` - Demo page showing various carousel styles
- `style.css` - Carousel styles with typewriter animations

## Usage

Open `demo.html` in a browser to see the typewriter carousel animation.

## Features

### Typewriter Animation
- Smooth cycle through text items
- Blinking cursor effect
- Fade in/out transitions

### Variants
- Basic typewriter carousel
- With progress indicator
- Large text variant
- Inline variant for hero banners

### Use Cases
- Hero section taglines
- Marketing messages
- Feature highlights
- Welcome messages

## Classes

| Class | Description |
|-------|-------------|
| `ease-typewriter-carousel-sb` | Main carousel container |
| `ease-typewriter-track-sb` | Container for items |
| `ease-typewriter-item-sb` | Individual text item |
| `ease-typewriter-cursor-sb` | Blinking cursor |
| `ease-typewriter-progress-sb` | Progress bar variant |
| `ease-typewriter-large-sb` | Large text variant |
| `ease-typewriter-inline-sb` | Inline display variant |

## Usage

```html
<div class="ease-typewriter-carousel-sb" aria-live="polite">
  <div class="ease-typewriter-track-sb">
    <span class="ease-typewriter-item-sb">First text</span>
    <span class="ease-typewriter-item-sb">Second text</span>
    <span class="ease-typewriter-item-sb">Third text</span>
  </div>
  <div class="ease-typewriter-cursor-sb"></div>
</div>
```

Closes #41416
