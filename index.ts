#!/usr/bin/env node

// =============================================================================
// Imports
// =============================================================================

import { mkdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

// =============================================================================
// Paths
// =============================================================================

const parent = uuidv4();
const children = ['inputs', 'outputs', 'projects'] as const;

// =============================================================================
// Main setup execution
// =============================================================================

const main = () => {
  // Check for version flag
  if (process.argv.includes('--version') || process.argv.includes('-v')) {
    const pkg = JSON
      .parse(readFileSync(
        new URL('../package.json', import.meta.url),
        'utf-8',
      ));
    console.log(`❤️ ${pkg.version}`);
    process.exit(0);
  }

  children.forEach((child) => {
    mkdirSync(join(parent, child), { recursive: true });
  });

  console.log('✨ Done!');
};

main();
