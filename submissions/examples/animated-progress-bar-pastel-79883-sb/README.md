# Animated Progress Bar — Pastel

## What does this do?

Adds soft pastel progress bars with an animated gradient flow, a sweeping sheen, and a one-time grow-in animation. Includes accessible `role="progressbar"` with `aria-valuenow/min/max` and four pastel color variants (rose, lilac, mint, peach) via modifier classes.

## How is it used?

```html
<div class="pb-track" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100">
  <div class="pb-fill pb-fill--lilac" style="--pb-pct: 68%"></div>
</div>
```

Set the fill width with the `--pb-pct` custom property and switch the color with a `pb-fill--*` modifier.

## Why is it useful?

A calm, readable progress indicator for uploads, onboarding, and dashboards that adds gentle motion without distracting from content, and respects `prefers-reduced-motion`.
