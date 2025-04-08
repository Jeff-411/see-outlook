# Notes - `#leftCharmsRegion` Options

As discussed in [Option 1](#option-1-hide-the-leftcharmsregion-default) below, the `#leftCharmsRegion` is hidden by default. However, if you want to show it, you can follow the steps outlined in [Option 2](#option-2-show-the-leftcharmsregion).

## Option 1: Hide the `#leftCharmsRegion` (default)

The `#leftCharmsRegion` is hidden by default &ndash; this because all three of its children are either unused in the current context or redundant:

- `#tenantLogo_container`: unused
- `#owaBranding_container`: redundant
  - just use the browser refresh button
- `#owaSearchScopePicker_container`: redundant
  - The "All folders" callout triggered by `#searchScopeButtonId` in the `#leftCharmsRegion` is redundant. It's replicated in the filters callout,` .ms-Callout-main:has([title='Search in'])` which is triggered by the `#filtersButtonId `button in the main search box,` #owaSearchBox`.

## Option 2: Show the `#leftCharmsRegion`

If you want to show the `#leftCharmsRegion`, you can follow these steps:

1. Open the [index](./_index.scss) file in your editor.
1. Comment **out** the `#leftCharmsRegion {display: none !important;}` rule under Option 1.
1. Comment **in** the `@forward './alt_option-show_charms_region'` statement under Option 2.

**Note:** I hadn't quite finished Option 2 when I decided to use Option 1 as the default &ndash; so you may need to tweak it a bit to handle the hover effects and such.
