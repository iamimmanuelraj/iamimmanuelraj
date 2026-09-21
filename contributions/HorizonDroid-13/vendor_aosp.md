# HorizonDroid-13/vendor_aosp

> Updated vendor layer with BoardConfigQcom fixes and sdm660 DRM_PP support, initialized board variables properly, added master CP support, refactored GMS client ID, and tweaked dexpreopt for SystemUI Google.

[![Contributions](https://contrib.rocks/image?repo=HorizonDroid-13/vendor_aosp)](https://github.com/HorizonDroid-13/vendor_aosp/graphs/contributions)

### Recent commits
- BoardConfigQcom: Allow sdm660 to enable and use DRM_PP
- BoardConfigQcom: Fixup!: MCP and Duplicate board platform
- BoardConfigQcom: Initialize Board variables before adding it to list
- sdm660: Add support for Master side cp
- Revert "BoardConfigQcom: Allow targets to upgrade to UM 4.19 family"
- vendor: GMS: Refactor setting of PRODUCT_GMS_CLIENTID_BASE
- vendor: Dexpreopt SystemUIGoogle