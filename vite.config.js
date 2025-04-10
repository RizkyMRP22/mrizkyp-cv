import { defineConfig } from 'vite';
import { execSync } from 'child_process';

const currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

export default defineConfig({
  define: {
    __GIT_BRANCH__: JSON.stringify(currentBranch),
  },
});