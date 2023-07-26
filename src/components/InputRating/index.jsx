import { Rating } from "@mui/material";
import React from "react";

const BlockRating = () => {
  const [value, setValue] = React.useState(2);

  return (
    <div className="flex flex-col  gap-x-[10px]">
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <span>{value}</span>
    </div>
  );
};

export default BlockRating;
