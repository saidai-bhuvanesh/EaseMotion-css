# Elastic Bounce Tabs for Dashboard Analytics

A pure CSS animated Tabs component with smooth elastic bounce interaction transitions, styled for dashboard analytics interfaces.

## Files

- `demo.html` - Interactive demo showing multiple tab styles
- `style.css` - All tab styles with elastic bounce animations

## Features

### Elastic Bounce Animation
- Smooth elastic bounce-in effect when selecting tabs
- Bounce-out animation when deselecting
- Customizable timing and easing via CSS custom properties

### Accessibility
- Full ARIA support with proper roles
- Keyboard navigation (Arrow keys, Home, End)
- Focus visible states
- Reduced motion support via `prefers-reduced-motion`

### Customization
CSS custom properties for easy customization:
```css
--tabs-transition-duration: 0.4s;
--tabs-bounce-duration: 0.6s;
--tabs-ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
--tabs-active-scale: 1.05;
--tabs-bg-active: #3b82f6;
```

## Tab Styles

### Dashboard Analytics (Default)
Modern dark theme with gradient backgrounds, perfect for analytics dashboards.

### Underline Style
Minimal underline indicator that slides in with bounce animation.

### Pill Style
Rounded pill-shaped tabs with gradient active state.

## Usage

```html
<link rel="stylesheet" href="./style.css">

<div class="elastic-tabs-sb dashboard-tabs-sb" role="tablist">
  <div class="tabs-list-sb">
    <button class="tabs-trigger-sb" role="tab" aria-selected="true">
      Overview
    </button>
    <button class="tabs-trigger-sb" role="tab" aria-selected="false">
      Revenue
    </button>
  </div>
  
  <div class="tabs-content-sb">
    <div class="tabs-panel-sb" role="tabpanel" aria-hidden="false">
      Content for Overview
    </div>
    <div class="tabs-panel-sb" role="tabpanel" aria-hidden="true">
      Content for Revenue
    </div>
  </div>
</div>
```

### JavaScript for Interactivity

```javascript
document.querySelectorAll('.elastic-tabs-sb').forEach(tabGroup => {
  const triggers = tabGroup.querySelectorAll('.tabs-trigger-sb');
  const panels = tabGroup.querySelectorAll('.tabs-panel-sb');
  
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

## Classes

| Class | Description |
|-------|-------------|
| `.elastic-tabs-sb` | Main container with CSS variables |
| `.dashboard-tabs-sb` | Dashboard dark theme variant |
| `.underline-tabs-sb` | Underline indicator style |
| `.pill-tabs-sb` | Pill-shaped tab style |
| `.tabs-list-sb` | Tab button container |
| `.tabs-trigger-sb` | Individual tab button |
| `.tabs-content-sb` | Panel container |
| `.tabs-panel-sb` | Individual panel content |

## Browser Support

Works in all modern browsers. Uses CSS custom properties and standard CSS animations.

Closes #50138
