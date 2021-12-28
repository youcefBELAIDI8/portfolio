import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projets">
    <SectionDivider />
    <SectionTitle main>Projets</SectionTitle>
    <SectionText>
       L'accès à certains de ces projets ne sera pas possible pour des raisons de confidentialité
    </SectionText>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo><br/>
            <CardInfo className="card-info">Prestataire : {p.presta}</CardInfo>
            <CardInfo className="card-info">Client : {p.client}</CardInfo>
            <CardInfo className="card-info">Rôle occupé : {p.role}</CardInfo>
            <div><br/>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.link} target="_blank">Visiter</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;