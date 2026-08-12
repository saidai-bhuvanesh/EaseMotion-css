# Kinetic Typography Marquee

## 1. What does this do?
Three rows of oversized type scroll horizontally forever ÃÂ¢ one outline style moving left, one gradient-filled style moving right, one italic serif outline moving left at a slower tempo ÃÂ¢ the signature kinetic typography effect seen on award-winning agency sites, with **zero JavaScript**.

## 2. How is it used?
Each `.row` is a clipped window (`overflow: hidden`) containing **two identical** `.track` elements placed side by side. The track animates `transform: translateX(0 -> -50%)`. Because `-50%` of the rowÃÂ¢s own width lands exactly at the start of the duplicated track, the jump back to `0` is invisible, producing a flawless seam.

- `.row--outline` uses `-webkit-text-stroke` for hollow letters.
- `.row--solid` uses `background-clip: text` + a gradient for filled letters.
- `.row--solid .track` reverses direction via `animation-direction: reverse`.
- Per-row speed is controlled by the inline `style="--dur: 26s"` custom property.
- `-webkit-mask-image` (edge fade) makes the type appear to enter/leave the stage.

## 3. Why is it useful?
- Demonstrates the canonical **duplicate-track + -50% translateX** infinite marquee, the workhorse of CSS kinetic type.
- Only `transform` animates ÃÂ¢ fully GPU/compositor-bound, runs at native frame rate, no layout thrash.
- Pure CSS, no JS, works offline, easy for a maintainer to standardize as a core `ease-kinetic-marquee-*` utility.
- Accessible: `@media (prefers-reduced-motion: reduce)` halts the animation, and duplicated tracks are `aria-hidden="true"` so they arenÃÂ¢t read twice by screen readers.
- Fully fluid: type sizes use `clamp()` and rows reflow to viewport.
