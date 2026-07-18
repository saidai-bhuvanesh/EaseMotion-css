# CSS-only Liquid Glass Floating Dock

A macOS-style floating dock with glass morphism effect and smooth magnification animation.

## Files

- `demo.html` - Demo page showing the liquid glass dock
- `style.css` - CSS-only dock styles with animations

## Usage

Open `demo.html` in a browser and hover over dock icons to see the magnification effect.

## Features

### Liquid Glass Effect
- Frosted glass background with backdrop blur
- Subtle inner highlight gradient
- Soft shadows for depth

### Magnification Animation
- Smooth scale-up on hover
- Float upward effect
- Bouncy cubic-bezier easing
- Tooltip appears on hover

### Dock Components
- App icons with gradient backgrounds
- Separator between apps and trash
- Tooltip labels on hover

## Classes

| Class | Description |
|-------|-------------|
| `ease-dock-liquid-sb` | Main dock container |
| `ease-dock-item-sb` | Individual dock item |
| `dock-icon` | Icon container |
| `dock-separator` | Dock separator |

## CSS-only Implementation

This component uses pure CSS for:
- Glass morphism effect (`backdrop-filter`)
- Magnification animation (`transform: scale`)
- Float effect (`translateY`)
- Tooltips (`::after` pseudo-element)

Closes #49641
