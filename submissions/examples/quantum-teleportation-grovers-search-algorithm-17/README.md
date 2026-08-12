# Quantum Teleportation ÃÂ¢ Grover's Search Algorithm (`rithm-17`)

> A fully-rendered, multi-layered **pure CSS** visualization of Grover's quantum
> amplitude-amplification search algorithm: boundary tracks, oracle inversion,
> the diffusion operator, orbiting flux particles, live telemetry controls, and a
> phased flux timeline ÃÃÂ¢ all without a single line of JavaScript.

This directory contains a standalone, dependency-free example for the
EaseMotion CSS library. It is intentionally over-engineered to demonstrate how
far semantic HTML + modern CSS custom properties, keyframes, `conic-gradient`,
`radial-gradient`, `backdrop-filter`, `:checked` state, and
`prefers-reduced-motion` can carry an interactive-looking scientific UI.

---

## Table of Contents

1. [Overview](#1-overview)
2. [What is Grover's Algorithm?](#2-what-is-grovers-algorithm)
3. [Demo Architecture](#3-demo-architecture)
4. [File Manifest](#4-file-manifest)
5. [HTML Structure (Semantic Map)](#5-html-structure-semantic-map)
6. [CSS Architecture](#6-css-architecture)
7. [The Quantum Core](#7-the-quantum-core)
8. [Flux Rotation & Orbital Particles](#8-flux-rotation--orbital-particles)
9. [The Marked Item (Amplitude Amplification Target)](#9-the-marked-item-amplitude-amplification-target)
10. [Boundary Track Readouts & Status LEDs](#10-boundary-track-readouts--status-leds)
11. [Telemetry Panel & The `:checked` Interaction](#11-telemetry-panel--the-checked-interaction)
12. [Metrics Grid & Animated Bars](#12-metrics-grid--animated-bars)
13. [The Flux Timeline](#13-the-flux-timeline)
14. [Color System & Quantum Glow Gradients](#14-color-system--quantum-glow-gradients)
15. [Typography](#15-typography)
16. [Responsiveness](#16-responsiveness)
17. [Accessibility](#17-accessibility)
18. [Performance Notes](#18-performance-notes)
19. [How to Run](#19-how-to-run)
20. [Customization Cheatsheet](#20-customization-cheatsheet)
21. [Algorithmic Context (Why these visuals map to the math)](#21-algorithmic-context-why-these-visuals-map-to-the-math)
22. [Browser Support](#22-browser-support)
23. [Limitations & Honest Caveats](#23-limitations--honest-caveats)
24. [Glossary](#24-glossary)
25. [License](#25-license)

---

## 1. Overview

Grover's algorithm is a quantum search algorithm that finds a *marked* item in
an unsorted database of `N` entries using only `O(ÃÂ¢ÃN)` quantum operations,
quadratically faster than any classical algorithm's `O(N)`.

This demo renders that process visually:

- A spinning **quantum core** with concentric boundary rings represents the
  qubit register and its rotating state vector.
- **Flux particles** orbit at different radii and speeds, representing the
  probability-amplitude contributions being rotated toward the marked item.
- A pulsing **marked item** at the center is the solution Grover amplifies.
- A **telemetry panel** with a hidden checkbox "execute amplification" button
  lets the user trigger the animation using only CSS state (`:checked`).
- A **metrics grid** reports iteration count, amplitude gain, success
  probability, and oracle calls.
- A **flux timeline** visualizes the four algorithmic phases: initialization
  `|sÃÃÂ¢`, oracle reflection `|ÃÃÃÃÃÂ¢`, diffusion `2|ÃÃÃÃÃÂ¢ÃÃÂ¢|sÃÃÂ¢`, and measurement.

Everything is pure HTML + vanilla CSS. No build step. No framework. No JS.

---

## 2. What is Grover's Algorithm?

Formally, Grover's algorithm operates on a quantum register of `n` qubits
holding `N = 2^n` computational basis states `|0ÃÃÂ¢ÃÃÂ¦|NÃÃÂ¢ÃÃÂ¦|NÃÃÂ¢-1ÃÃÂ¢`. Given an
oracle `U_ÃÃÃÃÃÂ¢` that marks a target state `|ÃÃÃÃÃÂ¢ÃÃÂ¢`, the algorithm rotates the uniform
superposition

```
|sÃÃÂ¢ = (1/ÃÃÃN) ÃÃÃÂ¥_{x=0}^{N-1} |xÃÃÂ¢
```

toward `|ÃÃÃÃÃÂ¢ÃÃÂ¢` by repeated application of the **Grover iterate**:

```
G = (2|sÃÃÂ¢ÃÃÂ¢s| ÃÃÂ¢ I) ÃÃÂ¢ U_ÃÃÃÃÃÂ¢
```

- `U_ÃÃÃÃÃÂ¢` = **oracle reflection** (flips the sign of the marked state).
- `2|sÃÃÂ¢ÃÃÂ¢s| ÃÃÂ¢ I` = **diffusion operator** (inversion about the mean).

The optimal number of iterations is `R ÃÃÂ¢ÃÃÂ¢ (ÃÃ/4)ÃÃÃN`, after which measuring the
register yields `|ÃÃÃÃÃÂ¢ÃÃÂ¢` with probability approaching 1. This quadratic speedup is
the headline result; the demo's `success prob.` metric reads `97.6%` to reflect
the near-unity probability at optimal iteration count.

This visualization is a **didactic approximation**. Real quantum hardware
performs these rotations in Hilbert space; here we approximate them with
compositor-friendly transforms (`rotate`, `scale`, `opacity`) so the viewer
develops an intuition for the *shape* of the algorithm.

---

## 3. Demo Architecture

The page is organized into three semantic regions:

```
.quantum
 +-- .quantum__head            (title + eyebrow + subtitle)
 +-- .core                     (the rotating quantum register)
 |    +-- .core__halo          (soft radial glow backdrop)
 |    +-- .core__ring ÃÃ1/2/3    (concentric boundary tracks)
 |    +-- .flux a/b/c/d        (orbiting amplitude particles)
 |    +-- .core__seed          (the marked item, pulsing)
 |    +-- .core__tracks        (boundary track LED readouts)
 +-- .panel                    (amplification controls + telemetry)
 |    +-- .panel__toggle       (hidden checkbox, the "run" state)
 |    +-- .panel__btn          (the visible execute button / label)
 |    +-- .panel__grid         (four .metric cards)
 |    +-- .timeline            (four phased .timeline__rows)
 +-- .status                   (status footer with blinking dot)
```

The `.core` is `display: grid; place-items: center` so all rings, flux
particles, and the marked seed are absolutely positioned around a single
geometric center. The `.panel` uses the well-known **hidden-checkbox pattern**:
a visually-hidden `<input type="checkbox">` paired with a `<label>`, where
`:checked` cascades animation-state changes to descendant bars and phases.

---

## 4. File Manifest

| File        | Purpose                                                          |
| ----------- | ---------------------------------------------------------------- |
| `demo.html` | Semantic markup: header, core, panel, timeline, status footer.   |
| `style.css` | All visual styling, keyframes, `:checked` interactions, a11y.   |
| `README.md` | This document (technical, 500+ lines per the issue requirement). |

No `package.json`, no build config, no JavaScript. Open `demo.html` directly.

---

## 5. HTML Structure (Semantic Map)

The markup is intentionally deep-nested and semantic to satisfy the issue's
"deep-nested structural containers, status indicators, and interactive oracle
amplification execution controls" requirement:

- `<main class="quantum">` ÃÃÂ¢ page landmark.
- `<header class="quantum__head">` ÃÃÂ¢ introductory content (eyebrow, title, lead).
- `<section class="core" role="region" aria-label="Quantum core telemetry">`
  ÃÃÂ¢ the rotating register. Contains:
  - `.core__halo` (purely decorative glow).
  - Three `.core__ring` elements (the boundary tracks).
  - Four `.flux` orbit containers, each with a `.flux__node` particle.
  - `.core__seed` (the marked item), with `.core__seed-inner` as the glowing
    conic-gradient dot.
  - `<ul class="core__tracks">` with four `<li>` rows, each carrying an `.led`
    status indicator (on / pulse / off) and a textual label.
- `<section class="panel" aria-label="Amplification controls">` ÃÃÂ¢ the control
  surface. Contains:
  - `<input type="checkbox" id="run-amplification" class="panel__toggle">` ÃÃÂ¢
    the hidden state machine input.
  - `<label for="run-amplification" class="panel__btn">` ÃÃÂ¢ the visible execute
    button, with a blinking LED and uppercase label.
  - `.panel__grid` ÃÃÂ¢ four `.metric` cards (`iterations`, `amplitude gain`,
    `success prob.`, `oracle calls`), each with a key, a value, and a bar.
  - `.timeline` ÃÃÂ¢ four `.timeline__row` entries, each with a bra-ket label and a
    `.timeline__track` holding a `.timeline__phase` bar of varying width.
- `<footer class="status" role="status">` ÃÃÂ¢ a live-status footer with a
  blinking `.status__dot`.

The hidden checkbox + label pair is the **only** interactive affordance, and it
is keyboard-accessible out of the box (checkboxes are focusable, `Space` toggles
them, and the associated `<label>` forwards clicks).

---

## 6. CSS Architecture

The stylesheet is organized into clearly delimited sections:

1. **Custom properties** (`:root`) ÃÃÂ¢ color tokens, the core size, the master
   animation duration `--dur`. Theming is a single-block edit.
2. **Reset & base** ÃÃÂ¢ `box-sizing`, body background (layered radial gradients +
   a CSS `background-image` grid), monospace typography.
3. **Header**.
4. **Core** (`position: relative; isolation: isolate`) ÃÃÂ¢ the rotating scene.
5. **Rings** (three concentric, differently-styled borders).
6. **Flux particles** (orbiting nodes at four radii and speeds).
7. **Marked item** (conic-gradient + `pulse` keyframe).
8. **Boundary LEDs** (`led--on`, `led--pulse`, `led--off`).
9. **Panel** (hidden checkbox, label-as-button, `:checked` state propagation).
10. **Metrics grid** + animated bars.
11. **Timeline** + phase sweep.
12. **Status** footer.
13. **Responsive** breakpoint at `560px`.
14. **Accessibility** ÃÃÂ¢ `prefers-reduced-motion: reduce` blanket override.

Only `transform`, `opacity`, `filter: brightness`, and `width` animate; the
first three are compositor-thread-friendly, and the `width` animation is
confined to small bar elements.

---

## 7. The Quantum Core

`.core` is a `place-items: center` grid with a fixed `--core-size` height, so
every absolutely-positioned descendant is anchored to the same center point.
`isolation: isolate` creates a new stacking context so the
`box-shadow`/`filter` glows don't leak into the document's stacking order.

`.core__halo` is a large radial gradient blurred with `filter: blur(10px)`,
placed at `z-index: -2` behind everything, providing the soft cyan ambient glow
that gives the scene its "quantum" feel without a single image asset.

---

## 8. Flux Rotation & Orbital Particles

Each `.flux` is a zero-size element pinned to the center (`top: 50%; left: 50%`)
whose entire purpose is to **rotate**. Its child `.flux__node` is offset upward
by a per-particle radius (e.g. `.flux--a .flux__node { top: -160px }`). As the
parent rotates, the child sweeps a circle of that radius ÃÃÂ¢ the classic
"orbiting dot" technique.

The four particles use different durations and directions:

| Particle   | Radius  | Duration           | Direction |
| ---------- | ------- | ------------------ | --------- |
| `.flux--a` | 160px   | `--dur` (14s)      | normal    |
| `.flux--b` | 125px   | `--dur ÃÃ1.4` (~20s) | reverse   |
| `.flux--c` | 88px    | `--dur ÃÃ0.8` (~11s) | normal    |
| `.flux--d` | 55px    | `--dur ÃÃ2`   (28s)  | reverse   |

The counter-rotation and differing speeds create a complex, non-repeating
visual that reads as multiple amplitudes being amplified simultaneously toward
the center.

---

## 9. The Marked Item (Amplitude Amplification Target)

`.core__seed` is the marked item `|ÃÃÃÃÃÂ¢ÃÃÂ¢` ÃÃÂ¢ the solution Grover amplifies. Its
inner dot uses a `conic-gradient` cycling through `--cyan`, `--teal`,
`--cyan-soft`, and back, giving it the appearance of a spinning energy core. A
`box-shadow` stack (a tight cyan glow plus a wide diffuse halo) makes it read as
the brightest object on screen.

The `pulse` keyframe scales it between `1.0` and `1.25` and bumps
`filter: brightness` to `1.4`, communicating the "amplification" ÃÃÂ¢ the
probability mass concentrating on the marked state.

---

## 10. Boundary Track Readouts & Status LEDs

The `<ul class="core__tracks">` lists the four active subsystems, each with an
`.led`:

- `led--on` (solid cyan) ÃÃÂ¢ `oracle inversion`, `diffusion operator`.
- `led--pulse` (teal, blinking) ÃÃÂ¢ `flux rotation` (currently active).
- `led--off` (dim gray) ÃÃÂ¢ `measurement gate` (not yet reached).

The `blink` keyframe simply fades `opacity` between `1` and `0.35` on a 1.6s
ease-in-out cycle ÃÃÂ¢ a subtle, accessible pulse (not a strobe).

---

## 11. Telemetry Panel & The `:checked` Interaction

The panel's headline feature is the **execute amplification** button. There is
no JavaScript event handler. The mechanism:

1. `<input type="checkbox" id="run-amplification" class="panel__toggle">` is
   visually hidden (`position: absolute; width: 1px; height: 1px; opacity: 0`)
   but remains in the tab order and is keyboard-toggleable.
2. `<label for="run-amplification" class="panel__btn">` is the visible button.
   Clicking it toggles the checkbox; `Space` when focused does the same.
3. The CSS uses `.panel__toggle:checked + .panel__btn` to restyle the button
   (brighter background + cyan glow `box-shadow`) when active.
4. **Cascade propagation**: `.panel__toggle:checked ~ .panel__grid .metric__bar i`
   and `.panel__toggle:checked ~ .timeline .timeline__phase` select descendants
   of *later* siblings (the grid and timeline come after the checkbox in DOM
   order), so a single `:checked` state drives both the metric-bar grow and the
   timeline sweep animations.

`focus-visible` ensures the label gets a keyboard-only outline
(`outline: 2px solid var(--cyan); outline-offset: 3px`), so mouse users see no
flash while keyboard users get a clear ring.

---

## 12. Metrics Grid & Animated Bars

The `.panel__grid` uses `grid-template-columns: repeat(auto-fit, minmax(180px,
1fr))` so the four metric cards reflow responsively. Each `.metric` carries:

- `.metric__k` (key, e.g. `iterations`).
- `.metric__v` (value, e.g. `3`, `O(ÃÃÃN)`, `97.6%`).
- `.metric__bar` containing `<i style="--w: 78%">` ÃÃÂ¢ a width is passed via an
  inline custom property, and the bar fills to that percentage with a teal-to-
  cyan gradient and a cyan `box-shadow`.

When amplification is executed, `.panel__toggle:checked ~ .panel__grid
.metric__bar i` gets an `animation: grow 1.6s ease-out` that animates `width`
from `0` to `var(--w, 50%)`, visually "growing" each metric into place ÃÃÂ¢ a stand
-in for the amplitude bars filling as the algorithm runs.

---

## 13. The Flux Timeline

The `.timeline` visualizes the four phases of a single Grover iteration as
horizontal bars of increasing width:

| Label             | Phase class         | Width | Meaning                          |
| ----------------- | ------------------- | ----- | -------------------------------- |
| `|sÃÃÂ¢`             | `phase--init`       | 25%   | uniform superposition           |
| `|ÃÃÃÃÃÂ¢ÃÃÂ¢`         | `phase--oracle`     | 50%   | oracle reflection (mark target) |
| `2|ÃÃÃÃÃÂ¢ÃÃÂ¢ÃÃÂ¢|sÃÃÂ¢`  | `phase--diffuse`   | 75%   | inversion about the mean        |
| `measure`         | `phase--measure`    | 100%  | final measurement              |

Each bar is positioned absolutely within its `.timeline__track` and given a
distinct two-stop gradient. When amplification runs, the `sweep` keyframe uses
`transform: scaleX(0 ÃÃÂ¢ 1)` with `transform-origin: left` to "wipe" each phase
in from left to right ÃÃÂ¢ compositable (no layout), so it stays smooth even under
the load of the spinning core.

---

## 14. Color System & Quantum Glow Gradients

All colors are CSS custom properties on `:root`:

```
--bg:        #02040a   (near-black, the void)
--fg:        #d6fbff   (icy white text)
--muted:     #6f8a93   (secondary labels)
--cyan:      #2ff3ff   (primary quantum glow)
--cyan-soft: #6ef2ff   (highlight variant)
--teal:      #1be3c4   (secondary glow / "active")
--deep:      #0a3b46   (particle falloff color)
--grid:      rgba(47,243,255,0.08) (background grid lines)
```

The **quantum glow** is achieved through three layered techniques:

1. **Radial gradients** on `body` and `.core__halo` for ambient bloom.
2. **`box-shadow` stacks** on every emissive element (tight inner glow + wide
   diffuse outer glow), e.g. the marked seed:
   `box-shadow: 0 0 24px var(--cyan), 0 0 60px rgba(47,243,255,0.4)`.
3. **`text-shadow`** on the title and metric values for emissive type.

This combination produces the characteristic "neon plasma" look without any
bitmap assets.

---

## 15. Typography

The page uses a monospace stack (`ui-monospace`, `SF Mono`, `Menlo`,
`Consolas`) ÃÃÂ¢ a deliberate choice that reinforces the "telemetry / scientific
instrument" aesthetic. Headings use `letter-spacing: -0.02em` for tight modern
display, while eyebrow and metric labels use wide `letter-spacing`
(`0.12emÃÃÂ¢0.3em`) + `text-transform: uppercase` for the "control panel"
feel. Sizes are fluid via `clamp()`, so the title scales from `1.8rem` on
small viewports up to `3.2rem` on large ones without media queries.

---

## 16. Responsiveness

The layout is responsive through two mechanisms:

- **Fluid units**: `clamp()` on font sizes, `max-width: 980px` on the page,
  `auto-fit`/`minmax()` on the metrics grid.
- **One breakpoint** at `max-width: 560px`: shrinks `--core-size` from `320px`
  to `240px` and narrows the timeline's label column from `120px` to `90px`.

Because the core is `display: grid; place-items: center` with percentage-based
rings, it scales gracefully. No horizontal scroll is introduced thanks to
`overflow-x: hidden` on `body`.

---

## 17. Accessibility

Accessibility is treated as a first-class requirement, not an afterthought:

- **Semantic landmarks**: `<main>`, `<header>`, `<section role="region">`,
  `<footer role="status">` with `aria-label`s so screen-reader users can
  navigate by region.
- **Keyboard operability**: the only interactive control is a real checkbox
  (focusable, `Space`-toggleable). Its paired `<label>` forwards mouse clicks.
  No `div`-as-button anti-pattern.
- **`focus-visible`**: the execute button gets a keyboard-only cyan outline
  with `outline-offset: 3px`; mouse clicks show no focus ring (no flash).
- **Decorative elements**: the orbital particles and rings carry no text and
  are not focusable, so they don't add tab stops.
- **`prefers-reduced-motion: reduce`**: a blanket override at the bottom of the
  stylesheet sets `animation: none !important` on every animated element ÃÃÂ¢
  rings, flux particles, the marked seed, pulsing/paused LEDs, status dot,
  metric bars, and timeline phases. Motion-sensitive users get a static, fully
  legible scientific diagram instead of a moving one.
- **Color contrast**: foreground text (`#d6fbff` on `#02040a`) comfortably
  exceeds WCAG AA; muted labels are used only for secondary metadata.

---

## 18. Performance Notes

- **Compositor-only animations**: rings and flux particles animate
  `transform: rotate()`, the marked seed animates `transform: scale()` +
  `filter: brightness()`, the timeline sweep uses `transform: scaleX()`. All of
  these are GPU-composited and never trigger layout or paint on the main thread.
- **`will-change: transform`** is declared on `.core__ring` and
  `.column__track`-equivalent flux parents to hint the browser to promote them
  to their own layer.
- **`isolation: isolate`** on `.core` contains the stacking context so the
  shadows and filters don't force re-paints elsewhere.
- **No images**: the entire scene is gradients + box-shadows + text, so there
  are no network requests and no decode cost. Initial paint is near-instant.
- **No JS**: no parse/compile/execute budget, no main-thread blocking, no
  event-listener overhead.
- The `width` animations on metric bars are confined to tiny elements and only
  run on user interaction (when amplification is executed), so they don't
  continuously cost anything at idle.

---

## 19. How to Run

1. Clone the repository.
2. `cd` into `submissions/examples/quantum-teleportation-grovers-search-algorithm-17/`.
3. Open `demo.html` in any modern browser. No server required.

To trigger the amplification animation: click the **execute amplification**
button, or `Tab` to it and press `Space`.

---

## 20. Customization Cheatsheet

Edit `:root` in `style.css`:

| Variable      | Effect                                            | Example                  |
| ------------- | ------------------------------------------------- | ------------------------ |
| `--core-size` | Diameter of the quantum core                      | `260px`                  |
| `--dur`       | Master orbit/rotation duration (seconds)          | `10s` (faster) or `20s`  |
| `--cyan`      | Primary quantum glow color                        | `#7af9ff` (lighter)      |
| `--teal`      | Secondary/active glow color                       | `#39ff14` (matrix green) |
| `--bg`        | Page background (the void)                        | `#000`                   |
| `--grid`      | Background grid line color/opacity               | `rgba(255,0,0,0.05)`     |

To add a fifth orbital particle, duplicate a `.flux` block, give it a unique
modifier (e.g. `.flux--e`), set its `.flux__node { top: -<radius>px }`, and pick
a duration. To add a metric, copy a `.metric` block and set `style="--w: NN%"`
on its bar.

---

## 21. Algorithmic Context (Why these visuals map to the math)

This section explains how each visual element corresponds to a concept in
Grover's algorithm, so the demo is not just decorative.

- **Concentric rings** (`core__ring 1/2/3`) Ã¢ the **n-qubit register** and its
  nested computational basis states. Three rings suggest an `n=2` register
  (four basis states), but the count is purely visual.
- **Flux particles** (`flux aÃ¢d`) Ã¢ the **probability amplitudes** of the basis
  states. Their inward radii and varying speeds evoke amplitudes rotating toward
  the marked state under repeated Grover iterations.
- **Marked seed** (`core__seed`) Ã¢ the **target state** `|ÃÃ¢Âº`. Its growing
  brightness (`pulse` + `brightness`) represents the **amplitude amplification**
  Ã¢ the success probability rising toward 1 after `R Ã¢ Ã¢(Ã¢/4)Ã¢N` iterations.
- **Oracle LED** Ã¢ `U_ÃÃ¢Âº` active: flips the sign of the marked state.
- **Diffusion LED** Ã¢ `2|sÃ¢ÂºÃ¢Â¨s| Ã¢ I` active: inversion about the mean.
- **Flux rotation LED** (pulsing) Ã¢ the Grover iterate `G` currently rotating
  the state vector.
- **Measurement gate LED** (off) Ã¢ measurement hasn't occurred yet; it lights
  only at the final step (in this static demo it remains off as a hint that
  the run is "in progress").
- **Timeline phases** Ã¢ the four conceptual steps of one iteration:
  `|sÃ¢Âº` (init) Ã¢ `|ÃÃ¢Âº` (oracle) Ã¢ `2|ÃÃ¢ÂºÃ¢Â¨|sÃ¢Âº` (diffuse) Ã¢ `measure`.
  Their increasing bar widths (25/50/75/100%) symbolize the cumulative
  amplification across phases.
- **Metrics**:
  - `iterations = 3` Ã¢ a typical `R` for a modest `N`.
  - `amplitude gain = O(Ã¢N)` Ã¢ the headline quadratic speedup.
  - `success prob. = 97.6%` Ã¢ near-unity probability at optimal `R`.
  - `oracle calls = 3` Ã¢ `R` equals the number of oracle queries.

These mappings are documented so a maintainer or educator can adapt the demo
for a quantum-computing teaching aid.

---

## 22. Browser Support

The demo relies on:

- CSS custom properties (var) Ã¢ all modern browsers.
- `conic-gradient` Ã¢ Chrome 69+, Firefox 83+, Safari 12.1+.
- `backdrop-filter` (on the panel) Ã¢ Chrome 76+, Firefox 103+, Safari 9+ (with
  `-webkit-` prefix; here unprefixed for clarity, graceful fallback: the panel
  simply has a solid translucent background).
- `:focus-visible` Ã¢ Chrome 86+, Firefox 85+, Safari 15.4+.
- `prefers-reduced-motion` Ã¢ all modern browsers.
- `aspect`/grid `place-items` Ã¢ all modern browsers.

On unsupported browsers the page degrades to a static, fully-legible diagram
(animations simply don't run; the checkbox still toggles the `:checked` state).

---

## 23. Limitations & Honest Caveats

This is a **visualization**, not a simulator. Specifically:

- It does **not** perform real quantum computation. There is no state vector,
  no matrix multiplication, no actual amplitude amplification. The "execute"
  button animates pre-baked bars; it does not compute a result.
- The `97.6%` and `O(Ã¢N)` values are hardcoded display strings, not computed
  from an `N`.
- The "measurement" LED never lights during this animation, because there is
  no measurement step implemented (it is a UI hint).
- The orbital particle count (4) does not actually correspond to a real qubit
  count; it is chosen for visual balance.
- Real Grover implementations require an oracle `U_ÃÃ¢Âº` derived from the problem;
  here the "oracle" is purely a labeled LED.

These caveats are stated explicitly so the demo is not mistaken for a quantum
simulator. It is a pure-CSS educational/illustrative UI for the EaseMotion
library.

---

## 24. Glossary

- **Qubit** Ã¢ the unit of quantum information; analogous to a bit but able to
  exist in superposition.
- **Superposition** (`|sÃ¢Âº`) Ã¢ a linear combination of all basis states with
  equal amplitude.
- **Oracle** (`U_ÃÃ¢Âº`) Ã¢ a unitary that "marks" the solution state by flipping
  its phase.
- **Diffusion operator** (`2|sÃ¢ÂºÃ¢Â¨s| Ã¢ I`) Ã¢ inversion about the average
  amplitude; amplifies the marked state.
- **Grover iterate** (`G`) Ã¢ one oracle + one diffusion; applied `R` times.
- **Amplitude amplification** Ã¢ the process of increasing the marked state's
  probability by repeated iteration.
- **Measurement** Ã¢ collapsing the superposition to a classical outcome.
- **Bra-ket notation** (`|ÃÃ¢Âº`, `Ã¢Â¨Ã|`) Ã¢ Dirac notation for quantum states.

---

## 25. License

This example is contributed under the same license as the EaseMotion CSS
repository. See the repository root for license details.

---

_Pure HTML + vanilla CSS. No JavaScript. Works offline._
