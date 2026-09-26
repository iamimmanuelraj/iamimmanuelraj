# TwistUI/vendor_aosp

> Refactored vendor board configs to support sdm660 features (DRM_PP, master-side cp), fixed board initialization/duplicates, and updated GMS/Dexpreopt vendor settings.

[![Contributions](https://contrib.rocks/image?repo=TwistUI/vendor_aosp)](https://github.com/TwistUI/vendor_aosp/graphs/contributions)

### Recent commits
- BoardConfigQcom: Fixup!: MCP and Duplicate board platform
- BoardConfigQcom: Allow sdm660 to enable and use DRM_PP
- BoardConfigQcom: Initialize Board variables before adding it to list
- sdm660: Add support for Master side cp
- Revert "BoardConfigQcom: Allow targets to upgrade to UM 4.19 family"
- vendor: GMS: Refactor setting of PRODUCT_GMS_CLIENTID_BASE
- vendor: Dexpreopt SystemUIGoogle