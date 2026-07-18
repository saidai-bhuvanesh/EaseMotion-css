# CSS Fade-Out Tooltip for Creative Portfolio

Elegant fade-out tooltip component for creative portfolio layouts with smooth animations.

## Files

- `demo.html` - Demo page showing various tooltip styles
- `style.css` - Tooltip styles with fade animations

## Usage

Open `demo.html` in a browser. Hover over portfolio items, skill tags, project cards, and timeline items to see the fade-out tooltips.

## Features

### Fade Animation
- Smooth fade-in and fade-out
- Slide-up effect on hover
- Cubic-bezier easing for natural motion

### Tooltip Positions
- Bottom (default)
- Top variant available

### Use Cases
- Portfolio gallery with image details
- Skill tags with descriptions
- Project cards with case study links
- Timeline with additional info

## Classes

| Class | Description |
|-------|-------------|
| `ease-fade-tooltip-sb` | Main tooltip container |
| `ease-fade-tooltip-content-sb` | Tooltip content |
| `ease-fade-tooltip-title-sb` | Tooltip title |
| `ease-fade-tooltip-desc-sb` | Tooltip description |
| `ease-fade-tooltip-top-sb` | Top position variant |

## Usage

```html
<div class="ease-fade-tooltip-sb">
  Hover me
  <span class="ease-fade-tooltip-content-sb">
    <span class="ease-fade-tooltip-title-sb">Title</span>
    <span class="ease-fade-tooltip-desc-sb">Description</span>
  </span>
</div>
```

Closes #46238
