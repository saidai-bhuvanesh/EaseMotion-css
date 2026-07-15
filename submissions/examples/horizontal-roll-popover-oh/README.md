# Horizontal Roll Popover

## What does this do?
A pure CSS animated popover with horizontal roll-in animation, designed for Interactive Interface layouts with navigation items and icons.

## How is it used?
```html
<div class="popover-container">
  <button class="trigger-btn" aria-label="Show options">
    <svg>...</svg>
    Options
  </button>
  <div class="roll-popover" role="tooltip">
    <div class="roll-item" style="--delay: 0s">
      <span class="roll-icon">
        <svg>...</svg>
      </span>
      <span>Dashboard</span>
    </div>
    <div class="roll-item" style="--delay: 0.05s">
      <span class="roll-icon">
        <svg>...</svg>
      </span>
      <span>Projects</span>
    </div>
    <div class="roll-item" style="--delay: 0.1s">
      <span class="roll-icon">
        <svg>...</svg>
      </span>
      <span>Profile</span>
    </div>
    <div class="roll-item" style="--delay: 0.15s">
      <span class="roll-icon">
        <svg>...</svg>
      </span>
      <span>Settings</span>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Horizontal roll animation** with smooth left-to-right reveal
- **Interactive Interface optimized** with navigation items and icons
- **Multiple animation variants** (sweep, wave, zip) for different UX needs
- **Theme options** (indigo, emerald, orange) to match brand identity
- **Navigation ready** structure with icon items
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.sweep` | Sweep roll from left |
| `.wave` | Wave scale roll |
| `.zip` | Clip-path zip roll |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Indigo | `.theme-indigo` | #6366f1 (default) |
| Emerald | `.theme-emerald` | #10b981 |
| Orange | `.theme-orange` | #f97316 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--roll-duration` | `0.5s` | Animation duration |
| `--roll-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Horizontal roll animation effect
- ✅ Interactive Interface styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Navigation-ready structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
