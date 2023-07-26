import { Checkbox } from "@mui/material";
import React from "react";

const FormCheckbox = () => {
  return (
    <div>
      <Checkbox value="1" defaultChecked />
      <Checkbox value="2" />
      <Checkbox value="3" disabled />
      <Checkbox value="4" disabled checked />
    </div>
  );
};

export default FormCheckbox;
