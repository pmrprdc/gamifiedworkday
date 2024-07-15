import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import image from '../../assets/ghostracr.jpg'
import FaqPage from './FaqPage';


// Define styled components




const StyledBanner = styled.img`
width: 50%;
border: 2px solid red;
margin: 0 auto;`



const StyledProblems = styled.div`
display: flex;
flex-direction: row;
`

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
  max-width: 50%;
  margin: 0 auto;

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
        
        <StyledBanner src={image} />
        <p>Gamify Life & Make Work Fun</p>
        <p>Work Faster & Longer By Racing Against Yourself</p>


        <StyledLink to="https://buy.stripe.com/7sI6pp6TvgDG7u0eUU">
          <Button>Buy Now</Button>
        </StyledLink>

      </Section>
      <Section>
    <ImagePlaceholder />
   
    <p>Getting work done can be tough but you're not alone. Across the globe,
       thousands of professionals admit that not getting enough work done is even worse, 
       creating a cycle of stress and underachievement.
       GhostRacr was designed to gamify tasks and focus your distracted mind so you can get more done! </p>
    <StyledProblems>

      <div>
      <h3>Struggle Starting Tasks:</h3>
      <p>
    Ever noticed how the most successful people seem to dive right into their tasks?
     It's not just natural ability – they've mastered the art of starting. Without
      this skill, you're always one step behind.</p>
      </div>
  
    
    

  
   <div>

    <h3>Trouble Engaging with simple tasks</h3>
   <p>
    It’s easy to overlook simple tasks, but often, they're the building blocks of major projects.
     When engagement fails, productivity stalls. Don’t let the simplicity fool you;
      mastery of these tasks is a common trait among industry leaders.</p>

   </div>

   <div>
    <h3>Difficulty Implementing Habits</h3>
   <p>
     You know you need better habits to succeed, but it's tough going it 
     alone. Join countless others who have turned their potential into performance by 
     adopting proven strategies. Don't miss out on transforming your work habits and skyrocketin
     g your productivity.</p>
   </div>
    

    </StyledProblems>
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




    <p>Despite my ambition, intelligent ideas, and excellent planning skills, I consistently found myself unable to produce work at the level I knew I was capable of. I had the vision but struggled to turn it into reality as my brain was not adept at wiring new habits. I found myself lost in a whirlwind of my own ideas, plans, and opportunities.</p>
<p>My breakthrough began in an unexpected realm—fitness. Reflecting on my workouts, I realized I wasn't reaching the necessary volume or intensity, paralleling my work habits. Diagnosed with ADHD, I struggled with traditional medications, which were not suitable for my health. Everything felt twice as hard, if not more.</p>
<p>Remembering how I successfully gamified my fitness routine, I applied similar strategies to my work. This was a game-changer, leading to a transformation in my productivity and proving that even without traditional paths, success was within reach.</p>
<p>As I worked on my own productivity using these principles, I sought a smooth and easy way to gamify the process. That's when I started building Ghost Racr so that I could monitor my stats and work with timers and visual ques. I was playing my own game and enjoying it.</p>
</Section>
<Button>Buy Now</Button> 
      <Section>
        <ImagePlaceholder />
        <SubTitle>Solution Introduction</SubTitle>
        <div class="solution-introduction">
    <h2>Solution Introduction</h2>
    <p>Have you ever struggled with motivation, especially when it comes to deep work? You're not alone. Many people find it almost physically impossible to focus, leading to cycles of burnout, stress, boredom, and guilt. GhostRacr was designed to tackle these exact issues through a unique approach that combines gamification and data-driven insights.</p>
    
    <h3>Why GhostRacr Works</h3>
    
    <h4>Tackling Deep Procrastination</h4>
    <p>Deep procrastination occurs when you find yourself unable to muster the motivation to start or complete tasks. This can be due to a lack of intrinsic motivation or overwhelming workload. GhostRacr addresses this by:</p>
    <ul>
        <li><strong>Breaking Down Tasks:</strong> By logging tasks and using a timer, GhostRacr breaks down large projects into manageable chunks, making them less daunting.</li>
        <li><strong>Creating a Baseline:</strong> Each recorded task establishes a performance baseline, allowing you to race against your past achievements. This adds an element of excitement and competition to your work, which can help you overcome the inertia of starting.</li>
    </ul>
    
    <h4>Combating Dopamine Sickness</h4>
    <p>Our brains are bombarded with constant distractions, which can make it hard to focus on more complex, longer tasks. GhostRacr helps you combat this by:</p>
    <ul>
        <li><strong>Providing Real-Time Feedback:</strong> Instant feedback on your performance keeps you engaged and helps your brain stay focused on the task at hand.</li>
        <li><strong>Incorporating Gamified Elements:</strong> Visual cues, progress bars, and achievement badges turn work into a game, making it more enjoyable and less of a chore.</li>
    </ul>
    
    <h3>How GhostRacr Is Effective</h3>
    
    <h4>Building Intrinsic Motivation</h4>
    <p>Intrinsic motivation comes from within and is essential for sustained productivity. GhostRacr enhances this by:</p>
    <ul>
        <li><strong>Setting Clear Goals:</strong> By providing a clear framework for your tasks and progress, GhostRacr helps you see the direct impact of your work on your goals.</li>
        <li><strong>Creating a Sense of Achievement:</strong> Each completed task and achieved milestone boosts your confidence and motivation, reinforcing positive behavior.</li>
    </ul>
    
    <h4>Ensuring Continuous Improvement</h4>
    <p>Continuous improvement is key to long-term success. GhostRacr facilitates this through:</p>
    <ul>
        <li><strong>Detailed Analytics:</strong> After recording your tasks, GhostRacr provides in-depth analytics to help you understand your performance patterns and areas for improvement.</li>
        <li><strong>Interval Training for Habits:</strong> Use your performance data to set up interval training for your habits. This structured approach helps you build and maintain productive habits over time.</li>
    </ul>
    
    <p>By combining these elements, GhostRacr not only makes work more engaging but also helps you develop the skills and habits necessary for long-term productivity and success.</p>
