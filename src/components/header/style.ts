import styled from "styled-components";

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 10px;
`;

export const Header = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 3;
  }
`;

export const HeaderBody = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  :before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: 4;
  }
  @media (max-width: 768px) {
    height: 65px;
  }
`;

export const Logo = styled.a`
  display: flex;
  margin: 30px;
  position: relative;
  z-index: 5;
`;

export const ButtonBurger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: relative;
    width: 30px;
    height: 20px;
    z-index: 3;

    &.active {
      span {
        transform: scale(0);
      }
    }

    span {
      position: absolute;
      background-color: black;
      left: 0;
      width: 100%;
      height: 3px;
      top: 9px;
      transition: all 0.3s ease 0s;
    }
  }

  &.active::before {
    transform: rotate(45deg);
    top: 9px;
  }

  &.active::after {
    transform: rotate(-45deg);
    bottom: 9px;
  }

  ::before,
  ::after {
    content: "";
    background: black;
    position: absolute;
    width: 100%;
    height: 3px;
    left: 0;
    transition: all 0.3s ease 0s;
  }
  ::before {
    top: 0;
  }
  ::after {
    bottom: 0;
  }
`;

export const ButtonMenu = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease 0s;
    &.active {
      top: 0;
    }
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
    }
  }
`;

export const ButtonUl = styled.ul`
  position: relative;
  z-index: 5;
  display: flex;
  list-style: none;
  margin: 2px;
  .li {
    list-style: none;
  }
  @media (max-width: 768px) {
    padding: 70px 30px 30px 30px;
    display: block;
    .li {
      margin: 0 0 30px 0;
    }
  }
`;

export const Button = styled.div`
  margin: 15px;
  transition-duration: 0.5s;
  cursor: pointer;
  &.currentPage {
    color: #8360c3;
  }
  :hover {
    color: #8360c3;
    transform: perspective(1px) scale(1.1);
  }
  @media (max-width: 768px) {
    color: white;
  }
`;
