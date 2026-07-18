# Slide-Right Tabs for Responsive Dashboard

A pure CSS animated Tabs component with smooth slide-right interaction transitions, styled for responsive dashboard interfaces.

## Files

- `demo.html` - Interactive demo showing multiple tab styles
- `style.css` - All tab styles with slide-right animations

## Features

### Slide-Right Animation
- Smooth slide-in effect when selecting tabs
- Slide-out animation when deselecting
- CSS custom properties for easy customization

### Accessibility
- Full ARIA support with proper roles
- Keyboard navigation (Arrow keys, Home, End)
- Focus visible states
- Reduced motion support via `prefers-reduced-motion`

### Responsive Design
- Mobile-friendly with adaptive sizing
- Grid-based dashboard widgets
- Touch-friendly interaction

## Tab Styles

### Dashboard Style (Default)
Modern dark theme with gradient backgrounds, perfect for analytics dashboards.

### Navigation Style
Minimal underline indicator that slides in from the left.

### Pill Style
Rounded pill-shaped tabs with gradient active state.

## Usage

```html
<link rel="stylesheet" href="./style.css">

<div class="ease-slide-tabs-sb ease-dashboard-tabs-sb" role="tablist">
  <div class="ease-tabs-list-sb">
    <button class="ease-tabs-trigger-sb" role="tab" aria-selected="true">
      Analytics
    </button>
    <button class="ease-tabs-trigger-sb" role="tab" aria-selected="false">
      Sales
    </button>
  </div>
  
  <div class="ease-tabs-content-sb">
    <div class="ease-tabs-panel-sb" role="tabpanel" aria-hidden="false">
      Analytics content
    </div>
    <div class="ease-tabs-panel-sb" role="tabpanel" aria-hidden="true">
      Sales content
    </div>
  </div>
</div>
```

### JavaScript for Interactivity

```javascript
document.querySelectorAll('.ease-slide-tabs-sb').forEach(tabGroup => {
  const triggers = tabGroup.querySelectorAll('.ease-tabs-trigger-sb');
  const panels = tabGroup.querySelectorAll('.ease-tabs-panel-sb');
  
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
.ease-slide-tabs-sb {
  --ease-tabs-duration: 0.35s;
  --ease-tabs-ease: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-tabs-bg: #1a1a2e;
  --ease-tabs-bg-active: #16213e;
  --ease-tabs-indicator: #3b82f6;
  --ease-tabs-text: #94a3b8;
  --ease-tabs-text-active: #ffffff;
}
```

## Classes

| Class | Description |
|-------|-------------|
| `.ease-slide-tabs-sb` | Main container with CSS variables |
| `.ease-dashboard-tabs-sb` | Dashboard dark theme variant |
| `.ease-nav-tabs-sb` | Navigation underline style |
| `.ease-pill-tabs-sb` | Pill-shaped tab style |
| `.ease-tabs-list-sb` | Tab button container |
| `.ease-tabs-trigger-sb` | Individual tab button |
| `.ease-tabs-content-sb` | Panel container |
| `.ease-tabs-panel-sb` | Individual panel content |

## Browser Support

Works in all modern browsers. Uses CSS custom properties and standard CSS animations.

Closes #50253
