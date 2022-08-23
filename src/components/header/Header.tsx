import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
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
                <Button
                  onClick={() => navigate("/")}
                  className={location.pathname == "/" ? "currentPage" : ""}
                >
                  Home
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => navigate("/about")}
                  className={location.pathname == "/about" ? "currentPage" : ""}
                >
                  About me
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => navigate("/skills")}
                  className={
                    location.pathname == "/skills" ? "currentPage" : ""
                  }
                >
                  Skills
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => navigate("/portfolio")}
                  className={
                    location.pathname == "/portfolio" ? "currentPage" : ""
                  }
                >
                  Portfolio
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => navigate("/contact")}
                  className={
                    location.pathname == "/contact" ? "currentPage" : ""
                  }
                >
                  Contact me
                </Button>
              </li>
            </ButtonUl>
          </ButtonMenu>
        </HeaderBody>
      </Container>
    </Header>
  );
}
