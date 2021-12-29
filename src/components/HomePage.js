import React, { useState } from 'react';
import styled from "styled-components/macro";
import Layout from './Layout';
import Hero from "./Hero";
import Section from "./Section";
import Technologies from "./Technologies";
import ProjectSummary from "./ProjectSummary";
import MailButton from './MailButton';
import ScrollUpBtn from './ScrollUpBtn';

const HomePage = () => {
  const [arrowDisplay, setArrowDisplay] = useState('none');

  document.addEventListener('scroll', function(e) {
    if (window.scrollY === 0) {
      setArrowDisplay('none');
    } else {
      setArrowDisplay('block');
    }
  });

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
          logo="assets/coming-soon.png"
          githubLink=""
          showGithub={false}
          stack={[]}
        >
          <SectionText>Stay tuned for my next project for Spring 2022!
          </SectionText>
        </ProjectSummary>
        <ProjectSummary
          title="Similart"
          pageUrl="/similart"
          logo="assets/similart/Similart_logo.png"
          githubLink="https://github.com/julia-martin/similart"
          showGithub={true}
          stack={["Flask", "Python", "JavaScript", "D3.js"]}
        >
          <SectionText>An innovative machine learning art recommendation app that uses a force-directed graph to display recommended and related artworks to the user. It flexibly allows the user to get recommendations in different ways: submit their own image, select a favorite artwork from a curated list, or answer a short quiz.
          </SectionText>
        </ProjectSummary>
      </Section>
      <Section id="about" title="About Me">
        <SectionText>
          I didn't always know I wanted to be a software developer. Before I
          discovered coding, I worked in e-commerce and then did <b>data science / data analytics</b> at <b>Yelp</b> and <b>Facebook</b>. After some time I realized I didn't have much interest in data science, but when I taught myself Python I realized <b>I love coding</b>. I quit my job at Facebook to study software engineering full-time, and I am so much happier now. I'm addicted to the thrill of solving puzzles and creating
          programs that others can use, and I love the <b>visual</b> aspect of front-end
          development.
        </SectionText>
        <SectionText>
          My first professional experience as a <b>software engineer</b> was at a tech startup called <b>Poindexter</b>, where I did a 2-month contract to build the frontend of their new spreadsheets product with React and Ruby on Rails. I learned so much from my time there, like collaborating with teamates with a 14-hour timezone difference and keeping up with changes in a <b>fast-paced startup environment</b>. Now I'm working on another project, and currently on the lookout for a new opportunity where I'd get to do full-stack software engineering at a forward-thinking tech company.
        </SectionText>
        <SectionText>
          Though I've lived in a few different cities in the past few years, I currently reside in <b>Seattle</b>. I enjoy travel, animals (particularly my pet parrot), arts and culture, learning languages, and health and fitness.
        </SectionText>
      </Section>
      <Section id="contact" title="Say Hello">
        <SectionText style={{textAlign: "center"}}>
          Have a question, comment, or just wanted to say hi? I'd love to hear from you!
        </SectionText>
      <MailButton email="juliadmartin720@gmail.com" />
      </Section>
      <ScrollUpBtn display={arrowDisplay}/>
    </Layout>
  );
};

const SectionText = styled.p`
  max-width: 60ch;
  margin: 30px auto 10px;
`;

export default HomePage;