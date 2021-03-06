import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../constants.js';

const GithubButton = ({ githubLink }) => {
  return (
    <Link href={githubLink}>
      <IconWrapper>
        <Icon src="assets/GitHub-Mark-Light-120px-plus.png" alt="Github Link" />
        <IconCaption>view code</IconCaption>
      </IconWrapper>
    </Link>
  );
};

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.figure`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 44px;
  min-height: 44px;
  margin: 0px 10px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const IconCaption = styled.figcaption`
  color: ${COLORS.offwhite};
  font-size: 0.7rem;
`;

export default GithubButton;