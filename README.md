# See Outlook

## Description

**See Outlook** is a Chrome Manifest V3-compliant browser extension that enhances Outlook's web interface for low vision users.

This version of the **See Outlook** extension is distributed as a ZIP archive. Once unzipped, the contents of the archive are intended to be [sideloaded](#sideloading-and-updating-the-extension) into the browser .

## Usage

> **IMPORTANT:**
>
> - Do NOT run `npm start`

### 1. Install dependencies

```bash
npm install
```

### 2. Build production extension (`deploy/` )

To build the production extension folder and add the ''key" property to `deploy/manifest.json` run:

```bash
npm run build
```

### 3. Create the ZIP archive for distribution

```bash
npm run zip
```

## Sideloading and updating the extension

Detailed instructions on how to sideload and update this extension are available in a couple of versions.

- [TEXT](./docs/Install%20instructions.txt)
- [HTML](./docs/Install-instructions.html)

**NOTE**: If you have cloned the `see-outlook` repo, you can follow the above instructions using the `deploy` folder, rather than fiddling around with the zip file.

## Available cli scripts

```bash
# Do not run!
npm start

# Build - production mode with
# injected manifest.json key
npm run build

# Build - Development mode
npm run dev

# Inject key into deploy/manifest.json
npm run postbuild

# Create deploy-zip/See Outlook.zip
npm run zip

# Compile SCSS
npm run sass
```
