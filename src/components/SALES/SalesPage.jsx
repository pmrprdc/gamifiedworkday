import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// Define styled components

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  width: 50%;
  background-color: black;
  color: white; // Setting the text color to white for visibility
  border: 2px solid green;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: green;
    color: black;
  }
`;


const PageContainer = styled.div`
  color: green;
  background-color: black;
  font-family: 'Courier New', Courier, monospace;
`;

const Section = styled.div`
  margin: 20px;
  padding: 15px;
  margin-left: 200px;
  margin-right: 200px;

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


        <StyledLink to="https://buy.stripe.com/7sI6pp6TvgDG7u0eUU">
          <Button>Buy Now</Button>
        </StyledLink>
      </Section>
      <Section>
    <ImagePlaceholder />
   
    <p>Getting work done can be tough, and you're not alone. Across the globe, thousands of professionals admit that not getting enough work done is even worse, creating a cycle of stress and underachievement.</p>
    
    <p><strong>Struggle Starting Tasks:</strong> Ever noticed how the most successful people seem to dive right into their tasks? It's not just natural ability – they've mastered the art of starting. Without this skill, you're always one step behind.</p>
    
    <p><strong>Trouble Engaging with Simple Tasks:</strong> It’s easy to overlook simple tasks, but often, they're the building blocks of major projects. When engagement fails, productivity stalls. Don’t let the simplicity fool you; mastery of these tasks is a common trait among industry leaders.</p>
    
    <p><strong>Difficulty Implementing Habits:</strong> You know you need better habits to succeed, but it's tough going it alone. Join countless others who have turned their potential into performance by adopting proven strategies. Don't miss out on transforming your work habits and skyrocketing your productivity.</p>
</Section>

<StyledLink to="https://buy.stripe.com/7sI6pp6TvgDG7u0eUU">
          <Button>Buy Now</Button>
        </StyledLink>
<Section>
    <ImagePlaceholder />
   
    <SubTitle>Benefits section</SubTitle>
    <p><strong>Amplify Your Productivity:</strong> Join the ranks of high achievers who consistently outperform their peers. Our tools help you get more work done, propelling you towards your goals faster than you thought possible.</p>
    <p><strong>Accelerate Efficiency:</strong> Experience a dramatic increase in speed as you master tasks more quickly over time. Just like the many users who have doubled their productivity, you'll find yourself completing tasks faster, giving you back precious time every day.</p>
    <p><strong>Enhance Work Enjoyment:</strong> Transform your work into a source of satisfaction. Our users report a significant increase in enjoyment as they achieve their tasks with ease, making every workday a rewarding experience.</p>
    <p><strong>Commit to Excellence:</strong> By choosing our solution, you're not just improving your workflow—you're investing in a proven path to success. Embrace the commitment to your professional growth and join a community that values peak performance and satisfaction.</p>
</Section>
<Button >Buy Now</Button> 
<Section>
    <ImagePlaceholder />
    <SubTitle>The Solution Discovery Section</SubTitle>
    <p><strong>Unrealized Potential:</strong> Despite my ambition, intelligent ideas, and excellent planning skills, execution was my stumbling block. I had the vision, but struggled to turn it into reality.</p>
    <p><strong>Acknowledging the Challenge:</strong> I knew I could lead and achieve great things if I could just get past my own barriers. Yet, I consistently found myself unable to produce work at the level I knew I was capable of.</p>
    <p><strong>Years of Frustration:</strong> For years, I failed to meet my own expectations, always falling short on speed and execution, much like many high-potential individuals I later discovered shared my plight.</p>
    <p><strong>A Clue in Physical Exertion:</strong> My breakthrough began in an unexpected realm—fitness. Reflecting on my workouts, I realized I wasn't reaching the necessary volume or intensity, paralleling my work habits.</p>
    <p><strong>Searching for Solutions:</strong> I tried numerous productivity methods and routines, yet always felt I could do more, pushing me to keep searching for that elusive key to unlock my productivity.</p>
    <p><strong>A Personal Revelation:</strong> Over time, it became painfully clear: my productivity was hampered significantly. Diagnosed with ADHD, I struggled with traditional medications which were not suitable for me.</p>
    <p><strong>Insights from Healthy GamerGG:</strong> It was insights from Healthy GamerGG that illuminated my understanding of my behaviors. Learning from others facing similar challenges offered me new perspectives on managing ADHD effectively without medication.</p>
    <p><strong>Epiphany Through Gamification:</strong> Remembering how I successfully gamified my fitness routine, I applied similar strategies to my work. This was a game-changer, leading to a transformation in my productivity and proving that even without traditional paths, success was within reach.</p>
    <p><strong>Commitment to Self-Improvement:</strong> Armed with these new tools and a community of like-minded individuals, I've turned my struggles into strengths, proving that with the right approach, every challenge can be overcome.</p>
</Section>
<Button>Buy Now</Button> 
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
      <Button>Buy Now</Button> 
      <Section>
        <ImagePlaceholder />
        <SubTitle>Social Proof & Testimonials</SubTitle>
        <p>I tried ghostracr as an entrepreneur and gamified boxing, unboxing and packaging duties. It keeps me in line, and it was great - YAYA owner of Richards Variety Store</p>
      </Section>
      <Button>Buy Now</Button> 
      <Section>
        <ImagePlaceholder />
        <SubTitle>Reminder of What's Included</SubTitle>
        <p>Remember! Once you get ghostracr, you're getting a timer that allows you to race against yourself in daily tasks</p>
        <p>Soccer moms use it, entrepreneurs use it and it's a part of a greater productivity system</p>
      </Section>
      <Button>Buy Now</Button> 
      <Section>
        <ImagePlaceholder />
        <SubTitle>FAQ</SubTitle>
        <p>Who is ghostracr for?</p>
        <p>Entrepreneurs looking to get their work done faster</p>
      </Section>
      <Button>Buy Now</Button> 
    </PageContainer>
    
  );
}

export default SalesPage;
 