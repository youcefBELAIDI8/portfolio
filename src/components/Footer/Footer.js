import React from 'react';
import { AiFillYoutube, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact</LinkTitle>
          <LinkItem href="tel:+33769800017">+33 769 800 017</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Mail</LinkTitle>
          <LinkItem href="mailto:belaidi-youcef@hotmail.com">
            belaidi-youcef@hotmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Ton portfolio  est le reflet de ton travail. Celui là, est le mien !</Slogan> 
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://www.linkedin.com/in/youcef-belaidi-83a975143/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/yo_belaidi/" target="_blank">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
