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
      <Section id="skills" title="Current Skills">
        <Technologies />
      </Section>
      <Section id="waypost" title="My Most Recent Project">
        <ProjectSummary
          title="Waypost"
          pageUrl="https://waypost-io.github.io/"
          logo="assets/waypost/waypost_logo_dark.png"
          githubLink="https://github.com/waypost-io"
          isComplete={true}
          stack={["React", "Node.js", "Express.js", "PostgreSQL"]}
          imageUrl="assets/waypost/waypost_architecture.png"
          caption="Architecture of Waypost"
        >
          <Paragraph>
            <b>Waypost</b> is an open-source, self-hosted <b>feature flag</b> management platform that specializes in <b>A/B Testing</b>, providing analytical insights for your experiments on both the front-end and back-end.
          </Paragraph>
        </ProjectSummary>
      </Section>
      <Section id="projects" title="Past Projects">
        <ProjectSummary
          title="Similart"
          pageUrl="/similart"
          logo="assets/similart/Similart_logo.png"
          githubLink="https://github.com/julia-martin/similart"
          isComplete={true}
          stack={["Flask", "Python", "JavaScript", "D3.js"]}
          imageUrl="assets/similart/Similart_sample_output.jpg"
          caption="Similart Output Example"
        >
          <Paragraph>An innovative machine learning art recommendation app that uses KNN and PCA to find similar artworks. It displays recommended and related artworks to the user with a force-directed graph. It allows the user the flexibility to get recommendations in different ways: submit their own image, select a favorite artwork from a curated list, or answer a short quiz.
          </Paragraph>
        </ProjectSummary>
      </Section>
      <Section id="about" title="About Me">
        <figure>
          <img src="assets/portrait.jpg" alt="Me" height="250" style={{margin: "0 auto"}} />
        </figure>
        <Paragraph centered={true} >
          I didn't always know I wanted to be a software developer, but <b>I've always loved learning</b>. Before I
          discovered coding, I worked in e-commerce and then did <b>data science / data analytics</b> at <b>Yelp</b> and <b>Facebook</b>. One day I decided to teach myself Python so I could do more at my job at Yelp, and that's when I realized <b>I love coding</b>. I started taking more courses on computer science and software engineering in my free time after that. Finally, I decided to make a total career switch out of data science, so I quit my job at Facebook to study software engineering full-time, and I am so much happier now. Now, I get to have fun solving puzzles and creating
          programs that others can use, and I love that I get to use the creative side of my brain for front-end development.
        </Paragraph>
        <img src="assets/me.jpg" alt="Me" style={{width: "30%", float: "right", margin: "30px"}} />
        <Paragraph centered={true} >
          My first professional experience as a <b>software engineer</b> was at a tech startup called <b>Poindexter</b>, where I did a 2-month contract to build the frontend of their new spreadsheets product with React and Ruby on Rails. I learned so much from my time there, like collaborating with teamates with a 14-hour timezone difference and keeping up with huge changes to the codebase in a <b>fast-paced startup environment</b>. Currently I'm working on a new open-source project, and currently on the lookout for a new opportunity where I'd get to do full-stack software engineering at a forward-thinking tech company.
        </Paragraph>

        <Paragraph centered={true} >
          Though I've lived in a few different cities in the past few years, I currently reside in <b>Seattle</b>. Aside from learning, I enjoy traveling, spending time with my bird, learning languages, reading, arts and culture, and health and fitness.
        </Paragraph>

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