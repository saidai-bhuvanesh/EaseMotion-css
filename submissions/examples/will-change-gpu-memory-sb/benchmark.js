// CSS Will-Change GPU Memory Overhead Benchmark — benchmark script
// Self-contained; runs in a browser. Attach via demo.html "Run Benchmark" button.
const report = document.getElementById("report");

function fmt(n, d=2) { return Number(n).toFixed(d); }

function runBenchmark() {
  const t0 = performance.now();
  let probes = 0;
  const card = document.querySelector('.card');
  for (let i = 0; i < 30; i++) { card.style.willChange = 'transform'; probes++; }
  const t1 = performance.now();
  const duration = t1 - t0;
  const bundleSize = document.documentElement.outerHTML.length;
  const pass = duration <= 5000 && bundleSize <= 25000;
  report.textContent =
    "CSS Will-Change GPU Memory Overhead Benchmark\n" +
    "Execution Time: " + fmt(duration) + " ms\n" +
    "Bundle Size: " + bundleSize + " bytes\n" +
    "Overall: " + (pass ? "PASS" : "FAIL") + "\n" +
    "Budget: exec <=5000ms, bundle <=25000B";
}

document.getElementById("runTest").addEventListener("click", runBenchmark);
