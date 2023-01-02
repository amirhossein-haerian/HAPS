import styled from "styled-components";
import { colors } from "../Assests/const_values";
import Box from "@mui/material/Box";

const StyledBox = styled(Box)`
  margin: 0px auto;
  /* color: ${colors.white1}; */
  & .MuiStepIcon-root {
    color: #b6dcf454;
  }

  & .MuiStepLabel-label {
    color: #6e8495;
  }

  & .Mui-completed {
    color: #91e3a9 !important;
  }

  & .MuiStepLabel-iconContainer .Mui-active {
    color: #91e3a9 !important;
  }

  & .Mui-active {
    color: #91e3a9 !important;
  }

  & .MuiStepContent-root {
    color: ${colors.lightblue1};
  }

  & .MuiStepLabel-iconContainer .Mui-active .MuiStepIcon-text {
    fill: ${colors.background} !important;
  }

  & .MuiButton-contained {
    background-color: #91e3a9;
    color: ${colors.darkgray} !important;
  }

  & .MuiButton-contained:hover {
    background-color: #44dc71;
  }

  & .MuiButton-text {
    color: ${colors.lightblue1} !important;
  }

  & .Mui-disabled {
    color: #b6dcf454 !important;
  }
`;
const Result = styled.div`
  margin: 30px auto 30px auto;
  width: 100%;
  color: ${props => props.result === "1" ? colors.red1 : colors.lightblue2};
`;
export { StyledBox, Result };
