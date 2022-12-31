import { AppContainer, Title, ImgContainer, Img, Description } from "./StyledComponents";

import heartImg from "../Assests/image/heart.svg";

function App() {
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

export default App;
