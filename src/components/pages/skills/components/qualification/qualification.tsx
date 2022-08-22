import React, { useState } from "react";
import { SkillsHeader } from "../../styles";
import { TimeLine } from "../timeLineComponent/timeLine";
import { ButtonChange, ButtonWrapper } from "./style";

import { ReactComponent as IconWork } from "../../../../../assets/work.svg";
import { ReactComponent as IconStudy } from "../../../../../assets/education.svg";

export function Qualification() {
  const [isWorkSelect, setIsWorkSelect] = useState(true);

  const WorkArr = [
    {
      date: 2021,
      header: "Freematiq",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eligendi ipsa omnis. Aliquid autem doloribus inventore iusto non nostrum, officiis temporibus ullam voluptatum. Asperiores ex magnam minus qui reiciendis voluptatem.\n",
    },
    {
      date: 2023,
      header: "You company will be hear)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eligendi ipsa omnis. Aliquid autem doloribus inventore iusto non nostrum, officiis temporibus ullam voluptatum. Asperiores ex magnam minus qui reiciendis voluptatem.\n",
    },
  ];

  const StudyArr = [
    {
      date: 2020,
      header: "Front End Development Libraries",
      description: "Base front-end course on Freecodecamp.org",
    },
    {
      date: 2020,
      header: "JavaScript Algorithms and Data Structures",
      description:
        "Basic JS and algorithms and data structure courese on Freecodecamp.org",
    },
    {
      date: 2022,
      header: "Middle front-end developer screen on HackerRank",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eligendi ipsa omnis. Aliquid autem doloribus inventore iusto non.",
    },
  ];

  return (
    <>
      <SkillsHeader>
        <h1>Qualification</h1>
        <h4>My personal journey</h4>
        <ButtonWrapper>
          <ButtonChange onClick={() => setIsWorkSelect(true)}>
            <div>
              <IconWork />
            </div>
            <p>Work</p>
          </ButtonChange>
          <ButtonChange onClick={() => setIsWorkSelect(false)}>
            <div>
              <IconStudy />
            </div>
            <p>Study</p>
          </ButtonChange>
        </ButtonWrapper>
        {isWorkSelect ? (
          <TimeLine array={WorkArr} />
        ) : (
          <TimeLine array={StudyArr} />
        )}
      </SkillsHeader>
    </>
  );
}
