# CSS Pulse-Active Popover for E-Commerce Checkout

Pulse-active popover component for e-commerce checkout layouts with smooth animations.

## Files

- `demo.html` - Demo page showing various popover styles
- `style.css` - Popover styles with pulse animations

## Usage

Open `demo.html` in a browser. Hover or focus on triggers to see popovers with pulse effects.

## Features

### Popover Variants
- Basic popover
- Success popover (green)
- Info popover (blue)
- Warning popover (orange)
- Discount popover (purple)

### Pulse Animations
- General pulse effect
- Text pulse effect
- Success pulse glow
- Warning pulse glow

### E-Commerce Use Cases
- Product details tooltip
- Cart summary info
- Payment status confirmation
- Discount code reveal
- Stock availability alert

## Classes

| Class | Description |
|-------|-------------|
| `ease-popover-trigger-sb` | Popover trigger button |
| `ease-popover-sb` | Popover container |
| `ease-popover-header-sb` | Popover header |
| `ease-popover-body-sb` | Popover body content |
| `ease-popover-close-sb` | Close button |
| `ease-popover-success-sb` | Success variant |
| `ease-popover-info-sb` | Info variant |
| `ease-popover-warning-sb` | Warning variant |
| `ease-pulse-sb` | Pulse animation |
| `ease-pulse-text-sb` | Text pulse animation |
| `ease-pulse-success-sb` | Success pulse glow |
| `ease-pulse-warning-sb` | Warning pulse glow |

## Usage

```html
<div class="popover-demo">
  <button class="ease-popover-trigger-sb" aria-describedby="popover-1">
    Info
  </button>
  <div class="ease-popover-sb" id="popover-1" role="tooltip">
    <div class="ease-popover-body-sb">
      Popover content here
    </div>
  </div>
</div>
```

Closes #46525
