import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from "../constants.js";

const Skill = ({name, imgUrl}) => {
  return (
    <Wrapper>
      <ImgContainer>
        <Image src={imgUrl} alt={name} />
      </ImgContainer>
      <Name>{name}</Name>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px solid ${COLORS.golden};
  box-shadow: inset 0 4px 6px -1px #ffb56b, 0 2px 4px -2px #ffb56b;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 20px;
  border-radius: 12px;
  font-weight: bold;
  text-align: center;
`;

const ImgContainer = styled.figure`
  display: flex;
  align-items: center;
  width: 150px;
  height: 200px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 100%;
  height: auto;
  object-fit: cover;
  margin: 0 auto;
`;

const Name = styled.span`
  font-size: 1.5rem;
`;

export default Skill;