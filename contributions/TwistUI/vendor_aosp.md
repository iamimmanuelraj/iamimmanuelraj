# TwistUI/vendor_aosp

> Hardened vendor platform configs: fixed BoardConfigQcom issues, enabled sdm660 DRM_PP and master-side CP support, refactored GMS client ID handling, and optimized vendor dexpreopt for SystemUIGoogle.

[![Contributions](https://contrib.rocks/image?repo=TwistUI/vendor_aosp)](https://github.com/TwistUI/vendor_aosp/graphs/contributions)

### Recent commits
- BoardConfigQcom: Fixup!: MCP and Duplicate board platform
- BoardConfigQcom: Allow sdm660 to enable and use DRM_PP
- BoardConfigQcom: Initialize Board variables before adding it to list
- sdm660: Add support for Master side cp
- Revert "BoardConfigQcom: Allow targets to upgrade to UM 4.19 family"
- vendor: GMS: Refactor setting of PRODUCT_GMS_CLIENTID_BASE
- vendor: Dexpreopt SystemUIGoogle