import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, FONTS } from '../constants.js';

const Section = ({ id, title, children, colorTheme}) => {
  return (
    <SectionWrapper id={id}>
      <Heading><HeadingTitle>{title}</HeadingTitle></Heading>
      <Container>{children}</Container>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 10px 50px;
  scroll-snap-align: start;
  background: linear-gradient(180deg,	hsl(235, 90%, 70%), ${COLORS.darkBlue} 6%);
`;

const Heading = styled.h2`
  color: ${COLORS.offwhite};
  font-family: ${FONTS.strong};
  letter-spacing: 0.4rem;
  text-align: center;
  padding: 5px 10px;
  margin: 70px 0px 20px;

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    transition: transform 300ms;
    &:hover {
      transform: translateY(-5px);
      transition: transform 200ms;
    }
  }
`;

const HeadingTitle = styled.span`
  border: 2px solid ${COLORS.offwhite};
  padding: 5px 10px;
`;

const Container = styled.div`
  max-width: 70ch;
  margin: 0 auto;
`;

export default Section;