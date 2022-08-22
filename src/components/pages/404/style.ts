import styled from "styled-components";

export const ErrorWrapper = styled.div`
  background-size: 150% 150% !important;
  animation: gradient 10s ease infinite;
  background: #2980b9;
  background: linear-gradient(45deg, #8360c3, #2ebf91);
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
`;

export const ErrorText = styled.div`
  font-size: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const ErrorA = styled.a`
  color: white;
`;
