# TwistUI/vendor_aosp

> Hardened vendor configs for Qualcomm boards: fixed duplicate/misinitialized board entries, added sdm660 DRM_PP and master-side CP support, reverted an upgrade attempt, refactored GMS client-id logic, and dexpreopted SystemUIGoogle.

[![Contributions](https://contrib.rocks/image?repo=TwistUI/vendor_aosp)](https://github.com/TwistUI/vendor_aosp/graphs/contributions)

### Recent commits
- BoardConfigQcom: Fixup!: MCP and Duplicate board platform
- BoardConfigQcom: Allow sdm660 to enable and use DRM_PP
- BoardConfigQcom: Initialize Board variables before adding it to list
- sdm660: Add support for Master side cp
- Revert "BoardConfigQcom: Allow targets to upgrade to UM 4.19 family"
- vendor: GMS: Refactor setting of PRODUCT_GMS_CLIENTID_BASE
- vendor: Dexpreopt SystemUIGoogle