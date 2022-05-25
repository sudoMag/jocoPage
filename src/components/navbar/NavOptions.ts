import styled, { css } from "styled-components";
import Opacity from "../animations/Opacity";

interface NavProps {
  show: boolean;
}

const NavOptions = styled.div`
  margin: auto 40px auto auto;
  display: flex;
  flex-direction: row;

  & li {
    display: block;
    text-align: center;
    margin: auto 0.8em;
    line-height: 1;
    font-size: 1em;
    cursor: pointer;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none;
    position: absolute;
    top: 90px;
    background-color: white;
    width: 100%;
    height: calc(100vh - 90px);
    ${({ show }: NavProps) => {
      if (show) {
        return css`
          display: flex;
          animation: ${Opacity} 200ms 0ms linear forwards;
        `;
      }
    }}

    & li {
      margin: 20px auto;
      font-size: 1.3em;
    }
  }
`;

export default NavOptions;
