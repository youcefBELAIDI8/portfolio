import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Bienvenue sur <br />
          mon site personnel
        </SectionTitle>
        <SectionText>
        Sur ce site web, vous allez decouvrir en brief qui je suis, ce que j'ai réalisé comme projets et les outils ainsi que les technologies qui me passionnent. 
        </SectionText>
        <Button onClick={props.handleClick}><a href='#about'>Plus d'information</a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;