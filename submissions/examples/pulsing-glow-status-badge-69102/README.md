# Pulsing Glow Status Badge

1. What does this do? Adds a pure-CSS infinite pulsing glow to a status badge: a solid core status dot surrounded by a glowing radial ring that expands outward and fades away continuously, simulating a live/active radar pulse.
2. How is it used? Apply `.status-badge` with a state modifier (`.status-online`, `.status-warning`, `.status-offline`) and include a `.pulse-ring` + `.pulse-dot` inside. For avatar-corner use, add `.avatar-badge`.
3. Why is it useful? Real-time status styling for dashboards, notification feeds, or chat lists to show active states. Highly composable and performance-first (opacity + scale only, no layout repaints), with `prefers-reduced-motion` support.

## Files

- `demo.html` — status badge examples (online / warning / offline) composed standalone and on avatars
- `style.css` — badge states, pulse-ring animation, and avatar-corner variant

Closes #69102
