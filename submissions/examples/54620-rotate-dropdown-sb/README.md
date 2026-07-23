# Rotate-Fade Dropdown for Creative Portfolio Layouts

A pure CSS dropdown component with rotate and fade transitions for creative portfolio interfaces.

## Files

- `demo.html` - Interactive demo showcasing dropdown
- `style.css` - All dropdown styles

## Features

### Rotate-Fade Animation
- Smooth rotateX and fade transitions
- Arrow rotation animation
- Item hover with translate effect

### Components
- Dropdown trigger button
- Animated arrow indicator
- Menu items with icons
- Dividers
- Badges

### Accessibility
- ARIA attributes for screen readers
- Keyboard navigation
- Focus visible states
- `prefers-reduced-motion` support

## Usage

```html
<link rel="stylesheet" href="./style.css">

<div class="ease-dropdown-sb">
  <button class="ease-dropdown-trigger-sb" aria-expanded="false">
    <span>Label</span>
    <span class="ease-dropdown-arrow-sb">▼</span>
  </button>
  <div class="ease-dropdown-menu-sb" role="menu">
    <a href="#" class="ease-dropdown-item-sb" role="menuitem">
      <span class="ease-dropdown-item-icon-sb">✨</span>
      <span>Item</span>
    </a>
    <div class="ease-dropdown-divider-sb"></div>
    <a href="#" class="ease-dropdown-item-sb" role="menuitem">Another</a>
  </div>
</div>
```

## CSS Custom Properties

```css
.ease-dropdown-sb {
  --ease-dropdown-duration: 0.5s;
  --ease-dropdown-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-dropdown-bg: #1a1a2e;
  --ease-dropdown-accent: #ff6b9d;
}
```

## Browser Support

Works in all modern browsers.

## Closes #54620
