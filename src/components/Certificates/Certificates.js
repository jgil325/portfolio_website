import React from "react";
import {
  Section,
  SectionDivider,
  SectionSubText,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { gitLink, videoLink } from "../../constants/constants";
import styled from "styled-components";

const Links = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;

export const LinkContainer = styled.ul`
  width: 50%;
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

const Certificates = () => (
  <Section id="NMI">
    <SectionDivider />
    <br />
    <SectionTitle>NMI Certificate Classes</SectionTitle>
    <SectionSubText>Rich Media Production Class</SectionSubText>
    <SectionText>
      This class was focused on SwiftUI app development and we learned
      everything starting from 0. I had some previous experience with Kotlin and
      Android so I was not new to the mobile development space and this helped
      me progress quickly and smoothly through the class. Being ahead towards
      the end, myself and the professor decided I could try to teach myself
      React Native in the final weeks and this turned out to be an amazing
      experience. With some React experience under my belt I was also able to
      pick up on React Native fairly quickly, and I hope to continue my React
      Native learning into the future.
    </SectionText>
    <SectionSubText>Final Project App</SectionSubText>
    <SectionText>
      Here you can find my final project code. I created a reminders app for
      your Pets that applies NavigationLinks, in-app web browsing, local
      notifications, tabview, and styling from Figma.
    </SectionText>
    <LinkContainer>
      <Links href={gitLink}>Code</Links>
      <Links href={videoLink}>Video Demonstration</Links>
    </LinkContainer>
    <br />
  </Section>
);

export default Certificates;
