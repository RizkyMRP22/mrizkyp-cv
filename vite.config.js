import { defineConfig } from 'vite';
import { execSync } from 'child_process';

const currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProduction ? '/mrizkyp-cv/' : './',
  define: !isProduction
    ? {
        __GIT_BRANCH__: JSON.stringify(currentBranch),
      }
    : {},
});