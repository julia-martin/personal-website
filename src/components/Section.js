import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../constants.js';

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
  margin-bottom: 24px;
  scroll-snap-align: start;
  background: linear-gradient(180deg,	hsl(235, 90%, 70%), ${COLORS.darkBlue} 6%);
  position: relative;

  &:last-of-type {
    min-height: 80vh;
  }

  @media (max-width: 500px) {
    padding: 10px 20px;
  }
`;

const Heading = styled.h2`
  text-transform: uppercase;
  color: ${COLORS.offwhite};
  font-size: ${24/16}rem;
  letter-spacing: 0.4rem;
  text-align: center;
  padding: 5px 10px;
  margin: 70px 0px 20px;
`;

const HeadingTitle = styled.span`
  border: 2px solid ${COLORS.offwhite};
  padding: 10px 10px 5px;
`;

const Container = styled.div`
  margin: 0px auto;
  overflow: auto;
`;

export default Section;