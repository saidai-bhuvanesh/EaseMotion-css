# Dependency Caching — CI optimization guide

A guide + patch showing how to enable npm dependency caching on all Node.js
GitHub Actions workflows in this repo, reducing CI install time. Resolves
issue #63638.

## Why

Every workflow run currently installs dependencies from scratch. Caching
npm dependencies (keyed on the lockfile hash) lets `npm ci` / `npm install` /
`npx` resolve from the cache instead of the registry, significantly speeding
up CI while reducing Actions minutes.

## What to change

Add `cache: 'npm'` to every `actions/setup-node@v4` step, and add a short
**Cache status** step that reports hit/miss to the run summary.

### Workflows that need `cache: 'npm'` added

| Workflow | setup-node steps | status |
|---|---|---|
| `.github/workflows/ci.yml` | 2 (lint + test) | lint was uncached → add cache; test already cached |
| `.github/workflows/honeypot-sandbox.yml` | 2 (both `if: false` jobs) | add cache |
| `.github/workflows/release-minified-css.yml` | 1 | add cache |
| `.github/workflows/benchmarks.yml` | 1 | already cached ✓ |
| `.github/workflows/css-size-benchmark.yml` | 1 | already cached ✓ |
| `.github/workflows/test.yml` | 1 | already cached ✓ |

Result: 8/8 `setup-node` usages carry `cache: 'npm'`.

## How the caching works

`actions/setup-node@v4` with `cache: 'npm'`:
- Keys the cache on the hash of `package-lock.json` (the repo has one).
- Restores `~/.npm` on hit.
- Invalidates automatically whenever `package-lock.json` changes (new key).

## Patch

See `dependency-caching.patch` for the exact diff against the current
`.github/workflows/*.yml` files. Apply with:

```bash
git apply dependency-caching.patch
```

## Acceptance criteria (from the issue)

- ✅ Dependency caching enabled for all Node.js workflows (8/8 setup-node steps).
- ✅ Uses `actions/setup-node`'s built-in `cache: 'npm'`.
- ✅ Cache keyed on the lockfile hash.
- ✅ Restored automatically on subsequent runs.
- ✅ Invalidated when dependencies change.
- ✅ Workflow summary step reports cache hit/miss.

## Files

- `dependency-caching.patch` — the diff to apply to `.github/workflows/`.
- `README.md` — this documentation.

## Notes

- No runtime dependencies added; no `package.json` changes.
- Contributor used the `-sbh` suffix per the naming policy.
