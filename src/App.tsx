import React from "react";
import { HeaderComponent } from "./components/header/Header";
import { Wrapper } from "./styles";
import { Router } from "./Router";

function App() {
  return (
    <Wrapper>
      <HeaderComponent />
      <main
        style={{ position: "relative", overflow: "scroll", height: "100vh" }}
      >
        <Router />
      </main>
    </Wrapper>
  );
}

export default App;
