# See Outlook

## Description

**See Outlook** is a Chrome Manifest V3-compliant browser extension that enhances some elements of Outlook's web interface for low vision users.

**Note:** This version of the **See Outlook** extension is distributed as a ZIP archive. Once unzipped, the contents of the archive are intended to be [sideloaded](#sideloading-and-updating-the-extension) into the browser .

## Usage

**Install dependencies:** `npm install`

### Generate the Extension and ZIP Archive

**Important:** Run the following two commands in sequence to ensure the extension ID is added to `manifest.json` before creating the zip file.

1. **Build the extension:** `npm run build`
   > **Explainer:**
   >
   > - This command first runs the build script to generate the "deploy/" extension folder.
   > - Then it automatically runs the postbuild script to:
   >   - inject the key in the `.env` file into deploy/manifest.json, and
   >   - validate the deploy/manifest.json file. &ndash; TODO
2. **Generate distribution ZIP archive:** `npm run zip`

### Sideload the Extension

For instructions on how to sideload and update this extension click [here](./docs/Install%20instructions.txt) (text version) or [here](./docs/Install-instructions.html) (HTML version).

### Dev Notes

The `package.json` file contains two additional scripts: **"dev"** and **"sass"**:

- **"dev":** To build the extension without running the postbuild scripts run: `npm run dev`
- **"sass:"** The "sass" script in `package.json` is used by Webpack during the build process. Running it on its own is not recommended.
