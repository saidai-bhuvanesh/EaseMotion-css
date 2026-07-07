# Architecture Proposal: Dark Mode Token Layer

This submission resolves architectural issue #33441.

## The Problem
EaseMotion CSS contains over 60 robust CSS custom properties (tokens) in `core/variables.css`. However, it lacks a dedicated token layer for Dark Mode, meaning developers have to manually override backgrounds and text colors on a per-component basis when implementing dark mode.

## The Proposal & Fix
Because modifying core framework files is restricted in this repository, this submission provides an architectural proposal in the `submissions/` directory.

1. **`proposed-variables-addon.css`**: Provides the exact CSS code block (using `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]`) that maintainers can append to `core/variables.css`. It overrides semantic colors and softens shadow tokens for dark backgrounds.
2. **`demo.html`**: Demonstrates the proposed token system in action. When the theme is toggled, all UI elements instantly adapt because they rely on the underlying tokens, proving that zero changes are required in the component CSS (`buttons.css`, `cards.css`, etc.).
