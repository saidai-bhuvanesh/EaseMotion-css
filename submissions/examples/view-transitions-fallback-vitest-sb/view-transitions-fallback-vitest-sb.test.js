import { describe, expect, it } from "vitest";

// View Transitions Fallback Support Detection (Vitest unit)
// Unit test: detect View Transitions API support.
function detectViewTransitionsSupport(doc) {
  if (!doc || typeof doc === "undefined") return false;
  return typeof doc.startViewTransition === "function";
}

describe("View Transitions Fallback Support Detection", () => {
  it("returns true when startViewTransition is a function", () => {
    const fakeDoc = { startViewTransition: () => {} };
    expect(detectViewTransitionsSupport(fakeDoc)).toBe(true);
  });

  it("returns false when startViewTransition is missing", () => {
    expect(detectViewTransitionsSupport({})).toBe(false);
  });

  it("returns false when document is undefined", () => {
    expect(detectViewTransitionsSupport(undefined)).toBe(false);
  });

  it("returns false when startViewTransition is not a function", () => {
    expect(detectViewTransitionsSupport({ startViewTransition: "nope" })).toBe(false);
  });

  it("returns false for null input", () => {
    expect(detectViewTransitionsSupport(null)).toBe(false);
  });
});
