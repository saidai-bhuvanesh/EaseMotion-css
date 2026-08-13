// DOM Reflow Count Benchmark during Dynamic Class Toggles — benchmark script
// Self-contained; runs in a browser. Attach via demo.html "Run Benchmark" button.
const report = document.getElementById("report");

function fmt(n, d=2) { return Number(n).toFixed(d); }

function runBenchmark() {
  const t0 = performance.now();
  let reflows = 0;
  for (let i = 0; i < 50; i++) {
    const el = document.querySelector('.card');
    el.classList.toggle('is-toggled');
    reflows += el.offsetWidth; // force layout
  }
  const t1 = performance.now();
  const duration = t1 - t0;
  const bundleSize = document.documentElement.outerHTML.length;
  const pass = duration <= 5000 && bundleSize <= 25000;
  report.textContent =
    "DOM Reflow Count Benchmark during Dynamic Class Toggles\n" +
    "Execution Time: " + fmt(duration) + " ms\n" +
    "Bundle Size: " + bundleSize + " bytes\n" +
    "Overall: " + (pass ? "PASS" : "FAIL") + "\n" +
    "Budget: exec <=5000ms, bundle <=25000B";
}

document.getElementById("runTest").addEventListener("click", runBenchmark);
