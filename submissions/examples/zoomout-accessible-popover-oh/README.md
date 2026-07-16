# Zoom-Out Accessible Web Popover

## What does this do?
A pure CSS animated popover with zoom-out animation, designed for Accessible Web layouts with accessibility features, keyboard navigation, and screen reader support.

## How is it used?
```html
<div class="popover-container">
  <button class="access-btn" aria-label="More options" aria-haspopup="true">
    <svg>...</svg>
  </button>
  <div class="zoom-popover" role="tooltip" aria-label="Quick options">
    <div class="zoom-header">
      <span class="zoom-icon" aria-hidden="true">
        <svg>...</svg>
      </span>
      <div class="zoom-info">
        <h4 id="popover-title">Accessibility Options</h4>
        <p>Customize your experience</p>
      </div>
    </div>
    <div class="zoom-actions" role="menu">
      <button class="zoom-action" role="menuitem">
        <span class="action-icon" aria-hidden="true">
          <svg>...</svg>
        </span>
        <span>High Contrast</span>
      </button>
      <button class="zoom-action" role="menuitem">
        <span class="action-icon" aria-hidden="true">
          <svg>...</svg>
        </span>
        <span>Screen Reader</span>
      </button>
      <button class="zoom-action" role="menuitem">
        <span class="action-icon" aria-hidden="true">
          <svg>...</svg>
        </span>
        <span>Text Size</span>
      </button>
      <button class="zoom-action" role="menuitem">
        <span class="action-icon" aria-hidden="true">
          <svg>...</svg>
        </span>
        <span>Reduce Motion</span>
      </button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Zoom-out animation** with accessible reveals
- **Accessible Web optimized** with keyboard navigation and ARIA support
- **Multiple animation variants** (zoom, scale, pop) for different UX needs
- **Theme options** (blue, teal, gray) with accessible contrast ratios
- **Accessibility ready** structure with high contrast and focus indicators
- **Screen reader support** with proper ARIA attributes

## Animation Variants
| Class | Effect |
|-------|--------|
| `.zoom` | Zoom scale animation |
| `.scale` | Scale pulse animation |
| `.pop` | Pop spring animation |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Blue | `.theme-blue` | #2563eb (default) |
| Teal | `.theme-teal` | #0d9488 |
| Gray | `.theme-gray` | #4b5563 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--zoom-duration` | `0.5s` | Animation duration |
| `--zoom-ease` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Easing function |

## Accessibility Features
- ARIA labels on buttons and popover
- Role attributes for proper semantics
- Focus-visible outlines for keyboard users
- High contrast color options
- Screen reader friendly structure
- Reduced motion support

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Zoom-out animation effect
- ✅ Accessible Web styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ High contrast support
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
