//import { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { ContextWrapper } from "./context/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import NotFoundErrorPage from "./pages/404";
import Loader from "./pages/loader";
import Navbar from "./components/Navbar";

const GeneralStyles = createGlobalStyle`
  ${(props) => {
    if (props.theme === "light") {
      return `
        html {
          --font-color: #2e2e2e;
          --font-color-2: gray;
          --font-color-ngtv: #b3b3b3;
          --bg-color-1: white;
          --bg-color-2: #ffffff;
          --bg-color-3: #e0e0e0;
          --bg-color-4: #e2e2e2;
          --bg-color-5: #edeff3;
          --bg-color-6: #d0d0d0;
        }
        `;
    }
  }}

  @media only screen and (max-width: 800px) {
    .mobile-change {
      &.orientation {
        flex-direction: column;

        &.reverse {
          flex-direction: column-reverse;
        }
      }

      &.all-screen-width {
        width: 100vw;
        margin: auto;
      }

      &.navbar-space-padding {
        padding-top: 60px;
      }

      &.align {
        &.left {
          margin: auto 0 auto 10px;
          left: 10px;
        }

        &.right {
          margin: auto 10px auto 0;
          right: 10px;
        }
      }

      &.show-item {
        display: block;
      }

      &.hide-item {
        display: none;
      }
    }
  }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  max-width: 100%;
  background-color: var(--bg-color-1);
`;

const App = () => {
  const theme = "light";
  return (
    <ContextWrapper>
      <MainContainer id="App">
        <GeneralStyles theme={theme} />
        <Loader />
        <Navbar/>
        <Router>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/*" element={<NotFoundErrorPage />} />
          </Routes>
        </Router>
      </MainContainer>
    </ContextWrapper>
  );
};

export default App;
