import React from 'react';
import styled from "styled-components/macro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { COLORS, ANIMATIONS } from "../constants.js";

const ScrollUpBtn = ({ display }) => {
  return (
    <Anchor href="#top" style={{display: display}}>
      <Button>
        <FontAwesomeIcon icon={faAngleDoubleUp} size="2x"/>
      </Button>
    </Anchor>
  );
};

const Anchor = styled.a`
  position: fixed;
  bottom: 80px;
  right: 20px;

  @media (max-width: 460px) {
    bottom: 130px;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${ANIMATIONS.fadeIn} 700ms both;
    animation-delay: 300ms;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${COLORS.offwhite};
  color: ${COLORS.offwhite};
  width: 50px;
  height: 50px;

  &:hover {
    cursor: pointer;
  }
`;

export default ScrollUpBtn;