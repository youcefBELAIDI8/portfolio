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
          le site personnel de Youcef BELAIDI - Ingénieur logiciel
        </SectionTitle>
        <SectionText>
        Sur ce site web, vous allez decouvrir en bref qui je suis, ce que j'ai réalisé comme projets, les outils ainsi que les technologies qui me passionnent. 
        </SectionText>
        <Button onClick={props.handleClick}><a href='#about'>Plus d'information</a></Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;