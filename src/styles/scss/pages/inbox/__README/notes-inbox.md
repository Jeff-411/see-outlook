# Notes - Inbox

## Unsupported Outlook options

### 1. Outlook's `Sort messages into Focused and Other` option is not supported in this version.

- Make sure to set the `Focused Inbox` option to `Don't sort my messages` before running the code.
  - Path: Outlook > Settings > Mail > Layout > Focused Inbox

### 2. Outlook's `Show email grouped by conversation` option is not supported in this version.

- Make sure to set the `Message organization` option to `Show email as individual messages` before running the code.
  - Path: Outlook > Settings > Mail > Layout > Message organization

## Top level layout

As of Sept 25, 2024:

- Parent `.bkYAr`
  - Toolbar: on-load | on-select `.rEzfP.uNaZF.Gj2Pr.m74HI.rf8FT`
    - Toolbar content `._EhYJ`
      - Left region: `IG8s8 z8J_3 VS1hH FVCRn rf8FT mCzau P3G2l`
      - Right region: `p4pwT bZBXb`
        <br>
  - Toolbar: on-search `.rEzfP.uNaZF.Gj2Pr.MtQpS.m74HI.e2Pgo.rf8FT`
    - Toolbar content `._EhYJ.fcAA5`
      - Checkbox:
      - Search in:
      - Filters:
        <br>
  - Search answers `#SearchAnswerTop`
    - This div is empty and (as far as I can tell) never used. I suspect it's a bit of unremoved legacy code.
    - In any case, the CSS for the results returned by the various search options in the **site header** can be found [here](../../search-results/_index.scss).
  - Sort bar: `.s8wta`
  - Emails: `#MailList`
