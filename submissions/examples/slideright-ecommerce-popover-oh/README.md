# Slide-Right E-Commerce Checkout Popover

## What does this do?
A pure CSS animated popover with slide-right animation, designed for E-Commerce Checkout layouts with cart preview, product items, and checkout CTA.

## How is it used?
```html
<div class="popover-container">
  <button class="ecom-btn" aria-label="View cart">
    <svg>...</svg>
    <span class="ecom-badge">3</span>
  </button>
  <div class="slide-popover" role="tooltip">
    <div class="slide-header">
      <h4>Your Cart</h4>
      <span class="slide-count">3 items</span>
    </div>
    <div class="slide-items">
      <div class="slide-item" style="--delay: 0s">
        <div class="item-image"><svg>...</svg></div>
        <div class="item-info">
          <span class="item-name">Premium Headphones</span>
          <span class="item-price">$299.00</span>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <div class="slide-total">
        <span>Total:</span>
        <span>$498.00</span>
      </div>
      <button class="ecom-cta">Checkout</button>
    </div>
  </div>
</div>
```

## Why is it useful?
- **Slide-right animation** with cart reveals
- **E-Commerce Checkout optimized** with product preview and checkout
- **Multiple animation variants** (slide, scale, sweep) for different UX needs
- **Theme options** (orange, amber, red) to match e-commerce branding
- **Cart ready** structure with items and checkout CTA
- **Accessibility features** including ARIA labels and keyboard focus states

## Animation Variants
| Class | Effect |
|-------|--------|
| `.slide` | Slide horizontal animation |
| `.scale` | Scale animation |
| `.sweep` | Sweep blur animation |

## Color Themes
| Theme | Class | Primary Color |
|-------|-------|--------------|
| Orange | `.theme-orange` | #f97316 (default) |
| Amber | `.theme-amber` | #f59e0b |
| Red | `.theme-red` | #ef4444 |

## CSS Custom Properties
| Property | Default | Description |
|----------|---------|-------------|
| `--slide-duration` | `0.5s` | Animation duration |
| `--slide-ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing function |
| `--delay` | `0.05s` | Per-item delay (set in HTML) |

## Acceptance Criteria
- ✅ Pure CSS implementation (no JavaScript required)
- ✅ Slide-right animation effect
- ✅ E-Commerce Checkout styling
- ✅ Multiple animation variants
- ✅ Multiple color themes
- ✅ Cart structure
- ✅ Keyboard accessible with focus states
- ✅ ARIA attributes for screen readers
- ✅ CSS custom properties for customization
- ✅ Reduced motion support
- ✅ README.md with complete documentation
