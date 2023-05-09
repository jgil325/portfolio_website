import React from "react";
import {
  Section,
  SectionDivider,
  SectionSubText,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  gitLink,
  videoLink,
  certificateGitLink,
  siteLink,
} from "../../constants/constants";
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
    <SectionSubText>Digital Brown Bag and Co</SectionSubText>
    <SectionText>
      This class was focused on learning from people in the industry about how
      to navigate our future jobs as well as the connect between those future
      jobs and college. Each week we would have a new speaker, each bringing
      their own presentation about whatever they were passionate about. These
      speakers ranged from million dollar startup founders to freelancers and
      employees at companies like Twitter and Verizon. Information ranged from
      talking about Credit Scores to things such as the importance of taking
      breaks when needed and organizing time.
    </SectionText>
    <br />
    <SectionText>
      What I liked the most about this class was hearing from Shep Ogden, the
      co-founder of Offbeat Media Group, which runs some of the largest social
      media accounts across multiple platforms. I really enjoyed his talk
      because I want to have my own startup in the future, and hearing about his
      journey helped me learn so much, and the fact he did this coming right out
      of college made it so much more impressive.
    </SectionText>
    <br />
    <SectionSubText>New Media Capstone</SectionSubText>
    <SectionText>
      This class was the last in the dev-certificate track. The class consisted
      of working with a team of 6. Our team was given a client who then gave us
      a product that we were to build out throughout the semester. This was
      perfect for gaining experience designing the project architecture myself
      and working with other students instead of alone.
    </SectionText>
    <br />
    <SectionText>
      The project we worked on was called OiStir. This was a site made for
      hollywood and worldwide film-makers focusing on the climate crisis. A user
      would be able to go to the site and click on words which would reveal cut
      clips from a podcast that could be then used as a source of inspiration
      for film ideas. The github link to the code and the link to the deployed
      site are below!
    </SectionText>
    <LinkContainer>
      <Links href={certificateGitLink}>Code</Links>
      <Links href={siteLink}>Deployed Site</Links>
    </LinkContainer>
  </Section>
);

export default Certificates;
