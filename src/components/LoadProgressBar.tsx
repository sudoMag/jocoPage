import styled, { css } from "styled-components";

const Bar = styled.div`
  height: 5px;
  width: 100px;
  background-color: #808a1a;
  border-radius: 50px;
  margin: 0 auto auto;
`;

const Progress = styled.div`
  height: 5px;
  border-radius: 50px;
  background-color: #c9d92a;
  transition-duration: 200ms;
  ${({ porcentage }: { porcentage: number }) => {
    console.log(porcentage);
      return css`width: ${porcentage}%`;
    }
  }
`;

const LoadProgressBar = ({ porcentage }: { porcentage: number }) => {
  return (
    <Bar>
      <Progress porcentage={porcentage}/>
    </Bar>
  );
};

export default LoadProgressBar;
