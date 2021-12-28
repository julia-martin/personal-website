import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { COLORS, FONTS } from '../constants.js';

const Header = () => {
  return (
    <Wrapper>
      <NameArea>
        <a href="/"><Name>Julia Martin</Name></a>
        <WaveEmoji role="img" aria-label="Waving hand">👋</WaveEmoji>
      </NameArea>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const NameArea = styled.div`
  display: inline-block;
`;

const Name = styled.h1`
  color: ${COLORS.offwhite};
  display: inline-block;
  font-size: 3rem;
  font-family: ${FONTS.strong};
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  padding-left: 10px;
  filter: drop-shadow(0px 1px 2px hsl(0deg 0% 0% / 0.1));

  @supports (-webkit-text-stroke: 0.3px black) {
    -webkit-text-stroke: 0.3px ${COLORS.darkBlue};
    -webkit-text-fill-color: white;
  }

  @media (max-width: 375px) {
    font-size: 2rem;
  }
`;

const wave = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(30deg);
  }
`;

const WaveEmoji = styled.span`
  display: none;
  font-size: 2rem;

  ${NameArea}:hover & {
    display: inline-block;
    will-change: transform;
    transform-origin: 75% 80%;
    /* transform: translateX(10px); */
    animation: ${wave} 1000ms infinite alternate ease-in-out;
  }
`;



export default Header;