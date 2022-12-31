import { } from "./StyledComponents";

function Stepper() {
  return (
    <AppContainer>
      <Title>Heart Attack Prediction System</Title>
      <ImgContainer>
        <Img src={heartImg} alt="heart"></Img>
      </ImgContainer>
      <Description>Fill out the information below, and we will predict for you whether you have heart failure or not:</Description>
    </AppContainer>
  );
}

export default Stepper;
