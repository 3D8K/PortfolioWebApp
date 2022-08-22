import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Header,
  HeaderBody,
  Container,
  Logo,
  Button,
  ButtonUl,
  ButtonMenu,
  ButtonBurger,
} from "./style";

export function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const changeOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const navigate = useNavigate();
  return (
    <Header className={"shadowed"}>
      <Container>
        <HeaderBody>
          <Logo>Stepan</Logo>
          <ButtonBurger onClick={changeOpen} className={isOpen ? "active" : ""}>
            <span></span>
          </ButtonBurger>
          <ButtonMenu className={isOpen ? "active" : ""}>
            <ButtonUl>
              <li>
                <Button onClick={() => navigate("/")}>Home</Button>
              </li>
              <li>
                <Button onClick={() => navigate("/about")}>About me</Button>
              </li>
              <li>
                <Button onClick={() => navigate("/skills")}>Skills</Button>
              </li>
              <li>
                <Button onClick={() => navigate("/portfolio")}>
                  Portfolio
                </Button>
              </li>
              <li>
                <Button onClick={() => navigate("/contact")}>Contact me</Button>
              </li>
            </ButtonUl>
          </ButtonMenu>
        </HeaderBody>
      </Container>
    </Header>
  );
}
