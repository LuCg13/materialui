import React, { useState } from "react";
import { Container } from "@mui/material";
import Navbar from "./components/NavBar/navbar";
import ImageListComp from "./components/ImageList/imagelist";
import TableComp from "./components/Table/table";
import CardComp from "./components/Card/card";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Navbar onOptionClick={handleOptionClick} />
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        {selectedOption === "ImageList" && <ImageListComp />}
        {selectedOption === "Table" && <TableComp />}
        {selectedOption === "Card" && <CardComp />}
      </Container>
    </div>
  );
}

export default App;
