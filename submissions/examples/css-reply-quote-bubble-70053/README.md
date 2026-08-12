# Reply Quote Bubble

1. What does this do? Renders a chat bubble that carries a quoted reply excerpt above the new message.
2. How is it used? Wrap a `.quote` block inside a `.bubble` (use `.bubble--out` for the sender, `.bubble--in` for the receiver).
3. Why is it useful? Adds a ready-to-use threaded-reply pattern for chat UIs without JavaScript, with a smooth entrance animation and `prefers-reduced-motion` support.

Closes #70053
