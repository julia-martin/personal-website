import React from 'react';
import Layout from './Layout';
import Hero from "./Hero";
import Section from "./Section";
import Technologies from "./Technologies";
import ProjectSummary from "./ProjectSummary";
import MailButton from './MailButton';
import ScrollUpBtn from './ScrollUpBtn';
import Paragraph from './Paragraph';

const HomePage = ({ atTop }) => {
  return (
    <Layout atTop={atTop}>
      <Hero />
      <Section id="about" title="About Me">
        <figure>
          <img src="assets/portrait.jpg" alt="Me" height="250" style={{margin: "0 auto"}} />
        </figure>
        <Paragraph centered={true} >
          I didn't always know I wanted to be a software developer, but I've always <b>loved learning</b>. Before I
          discovered coding, I worked in e-commerce and then did <b>data science / data analytics</b> at <b>Yelp</b> and <b>Facebook</b>. One day I decided to teach myself Python so I could do more at my job at Yelp, and that's when I realized <b>I love coding</b>. I started taking more courses on computer science and software engineering in my free time after that. I realized that I love problem-solving and creating delightful experiences for users. Finally, I decided to make a total career switch out of data science, so I quit my job at Facebook to study software engineering full-time through Launch School, an online mastery-based learning school for software engineering.
        </Paragraph>
        <Paragraph centered={true}>
          Fast-forward to today, and I've just completed my Capstone project, an <b>A/B testing and feature flag management platform</b> called Waypost. I worked extremely hard on it and I'm quite proud of it. Shameless plug to check out the writeup on the Waypost <a href="https://waypost-io.github.io/">website</a>!
        </Paragraph>
        <img src="assets/me.jpg" alt="Me" style={{width: "30%", float: "right", margin: "30px"}} />
        <Paragraph centered={true} >
          In addition to my projects, I also have professional experience as a <b>software engineer</b> at a tech startup called <b>Poindexter</b>, where I did a 2-month contract to build the frontend of their new spreadsheets product with React and Ruby on Rails. I learned so much from my time there, like collaborating with teamates with a 14-hour timezone difference and keeping up with huge changes to the codebase in a <b>fast-paced startup environment</b>.
        </Paragraph>
        <Paragraph centered={true} >
          Though I've lived in a few different cities in the past few years, I currently reside in <b>Seattle</b>. Aside from learning, I enjoy traveling, spending time with my bird, learning languages, reading, arts and culture, and health and fitness.
        </Paragraph>
      </Section>
      <Section id="projects" title="My Most Recent Project">
        <ProjectSummary
          title="Waypost"
          pageUrl="https://waypost-io.github.io/"
          logo="assets/waypost/waypost_logo_dark.png"
          githubLink="https://github.com/waypost-io"
          stack={["React", "Node.js", "Express.js", "PostgreSQL"]}
          imageUrl="assets/waypost/architecture_with_bg.png"
          caption="Architecture of Waypost"
        >
          <Paragraph>
            <b>Waypost</b> is an open-source, self-hosted <b>feature flag</b> management platform that specializes in <b>A/B Testing</b>, providing analytical insights for experiments on both the front-end and back-end.
          </Paragraph>
        </ProjectSummary>
      </Section>
      <Section id="projects2" title="Past Projects">
        <ProjectSummary
          title="Similart"
          pageUrl="/similart"
          logo="assets/similart/Similart_logo.png"
          githubLink="https://github.com/julia-martin/similart"
          stack={["Flask", "Python", "JavaScript", "D3.js"]}
          imageUrl="assets/similart/Similart_sample_output.jpg"
          caption="Similart Output Example"
        >
          <Paragraph>An innovative <b>machine learning art recommendation</b> app that uses KNN and PCA to find similar artworks. It displays recommended and related artworks to the user with a force-directed graph. It allows the user the flexibility to get recommendations in different ways: submit their own image, select a favorite artwork from a curated list, or answer a short quiz.
          </Paragraph>
        </ProjectSummary>
        <ProjectSummary
          title="HookTester"
          githubLink="https://github.com/calebrs/HookTester"
          stack={["JavaScript", "Node.js", "React"]}
          imageUrl="assets/hooktester/hooktester_home.jpg"
          caption="Start page"
        >
          <Paragraph>
            A RequestBin-like tool for testing and debugging webhooks that provides a custom URL endpoint and inspector interface
          </Paragraph>
        </ProjectSummary>
        <ProjectSummary
          title="Wello"
          githubLink="https://github.com/seanrichardson95/Wello"
          stack={["JavaScript", "Node.js", "React", "Redux"]}
          imageUrl="assets/wello/board.png"
          caption=""
        >
          <Paragraph>A Trello-like Kanban tool to manage tasks</Paragraph>
        </ProjectSummary>
      </Section>
      <Section id="skills" title="Skills">
        <Technologies />
      </Section>
      <Section id="contact" title="Say Hello">
        <Paragraph centered={true} style={{textAlign: "center"}}>
          Have a question, comment, or just wanted to say hi? I'd love to hear from you!
        </Paragraph>
        <MailButton email="juliadmartin720@gmail.com" />
      </Section>
      <ScrollUpBtn display={atTop ? "none" : "block"}/>
    </Layout>
  );
};


export default HomePage;