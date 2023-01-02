import styled from "styled-components";
import { colors } from "../../Assests/const_values";
import FormControl from "@mui/material/FormControl";

const StyledFormControl = styled(FormControl)`
  /* color: ${colors.white1}; */

  & .MuiInputLabel-formControl {
    color: #bbe1faad !important;
  }

  & .MuiInputBase-formControl {
    color: ${colors.lightblue1} !important;
  }

  & .Mui-checked .MuiSvgIcon-root{
    color: #91e3a9 !important;
  }

  & .MuiSvgIcon-root{
    color: #99b8cd94 !important;
  }
`;

export { StyledFormControl };
