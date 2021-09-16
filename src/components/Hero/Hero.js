import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I am Jacob Gil <br />
        Computer Science Student
      </SectionTitle>
      <SectionText>
        I am a third year Computer Science student at the University of Georgia.
        Here you can find the work I've done so far in my career!
      </SectionText>
      <Button
        onClick={() =>
          window.open(
            "mailto:Jacob.Gil@uga.edu? &subject=Jacob Gil - Portfolio Website"
          )
        }
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
