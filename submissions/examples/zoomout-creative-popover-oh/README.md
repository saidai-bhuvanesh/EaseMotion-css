# Zoom-Out Creative Portfolio Popover

## What does this do?
A pure CSS animated popover with zoom-out animation, designed for Creative Portfolio layouts with project previews, tags, and creative design.

## How is it used?
```html
<div class="popover-container">
  <button class="creative-btn" aria-label="View project">
    <svg>...</svg>
  </button>
  <div class="zoom-popover" role="tooltip">
    <div class="zoom-preview">
      <div class="preview-icon">
        <svg>...</svg>
      </div>
    </div>
    <div class="zoom-content">
      <h4>Brand Identity Project</h4>
      <p class="zoom-desc">Modern design system for tech startup</p>
      <div class="zoom-tags">
        <span class="tag">Branding</span>
        <span class="tag">UI/UX</span>
      </div>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Zoom-out animation** with creative reveals
- **Creative Portfolio optimized** with project previews and tags
- **Multiple animation variants** (zoom, scale, pop) for different UX needs
- **Theme options** (violet, orange, cyan) to match creative aesthetics
- **Portfolio ready** structure with project cards
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.zoom` | Zoom pulse animation |
| `.scale` | Scale pulse animation |
| `.pop` | Pop spring animation |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Violet | `.theme-violet` | #8b5cf6 (default) |
| Orange | `.theme-orange` | #f97316 |
| Cyan | `.theme-cyan` | #06b6d4 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--zoom-duration` | `0.5s` | Animation duration |
| `--zoom-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Zoom-out animation effect
- ✅ Creative Portfolio styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Project preview structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
