import styled from "styled-components";

export const TimeLineSection = styled.section`
  padding: 100px 15px;
`;

export const TimeLineItems = styled.div`
  max-width: 900px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    background: #8360c3;
    left: calc(50% - 1px);
    @media (max-width: 768px) {
      left: 0;
      margin: 7px;
    }
  }
`;

export const TimeLineItem = styled.div`
  margin-bottom: 30px;
  width: 100%;
  :nth-child(odd) {
    padding-right: calc(50% + 20px);
    text-align: right;
  }
  :nth-child(even) {
    padding-left: calc(50% + 20px);
    text-align: left;
  }
  :last-child {
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    :nth-child(odd):before {
      left: 7px;
    }
    :nth-child(odd) {
      text-align: left;
    }

    :nth-child(odd),
    :nth-child(even) {
      padding-left: 37px;
    }
  }
`;

export const TimeLineDot = styled.div`
  height: 16px;
  width: 16px;
  background: #8360c3;
  position: absolute;
  left: calc(50% - 8px);
  border-radius: 50%;
  @media (max-width: 768px) {
    left: 0;
  }
`;

export const TimeLineDate = styled.div`
  font-size: 20px;
  margin: 20px 30px;
`;

export const TimeLineContent = styled.div`
  padding: 0 30px;
  border-radius: 10px;
  h3 {
    font-size: 20px;
    font-weight: 500;
    max-width: 300px;
  }
  p {
    color: gray;
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
    max-width: 300px;
  }
`;
