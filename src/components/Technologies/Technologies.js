import React from "react";
import { DiFirebase, DiReact, DiSwift, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      In my short time in the software development field, I have already worked
      with various technologies all the way from Back-end to Design and
      Front-end
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br /> React.js, TypeScript, JavaScript, HTML,{" "}
            <br /> and CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with Java, <br /> Python, and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiSwift size="3rem" />
        <ListContainer>
          <ListTitle>Mobile-App Dev</ListTitle>
          <ListParagraph>
            Experience with SwiftUI,
            <br /> React Native,
            <br /> Kotlin/Java, Dart/Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
