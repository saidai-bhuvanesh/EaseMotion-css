# Animated Footer — Glassmorphism

## What does this do?

Adds a frosted-glass footer with an animated gradient top beam, a shimmering brand wordmark, hover-lift social icons, and responsive link columns. Uses `backdrop-filter` blur plus CSS variables for the glass tint and accent colors.

## How is it used?

```html
<footer class="glass-footer" role="contentinfo">
  <div class="glass-footer__beam" aria-hidden="true"></div>
  <div class="glass-footer__inner">
    <div class="glass-footer__brand">
      <span class="glass-footer__logo">EaseMotion</span>
      <p class="glass-footer__tagline">Animation-first CSS framework.</p>
      <ul class="glass-footer__social">...</ul>
    </div>
    <nav class="glass-footer__cols">
      <div class="glass-footer__col"><h2>Product</h2><ul>...</ul></div>
    </nav>
  </div>
  <div class="glass-footer__bar">...</div>
</footer>
```

## Why is it useful?

Gives documentation sites and product pages a lightweight, accessible footer that stays readable over busy backgrounds, with subtle motion that respects `prefers-reduced-motion`.
