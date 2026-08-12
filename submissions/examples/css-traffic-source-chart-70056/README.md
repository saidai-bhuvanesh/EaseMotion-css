# Traffic Source Chart

1. What does this do? Renders a horizontal bar chart of traffic sources with animated bar widths and per-row percentages.
2. How is it used? Each `.row` carries inline custom properties `--target` (e.g. `86%`) and `--tone` (a color) that drive the bar fill and its glow.
3. Why is it useful? A lightweight, dependency-free analytics visualization that animates in with a staggered easing curve, stays responsive on small screens, and honors `prefers-reduced-motion`.

Closes #70056
