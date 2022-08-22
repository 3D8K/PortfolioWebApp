import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonChange = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 250px;
  cursor: pointer;
  border: 3px solid #8360c3;
  border-radius: 5px;
  margin: 20px;
  align-items: center;
  transition-duration: 1s;

  p {
    margin: 10px 10px 10px 0;
    font-weight: 400;
    max-width: 300px;
  }

  div {
    margin: 10px;
    height: 30px;
    width: 30px;
  }

  :hover {
    transform: perspective(1px) scale(1.1);
    box-shadow: 5px 5px 5px 0 #432b6b;
  }
`;
