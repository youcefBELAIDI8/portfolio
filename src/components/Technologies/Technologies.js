import React from 'react';
import { DiFirebase, DiReact, DiZend, DiAptana } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="technologies">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      J'ai eu la chance de travailler avec plusieurs technologies durant mon parcours et ci-dessous quelques-unes qui me passionnent
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            
            React.js - Redux - Angular
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End - SGBD</ListTitle>
          <ListParagraph>
            Node Js <br />
            SQL - PostgreSQL - MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Méthodologies - Outils - UI/UX</ListTitle>
          <ListParagraph>
            Agile - Jira - Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAptana size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            AWS - Docker - Gitlab - Heroku - Netlify
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
