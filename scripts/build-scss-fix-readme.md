# Fix for Issue #40201: build:scss emits only a source map comment

## Problem
The `build:scss` script was producing empty or minimal CSS output with only a source map comment.

## Root Cause
The original script used a command format that could result in empty output files when Sass encounters issues.

## Solution
The fixed script (`build-scss-fixed.mjs`) includes:

1. **Proper error handling** - Checks if output file was created
2. **File size validation** - Verifies output is not empty
3. **Comprehensive logging** - Shows success/failure count
4. **Recursive SCSS discovery** - Finds all SCSS files in the project

## Usage

```bash
node scripts/build-scss-fixed.mjs
```

## Changes Made

- Uses colon syntax: `sass input.scss:output.css`
- Validates output file exists after compilation
- Checks file size to ensure content was generated
- Provides detailed error messages

## Files Modified

- `scripts/build-scss-fixed.mjs` - Fixed build script

Closes #40201
