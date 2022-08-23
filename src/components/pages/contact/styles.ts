import styled from "styled-components";

export const ContactWrapper = styled.div`
  max-width: 1180px;
  text-align: center;
  margin: auto;
  justify-content: space-between;
  display: flex;
  padding: 100px 0 0 0;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const ContactTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  h2 {
    font-weight: 400;
  }
`;

export const ContactInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactInput = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin: 10px;
  span {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 5px;
  }
}
  input {
    height: 50px;
    min-width: 310px;
    font-size: 20px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #CCC;
    padding-left: 15px;
    border-bottom-width: 3px;
    transition: all 0.3s ease;
    :focus {
      border-color: #8360c3;
    }
  } 
  @media (max-width: 768px) {
    input {
      min-width: 200px;
    }
`;

export const ContactTextWrapper = styled.div`
  display: flex;
  min-height: 300px;
  margin: 10px;
  textarea {
    font-size: 19px;
    min-width: 600px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 15px;
    padding-top: 10px;
    border-bottom-width: 4px;
    outline: none;
    transition: all 0.3s ease;
    :focus {
      border-color: #8360c3;
    }
  }

  @media (max-width: 768px) {
    min-height: 250px;
    textarea {
      min-width: 250px;
    }
  }
`;

export const ContactSendButton = styled.div`
  align-items: center;

  button {
    height: 50px;
    width: 250px;
    font-size: 20px;
    color: white;
    border-radius: 30px;
    cursor: pointer;
    background: linear-gradient(90deg, #00d4ff, #8360c3, #622bdc, #00d4ff);
    background-size: 400%;
    border: none;
    margin: 20px;
    align-items: center;
    transition-duration: 1s;

    :hover {
      animation: animate 8s linear infinite;
    }

    @keyframes animate {
      0% {
        background-position: 0%;
      }
      100% {
        background-position: 400%;
      }
    }
  }
`;

export const FiledError = styled.p`
  text-align: start;
  font-weight: 500;
  margin: 0 0 0 10px;
  color: red;
`;
