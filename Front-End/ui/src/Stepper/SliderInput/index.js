import { useState } from "react";

import Slider from "@mui/material/Slider";

import { StyledBox, StyledDiv } from "./StyledComponents";

function SliderInput(props) {
  let { value, min, max, label, changeValue } = props;
  return (
    <StyledBox
      sx={{
        "& > :not(style)": { width: 300 },
      }}
    >
      <StyledDiv>
        <b>{label}: </b> {value}
      </StyledDiv>
      <Slider key={`slider-${label}`} defaultValue={Number(value)} value={Number(value)} min={min} max={max} onChange={(e, v) => changeValue(v)} aria-label="Default" valueLabelDisplay="auto" />
    </StyledBox>
  );
}

export default SliderInput;
