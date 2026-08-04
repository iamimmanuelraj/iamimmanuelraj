# Ethereal-OS/vendor_ethereal

> Refined vendor configuration and build flow by fixing BoardConfigQcom, allowing sdm660 DRM_PP, initializing board vars, adding master-side CP support, reverting an UM upgrade, refactoring GMS client ID handling, and applying dexpreopt to SystemUIGoogle.

[![Contributions](https://contrib.rocks/image?repo=Ethereal-OS/vendor_ethereal)](https://github.com/Ethereal-OS/vendor_ethereal/graphs/contributions)

### Recent commits
- BoardConfigQcom: Fixup!: MCP and Duplicate board platform
- BoardConfigQcom: Allow sdm660 to enable and use DRM_PP
- BoardConfigQcom: Initialize Board variables before adding it to list
- sdm660: Add support for Master side cp
- Revert "BoardConfigQcom: Allow targets to upgrade to UM 4.19 family"
- vendor: GMS: Refactor setting of PRODUCT_GMS_CLIENTID_BASE
- vendor: Dexpreopt SystemUIGoogle