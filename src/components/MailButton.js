import React from 'react';
import styled from "styled-components/macro";
import { COLORS } from '../constants.js';

const MailButton = ({ email }) => {
  return (
    <a href={`mailto:${email}`}>
      <EmailBtn>
        <Envelope />
        <Email href={`mailto:${email}`}>{email}</Email>
      </EmailBtn>
    </a>
  );
};

const EmailBtn = styled.button`
  background-color: ${COLORS.palette['100']};
  border: 2px solid ${COLORS.palette['200']};
  display: block;
  height: 150px;
  width: 400px;
  position: relative;
  margin: 0 auto;
  padding: 0;
  box-shadow: 2px 3px 5px hsl(0deg 0% 0% / 0.7);
  transform-style: preserve-3d;
  perspective: 1000000px;

  &:hover {
    cursor: pointer;
  }
`;

const Envelope = styled.div`
  background-color: ${COLORS.palette['200']};
  clip-path: polygon(0% 0%, 100% 0%, 50% 80%, 0% 0%);
  position: relative;
  width: 100%;
  height: 100%;

  &:before {
    background-color: ${COLORS.offwhite};
    clip-path: polygon(0% 0%, 100% 0%, 50% 80%, 0% 0%);
    content: '';
    width: 98%;
    height: 98%;
    display: block;
    position: absolute;
    top: 0px;
    left: 8px;
  }

  ${EmailBtn}:hover & {
    transform: rotateX(180deg) translateY(100%);
    transition: transform 100ms;
  }
`;

const Email = styled.p`
  color: ${COLORS.darkBlue};
  position: absolute;
  top: 10px;
  left: 80px;

  ${EmailBtn}:hover & {
    color: ${COLORS.offwhite};
  }
`;

export default MailButton;