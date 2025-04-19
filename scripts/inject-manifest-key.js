const fs = require('fs')
const path = require('path')
require('dotenv').config() // Use regular dotenv, not the webpack plugin

const manifestPath = path.resolve(__dirname, '../deploy/manifest.json')
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))

// Inject the key
manifest.key = process.env.MANIFEST_KEY

// Save the modified manifest
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))

console.log(
  `Injected MANIFEST_KEY (${
    process.env.MANIFEST_KEY ? 'length: ' + process.env.MANIFEST_KEY.length : 'undefined'
  })`
)
