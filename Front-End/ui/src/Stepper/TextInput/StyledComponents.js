import styled from "styled-components";
import { colors } from "../../Assests/const_values";
import Box from "@mui/material/Box";

const StyledBox = styled(Box)`
  margin: 0px auto;
  /* color: ${colors.white1}; */

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

export { StyledBox };
