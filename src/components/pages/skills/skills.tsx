import React, { useState } from "react";
import { StackList } from "./components/stackList";
import {
  AboutWrapper,
  SkillsHeader,
  SkillsButtonMainWrapper,
  SkillsButtonWrapper,
  SkillMenuButton,
  OpenIcon,
  MenuPlateWrapper,
} from "./styles";
import { ReactComponent as IconFrontend } from "../../../assets/brackets-curly.svg";
import { ReactComponent as IconBackEnd } from "../../../assets/server.svg";
import { ReactComponent as IconAngle } from "../../../assets/angle.svg";
import { Qualification } from "./components/qualification/qualification";

export function Skills() {
  const [isFrontSkillsOpen, setIsFrontSkillsOpen] = useState(false);
  const [isBackendSkillsOpen, setIsBackendSkillsOpen] = useState(false);

  const frontSkills = [
    { name: "JavaScript", interest: 93 },
    { name: "TypeScript", interest: 84 },
    { name: "React", interest: 87 },
    { name: "HTML", interest: 90 },
    { name: "CSS", interest: 91 },
  ];

  const backSkills = [
    { name: "NodeJS", interest: 80 },
    { name: "Express", interest: 76 },
    { name: "Sequelize", interest: 80 },
    { name: "Nest", interest: 56 },
    { name: "Docker", interest: 64 },
  ];

  function openMenuFunction(wrapperId: string, listId: string) {
    const list = document.getElementById(listId);
    const wrapper = document.getElementById(wrapperId);
    if (wrapper && list) {
      const wrapperHeight = window.getComputedStyle(wrapper, null).height;
      const textHeight = window.getComputedStyle(list, null).height;
      wrapper &&
        (Math.round(Number(wrapperHeight.slice(0, -2))) ==
        Math.round(Number(textHeight.slice(0, -2)))
          ? (wrapper.style.height = "0px")
          : (wrapper.style.height = textHeight));
    }
  }

  return (
    <AboutWrapper>
      <SkillsHeader>
        <h1>Skills</h1>
        <h4>My technical level</h4>
      </SkillsHeader>
      <SkillsButtonMainWrapper>
        <SkillsButtonWrapper
          onClick={() => {
            isFrontSkillsOpen
              ? setIsFrontSkillsOpen(false)
              : setIsFrontSkillsOpen(true);
            openMenuFunction("frontEndWrapper", "frontEndList");
          }}
        >
          <SkillMenuButton>
            <IconFrontend />
            <div>
              <h3>Frontend developing</h3>
              <h5>More than 2 years</h5>
            </div>
            <OpenIcon className={isFrontSkillsOpen ? "active" : ""}>
              <IconAngle />
            </OpenIcon>
          </SkillMenuButton>
          <MenuPlateWrapper id="frontEndWrapper">
            <StackList
              skills={frontSkills}
              openChecker={isFrontSkillsOpen}
              id={"frontEndList"}
            />
          </MenuPlateWrapper>
        </SkillsButtonWrapper>
        <SkillsButtonWrapper
          onClick={() => {
            isBackendSkillsOpen
              ? setIsBackendSkillsOpen(false)
              : setIsBackendSkillsOpen(true);
            openMenuFunction("backEndWrapper", "backEndList");
          }}
        >
          <SkillMenuButton>
            <IconBackEnd />
            <div>
              <h3>Backend developing</h3>
              <h5>More than 1 year</h5>
            </div>
            <OpenIcon className={isBackendSkillsOpen ? "active" : ""}>
              <IconAngle />
            </OpenIcon>
          </SkillMenuButton>
          <MenuPlateWrapper id="backEndWrapper">
            <StackList
              skills={backSkills}
              openChecker={isBackendSkillsOpen}
              id={"backEndList"}
            />
          </MenuPlateWrapper>
        </SkillsButtonWrapper>
      </SkillsButtonMainWrapper>
      <Qualification />
    </AboutWrapper>
  );
}
