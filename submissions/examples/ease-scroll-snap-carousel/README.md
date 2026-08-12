# Native CSS Scroll-Snap Carousel

## 1. What does this do?
A touch-drag, swipe, and keyboard-navigable carousel built entirely with the browserÃÃÂ¢s native `scroll-snap` engine. Cards snap cleanly to center as the user scrolls, with **zero JavaScript**.

## 2. How is it used?
- The `.carousel` is the horizontal scroll container:
  - `overflow-x: auto` enables scrolling.
  - `scroll-snap-type: x mandatory` forces it to settle on a snap point on each axis.
  - `scroll-behavior: smooth` gives momentum.
  - `scroll-padding-inline` keeps the first/last card from being clipped against the viewport edge.
- Each `.card` sets `flex: 0 0 var(--card-w)` (no shrink/grow, fixed width) and `scroll-snap-align: center` so it centers in the viewport when it settles.
- The container has `tabindex="0"` + `role="region"` so itÃÃÂ¢s keyboard-focusable; once focused, the arrow keys move the native scroll position and snapping handles the rest.
- `@media (hover: hover)` adds a desktop-only hover lift (ignored on touch to avoid sticky hover states).

## 3. Why is it useful?
- Demonstrates that a fully featured carousel (snap, momentum, keyboard nav, touch) needs **no JS library** ÃÃÂ¢ the browser already ships this.
- Accessible: keyboard reachable (`tabindex`), `focus-visible` ring is keyboard-only (no mouse flash), and `@media (prefers-reduced-motion: reduce)` disables `scroll-behavior: smooth` and hover transforms so motion-sensitive users get instant cuts.
- Fluid: card width uses `clamp()` and `--card-w`/`--pad` are CSS custom properties, so a maintainer can retheme by editing the `:root` block.
- Thin styled scrollbars (cross-browser: `scrollbar-width` + `::-webkit-scrollbar-thumb`) keep the chrome minimal.
