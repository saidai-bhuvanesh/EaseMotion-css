# Fade-In Dropdown for Creative Portfolio Layouts

A pure CSS dropdown component with smooth fade transitions for creative portfolio interfaces.

## Files

- `demo.html` - Interactive demo showcasing dropdown
- `style.css` - All dropdown styles

## Features

### Fade-In Animation
- Smooth opacity fade transition
- Subtle translateY animation
- Arrow rotation animation
- Item hover effects

### Components
- Clean minimal trigger
- Menu with headers
- Items with icons and keyboard shortcuts
- Dividers

### Accessibility
- ARIA attributes for screen readers
- Keyboard navigation
- Focus visible states
- `prefers-reduced-motion` support

## Usage

```html
<link rel="stylesheet" href="./style.css">

<div class="ease-dropdown-fade-sb">
  <button class="ease-dropdown-trigger-fade-sb" aria-expanded="false">
    <span class="ease-dropdown-icon-fade-sb">📁</span>
    <span class="ease-dropdown-label-fade-sb">Label</span>
    <span class="ease-dropdown-arrow-fade-sb">▼</span>
  </button>
  <div class="ease-dropdown-menu-fade-sb" role="menu">
    <div class="ease-dropdown-header-fade-sb">Header</div>
    <a href="#" class="ease-dropdown-item-fade-sb" role="menuitem">
      <span class="ease-dropdown-item-icon-fade-sb">✨</span>
      <span class="ease-dropdown-item-text-fade-sb">Item</span>
    </a>
  </div>
</div>
```

## CSS Custom Properties

```css
.ease-dropdown-fade-sb {
  --ease-dropdown-duration: 0.4s;
  --ease-dropdown-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-dropdown-accent: #ff7f50;
  --ease-dropdown-bg: #1f1f1f;
}
```

## Browser Support

Works in all modern browsers.

## Closes #54614
