import styled from "styled-components";
import { colors } from "../Assests/const_values";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';

const StyledBox = styled(Box)`
  margin: 0px auto;
  /* color: ${colors.white1}; */
  & .MuiStepIcon-root {
    color: #b6dcf454;
  }
  & .MuiStepLabel-iconContainer .Mui-active {
    color: #91e3a9 !important;
  }

  & .Mui-active {
    color: #91e3a9 !important;
  }

  & .MuiStepContent-root{
    color: ${colors.lightblue1};
  }

  & .MuiStepLabel-iconContainer .Mui-active .MuiStepIcon-text{
    fill: ${colors.background} !important;
  }
`;

// const Title = styled.h1`
//   text-align: center;
//   color: ${colors.lightblue3};
// `;
// const ImgContainer = styled.div`
//   text-align: center;
//   /* background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%); */
//   background-image: linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%);
//   width: 60%;
//   margin: 20px auto;
//   border-radius: 25px;
//   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
// `;
// const Img = styled.img`
//   max-width: 350px;
//   height: auto;
//   margin: 0px auto;
// `;

// const Description = styled.p`
//   text-align: center;
//   color: ${colors.lightblue1};
// `;

export { StyledBox };
