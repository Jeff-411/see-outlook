<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# I've created a sideloading Chrome extension named "See Outlook". Here's the project structure:

```text
see-outlook/
├── dist/
│     ├── custom.css
│     ├── custom.js
│     ├── scripts.js
│     ├── styles
├── node_modules/
├── src/
│     ├── scripts/
│     ├── styles/scss/
├── .babelrc
├── .gitignore
├── manifest.json
├── package.json
├── README.md
└── webpack.config.js
```

See the attached `project-structure.md`, `manifest.json`, `webpack.config.js`, `package.json` and `README.md` files for project details.

How can I send the extension to a friend so she can sideload it into her browser
---

# I've created a sideloading Chrome extension named "See Outlook". Here's the project structure:

```text
see-outlook/
├── dist/
│     ├── custom.css
│     ├── custom.js
│     ├── scripts.js
│     ├── styles
├── node_modules/
├── src/
│     ├── scripts/
│     ├── styles/scss/
├── .babelrc
├── .gitignore
├── manifest.json
├── package.json
├── README.md
└── webpack.config.js
```

See the attached `project-structure.md`, `manifest.json`, `webpack.config.js`, `package.json` and `README.md` files for project details.

How can I send the extension to a friend so she can sideload it into her browser

To send your "See Outlook" extension to a friend for sideloading, you need to package the extension properly and provide clear installation instructions. Here's how to do it:

## Package the Extension

1. Build the extension first to ensure all files are up-to-date:

```bash
npm install
npm start
```

2. Create a ZIP file of your extension folder. Include all necessary files, especially:
    - The `manifest.json` file
    - The `dist` folder containing compiled assets
    - Any other required files
3. Make sure to exclude unnecessary files from the ZIP:
    - `node_modules` folder
    - Source code files (if not needed for running)
    - Development configuration files

## Send to Your Friend

Send the ZIP file to your friend along with these installation instructions:

## Installation Instructions for Your Friend

