# Horizontal Roll Tabs for E-Commerce Checkout

A pure CSS animated Tabs component with smooth horizontal roll interaction transitions, styled for e-commerce checkout interfaces.

## Files

- `demo.html` - Interactive demo showing checkout and step-based tabs
- `style.css` - All tab styles with horizontal roll animations

## Features

### Horizontal Roll Animation
- Smooth roll-in/roll-out effect when selecting tabs
- Background indicator slides horizontally
- CSS custom properties for easy customization

### E-Commerce Components
- Shopping cart summary with item listings
- Multi-step checkout forms
- Progress indicators
- Form input styling

### Accessibility
- Full ARIA support with proper roles
- Keyboard navigation (Arrow keys, Home, End)
- Focus visible states
- Reduced motion support via `prefers-reduced-motion`

## Tab Styles

### Checkout Style (Default)
Modern e-commerce theme with checkout form elements.

### Progress Steps
Step-by-step process indicators with roll transitions.

### Simple Navigation
Minimal underline style for product information pages.

## Usage

```html
<link rel="stylesheet" href="./style.css">

<div class="ease-roll-tabs-sb ease-checkout-tabs-sb" role="tablist">
  <div class="ease-roll-list-sb">
    <button class="ease-roll-trigger-sb" role="tab" aria-selected="true">
      <span class="ease-icon-sb">🛒</span> Cart
    </button>
    <button class="ease-roll-trigger-sb" role="tab" aria-selected="false">
      <span class="ease-icon-sb">🚚</span> Shipping
    </button>
  </div>
  
  <div class="ease-roll-content-sb">
    <div class="ease-roll-panel-sb" role="tabpanel" aria-hidden="false">
      Cart content
    </div>
    <div class="ease-roll-panel-sb" role="tabpanel" aria-hidden="true">
      Shipping content
    </div>
  </div>
</div>
```

### JavaScript for Interactivity

```javascript
document.querySelectorAll('.ease-roll-tabs-sb').forEach(tabGroup => {
  const triggers = tabGroup.querySelectorAll('.ease-roll-trigger-sb');
  const panels = tabGroup.querySelectorAll('.ease-roll-panel-sb');
  
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const targetId = trigger.getAttribute('aria-controls');
      
      triggers.forEach(t => {
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });
      trigger.setAttribute('aria-selected', 'true');
      trigger.setAttribute('tabindex', '0');
      
      panels.forEach(p => p.setAttribute('aria-hidden', 'true'));
      document.getElementById(targetId).setAttribute('aria-hidden', 'false');
    });
  });
});
```

## CSS Custom Properties

```css
.ease-roll-tabs-sb {
  --ease-roll-duration: 0.4s;
  --ease-roll-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-roll-bg: #ffffff;
  --ease-roll-bg-active: #6366f1;
  --ease-roll-indicator: #6366f1;
  --ease-roll-text: #64748b;
  --ease-roll-text-active: #ffffff;
}
```

## Classes

| Class | Description |
|-------|-------------|
| `.ease-roll-tabs-sb` | Main container with CSS variables |
| `.ease-checkout-tabs-sb` | E-commerce checkout theme |
| `.ease-simple-roll-sb` | Simple navigation style |
| `.ease-roll-list-sb` | Tab button container |
| `.ease-roll-trigger-sb` | Individual tab button |
| `.ease-roll-content-sb` | Panel container |
| `.ease-roll-panel-sb` | Individual panel content |

## Browser Support

Works in all modern browsers. Uses CSS custom properties and standard CSS animations.

Closes #50289
