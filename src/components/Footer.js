import React from 'react';
import styled from "styled-components/macro";
import { COLORS, GRADIENT } from "../constants.js";
import GithubButton from './GithubButton';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>Designed and built by Julia Martin</FooterText>
      <GithubButton githubLink="https://github.com/julia-martin/personal-website" />
      <SiteLinks>
        <Item><Link href="https://github.com/julia-martin">github</Link></Item>
        <Item><Link href="https://www.linkedin.com/in/juliadmartin/">linkedin</Link></Item>
      </SiteLinks>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: ${GRADIENT};
  color: ${COLORS.offwhite};
  text-align: center;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterText = styled.p`
  line-height: 1.5rem;
  @media (max-width: 540px) {
    font-size: 0.8rem;
  }
`;

const SiteLinks = styled.ul`
  list-style-type: none;
  font-weight: bold;
`;

const Item = styled.li`
  display: inline-block;
  margin: 0px 10px;

  @media (pointer: coarse) {
    min-height: var(--min-tap-height);
    line-height: var(--min-tap-height);
  }
`;

const Link = styled.a`
  color: ${COLORS.offwhite};

  &:hover {
    color: ${COLORS.darkBlue};
  }
`;

export default Footer;