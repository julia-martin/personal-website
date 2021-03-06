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
          {logo && <ProjectLogo src={logo} alt={`${title} logo`} />}
          <div>
            <ProjectTitle href={pageUrl}>{title}</ProjectTitle>
            {children}
          </div>
        </Main>
        <Figure>
          <Img src={imageUrl} alt={caption} />
          <Figcaption>{caption}</Figcaption>
        </Figure>
        <Links>
          {pageUrl && <ButtonLink href={pageUrl} text="Read the Story" />}
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
  justify-content: center;

  &:not(:first-of-type) {
    border-top: 0.5px solid ${COLORS.offwhite};
  }
`;

const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: inline-flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
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
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px 5px;
  border-radius: 20px;
  max-width: min(80%, 1000px);
  max-height: 80vh;
`;

const Figcaption = styled.figcaption`
  color: ${COLORS.offwhite};
  font-size: 12px;
  margin-top: 12px;
`;

const Img = styled.img`
    width: 90%;
    justify-self: center;
`;

const StackSection = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;

const StackItem = styled.div`
  display: inline-block;
  color: ${COLORS.palette['100']};
  padding: 16px 16px 4px;
  margin: 5px 20px;
  text-align: center;
`;

export default ProjectSummary;