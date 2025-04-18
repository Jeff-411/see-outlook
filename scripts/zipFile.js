// scripts/zipFile.js
const fs = require('fs')
const path = require('path')
const AdmZip = require('adm-zip')

async function zipFile() {
  try {
    // Define the output directory and zip file name
    const outputDir = path.join(__dirname, '../deploy-zip')
    const outputFilePath = path.join(outputDir, 'See Outlook.zip')

    // Ensure the output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
      console.log(`Created directory: ${outputDir}`)
    }

    // Create a new instance of AdmZip
    const zip = new AdmZip()

    // Add the entire 'deploy/' folder to the zip archive
    zip.addLocalFolder('./deploy')

    // Write the zip file to the specified directory
    await zip.writeZipPromise(outputFilePath)

    console.log(`Zip file created successfully: ${outputFilePath}`)
  } catch (error) {
    console.error(`Error while creating zip file: ${error.message}`)
  }
}

// Call the function
zipFile()
