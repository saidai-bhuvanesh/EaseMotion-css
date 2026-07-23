# Floating Orbit Tabs for Neumorphic Soft & Cyberpunk Neon

A pure CSS animated Tabs component with smooth floating orbit interaction transitions, styled for neumorphic soft and cyberpunk neon interfaces.

## Files

- `demo.html` - Interactive demo showing neumorphic and cyberpunk tab styles
- `style.css` - All tab styles with floating orbit animations

## Features

### Floating Orbit Animation
- Smooth floating effect on selected tab
- Press animation on hover
- Continuous subtle animation for active state
- CSS custom properties for easy customization

### Two Theme Variants
- **Neumorphic Soft**: Soft shadows with subtle depth effects
- **Cyberpunk Neon**: Glowing neon effects with pulse animations

### Components
- Soft cards with shadow depth
- Cyber cards with glow and sweep effects
- Stats display with neon text effects
- Grid layouts for content organization

### Accessibility
- Full ARIA support with proper roles
- Keyboard navigation (Arrow keys, Home, End)
- Focus visible states
- Reduced motion support via `prefers-reduced-motion`

## Tab Styles

### Neumorphic Soft
Soft, tactile interface with subtle shadows for a modern, minimal look.

### Cyberpunk Neon
Dark interface with glowing neon accents and pulsing effects.

## Usage

```html
<link rel="stylesheet" href="./style.css">

<div class="ease-orbit-tabs-sb ease-neumorphic-tabs-sb" role="tablist">
  <div class="ease-orbit-list-sb">
    <button class="ease-orbit-trigger-sb" role="tab" aria-selected="true">
      <span class="ease-icon-sb">🏠</span> Home
    </button>
    <button class="ease-orbit-trigger-sb" role="tab" aria-selected="false">
      <span class="ease-icon-sb">ℹ️</span> About
    </button>
  </div>
  
  <div class="ease-orbit-content-sb">
    <div class="ease-orbit-panel-sb" role="tabpanel" aria-hidden="false">
      Home content
    </div>
    <div class="ease-orbit-panel-sb" role="tabpanel" aria-hidden="true">
      About content
    </div>
  </div>
</div>
```

### JavaScript for Interactivity

```javascript
document.querySelectorAll('.ease-orbit-tabs-sb').forEach(tabGroup => {
  const triggers = tabGroup.querySelectorAll('.ease-orbit-trigger-sb');
  const panels = tabGroup.querySelectorAll('.ease-orbit-panel-sb');
  
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      triggers.forEach(t => {
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });
      trigger.setAttribute('aria-selected', 'true');
      trigger.setAttribute('tabindex', '0');
      
      panels.forEach(p => p.setAttribute('aria-hidden', 'true'));
      document.getElementById(trigger.getAttribute('aria-controls'))
        .setAttribute('aria-hidden', 'false');
    });
  });
});
```

## CSS Custom Properties

```css
.ease-orbit-tabs-sb {
  --ease-orbit-duration: 0.5s;
  --ease-orbit-ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-orbit-bg: #e0e5ec;
  --ease-orbit-bg-active: #e0e5ec;
  --ease-orbit-text: #5a6a7a;
  --ease-orbit-text-active: #2d3748;
  --ease-orbit-shadow-light: #ffffff;
  --ease-orbit-shadow-dark: #a3b1c6;
}
```

## Classes

| Class | Description |
|-------|-------------|
| `.ease-orbit-tabs-sb` | Main container with CSS variables |
| `.ease-neumorphic-tabs-sb` | Neumorphic soft theme |
| `.ease-cyberpunk-tabs-sb` | Cyberpunk neon theme |
| `.ease-orbit-list-sb` | Tab button container |
| `.ease-orbit-trigger-sb` | Individual tab button |
| `.ease-orbit-content-sb` | Panel container |
| `.ease-orbit-panel-sb` | Individual panel content |

## Browser Support

Works in all modern browsers. Uses CSS custom properties and standard CSS animations.

Closes #50370, Closes #50369
