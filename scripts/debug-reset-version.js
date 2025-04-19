// script/debug-reset-version.js

const fs = require('fs')
const path = require('path')

/**
 * Resets release version number to '1.0.0' in package.json and manifest.json
 * @returns {Promise<void>}
 */
async function reset() {
  try {
    // Read and update package.json
    const packagePath = path.resolve(__dirname, '../package.json')
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
    packageJson.version = '1.0.0'
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2))
    console.log('Updated package.json version to 1.0.0')

    // Read and update manifest.json
    const manifestPath = path.resolve(__dirname, '../manifest.json')
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
    manifest.version = '1.0.0'

    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
    console.log('Updated manifest.json version')
  } catch (error) {
    console.error('Error resetting files:', error)
    process.exit(1)
  }
}

// Execute if run directly
if (require.main === module) {
  reset()
}

module.exports = { reset }
