import React from 'react';
import styled from "styled-components/macro";
import { COLORS } from '../constants.js';

const ButtonLink = ({ href, text }) => {
  return (
    <Anchor href={href}>
      <Button>{text}</Button>
    </Anchor>
  )
};

const Anchor = styled.a``;

const Button = styled.button`
  background-color: ${COLORS.palette['400']};
  color: ${COLORS.offwhite};
  border: none;
  border-radius: 4px;
  padding: 6px 8px 4px;
  margin: 15px 0;
  box-shadow: 1px 2px 4px hsl(0deg 0% 0% / 0.5);
  transition: transform 400ms;
  will-change: transform;

  ${Anchor}:hover & {
    cursor: pointer;
    transform: translateY(-6px) scale(1.05);
    transition: transform 200ms;
  }

  @media (pointer: coarse) {
    height: var(--min-tap-height);
  }
`;

export default ButtonLink;