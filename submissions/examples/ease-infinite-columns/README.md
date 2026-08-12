# Infinite Auto-Scrolling Masonry Columns

## 1. What does this do?
It renders a hero section of vertical image columns that scroll infinitely and seamlessly. Some columns rise (`translateY(0) -> -50%`), some fall (`-50% -> 0`), at different speeds, producing a huge sense of scale popularized by premium agency portfolios Ã¢ with **zero JavaScript**.

## 2. How is it used?
Each `.column` is a clipped window (`.column { overflow: hidden }`) containing a `.column__track` that holds the tiles **twice** (the original set plus an identical `aria-hidden` duplicate). The track animates with `transform: translateY()` over `linear` timing:

- `.column--up` runs `@keyframes scroll-up` (0 -> -50%).
- `.column--down` runs `@keyframes scroll-down` (-50% -> 0).
- Modifiers `.column--fast` / `.column--slow` change `animation-duration`.

Because the duplicated set is pixel-identical, the jump from `-50%` back to `0` is invisible, producing a flawless loop. A `linear-gradient` `mask-image` fades the top and bottom edges so columns appear to emerge from and dissolve into the background.

## 3. Why is it useful?
- Demonstrates the **duplicate + 50% translate** infinite-loop technique Ã¢ the vertical sibling of the horizontal kinetic marquee.
- Entirely GPU-accelerated: only `transform` animates, so the browser keeps it on the compositor thread at native frame rates.
- Fully responsive via CSS custom properties (`--col-count`, `--speed`) and media queries (5 -> 4 -> 3 -> 2 columns).
- Accessible: `@media (prefers-reduced-motion: reduce)` disables the animation entirely, and duplicated tiles are marked `aria-hidden="true"` so screen readers donÃ¢t announce them twice.
- Easy for a maintainer to standardize into a core `ease-infinite-columns-*` utility.
