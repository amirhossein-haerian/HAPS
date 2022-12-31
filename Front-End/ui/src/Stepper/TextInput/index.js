import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { StyledBox } from "./StyledComponents";

function TextInput(props) {
  let { value, label, changeValue } = props;
  return (
    <StyledBox
      component="form"
      sx={{
        "& > :not(style)": { my: 4, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={value} onChange={(e) => changeValue(e.target.value)} label={label} variant="outlined" />
    </StyledBox>
  );
}

export default TextInput;
