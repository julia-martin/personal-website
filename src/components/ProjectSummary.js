import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, GRADIENT, FONTS } from '../constants.js';
import ProjectLogo from './ProjectLogo';
import ButtonLink from './ButtonLink';
import GithubButton from './GithubButton';

const ProjectSummary = ({ title, pageUrl, logo, githubLink, stack, children, imageUrl, caption }) => {
  return (
    <Wrapper>
      <Content>
        <Main>
          <ProjectLogo src={logo} alt={`${title} logo`} />
          <div>
            <ProjectTitle href={pageUrl}>{title}</ProjectTitle>
            {children}
          </div>
        </Main>
        <Figure>
          <Figcaption>{caption}</Figcaption>
          <img src={imageUrl} alt={caption} />
        </Figure>
        <Links>
          <ButtonLink href={pageUrl} text="Read the Story" />
          <GithubButton githubLink={githubLink} />
        </Links>
        <StackSection>
          {stack.map((elem, idx) => <StackItem key={`tool-${idx}`}>{elem}</StackItem>)}
        </StackSection>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 30px 0;
  margin: 0 auto;
  display: flex;

  &:not(:first-of-type) {
    border-top: 0.5px solid ${COLORS.offwhite};
  }
`;

const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const Main = styled.div`
  display: inline-flex;
  align-items: center;
`;

const ProjectTitle = styled.a`
  font-family: ${FONTS.normal};
  font-size: ${24/16}rem;
  letter-spacing: 0.3rem;
  color: ${COLORS.offwhite};
  text-transform: uppercase;
  padding: 8px 0px;

  &:hover {
    background-color: ${COLORS.offwhite};
    background-image: ${GRADIENT};
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
`;

const Figure = styled.figure`
  background-color: ${COLORS.offwhite};
  padding: 20px;
  margin: 20px 0px;
  border-radius: 20px;
`;

const Figcaption = styled.figcaption`
    color: ${COLORS.darkBlue};
`;

const StackSection = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;

const StackItem = styled.div`
  display: inline-block;
  border: 1px solid ${COLORS.palette['100']};
  border-top-left-radius: 99999px;
  border-top-right-radius: 99999px;
  color: ${COLORS.palette['100']};
  padding: 16px 16px 4px;
  margin: 5px 20px;
  text-align: center;
`;

export default ProjectSummary;