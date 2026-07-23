# Spring Physics Tabs for Interactive Interface & Creative Portfolio

A pure CSS animated Tabs component with smooth spring physics interaction transitions, styled for interactive interfaces and creative portfolios.

## Files

- `demo.html` - Interactive demo showing interactive and portfolio tab styles
- `style.css` - All tab styles with spring physics animations

## Features

### Spring Physics Animation
- Bouncy spring-like animations on tab selection
- Physics-based easing with overshoot
- Smooth background transition effect
- CSS custom properties for easy customization

### Two Theme Variants
- **Interactive Interface**: Dark purple theme with card-based layouts
- **Creative Portfolio**: Light pink theme with gallery and stats

### Components
- Interactive cards with hover effects
- Portfolio gallery grid with overlays
- Stats display with gradient text
- Project showcase layouts

### Accessibility
- Full ARIA support with proper roles
- Keyboard navigation (Arrow keys, Home, End)
- Focus visible states
- Reduced motion support via `prefers-reduced-motion`

## Tab Styles

### Interactive Interface
Dark theme with purple accents, perfect for dashboards and application interfaces.

### Creative Portfolio
Light theme with pink accents, ideal for creative professionals and portfolios.

## Usage

```html
<link rel="stylesheet" href="./style.css">

<div class="ease-spring-tabs-sb ease-interactive-tabs-sb" role="tablist">
  <div class="ease-spring-list-sb">
    <button class="ease-spring-trigger-sb" role="tab" aria-selected="true">
      <span class="ease-icon-sb">📊</span> Dashboard
    </button>
    <button class="ease-spring-trigger-sb" role="tab" aria-selected="false">
      <span class="ease-icon-sb">🧩</span> Widgets
    </button>
    <div class="ease-spring-bg-sb" data-position="0"></div>
  </div>
  
  <div class="ease-spring-content-sb">
    <div class="ease-spring-panel-sb" role="tabpanel" aria-hidden="false">
      Dashboard content
    </div>
    <div class="ease-spring-panel-sb" role="tabpanel" aria-hidden="true">
      Widgets content
    </div>
  </div>
</div>
```

### JavaScript for Interactivity

```javascript
document.querySelectorAll('.ease-spring-tabs-sb').forEach(tabGroup => {
  const triggers = tabGroup.querySelectorAll('.ease-spring-trigger-sb');
  const panels = tabGroup.querySelectorAll('.ease-spring-panel-sb');
  const bg = tabGroup.querySelector('.ease-spring-bg-sb');
  
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      triggers.forEach(t => {
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });
      trigger.setAttribute('aria-selected', 'true');
      trigger.setAttribute('tabindex', '0');
      
      if (bg) {
        bg.setAttribute('data-position', trigger.getAttribute('data-index'));
      }
      
      panels.forEach(p => p.setAttribute('aria-hidden', 'true'));
      document.getElementById(trigger.getAttribute('aria-controls'))
        .setAttribute('aria-hidden', 'false');
    });
  });
});
```

## CSS Custom Properties

```css
.ease-spring-tabs-sb {
  --ease-spring-duration: 0.5s;
  --ease-spring-ease: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-spring-bg: #0f0f23;
  --ease-spring-bg-active: #6366f1;
  --ease-spring-indicator: #6366f1;
  --ease-spring-text: #a1a1aa;
  --ease-spring-text-active: #ffffff;
}
```

## Classes

| Class | Description |
|-------|-------------|
| `.ease-spring-tabs-sb` | Main container with CSS variables |
| `.ease-interactive-tabs-sb` | Dark interactive theme |
| `.ease-portfolio-tabs-sb` | Light portfolio theme |
| `.ease-spring-bounce-sb` | Enable bounce animation |
| `.ease-spring-list-sb` | Tab button container |
| `.ease-spring-trigger-sb` | Individual tab button |
| `.ease-spring-bg-sb` | Animated background indicator |
| `.ease-spring-content-sb` | Panel container |
| `.ease-spring-panel-sb` | Individual panel content |

## Browser Support

Works in all modern browsers. Uses CSS custom properties and standard CSS animations.

Closes #50330, Closes #50329
