import React from "react";
import { GlobalStyle } from "./App.styles";
import "@ant-design/v5-patch-for-react-19";

import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <LandingPage />
    </>
  );
}

export default App;
