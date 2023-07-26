import * as React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

export default function DataTooltip() {
  return (
    <Tooltip title="You don't have permission to do this" followCursor>
      <Box className="p-3 bg-red-400 rounded-lg cursor-pointer">
        Disabled Action
      </Box>
    </Tooltip>
  );
}
