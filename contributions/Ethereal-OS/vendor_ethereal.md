# Ethereal-OS/vendor_ethereal

> Merged vendor improvements: fixed board/platform duplicates, enabled sdm660 DRM_PP and master CP support, initialized board variables, refactored GMS client ID setup, and updated SystemUI dexpreopt handling.

[![Contributions](https://contrib.rocks/image?repo=Ethereal-OS/vendor_ethereal)](https://github.com/Ethereal-OS/vendor_ethereal/graphs/contributions)

### Recent commits
- BoardConfigQcom: Fixup!: MCP and Duplicate board platform
- BoardConfigQcom: Allow sdm660 to enable and use DRM_PP
- BoardConfigQcom: Initialize Board variables before adding it to list
- sdm660: Add support for Master side cp
- Revert "BoardConfigQcom: Allow targets to upgrade to UM 4.19 family"
- vendor: GMS: Refactor setting of PRODUCT_GMS_CLIENTID_BASE
- vendor: Dexpreopt SystemUIGoogle