import React from 'react';
import styled from "styled-components/macro";
import { COLORS, GRADIENT } from "../constants.js";
import GithubButton from './GithubButton';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Designed and built by Julia Martin</p>
      <GithubButton githubLink="https://github.com/julia-martin/personal-website" />
      <SiteLinks>
        <Link href="https://github.com/julia-martin">github</Link>
        <Link href="https://www.linkedin.com/in/juliadmartin/">linkedin</Link>
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

const SiteLinks = styled.li`
  list-style-type: none;
  font-weight: bold;
`;

const Link = styled.a`
  color: ${COLORS.darkBlue};
  display: inline-block;
  padding: 0px 10px;
  margin: 0px 10px;

  &:hover {
    color: ${COLORS.offwhite};
  }
`;

export default Footer;