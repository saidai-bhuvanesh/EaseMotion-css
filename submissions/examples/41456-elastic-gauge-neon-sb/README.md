# Elastic Gauge for Neon

Neon-styled gauge component with elastic animation effects.

## Files

- `demo.html` - Demo page showing various gauge styles
- `style.css` - Gauge styles with neon and elastic animations

## Usage

Open `demo.html` in a browser to see the neon gauges with elastic animations.

## Features

### Neon Effect
- Glowing neon colors
- Box-shadow glow effects
- Text shadow for value display

### Gauge Colors
- Cyan (speed)
- Green (CPU)
- Orange (storage)
- Red, Purple, Blue variants

### Animations
- Elastic bounce effect
- Fill animation on load
- Shimmer effect on fill
- Pulsing glow

## Classes

| Class | Description |
|-------|-------------|
| `ease-gauge-neon-sb` | Main gauge container |
| `gauge-track` | Gauge background track |
| `gauge-fill` | Gauge fill bar |
| `gauge-value` | Value display |
| `gauge-label` | Label text |
| `ease-gauge-speed-sb` | Cyan variant |
| `ease-gauge-cpu-sb` | Green variant |
| `ease-gauge-storage-sb` | Orange variant |
| `ease-gauge-red-sb` | Red variant |
| `ease-gauge-purple-sb` | Purple variant |
| `ease-gauge-blue-sb` | Blue variant |
| `ease-gauge-elastic-sb` | Elastic animation |

## Usage

```html
<div class="ease-gauge-neon-sb ease-gauge-speed-sb">
  <div class="gauge-track">
    <div class="gauge-fill"></div>
  </div>
  <div class="gauge-value">75</div>
  <div class="gauge-label">MPH</div>
</div>
```

Closes #41456
