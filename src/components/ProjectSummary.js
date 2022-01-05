import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, GRADIENT, FONTS } from '../constants.js';
import ButtonLink from './ButtonLink';
import GithubButton from './GithubButton';

const ProjectSummary = ({ title, pageUrl, logo, githubLink, isComplete, stack, children }) => {
  console.log(stack);
  return (
    <Wrapper>
      <h2>
        <ProjectTitle href={pageUrl}>{title}</ProjectTitle>
        <Logo src={logo} alt={`${title} logo`} />
      </h2>
      <div>
        {children}
        {isComplete && <ButtonLink href={pageUrl} text="See details" />}
      </div>
      <FlexContainer>
        {isComplete && <GithubButton githubLink={githubLink} />}
        <StackSection>
          {stack.map((elem, idx) => <StackItem key={`tool-${idx}`}>{elem}</StackItem>)}
        </StackSection>
      </FlexContainer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 30px 0;

  &:first-of-type {
    border-bottom: 0.5px solid ${COLORS.offwhite};
  }
`;

const ProjectTitle = styled.a`
  font-family: ${FONTS.normal};
  font-size: ${20/16}rem;
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

const Logo = styled.img`
  float: right;
  width: 100px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 100vw;
  overflow: auto;
`;

const StackSection = styled.div`
  display: flex;
  justify-content: center;
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