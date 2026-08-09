# CodeQL Security Analysis — CI workflow template

A drop-in GitHub Actions workflow that runs CodeQL static analysis to detect
security vulnerabilities and code-quality issues. Resolves issue #63648
(and its duplicate #63649).

## Why

Static application security testing (SAST) helps detect security flaws early.
Integrating CodeQL into the CI pipeline ensures every PR and commit is
automatically analyzed.

## Install

Copy `codeql.yml` into your repo's `.github/workflows/` directory:

```bash
mkdir -p .github/workflows
cp codeql.yml .github/workflows/
```

Then enable Code scanning in **Settings → Security → Code security** (the
workflow uploads results there automatically). No extra secrets needed.

## What it does

- **Triggers:** push to `main`, PRs to `main`, weekly schedule (Monday 02:00 UTC), manual `workflow_dispatch`.
- `github/codeql-action/init@v3` — initializes CodeQL for **JavaScript** (the repo's analysable language: build scripts, motion engine, benchmarks) using the `security-and-quality` query suite.
- `github/codeql-action/autobuild@v3` — builds the analysis target automatically.
- `github/codeql-action/analyze@v3` — runs queries and uploads SARIF to **GitHub Security → Code scanning** (`/language:javascript`).

## Permissions (least-privilege)

- `contents: read` — checkout
- `security-events: write` — upload SARIF
- `actions: read` — required by upload-sarif

## Concurrency

`codeql-${{ github.ref }}`, `cancel-in-progress: true` (cancels superseded runs).

## Acceptance criteria (from the issue)

- ✅ New workflow at `.github/workflows/codeql.yml`
- ✅ Triggers: push to main, PRs, weekly schedule
- ✅ Uses GitHub's official CodeQL Action (`@v3`)
- ✅ Initializes the appropriate language (JavaScript)
- ✅ Performs analysis after the build step (autobuild)
- ✅ Uploads results to GitHub Security → Code scanning
- ✅ Configured workflow permissions

## Files

- `codeql.yml` — the workflow template (copy to `.github/workflows/`).
- `README.md` — this documentation.

## Duplicate issue

#63649 is a byte-for-byte identical duplicate of #63648. This submission
resolves the underlying request for both.
