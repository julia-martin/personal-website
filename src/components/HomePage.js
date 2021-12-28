import React from 'react';
import styled from "styled-components/macro";
import Layout from './Layout';
import Hero from "./Hero";
import Section from "./Section";
import Technologies from "./Technologies";
import ProjectSummary from "./ProjectSummary";
import { COLORS } from '../constants.js';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Section id="skills" title="Current Skills">
        <Technologies />
      </Section>
      <Section id="projects" title="Past Projects">
        <ProjectSummary
          title="Coming Soon"
          pageUrl="/"
          logo=""
          githubLink=""
          stack={[]}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ProjectSummary>
        <ProjectSummary
          title="Similart"
          pageUrl="/similart"
          logo="assets/similart/Similart_logo.png"
          githubLink="https://github.com/julia-martin/similart"
          stack={["Flask", "Python", "JavaScript", "D3.js"]}
        >
          <p>An innovative machine learning art recommendation app that uses a force-directed graph to display recommended and related artworks to the user. It flexibly allows the user to get recommendations in different ways: submit their own image, select a favorite artwork from a curated list, or answer a short quiz.
          </p>
        </ProjectSummary>
      </Section>
      <Section id="about" title="About Me" colorTheme="light">
        <SectionText>
          I didn't always know I wanted to be a software developer. Before I
          discovered my love for coding, I worked in e-commerce and then did
          data science / data analytics at Yelp and Facebook. After some time I realized I didn't have much interest in data science. I quit my job at
          Facebook to study software engineering full-time, and I am so much
          happier now. I love the thrill of solving puzzles and creating
          programs that others can use, and I love the visual aspect of front-end
          development.
        </SectionText>
        <SectionText>
          I currently reside in Seattle. I enjoy travel, animals,
          arts and culture, and learning languages.
        </SectionText>
      </Section>
      <Section id="contact" title="Say Hello">
        <SectionText>
          I would love to hear from you! You can contact me at juliadmartin720@gmail.com.
        </SectionText>
      </Section>
    </Layout>
  );
};

const SectionText = styled.p`
  max-width: 800px;
  margin: 0 auto;
`;

export default HomePage;