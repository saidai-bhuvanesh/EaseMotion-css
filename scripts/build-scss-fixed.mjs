/**
 * Fixed SCSS Build Script
 * Fixes: build:scss emits only a source map comment
 */

import fs from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const rootDir = process.cwd();

async function compileSass(inputFile, outputFile) {
  try {
    // Use stdin for input and output to file
    const cmd = `npx sass ${inputFile}:${outputFile} --style=compressed --no-source-map`;
    const { stdout, stderr } = await execAsync(cmd, { cwd: rootDir });
    
    // Check if output file was created and has content
    const outputExists = await fs.access(outputFile).then(() => true).catch(() => false);
    
    if (!outputExists) {
      console.error(`Error: Output file not created for ${path.basename(inputFile)}`);
      return false;
    }
    
    const stats = await fs.stat(outputFile);
    if (stats.size === 0) {
      console.error(`Error: Output file is empty for ${path.basename(inputFile)}`);
      return false;
    }
    
    console.log(`Compiled: ${path.basename(outputFile)} (${stats.size} bytes)`);
    return true;
  } catch (error) {
    console.error(`Error compiling ${inputFile}:`, error.message);
    return false;
  }
}

async function findSCSSFiles(dir, files = []) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await findSCSSFiles(fullPath, files);
      } else if (entry.name.endsWith('.scss')) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  return files;
}

async function build() {
  console.log('Starting SCSS build...\n');
  
  const scssDir = path.join(rootDir, 'scss');
  const distDir = path.join(rootDir, 'dist');
  
  // Create dist directory
  await fs.mkdir(distDir, { recursive: true });
  
  // Find all SCSS files
  const scssFiles = await findSCSSFiles(scssDir);
  
  let successCount = 0;
  let failCount = 0;
  
  for (const scssFile of scssFiles) {
    const relativePath = path.relative(scssDir, scssFile);
    const cssFile = relativePath.replace(/\.scss$/, '.css');
    const outputFile = path.join(distDir, cssFile);
    
    // Create output directory
    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    
    const success = await compileSass(scssFile, outputFile);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }
  
  console.log(`\nBuild completed: ${successCount} succeeded, ${failCount} failed`);
}

build().catch(console.error);
