import React from "react";
import { ProgressBar } from "../styles";

interface ISkillsArray {
  name: string;
  interest: number;
}

export function StackList(props: {
  skills: ISkillsArray[];
  openChecker: boolean;
  id: string;
}) {
  return (
    <ul className={props.openChecker ? "active" : ""} id={props.id}>
      {props.skills.map((skill) => (
        <li key={skill.name}>
          <a>{skill.name}</a>
          <ProgressBar width={skill.interest}>
            <span></span>
          </ProgressBar>
        </li>
      ))}
    </ul>
  );
}
