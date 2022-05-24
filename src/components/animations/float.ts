import { keyframes } from "styled-components";

const float = keyframes`
    0% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(10px);
  }
`;

export default float;
