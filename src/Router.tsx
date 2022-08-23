import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { Page404 } from "./components/pages/404/404page";
import { MainComponent } from "./components/pages/mainPage/MainComponent";
import { Skills } from "./components/pages/skills/skills";
import { Contact } from "./components/pages/contact/contact";

export function Router() {
  const screenWidth = window.innerWidth;
  const location = useLocation();
  const transitions = useTransition(
    location,
    screenWidth >= 768
      ? {
          from: {
            opacity: 0,
            transform: "translateX(100%)",
          },
          enter: {
            opacity: 1,
            transform: "translateX(0%)",
          },
          leave: {
            opacity: 0,
            transform: "translateX(-100%)",
          },
        }
      : {}
  );
  return transitions((props, item) => (
    <animated.div style={props}>
      <div style={{ position: "absolute", width: "100%" }}>
        <Routes location={item}>
          <Route path="/" element={<MainComponent />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </animated.div>
  ));
}
