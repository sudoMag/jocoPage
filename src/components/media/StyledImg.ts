import styled, { css } from "styled-components";
import Opacity from "../animations/Opacity";

interface IloadStatus {
  loadSuccess: boolean;
}

const StyledImg = styled.img`
  width: 100%;
  opacity: 0;

  ${({ loadSuccess }: IloadStatus) => {
    if (loadSuccess) {
      return css`
        animation: ${Opacity} 200ms 0ms linear forwards;
      `;
    }
  }}
`;

export default StyledImg;
