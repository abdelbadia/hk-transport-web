// prebuild.js
process.env.NODE_OPTIONS = '--openssl-legacy-provider';

// Ensuite, exécuter le build
const { execSync } = require('child_process');
execSync('npm run build', { stdio: 'inherit' });
