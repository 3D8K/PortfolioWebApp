import React from "react";
import {
  MainWrapper,
  ContactBlock,
  ContactItem,
  WelcomeHeader,
  WelcomeWrapper,
  WelcomeTextWrapper,
  WelcomeJobTitle,
  WelcomeSmallDescription,
  ButtonCV,
  BlobSvg,
} from "./style";
import { ReactComponent as IconLinkedIn } from "../../../assets/linkedin-alt.svg";
import { ReactComponent as IconTelegram } from "../../../assets/telegram-alt.svg";
import { ReactComponent as IconGitHub } from "../../../assets/github-alt.svg";
import { ReactComponent as IconDownload } from "../../../assets/download.svg";
import CvPhoto from "../../../assets/cv-photo.png";

export function MainComponent() {
  return (
    <main>
      <MainWrapper>
        <ContactBlock>
          <ContactItem
            href={"https://ca.linkedin.com/in/stepan-osadchii-aa1541218"}
          >
            <IconLinkedIn />
          </ContactItem>
          <ContactItem href={"https://t.me/S3D8K"}>
            <IconTelegram />
          </ContactItem>
          <ContactItem href={"https://github.com/3D8K"}>
            <IconGitHub />
          </ContactItem>
        </ContactBlock>
        <WelcomeWrapper>
          <BlobSvg>
            <img src={CvPhoto} alt="cv-photo" />
          </BlobSvg>
          <WelcomeTextWrapper>
            <WelcomeHeader>Hi, i`am Stepan</WelcomeHeader>
            <WelcomeJobTitle>Forntend developer</WelcomeJobTitle>
            <WelcomeSmallDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet
              commodi distinctio dolore dolores ducimus, enim explicabo facilis
            </WelcomeSmallDescription>
            <ButtonCV>
              <a>Download CV</a>
              <div>
                <IconDownload />
              </div>
            </ButtonCV>
          </WelcomeTextWrapper>
        </WelcomeWrapper>
      </MainWrapper>
    </main>
  );
}
