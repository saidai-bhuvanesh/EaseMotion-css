# Animated Toggle — Pastel

## What does this do?

Adds accessible checkbox-based toggle switches with a soft pastel track, a spring-eased knob slide, three sizes (small/default/large), and three color variants (rose, lilac, mint). The native checkbox is visually hidden but fully keyboard accessible, with a visible focus ring.

## How is it used?

```html
<label class="tg">
  <input type="checkbox" checked />
  <span class="tg-track"><span class="tg-knob"></span></span>
  <span class="tg-text">Default</span>
</label>
```

Use `tg--sm` / `tg--lg` for sizes and `tg--lilac` / `tg--mint` for other pastel colors.

## Why is it useful?

A friendly, on-brand toggle for settings panels that stays keyboard navigable, announces state through the native checkbox, and respects `prefers-reduced-motion`.
