# Ethereal-OS/vendor_ethereal

> Adjusted vendor configs to fix BoardConfigQcom duplicates, enable sdm660 DRM_PP and master-side CP, refactor GMS client ID handling, and tweak SystemUI dexpreopt.

[![Contributions](https://contrib.rocks/image?repo=Ethereal-OS/vendor_ethereal)](https://github.com/Ethereal-OS/vendor_ethereal/graphs/contributions)

### Recent commits
- BoardConfigQcom: Fixup!: MCP and Duplicate board platform
- BoardConfigQcom: Allow sdm660 to enable and use DRM_PP
- BoardConfigQcom: Initialize Board variables before adding it to list
- sdm660: Add support for Master side cp
- Revert "BoardConfigQcom: Allow targets to upgrade to UM 4.19 family"
- vendor: GMS: Refactor setting of PRODUCT_GMS_CLIENTID_BASE
- vendor: Dexpreopt SystemUIGoogle