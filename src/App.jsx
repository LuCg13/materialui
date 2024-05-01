import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar/navbar";
import ImageListComp from "./components/ImageList/imagelist";
import TableComp from "./components/Table/table";
import CardComp from "./components/Card/card";

const theme = createTheme();

function App() {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar onOptionClick={handleOptionClick} />
        {selectedOption === "ImageList" && <ImageListComp />}
        {selectedOption === "Table" && <TableComp />}
        {selectedOption === "Card" && <CardComp />}
      </div>
    </ThemeProvider>
  );
}

export default App;
