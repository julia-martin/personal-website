import React from 'react';
import styled from "styled-components/macro";
import Layout from './Layout';
import GithubButton from './GithubButton';
import { COLORS, ANIMATIONS, GRADIENT } from '../constants.js';

const SimilartPage = () => {
  return (
    <Layout>
      <Logo src="assets/similart/Similart_logo.png" alt="Similart logo" />
      <Title>Similart</Title>
      <Subtitle>Ultra-innovative <b>art recommender</b> app using a <b>unique combination</b> of machine learning and data processing to generate recommendations and similar artworks. Built with Flask (Python) and D3.js</Subtitle>
      <GithubWrapper>
        <GithubButton githubLink="https://github.com/julia-martin/similart" />
      </GithubWrapper>
      <ImgsContainer>
        <ImgWrapper>
          <img src="assets/similart/Similart_top.jpg" alt="Top of Similart homepage" />
          <Figcaption>Top of home page</Figcaption>
        </ImgWrapper>
        <ImgWrapper>
          <img src="assets/similart/Similart_sample_output.jpg" alt="Example of graph output from Similart app" width="100%"/>
          <Figcaption>Output of recommendations and similar artworks</Figcaption>
        </ImgWrapper>
      </ImgsContainer>
      <Section>
        <Heading>Team</Heading>
        <Paragraph>
          This was a group project with 4 friends who were taking a Data	&amp; Visual Analytics course with me. My teammates' responsibilities included DevOps, machine learning modeling, data cleaning, and project management, while I had the opportunity to find a data source, fetch and save the data, and work on the web development aspects: design and implement the <b>frontend interfaces</b> and write the <b>backend logic</b>. I also helped <b>integrate</b> and <b>optimize</b> my teammates' code.
        </Paragraph>
      </Section>
      <VidContainer style={{float: "right"}}>
        <Video controls src="assets/similart/Similart_option1_demo.mov" width={800} height={350}></Video>
        <Figcaption>Demo: Upload own image</Figcaption>
      </VidContainer>
      <Section>
        <Heading>Purpose</Heading>
        <Paragraph>
          The purpose of this app is to make the discovery of art <b>fun, thought-provoking, and accessible to everyone</b>. Many people have had limited exposure to art due to the costly nature of museums and art education. By providing <b>multiple easy ways</b> to get recommendations, we hope this can allow art to be enjoyed by anyone, <b>no art knowledge required.</b>.
        </Paragraph>
      </Section>
      <Section style={{ textAlign: "right", float: "right" }}>
        <Heading>Tech Stack</Heading>
        <Paragraph>
          We decided to use Flask as our framework, since most teammates only knew Python. We also opted to build the frontend as a traditional web application rather than a SPA, since there are two distinct pages. The force-directed graph was built with the library D3.js.<br/>Although we were originally planning to deploy the app so that it could be easily accessed on the web, we ran into size limitations due to the amount of data needed by the ML model, which made it difficult to deploy freely. However, you can see the <b>features demoed</b> in the videos on this page.
        </Paragraph>
      </Section>
      <VidContainer>
        <Video controls src="assets/similart/Similart_option2_demo.mov" width={800} height={350}></Video>
        <Figcaption>Demo: Choose favorite from selection</Figcaption>
      </VidContainer>
      <Section style={{textAlign: "right", float: "right"}}>
        <Heading>Learnings</Heading>
        <Paragraph>
          I learned a lot about <b>effective teamwork</b> from this project, given that the team was made up of very diverse skillsets, most of whom had no prior web development experience. <b>Giving feedback</b> on others' code and negotiating the <b>scope</b> of the project was a challenge that I'm grateful I got to experience and grow from.
        </Paragraph>
      </Section>
      <VidContainer style={{margin: "20px auto", textAlign: "center"}}>
        <Video controls src="assets/similart/Similart_option3_demo.mov" width={800} height={350}></Video>
        <Figcaption>Demo: Take short quiz</Figcaption>
      </VidContainer>
    </Layout>
  );
};

const Logo = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 100px;
  z-index: 2;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${ANIMATIONS.slideDown} 700ms both;
  }

  @media (max-width: 450px) {
    position: static;
    margin: 60px auto 10px;
  }
`;

const Title = styled.h1`
  padding: 80px 50px 20px;
  background-color: ${COLORS.offwhite};
  background-image: ${GRADIENT};
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-size: 3rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  text-align: center;

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    &:hover {
      animation: ${ANIMATIONS.spaceOut} 500ms 2 alternate;

    }
  }

  @media (max-width: 550px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    padding-top: 0;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  text-align: center;
  max-width: 800px;
  padding: 0 50px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 20px 50px;
`;

const Heading = styled.h2`
`;

const Paragraph = styled.p`
  max-width: 60ch;
`;

const ImgsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImgWrapper = styled.figure`
  display: inline-block;
  margin: 20px 30px;
  width: 35%;
  min-width: 300px;
`;

const VidContainer = styled.figure`
  display: inline-block;
  margin: 20px auto;
`;

const Figcaption = styled.figcaption`
  font-size: 0.8rem;
  text-align: center;
  padding-top: 5px;
`;

const Video = styled.video`
  margin: 0px 10px;
`;

const GithubWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export default SimilartPage;