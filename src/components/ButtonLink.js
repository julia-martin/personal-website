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
  border-radius: 8px;
  padding: 12px 16px 12px;
  margin: 15px 24px 15px 0px;
  box-shadow: 1px 2px 4px hsl(0deg 0% 0% / 0.5);
  transition: transform 400ms;
  will-change: transform;

  ${Anchor}:hover & {
    cursor: pointer;
    transform: translateY(-3px) scale(1.03);
    transition: transform 200ms;
  }

  @media (pointer: coarse) {
    height: var(--min-tap-height);
  }
`;

export default ButtonLink;