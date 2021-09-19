import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const accData = [
  { name: "CURO Honors Scholarship", org: "University of Georgia" },
  { name: "HSF Scholar", org: "Hispanic Scholarship Fund" },
  { name: "Etchberger Scholarship", org: "University of Georgia" },
  { name: "SEO Tech Developer", org: "Sponsors for Educational Oppurtunity" },
  { name: "Eagle Scout", org: "Boy Scouts of America" },
  { name: "Club Secretary", org: "UGA Club Cycling" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {accData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.name}</BoxNum>
          <BoxText>{card.org}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
