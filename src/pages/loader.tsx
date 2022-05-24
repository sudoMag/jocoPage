import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Opacity from "../components/animations/Opacity";
import Img from "../components/media/Img";
import { LoadContext } from "../context/context";

interface Props {
  loadSucces: boolean;
}

const Curtain = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #4c28ce;
  position: fixed;
  transition-duration: 200ms;
  transition-delay: 300ms;
  opacity: 0;
  animation: ${Opacity} 200ms 0ms linear forwards;
  z-index: 5;
  display: flex;

  ${({ loadSucces }: Props) => {
    if (loadSucces === true) {
      return `transform: translate( 0 , -100vh);`;
    }
  }}

  & img {
    width: 100px;
    margin: auto;
  }
`;

const Loader = () => {
  const { objectsToLoad, objectsLoaded } = useContext(LoadContext);
  const [loadStatus, setLoadStatus] = useState(false);

  useEffect(() => {
    console.log(objectsToLoad, objectsLoaded.number);
    if (objectsToLoad !== 0 && objectsToLoad === objectsLoaded.number) {
      setLoadStatus(true);
    } else {
      setLoadStatus(false);
    }
  }, [objectsToLoad, objectsLoaded]);

  return (
    <Curtain loadSucces={loadStatus}>
      <Img src="./joco-icon.png" />
    </Curtain>
  );
};

export default Loader;
