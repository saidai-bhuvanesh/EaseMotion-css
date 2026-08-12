# OTP Timer Resend

1. What does this do? An OTP resend button with a pure-CSS 10-second countdown timer before it visually re-enables.
2. How is it used? The `.resend__count` string (`0123456789`) is translated upward in `steps(10)` over 10s so each digit holds for one second, while a conic-gradient `.resend__dial` depletes in sync and `.resend__btn` flips to its enabled style at 10s.
3. Why is it useful? Demonstrates a JS-free countdown using `steps()` + `@property`-registered animatable custom properties, with `prefers-reduced-motion` showing the fully-enabled state immediately.

> Note: The button's `disabled` attribute is present for semantics/ARIA; the visual enable is driven by CSS animation. For a production form you'd flip `disabled` off with JS at timeout â this example keeps the effect pure-CSS as requested by the issue.

Closes #70061
