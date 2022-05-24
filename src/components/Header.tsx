import styled from "styled-components";
import float from "./animations/float";
import Img from "./media/Img";
import TextWrite from "./TextWrite";

const Container = styled.section`
  display: flex;
  width: 100%;
  height: calc(100vh - 130px);
  background-color: #1141a1;
  overflow: hidden;
`;

const Astronaut = styled.div`
  width: 30%;
  position: absolute;
  max-height: 70vh;
  animation: ${float} 8s 0ms linear infinite forwards;
`;

const Planet = styled.div`
  width: 50%;
  max-height: 90vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  & #circle1 {
    border-radius: 50%;
    position: absolute;
    background-color: #092a6b;
    width: 120vw;
    height: 120vw;
  }

  & #circle2 {
    border-radius: 50%;
    position: absolute;
    background-color: #06203e;
    width: 80vw;
    height: 80vw;
  }
`;

const PresentationContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const IllustrationContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  z-index: 2;
  margin: 0 50px;
`;

const WordsText = styled.h1`
  color: #ccdc29;
  font-size: 3em;
  margin: 15px 0;
`;

const WritePointer = styled.h1`
  color: #ccdc29;
  font-size: 4em;
  margin: 15px 0;
`;

const AboutMeButton = styled.a`
  text-decoration: none;
  padding: 10px;
  background-color: #ccdc29;
  z-index: 2;
  border-radius: 10px;
  font-size: 1.5em;
  font-weight: 500;
  align-self: start;
  margin: 0px 50px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Container className="mobile-change orientation reverse">
      <PresentationContainer className="mobile-change all-screen-width">
        <Title>
          <TextWrite
            textStyled={WordsText}
            className="mobile-change fontsize small"
          >
            ♥Emprendimiento 💻Tecnología 🤩Innovación ⭐JOCO_GONZÁLEZ⭐
          </TextWrite>
          <WritePointer className="mobile-change fontsize medium">|</WritePointer>
        </Title>
        <AboutMeButton>Sobre Mi</AboutMeButton>
      </PresentationContainer>
      <IllustrationContainer className="mobile-change all-screen-width">
        <Planet>
          <div id="circle1"></div>
          <div id="circle2"></div>
          <Img src="planet2.svg" />
        </Planet>
        <Astronaut>
          <Img src="joco-galactic.png" />
        </Astronaut>
      </IllustrationContainer>
    </Container>
  );
};

export default Header;
