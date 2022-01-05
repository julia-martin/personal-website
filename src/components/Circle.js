import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from "../constants.js";

const Circle = ({ color, style, frontText, backText }) => {
  return (
    <CircleDiv style={style}>
      <FrontSide>{frontText}</FrontSide>
      <Backside>
        <BackText>
          {backText.map((elem) => <li key={elem}>{elem}</li>)}
        </BackText>
      </Backside>
    </CircleDiv>
  );
};

const CircleDiv = styled.div`
  background-color: var(--frontColor);
  clip-path: circle(calc(var(--width) / 2) at 50% 50%);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 25px 10px;
  height: var(--width);
  width: var(--width);
  text-align: center;
  transform: translateY(var(--translateY));
  transform-style: preserve-3d;
  perspective: 200px;
  will-change: transform;

  @media (max-width: 550px) {
    margin: 10px 5px;
  }
  @media (max-width: 460px) {
    transform: translateY(0);
  }
`;

const FrontSide = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  clip-path: circle(calc(var(--width) / 2) at 50% 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  font-size: 1.1rem;
  font-weight: bold;
  will-change: transform;
  transition: transform 400ms;

  ${CircleDiv}:hover & {
    transform: rotateY(180deg);
  }
`;

const Backside = styled.div`
  background-color: var(--backColor);
  color: ${COLORS.offwhite};
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(-180deg);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  will-change: transform;
  transition: transform 400ms;

  ${CircleDiv}:hover & {
    transform: rotateY(0deg);
  }
`;

const BackText = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
`;

export default Circle;