import styled from "styled-components";
import Img from "../../components/media/Img";

const Container = styled.section`
  text-align: center;
  font-size: 3em;
  font-weight: bold;
`;

export const About = () => {
  return <Container><Img src="./bob.jpg"/>Construyendo</Container>;
}
