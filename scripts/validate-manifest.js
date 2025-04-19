// scripts/validate-manifest.js
const manifest = require('../deploy/manifest.json')

if (!manifest.key) {
  console.error('Missing manifest key')
  process.exit(1)
}

if (manifest.manifest_version !== 3) {
  console.error('Invalid manifest version')
  process.exit(1)
}
