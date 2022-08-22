import styled from "styled-components";

interface Props {
  width: number;
}

export const AboutWrapper = styled.div`
  max-width: 1180px;
  flex-direction: column;
  margin: auto;
  display: flex;
  padding: 100px 0 0 0;
`;

export const SkillsHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    margin-bottom: 5px;
    font-weight: 400;
  }
  h4 {
    color: gray;
    margin-top: 0;
    font-weight: 400;
  }
`;

export const SkillsButtonMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SkillsButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 20px 40px 0 40px;
`;

export const MenuPlateWrapper = styled.div`
  height: 0;
  transition: all 300ms ease-out;
  overflow: hidden;
  ul {
    width: 100%;
    padding: 10px;
    margin-top: 0 !important;
    padding-left: 0 !important;
    top: 100%;
    &.active {
      visibility: visible;
      top: calc(100% + 8px);
    }
    li {
      display: flex;
      list-style: none;
      margin: 25px;
      font-weight: 250;
      flex-direction: column;
    }
  }
`;

export const SkillMenuButton = styled.div`
  display: flex;
  margin: 20px;
  max-width: 290px;
  cursor: pointer;
  svg {
    height: 30px;
    width: 30px;
    margin: auto;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 5px;
    h3 {
      font-weight: 400;
      margin: 0;
    }

    h5 {
      font-weight: 300;
      color: gray;
      margin: 0;
    }
  }
`;

export const OpenIcon = styled.div`
  transition: all 300ms;
  &.active {
    transform: rotate(180deg);
  }
`;

export const ProgressBar = styled.div<Props>`
  position: relative;
  height: 10px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #f0f0f0;
  box-shadow: inset 0 1px 1px #0000007f, 0 1px #ffffffcc;
  span {
    position: absolute;
    width: ${(props) => props.width}%;
    height: 100%;
    border-radius: 10px;
    background: #8360c3;
    ::before {
      position: absolute;
      content: "";
      right: 0;
      top: -10px;
      height: 0;
      width: 0;
      border: solid 7px transparent;
      border-bottom-width: 0;
      border-right-width: 0;
      border-top-color: #000;
  }
    ::after {
      position: absolute;
      content: "${(props) => props.width}%";
      right: 0;
      top: -24px;
      background: #000;
      color: #fff;
      font-weight: 500;
      font-size: 12px;
      padding: 1px 12px;
      border-radius: 3px;
    }
`;