</div>

      </Section>
      <Section>
        <ImagePlaceholder />
        <SubTitle>Solution Breakdown</SubTitle>
        <div class="solution-breakdown">
    <h2>Solution Breakdown</h2>

    <div class="ghostracr-solution">
    <h1>GhostRacr Solution Breakdown</h1>

    <p>GhostRacr is designed to boost your productivity through a unique approach to task management and time tracking. Here's how it works:</p>
    <p>When you log in to GhostRacr, you embark on a journey of productivity and fun.</p>

    <h2>1. Plan Your Tasks</h2>
    
    <ul>
        <li><strong>Task Manager:</strong> Create batches of 3 tasks in the Task Manager.</li>
        <li><strong>Color Coding:</strong> Each task is assigned a distinct color for easy visual identification.</li>
    </ul>

    <h2>2. Time Your Tasks</h2>
    <ul>
        <li><strong>Timer Mode:</strong> Use the Timer Mode to record how long each task in your batch takes.</li>
        <li><strong>Baseline Creation:</strong> These recorded times establish your initial performance baseline for each task.</li>
    </ul>

    <h3>3. Visual Cues and Habit Formation</h3>
    <ul>
        <li><strong>Gamified Elements:</strong> GhostRacr incorporates visual cues and gamification techniques to make habit formation enjoyable. Color-coded progress bars, achievement badges, and leaderboards keep you motivated.</li>
        <li><strong>Habit Streaks:</strong> Maintain and grow your habit streaks. The more consistent you are, the more rewards you unlock, making productivity a game you’ll love playing.</li>
    </ul>

    <h3>4. Data Analysis and Interval Training</h3>
    <ul>
        <li><strong>Comprehensive Analytics:</strong> After completing tasks, dive into detailed analytics. GhostRacr provides insights into your performance, helping you identify patterns and areas for improvement.</li>
        <li><strong>Interval Training:</strong> Use your data to set up interval training for your habits. This feature allows you to break tasks into manageable intervals, increasing efficiency and making work less daunting.</li>
    </ul>

    <h2>3. Race Against Yourself</h2>
    <ul>
        <li><strong>Race Mode:</strong> Challenge yourself to complete your batch of tasks faster than your previous times.</li>
        <li><strong>Real-Time Feedback:</strong> Get instant feedback on your performance compared to your baseline.</li>
        
    </ul>

    <h2>4. Analyze and Improve</h2>
    <ul>
        <li><strong>Performance Review:</strong> After completing your tasks in Race Mode, review what went well and what could be improved.</li>
        <li><strong>Progress Tracking:</strong> Monitor your improvement over time for each task and batch.</li>
    </ul>

    <h3>2. Race Against Your Past</h3>
    <ul>
        <li><strong>Baseline Creation:</strong> Every task you record establishes a baseline. This means you'll always have a previous performance to race against, turning each task into an exciting challenge.</li>
        <li><strong>Progress Tracking:</strong> Track your progress over time. See how you improve with each session and get motivated by your own advancements.</li>
    </ul>

   
    <h3>5. Leaderboards</h3>
    <ul>
        <li><strong>Join a Community:</strong> Connect with other users who share similar goals. Exchange tips, participate in challenges, and find accountability partners within the GhostRacr community.</li>
        <li><strong>Expert Guidance:</strong> Access expert tips and strategies for maximizing your productivity. Our resources are designed to help you get the most out of GhostRacr.</li>
    </ul>

    <h2>Key Features</h2>
    <ul>
        <li><strong>Batch Task Management:</strong> Organize your work into manageable batches of 3 tasks.</li>
        <li><strong>Visual Task Identification:</strong> Use color coding to quickly recognize and switch between tasks.</li>
        <li><strong>Time Tracking:</strong> Accurately record the time spent on each task.</li>
        <li><strong>Self-Competition:</strong> Race against your own previous times to boost productivity.</li>
        <li><strong>Personal Growth Tools:</strong> Features designed to help you develop and maintain effective habits.</li>
        <li><strong>LEADERBOARDS</strong> A network of like-minded individuals and experts to support your journey.</li>


        <li><strong>Performance Analysis:</strong> Reflect on your performance and identify areas for improvement.</li>
    </ul>

    <p>GhostRacr turns productivity into a game where you compete against yourself, helping you to continuously improve your efficiency and time management skills.</p>
</div>

   


    <p>By breaking down tasks and incorporating fun, interactive elements, GhostRacr transforms your daily routines into exciting challenges, helping you achieve more and enjoy the process.</p>
</div>

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
        <FaqPage />
        <p>Who is ghostracr for?</p>
        <p>Entrepreneurs looking to get their work done faster</p>
      </Section>
      <Button>Buy Now</Button> 
    </PageContainer>
    
  );
}

export default SalesPage;
 