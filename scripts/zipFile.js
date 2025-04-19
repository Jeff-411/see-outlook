const fs = require('fs')
const path = require('path')
const AdmZip = require('adm-zip')

/**
 * Creates a ZIP package of the extension
 * @returns {Promise<void>}
 */
async function zipFile() {
  const logPrefix = process.env.CI === 'true' ? '[Extension Package]' : ''

  try {
    // Define paths
    const rootDir = path.resolve(__dirname, '..')
    const deployDir = path.join(rootDir, 'deploy')
    const outputDir = path.join(rootDir, 'deploy-zip')
    const outputFilePath = path.join(rootDir, 'See Outlook.zip')

    // Required files to include
    const requiredFiles = [
      'manifest.json',
      'dist/custom.css',
      'dist/scripts.js',
      'deploy/Install instructions.txt',
      'deploy/Install-instructions.html',
    ]

    // Validate required files exist
    const missingFiles = requiredFiles.filter(file => !fs.existsSync(path.join(rootDir, file)))

    if (missingFiles.length > 0) {
      throw new Error(`Missing required files: ${missingFiles.join(', ')}`)
    }

    // Create a new instance of AdmZip
    const zip = new AdmZip()

    // Add required files
    for (const file of requiredFiles) {
      const filePath = path.join(rootDir, file)
      const dirname = path.dirname(file)
      zip.addLocalFile(filePath, dirname === '.' ? '' : dirname)
      console.log(`${logPrefix} Added required file: ${file}`)
    }

    // Write the zip file
    await zip.writeZipPromise(outputFilePath)
    console.log(`${logPrefix} Extension packaged successfully: ${outputFilePath}`)
  } catch (error) {
    console.error(`${logPrefix} Error creating zip file:`, error)
    process.exit(1)
  }
}

// Execute if run directly
if (require.main === module) {
  zipFile()
}

module.exports = { zipFile }
