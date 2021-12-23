import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2020, text: 'Diplôme d\'ngénieur en télécoms et réseaux'},
  { number: 2020, text: 'Certification Application Security and Secure Coding', },
  { number: 2020, text: 'TOEIC - 850 PTS', },
  { number: 2021, text: 'Certification Node JS Checkmarx',},
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Diplôme et certifications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
