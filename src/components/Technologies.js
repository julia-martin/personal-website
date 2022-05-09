import React from "react";
import styled from "styled-components/macro";
import Skill from "./Skill";
import { FONTS } from '../constants';

const imgPath = "/assets/logos/";
const Technologies = () => {
  return (
    <Wrapper>
      <Header>Frontend</Header>
      <SkillGroup>
        <Skill name="JavaScript" imgUrl={`${imgPath}javascript.png`} />
        <Skill name="React" imgUrl={`${imgPath}react.png`} />
        <Skill name="HTML5" imgUrl={`${imgPath}html5.png`} />
        <Skill name="CSS" imgUrl={`${imgPath}css.png`} />
        <Skill name="Tailwind CSS" imgUrl={`${imgPath}tailwind.png`} />
      </SkillGroup>
      <Header>Backend</Header>
      <SkillGroup>
        <Skill name="Node" imgUrl={`${imgPath}node.png`} />
        <Skill name="Python" imgUrl={`${imgPath}python.png`} />
        <Skill name="Go" imgUrl={`${imgPath}golang.png`} />
        <Skill name="Ruby" imgUrl={`${imgPath}ruby.png`} />
        <Skill name="Java" imgUrl={`${imgPath}java.png`} />
      </SkillGroup>
      <Header>Databases</Header>
      <SkillGroup>
        <Skill name="SQL" imgUrl={`${imgPath}postgres.png`} />
        <Skill name="MongoDB" imgUrl={`${imgPath}mongodb.png`} />
      </SkillGroup>
      <Header>Other</Header>
      <SkillGroup>
        <Skill name="AWS" imgUrl={`${imgPath}aws.png`} />
        <Skill name="Git" imgUrl={`${imgPath}git.png`} />
        <Skill name="Docker" imgUrl={`${imgPath}docker.png`} />
      </SkillGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Header = styled.h3`
  text-transform: uppercase;
  margin-top: 24px;
`;

const SkillGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default Technologies;
