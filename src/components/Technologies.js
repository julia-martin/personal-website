import React from "react";
import styled from "styled-components/macro";
import Circle from "./Circle";
import { COLORS } from "../constants.js";

const Technologies = () => {
  return (
    <Wrapper>
      <Circle
        style={{
          "--width": "200px",
          "--translateY": "0px",
          "--frontColor": COLORS.palette['300'],
          "--backColor": COLORS.palette['400']
        }}
        frontText="JavaScript"
        backText={["React", "Redux", "Node", "Express", "D3", "Handlebars"]}
      />
      <Circle
        style={{
          "--width": "120px",
          "--translateY": "0px",
          "--frontColor": COLORS.palette['100'],
          "--backColor": COLORS.palette['200']
        }}
        frontText="Go"
        backText={["Go"]}
      />
      <Circle
        style={{
          "--width": "100px",
          "--translateY": "50px",
          "--frontColor": COLORS.palette['400'],
          "--backColor": COLORS.palette['300']
        }}
        frontText="Ruby"
        backText={["Rails"]}
      />
      <Circle style={{
          "--width": "100px",
          "--translateY": "20px",
          "--frontColor": COLORS.palette['200'],
          "--backColor": COLORS.palette['300']
        }}
        frontText="Java"
        backText={["Java"]}
      />
      <Circle
        style={{
          "--width": "180px",
          "--translateY": "20px",
          "--frontColor": COLORS.palette['500'],
          "--backColor": COLORS.palette['400']
         }}
        frontText="Python"
        backText={["Numpy", "Pandas", "Scikit-learn"]}
      />
      <Circle
        style={{
          "--width": "100px",
          "--translateY": "80px",
          "--frontColor": COLORS.palette['300'],
          "--backColor": COLORS.palette['200']
        }}
        frontText="SQL"
        backText={["SQL"]}
      />
      <Circle
        style={{
          "--width": "180px",
          "--frontColor": COLORS.palette['500'],
          "--backColor": COLORS.palette['400']
        }}
        frontText="HTML/CSS"
        backText={["SCSS", "Tailwind", "styled-components"]}
      />
      <Circle
        style={{
          "--width": "110px",
          "--frontColor": COLORS.palette['400'],
          "--backColor": COLORS.palette['300']
        }}
        frontText="MongoDB"
        backText={["MongoDB"]}
      />
      <Circle style={{
          "--width": "100px",
          "--translateY": "-40px",
          "--frontColor": COLORS.palette['200'],
          "--backColor": COLORS.palette['300']
        }}
        frontText="AWS"
        backText={["AWS"]}
      />
      <Circle style={{
          "--width": "100px",
          "--frontColor": COLORS.palette['400'],
          "--backColor": COLORS.palette['500']
        }}
        frontText="Git"
        backText={["Git"]}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  filter: drop-shadow(0px 2px 4px hsl(0deg 0% 0% / 0.3));
  max-width: 1000px;
  margin: 0 auto;
`;

export default Technologies;
