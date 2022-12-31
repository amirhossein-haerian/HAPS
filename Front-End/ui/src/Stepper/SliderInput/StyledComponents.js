import styled from "styled-components";
import { colors } from "../../Assests/const_values";
import Box from "@mui/material/Box";

const StyledBox = styled(Box)`
  margin: 0px auto;
  /* color: ${colors.white1}; */

  & .MuiSlider-root {
    color: #b9dff7 !important;
    margin-bottom: 30px;
    margin-left: 8px;
  }

  & .MuiInputLabel-formControl {
    color: #bbe1faad !important;
  }

  & .MuiInputBase-formControl {
    color: ${colors.lightblue1} !important;
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: #bbe1faad !important;
  }
`;

const StyledDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 20px;
  display: block;
`;

export { StyledBox, StyledDiv };
