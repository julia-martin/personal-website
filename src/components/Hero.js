import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, ANIMATIONS } from '../constants.js';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <Wrapper>
      <Intro>
        <GlowBackground />
        Hi there! I'm a full-stack software engineer who's deeply passionate about building great products.
      </Intro>
      <Navbar />
    </Wrapper>
  )
};

const Wrapper = styled.header`
  width: 100%;
  height: 100vh;
  padding: 100px 0px 50px;
  overflow: hidden;
  background-image: url("/assets/deco/layered-waves-haikei.png");
  background-size: cover;
`;

const Intro = styled.h2`
  color: ${COLORS.offwhite};
  text-align: center;
  max-width: min(90%, 800px);
  padding: 15px 14px 14px;
  margin: 10px auto;
  position: relative;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${ANIMATIONS.slideFromLeft} ease-out 500ms both;
    animation-delay: 250ms;
  }
`;

const GlowBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 50px;
  background: radial-gradient(hsla(321deg 50% 30% / 0.5), hsla(321deg 45% 40% / 0.3), hsla(321deg 20% 70% / 0.2));
  filter: blur(20px);
  z-index: -1;
`;

export default Hero;