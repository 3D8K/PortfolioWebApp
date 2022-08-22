import styled from "styled-components";

export const MainWrapper = styled.div`
  max-width: 1180px;
  text-align: center;
  margin: auto;
  justify-content: space-between;
  display: flex;
  padding: 100px 0 0 0;
  @media (max-width: 768px) {
    padding: 50px 0 0 0;
  }
`;

export const ContactBlock = styled.div`
  position: sticky;
  width: 70px;
  height: 300px;
  display: flex;
  flex-direction: column;
  left: 0;
`;

export const ContactItem = styled.a`
  margin: 30px;
  width: 30px;
  transition-duration: 0.5s;

  :hover {
    transform: perspective(1px) scale(1.1);
  }
`;

export const WelcomeWrapper = styled.div`
  text-align: start;
  margin: 0 auto;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WelcomeTextWrapper = styled.div`
  text-align: start;
  margin: 0 auto;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const WelcomeHeader = styled.h1`
  font-size: 60px;
  flex-direction: row;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-top: 20px !important;
    margin-bottom: 20px !important;
  }
`;

export const WelcomeJobTitle = styled.h3`
  color: gray;
`;

export const WelcomeSmallDescription = styled.div`
  max-width: 250px;
  display: flex;
  color: gray;
`;

export const ButtonCV = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 30px 30px 0;
  padding: 20px 35px;
  text-align: center;
  border-radius: 5px;
  max-width: 140px;
  transition-duration: 300ms;
  cursor: pointer;
  background-size: 150% 150% !important;
  background: linear-gradient(45deg, #020024, #8360c3, #00d4ff);
  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }

    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }

  :hover {
    animation: gradient 5s ease infinite;
    transform: scale(1.1);
  }

  a {
    color: white;
    margin: auto;
  }

  div {
    height: 30px;
    width: 30px;

    svg {
      color: white;
    }
  }
`;

export const BlobSvg = styled.div`
  width: 400px;
  height: 400px;
  background: #8360c3;
  margin-top: 60px !important;
  clip-path: polygon(21.25% 0.5%, 89% 8.5%, 72.25% 80.75%, 15% 59.5%);

  img {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin: 0 auto;
    bottom: 0;
    img {
      height: 300px;
    }
  }
`;
