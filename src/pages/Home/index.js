import Header from "../../components/Header";
import styled from "styled-components";
import Img from "../../components/media/Img";
import Capture4 from "../../components/media/screenshots/capture_4.png";

const Div = styled.section`
  height: 100vh;
`;

export const Home = ({ ...args }) => {
  console.log(
    `%c Make width ♥ by %cManuel Casanova `,
    "background-color: red; font-size: 1.2em",
    "background-color: red; font-size: 1.3em; font-weight: bold;"
  );
  return (
    <>
      <Header/>
      <Div><Img src={Capture4}/></Div>
    </>
  );
};
