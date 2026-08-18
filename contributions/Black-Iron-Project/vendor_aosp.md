# Black-Iron-Project/vendor_aosp

> Improved vendor configuration by addressing MCP/duplicate board issues, enabling sdm660 DRM_PP, initializing board variables correctly, adding master-side CP support, refactoring GMS client ID logic, and dexpreopting SystemUI.

[![Contributions](https://contrib.rocks/image?repo=Black-Iron-Project/vendor_aosp)](https://github.com/Black-Iron-Project/vendor_aosp/graphs/contributions)

### Recent commits
- BoardConfigQcom: Fixup!: MCP and Duplicate board platform
- BoardConfigQcom: Allow sdm660 to enable and use DRM_PP
- BoardConfigQcom: Initialize Board variables before adding it to list
- sdm660: Add support for Master side cp
- Revert "BoardConfigQcom: Allow targets to upgrade to UM 4.19 family"
- vendor: GMS: Refactor setting of PRODUCT_GMS_CLIENTID_BASE
- vendor: Dexpreopt SystemUIGoogle