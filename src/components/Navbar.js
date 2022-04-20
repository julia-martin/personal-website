import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, ANIMATIONS } from '../constants.js';

const Navbar = () => {
  return (
    <NavList>
      <a href="#about"><NavItem>about</NavItem></a>
      <a href="#projects"><NavItem>projects</NavItem></a>
      <a href="#skills"><NavItem>skills</NavItem></a>
      <a href="#contact"><NavItem>contact</NavItem></a>
    </NavList>
  );
};

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 550px) {
    flex-direction: column;
  }

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    animation: ${ANIMATIONS.slideFromRight} ease-out 500ms both;
    animation-delay: 400ms;
  }
`;

const NavItem = styled.li`
  display: inline-block;
  font-size: 1.5rem;
  padding: 10px 20px;
  margin-top: 50px;
  border: 1px solid transparent;
  border-bottom: 1px solid ${COLORS.offwhite};

  &:hover {
    border-bottom: 3px solid ${COLORS.palette['100']};
    color: ${COLORS.offwhite};
  }

  @media (max-width: 550px) {
    display: block;
    max-width: 50%;
    margin: 0;
  }
`;

export default Navbar;