import { useState, useEffect, useContext } from "react";
import { LoadContext } from "../../context/context";
import StyledImg from './StyledImg';

interface Props {
  src: string;
}

const Img = ({ src }: Props) => {
  const { addObject, removeObject } = useContext(LoadContext);
  const [loadSuccess, setLoadSuccess] = useState(false);

  const ImageLoadSuccess = () => {
    setLoadSuccess(true);
    removeObject();
  };

  useEffect(() => {
    addObject();
  }, [addObject]);

  return (
    <StyledImg src={src} onLoad={ImageLoadSuccess} loadSuccess={loadSuccess} />
  );
};

export default Img;
