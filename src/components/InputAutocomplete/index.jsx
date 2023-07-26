import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";

export default function ComboBox() {
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
  ];

  return (
    <div className="flex flex-col  gap-x-[10px]">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        // getOptionLabel={(option) => option.label} // Lấy nhãn của mỗi option từ thuộc tính 'label'
        // value={selectedMovie} // Truyền giá trị được chọn vào thuộc tính 'value'
        onChange={(event, newValue) => setSelectedMovie(newValue)} // Xử lý sự kiện thay đổi giá trị
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <p>{selectedMovie !== null ? selectedMovie.label : "null"}</p>
    </div>
  );
}
