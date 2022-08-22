import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const IndexWrapper = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
  @font-face {
    src: local('Poppins'),
    url("/fonts/Poppins-Medium.ttf") format("ttf");
  }
`;

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;
