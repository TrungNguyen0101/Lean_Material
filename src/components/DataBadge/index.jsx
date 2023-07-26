import * as React from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

export default function DataBadge() {
  return (
    <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
      <Badge color="secondary" badgeContent={21} max={20}>
        <div className="w-auto py-[5px] bg-red-500">123123</div>
      </Badge>
    </Stack>
  );
}
