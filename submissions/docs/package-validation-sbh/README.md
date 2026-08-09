# Package Validation — CI workflow template

A drop-in GitHub Actions workflow that validates the npm package by performing
a `npm pack --dry-run` before every release, catching packaging issues
(accidental inclusions or missing assets) early. Resolves issue #63661.

## Why

A package may accidentally publish unnecessary files (`.github/`, tests,
screenshots) or miss important assets (compiled CSS, README, LICENSE). An
automated validation step prevents broken npm releases.

## Install

Copy `package-validation.yml` into your repo's `.github/workflows/` directory:

```bash
mkdir -p .github/workflows
cp package-validation.yml .github/workflows/
```

No extra secrets needed — uses the built-in `GITHUB_TOKEN`.

## What it does

1. Checks out the repo, sets up Node 20 with npm caching (`cache: 'npm'`), installs deps.
2. **Builds the minified CSS** (`npm run build`) so `easemotion.min.css` exists — it's in the `files` allowlist.
3. **Validates the manifest** (`npm run validate:manifest`).
4. **Dry-run pack** (`npm pack --dry-run`) logs which files would be published, then runs the repo's existing **`npm run validate:pack`** (`scripts/validate-pack.mjs`) which cross-checks the packed file list against `package.json#files`.
5. **Creates a real tarball** and uploads it + the dry-run log as a workflow artifact (14-day retention).
6. Writes a **job summary** with pass/fail status and a collapsible packed-file list.

## Triggers

- Pull requests to `main`
- Pushes to `main`
- Version tags (`v*`)
- Manual `workflow_dispatch`

## Permissions

Least-privilege: `contents: read` only.

## Why reuse the repo's existing tooling

The repo already ships `scripts/validate-pack.mjs` and a `validate:pack` npm
script that enforce the `files` allowlist. The workflow wires these up rather
than reinventing the check — the source of truth stays in the repo and local
`npm run validate:pack` matches CI exactly.

## Acceptance criteria (from the issue)

- ✅ Workflow at `.github/workflows/package-validation.yml`
- ✅ Triggers: PRs, pushes to main, version tags
- ✅ Sets up Node.js, installs deps
- ✅ Runs `npm pack --dry-run`
- ✅ Verifies the package is generated successfully
- ✅ Uploads generated package contents as a workflow artifact

## Files

- `package-validation.yml` — the workflow template (copy to `.github/workflows/`).
- `README.md` — this documentation.
