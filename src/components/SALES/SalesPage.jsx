import React from 'react';
import styled from 'styled-components';

// Define styled components
const PageContainer = styled.div`
  color: green;
  background-color: black;
  font-family: 'Courier New', Courier, monospace;
`;

const Section = styled.div`
  border: 2px solid green;
  margin: 20px;
  padding: 15px;
`;

const Title = styled.h1`
  text-align: center;
`;

const SubTitle = styled.h3`
  border-bottom: 1px solid green;
  padding-bottom: 10px;
`;

const ImagePlaceholder = styled.div`
  height: 200px;
  background: url('path_to_neo_image.jpg') center/cover no-repeat;
  margin-bottom: 15px;
`;

function SalesPage() {
  return (
    <PageContainer>
      <Title>GhostRacr</Title>
      <Section>
        <ImagePlaceholder />

        <p>Gamify Life & Make Work Fun</p>
        <p>Gradually increase work capacity while avoiding fatigue</p>
      </Section>
      <Section>
        <ImagePlaceholder />
        <SubTitle>Pain Point section</SubTitle>
        <p>Not being able to get enough work done</p>
        <p>Struggle Starting Tasks</p>
        <p>Trouble engaging with tasks too easy</p>
        <p>Fail to implement habits on your own</p>
      </Section>
      <Section>
        <ImagePlaceholder />
        <SubTitle>Benefits section</SubTitle>
        <p>Get more work done</p>
        <p>Get the same work done faster and faster over time</p>
        <p>Get more enjoyment out of doing your work</p>
      </Section>
      <Section>
        <ImagePlaceholder />
        <SubTitle>The Solution Discovery section</SubTitle>
        <p>I had ambition, intelligent ideas, excellent at making plans but suffered greatly in execution</p>
        <p>I knew that if I had a team under me I could potentially do great things but I couldn't even function enough to do any respectable output</p>
        <p>I failed for years to execute things fast enough</p>
        <p>Based on my workouts, I was realising I never did enough volume and intensity</p>
        <p>I tried many routines yet I always felt that I could be doing more</p>
        <p>It became more and more obvious that I had a terrible time with outputting work</p>
        <p>I was diagnosed with ADHD however I could not handle how the ADHD meds made me feel</p>
        <p>I learned from Healthy GamerGG what I was really doing</p>
        <p>Explain GamerGG ADHD behavior</p>
        <p>Then I recalled how I gamified my workouts and my body was really the only thing I could show for in results even though I'd been studying business.</p>
      </Section>
      <Section>
        <ImagePlaceholder />
        <SubTitle>Solution Introduction</SubTitle>
        <p>Once I realised gamifying my workouts worked, I thought what if it works with my computer tasks.</p>
        <p>I wanted to race against myself regardless. Something about it makes me engage and having intentions makes a difference.</p>
      </Section>
      <Section>
        <ImagePlaceholder />
        <SubTitle>Solution Breakdown</SubTitle>
        <p>It all starts with measuring how long things take</p>
        <p>Now there is a baseline to race against next time</p>
        <p>We sprinkle more visual cues and stuff to make it a habit</p>
      </Section>
      <Section>
        <ImagePlaceholder />
        <SubTitle>Social Proof & Testimonials</SubTitle>
        <p>I tried ghostracr as an entrepreneur and gamified boxing, unboxing and packaging duties. It keeps me in line, and it was great - YAYA owner of Richards Variety Store</p>
      </Section>
      <Section>
        <ImagePlaceholder />
        <SubTitle>Reminder of What's Included</SubTitle>
        <p>Remember! Once you get ghostracr, you're getting a timer that allows you to race against yourself in daily tasks</p>
        <p>Soccer moms use it, entrepreneurs use it and it's a part of a greater productivity system</p>
      </Section>
      <Section>
        <ImagePlaceholder />
        <SubTitle>FAQ</SubTitle>
        <p>Who is ghostracr for?</p>
        <p>Entrepreneurs looking to get their work done faster</p>
      </Section>
    </PageContainer>
  );
}

export default SalesPage;
 