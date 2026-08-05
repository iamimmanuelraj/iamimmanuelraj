# Black-Iron-Project/vendor_aosp

> Updated vendor AOSP settings — fixed BoardConfigQcom, enabled sdm660 DRM_PP and master-side CP support, initialized board variables earlier, refactored GMS client ID, and switched SystemUI to SystemUIGoogle dexpreopt.

[![Contributions](https://contrib.rocks/image?repo=Black-Iron-Project/vendor_aosp)](https://github.com/Black-Iron-Project/vendor_aosp/graphs/contributions)

### Recent commits
- BoardConfigQcom: Fixup!: MCP and Duplicate board platform
- BoardConfigQcom: Allow sdm660 to enable and use DRM_PP
- BoardConfigQcom: Initialize Board variables before adding it to list
- sdm660: Add support for Master side cp
- Revert "BoardConfigQcom: Allow targets to upgrade to UM 4.19 family"
- vendor: GMS: Refactor setting of PRODUCT_GMS_CLIENTID_BASE
- vendor: Dexpreopt SystemUIGoogle