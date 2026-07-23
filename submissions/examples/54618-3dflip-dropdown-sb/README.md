# 3D-Flip Dropdown for Creative Portfolio Layouts

A pure CSS dropdown component with 3D flip transitions for creative portfolio interfaces.

## Files

- `demo.html` - Interactive demo showcasing dropdown
- `style.css` - All dropdown styles

## Features

### 3D-Flip Animation
- Smooth 3D rotateX flip transition
- Perspective-based depth effect
- Hover lift and glow effects
- Item slide-in animation

### Components
- Gradient trigger button
- 3D animated menu
- Items with icons and badges
- Gradient dividers
- Hover highlight effects

### Accessibility
- ARIA attributes for screen readers
- Keyboard navigation
- Focus visible states
- `prefers-reduced-motion` support

## Usage

```html
<link rel="stylesheet" href="./style.css">

<div class="ease-dropdown-3d-sb">
  <button class="ease-dropdown-trigger-3d-sb" aria-expanded="false">
    <span class="ease-dropdown-trigger-icon-sb">🎨</span>
    <span class="ease-dropdown-trigger-text-sb">Label</span>
    <span class="ease-dropdown-arrow-3d-sb">▼</span>
  </button>
  <div class="ease-dropdown-menu-3d-sb" role="menu">
    <a href="#" class="ease-dropdown-item-3d-sb" role="menuitem">
      <span class="ease-dropdown-item-icon-3d-sb">✨</span>
      <span class="ease-dropdown-item-text-3d-sb">Item</span>
    </a>
  </div>
</div>
```

## CSS Custom Properties

```css
.ease-dropdown-3d-sb {
  --ease-dropdown-duration: 0.6s;
  --ease-dropdown-ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-dropdown-accent: #a855f7;
  --ease-dropdown-bg: #1e1e2f;
}
```

## Browser Support

Works in all modern browsers with 3D transform support.

## Closes #54618
