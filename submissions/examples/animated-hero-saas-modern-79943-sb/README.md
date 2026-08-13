# Animated Hero Section — SaaS Modern

## What does this do?

Adds a modern SaaS landing hero with a rotating aurora glow, a faded grid background, an animated announcement pill, a shimmering gradient headline, glass CTA buttons, and a stats row — all responsive and motion-friendly.

## How is it used?

```html
<section class="hero" aria-labelledby="hero-title">
  <div class="hero__glow" aria-hidden="true"></div>
  <div class="hero__grid" aria-hidden="true"></div>
  <div class="hero__inner">
    <a class="hero__pill" href="#">New — v2.0 engine is live</a>
    <h1 id="hero-title" class="hero__title">Ship interfaces that <span class="hero__grad">move people</span></h1>
    <p class="hero__copy">...</p>
    <div class="hero__cta">...</div>
    <ul class="hero__stats">...</ul>
  </div>
</section>
```

## Why is it useful?

A polished, copy-ready hero for product launches and docs homepages that communicates momentum through subtle motion, while degrading gracefully for users who prefer reduced motion.
