# ease-fade-in-toast

SaaS showcase toast notifications that fade in and fade out gently, staggered by index. Pure CSS — no JavaScript is required for the animation.

## What does this do?

Adds a **fade-in toast**: glassmorphism toast notifications. Each toast fades in (`@keyframes fit-in`: `opacity 0 → 1`), holds, then fades out (`@keyframes fit-out`: `opacity 1 → 0`), staggered by its index. Includes info/success/warn variants with colored icons.

## How is it used?

1. Build a `.toaststack` region (fixed bottom-right) containing `.toast` elements, each with a `.toast__icon` and `.toast__msg`.
2. The CSS applies the fade-in/hold/fade-out animation, staggered by `--i`.

```html
<link rel="stylesheet" href="style.css" />

<div class="toaststack" role="region" aria-label="Notifications" aria-live="polite">
  <div class="toast toast--info" role="status">
    <span class="toast__icon" aria-hidden="true">ⓘ</span>
    <span class="toast__msg">Saved to drafts.</span>
  </div>
  <div class="toast toast--success" role="status">
    <span class="toast__icon" aria-hidden="true">✓</span>
    <span class="toast__msg">Export ready — 1 file.</span>
  </div>
  <div class="toast toast--warn" role="status">
    <span class="toast__icon" aria-hidden="true">!</span>
    <span class="toast__msg">Unsaved changes will be lost.</span>
  </div>
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is the fade-in/fade-out: `@keyframes fit-in`/`fit-out` drive `opacity` (`0 → 1 → 0`), staggered by `--i`. All via `opacity`.
- **Glassmorphism aesthetic** — toasts are frosted panels via `backdrop-filter: blur()`; variants use accent-tinted icon chips.
- **Accessible** — the stack is an `aria-live="polite"` region labelled "Notifications"; each toast is `role="status"` so screen readers announce it; the icon is `aria-hidden`. Full `prefers-reduced-motion` support (toasts appear instantly with no fade).
- **Reusable** — configurable via CSS custom properties (`--in-duration`, `--out-duration`, `--hold-duration`, `--stagger`, `--glass-blur`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS animation, no JS. Reload to replay the entrance; each toast auto-dismisses after the loop. SaaS-themed notification content.
- `style.css` — glassmorphism toasts, fade-in/fade-out keyframes staggered by `--i`, info/success/warn variants, fixed toast stack, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
