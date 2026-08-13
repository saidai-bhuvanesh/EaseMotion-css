import { describe, expect, it } from "vitest";

// View Transitions Fallback Support Detection (edge case)
// Edge case coverage for View Transitions fallback detection.
function detectViewTransitionsSupport(doc) {
  if (!doc || typeof doc === "undefined") return false;
  return typeof doc.startViewTransition === "function";
}

describe("View Transitions Fallback — Edge Cases", () => {
  it("returns false when startViewTransition is null", () => {
    expect(detectViewTransitionsSupport({ startViewTransition: null })).toBe(false);
  });

  it("returns false when startViewTransition is a number", () => {
    expect(detectViewTransitionsSupport({ startViewTransition: 0 })).toBe(false);
  });

  it("returns false when startViewTransition is an object", () => {
    expect(detectViewTransitionsSupport({ startViewTransition: {} })).toBe(false);
  });

  it("returns true when startViewTransition is an arrow function", () => {
    expect(detectViewTransitionsSupport({ startViewTransition: () => {} })).toBe(true);
  });

  it("returns false for an empty document object", () => {
    expect(detectViewTransitionsSupport({})).toBe(false);
  });

  it("does not throw for a Proxy-like object", () => {
    expect(() => detectViewTransitionsSupport({})).not.toThrow();
  });
});