1. Extract the ZIP file to a permanent location on their computer (important to keep it in a safe place they won't accidentally delete)[^1_7][^1_8]
2. Open Chrome, Edge, or another Chromium-based browser
3. Navigate to the extensions page:
    - Chrome: `chrome://extensions/`
    - Edge: Navigate to Extensions from the menu
    - Other browsers: Check the equivalent extensions page
4. Enable "Developer mode" by toggling the switch in the top-right corner[^1_7][^1_8]
5. Click "Load unpacked"[^1_7][^1_8]
6. Navigate to and select the extracted extension folder (the folder containing the `manifest.json` file)[^1_7][^1_8]
7. The "See Outlook" extension should now appear in their extensions list
8. They may need to pin the extension to their toolbar for easy access
9. Visit `https://outlook.live.com/` to see the extension in action

## Important Notes

- Remind your friend that they'll see a developer mode warning when they restart their browser. They should click "Cancel" to keep the extension enabled[^1_7]
- If you update the extension later, they'll need to:

1. Extract the new version to the same location
2. Go to the extensions page
3. Click the "Reload" icon on the "See Outlook" extension card
4. Reload the Outlook page in their browser[^1_3]

This sideloading approach is perfect for sharing extensions without publishing them to the Chrome Web Store.

<div>⁂</div>

[^1_1]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/be4b1a40-1f2d-4ba7-8dd1-b84332e47338/project-structure.md

[^1_2]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/6656b69d-611f-4993-8cf0-68386453a6f9/package.json

[^1_3]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/754db456-1334-43c1-8ff9-d2f24def6d49/README.md

[^1_4]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/44f2ed14-1b59-409e-9777-1b0d45e11581/webpack.config.js

[^1_5]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/e7c74f88-4eac-4cc3-81f8-bcfcaa925aca/manifest.json

[^1_6]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/c34ceea4-ee9a-40d0-9755-10eaa2eade5c/manifest.json

[^1_7]: https://www.ssl2buy.com/wiki/how-to-manually-install-a-chrome-extension-in-2-ways

[^1_8]: https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/extension-sideloading

[^1_9]: https://dev.to/artem_turlenko/how-to-publish-your-chrome-extension-on-the-chrome-web-store-3p3e

[^1_10]: https://www.youtube.com/watch?v=RI1adyYleLU

[^1_11]: https://superuser.com/questions/1056473/how-do-i-transfer-chrome-extensions-to-another-person

[^1_12]: https://support.google.com/chrome/a/answer/2714278

[^1_13]: https://www.youtube.com/watch?v=BPzK216tJYM

[^1_14]: https://support.google.com/chrome/a/answer/6177431

[^1_15]: https://www.expressvpn.com/blog/chrome-extensions-safe/

[^1_16]: https://stackoverflow.com/questions/24577024/install-chrome-extension-form-outside-the-chrome-web-store

[^1_17]: https://developer.chrome.com/docs/extensions/get-started

[^1_18]: https://certera.com/kb/how-to-manually-install-a-chrome-extension-in-2-ways/

[^1_19]: https://www.reddit.com/r/chrome_extensions/comments/zh4ave/how_to_manually_add_extension_to_chrome_when_i/

[^1_20]: https://www.cnet.com/tech/services-and-software/how-to-install-chrome-extensions-manually/

[^1_21]: https://developer.chrome.com/docs/extensions/how-to/distribute/install-extensions

[^1_22]: https://support.google.com/chrome_webstore/answer/2664769

[^1_23]: https://developer.chrome.com/docs/extensions/develop/concepts/messaging

[^1_24]: https://support.google.com/chrome/answer/10051760?co=GENIE.Platform%3DDesktop

[^1_25]: https://www.xda-developers.com/how-sideload-apps-chromebook/

[^1_26]: https://www.reddit.com/r/SideProject/comments/11yekf2/ive_built_a_browser_extension_to_capture/

[^1_27]: https://stackoverflow.com/questions/31281107/how-to-share-a-packed-chrome-extension-without-publishing

[^1_28]: https://chromewebstore.google.com/detail/scribe-ai-documentation-s/okfkdaglfjjjfefdcppliegebpoegaii

[^1_29]: https://developer.chrome.com/docs/extensions/how-to/distribute

[^1_30]: https://developer.chrome.com/docs/extensions/reference/manifest/shared-modules

[^1_31]: https://www.youtube.com/watch?v=Nh-wQVBvoD4

[^1_32]: https://www.youtube.com/watch?v=yNFwFQrc27Q

[^1_33]: https://docs.oracle.com/en/cloud/saas/enterprise-performance-management-common/svimb/sideload_chrome_167x25c44852.html

[^1_34]: https://blaze.today/blog/how-to-add-and-remove-chrome-extensions/

[^1_35]: https://support.auvik.com/hc/en-us/articles/12839839053076-Sideloading-installing-Browser-Extensions-if-required

[^1_36]: https://www.thesslstore.com/blog/install-a-chrome-extension/

[^1_37]: https://daily.dev/blog/writing-extensions-for-chrome-a-developers-guide

[^1_38]: https://cloud.google.com/blog/products/chrome-enterprise/publishing-extensions-for-the-enterprise

[^1_39]: https://community.brave.com/t/sideload-extension/295457

---

# Would it make sense to also include an "Installation Instructions txt" in the zip file?

Yes, including an "Installation Instructions.txt" file in your ZIP package would be very helpful for your friend. This would provide clear guidance without requiring them to search for instructions or contact you with questions. The text file should contain step-by-step instructions similar to those in your README.md, but specifically tailored for someone who received the packaged extension rather than someone building it from source[^2_3].

The instructions should include:

1. How to extract the ZIP file to a permanent location
2. How to access the browser's extensions page
3. Steps to enable Developer Mode
4. How to load the unpacked extension
5. What to expect when using the extension with Outlook
6. How to handle browser warnings about developer mode
7. Steps for updating the extension if you send a new version later

This approach ensures your friend can successfully install the extension even if they're not technically savvy or familiar with browser extensions.

<div>⁂</div>

[^2_1]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/be4b1a40-1f2d-4ba7-8dd1-b84332e47338/project-structure.md

[^2_2]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/6656b69d-611f-4993-8cf0-68386453a6f9/package.json

[^2_3]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/754db456-1334-43c1-8ff9-d2f24def6d49/README.md

[^2_4]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/44f2ed14-1b59-409e-9777-1b0d45e11581/webpack.config.js

[^2_5]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/e7c74f88-4eac-4cc3-81f8-bcfcaa925aca/manifest.json

[^2_6]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/c34ceea4-ee9a-40d0-9755-10eaa2eade5c/manifest.json

---

# See Outlook Extension - Installation Instructions

## Installation Steps

1. Extract this ZIP file to a permanent location on your computer
(Choose a location you won't accidentally delete later)
2. Open your Chrome-based browser (Chrome, Edge, Brave, Vivaldi, etc.)
3. Access the Extensions page:
    - Chrome: Type "chrome://extensions" in the address bar
    - Edge: Click the menu (- - - ) > Extensions
    - Brave: Type "brave://extensions" in the address bar
    - Vivaldi: Type "vivaldi://extensions" in the address bar
4. Enable "Developer Mode" by toggling the switch in the top-right corner
5. Click the "Load unpacked" button
6. Navigate to and select the extracted extension folder (the folder containing the manifest.json file)
7. The "See Outlook" extension should now appear in your extensions list
8. Visit https://outlook.live.com/ to see the extension in action

## Important Notes

- When you restart your browser, you may see a warning about using developer mode extensions.
Click "Cancel" to keep the extension enabled.
- This extension only works on https://outlook.live.com/ as specified in the manifest.


## Updating the Extension

If you receive an updated version of this extension:

1. Extract the new version to the same location, replacing the old files
2. Go to the extensions page in your browser
3. Find "See Outlook" and click the "Reload" icon (circular arrow)
4. Reload the Outlook page in your browser

## About This Extension

See Outlook is an accessibility extension that customizes Outlook's web interface for low vision users.

<div>⁂</div>

[^3_1]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/be4b1a40-1f2d-4ba7-8dd1-b84332e47338/project-structure.md

[^3_2]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/6656b69d-611f-4993-8cf0-68386453a6f9/package.json

[^3_3]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/754db456-1334-43c1-8ff9-d2f24def6d49/README.md

[^3_4]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/44f2ed14-1b59-409e-9777-1b0d45e11581/webpack.config.js

[^3_5]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/e7c74f88-4eac-4cc3-81f8-bcfcaa925aca/manifest.json

[^3_6]: https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/18441009/c34ceea4-ee9a-40d0-9755-10eaa2eade5c/manifest.json

