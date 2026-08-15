# TwistUI/vendor_aosp

> Cleaned up BoardConfigQcom and vendor infra: fixed duplicate MCP board entries, enabled DRM_PP for sdm660 and master-side CP support, initialized board vars correctly, refactored GMS client ID handling, and dexpreopt'ed SystemUIGoogle.

[![Contributions](https://contrib.rocks/image?repo=TwistUI/vendor_aosp)](https://github.com/TwistUI/vendor_aosp/graphs/contributions)

### Recent commits
- BoardConfigQcom: Fixup!: MCP and Duplicate board platform
- BoardConfigQcom: Allow sdm660 to enable and use DRM_PP
- BoardConfigQcom: Initialize Board variables before adding it to list
- sdm660: Add support for Master side cp
- Revert "BoardConfigQcom: Allow targets to upgrade to UM 4.19 family"
- vendor: GMS: Refactor setting of PRODUCT_GMS_CLIENTID_BASE
- vendor: Dexpreopt SystemUIGoogle