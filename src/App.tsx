import React from "react";
import { HeaderComponent } from "./components/header/Header";
import { Wrapper } from "./styles";
import { Router } from "./Router";

function App() {
  return (
    <Wrapper>
      <HeaderComponent />
      <Router />
    </Wrapper>
  );
}

export default App;
