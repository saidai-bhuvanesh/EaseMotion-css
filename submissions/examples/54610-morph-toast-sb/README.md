# Morph-Glow Toast for Creative Portfolio Layouts

A pure CSS toast notification component with morph glow effects for creative portfolio interfaces.

## Files

- `demo.html` - Interactive demo showcasing toast notifications
- `style.css` - All toast styles

## Features

### Morph-Glow Animation
- Circle morph to rounded rectangle animation
- Glowing icon effects
- Progress bar animation
- Smooth entrance from right

### Components
- Toast container
- Icon with glow effect
- Title and message content
- Close button
- Progress indicator
- Success, warning, error variants

### Accessibility
- Full keyboard support
- Focus visible states
- `prefers-reduced-motion` support

## Usage

```html
<link rel="stylesheet" href="./style.css">

<div class="ease-toast-container-sb">
  <div class="ease-toast-sb success">
    <div class="ease-toast-icon-sb">✅</div>
    <div class="ease-toast-content-sb">
      <div class="ease-toast-title-sb">Success!</div>
      <div class="ease-toast-message-sb">Your message here.</div>
    </div>
    <button class="ease-toast-close-sb">×</button>
    <div class="ease-toast-progress-sb"></div>
  </div>
</div>
```

## CSS Custom Properties

```css
.ease-toast-sb {
  --ease-toast-duration: 0.5s;
  --ease-toast-ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-toast-accent: #22d3ee;
  --ease-toast-bg: #1a1a2e;
}
```

## Browser Support

Works in all modern browsers.

## Closes #54610
