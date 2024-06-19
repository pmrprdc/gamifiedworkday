import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is deep procrastination and how can GhostRacr help with it?",
      answer: "Deep procrastination is a condition where you struggle to start or complete tasks due to a lack of intrinsic motivation or an overwhelming workload. GhostRacr helps by breaking down tasks into manageable chunks and creating a baseline for you to race against your past achievements, making it easier to get started and stay motivated."
    },
    {
      question: "How does GhostRacr combat dopamine sickness?",
      answer: "Dopamine sickness occurs when constant distractions from digital devices make it hard to focus on complex tasks. GhostRacr provides real-time feedback, gamified elements, and structured task management to help rewire your brain for sustained focus and productivity."
    },
    {
      question: "Can GhostRacr help if I struggle with motivation while working from home?",
      answer: "Yes, GhostRacr is designed to enhance motivation and focus, particularly for remote workers. By gamifying tasks and providing clear goals and progress tracking, it helps create a productive work environment at home."
    },
    {
      question: "How does GhostRacr improve productivity for simple tasks?",
      answer: "Simple tasks are often overlooked but are crucial for larger projects. GhostRacr turns these tasks into engaging challenges through gamification, helping you stay focused and ensuring these building blocks are effectively managed."
    },
    {
      question: "What kind of feedback does GhostRacr provide to keep me engaged?",
      answer: "GhostRacr offers real-time feedback, including visual cues, progress bars, and achievement badges. This immediate feedback helps keep you motivated and aware of your progress, making work feel more like a rewarding game."
    },
    {
      question: "How can GhostRacr help me build and maintain productive habits?",
      answer: "GhostRacr uses detailed analytics and interval training to help you understand your performance patterns and set up structured routines. This approach supports the development and maintenance of productive habits over time."
    },
    {
      question: "Is GhostRacr suitable for people with ADHD?",
      answer: "Yes, GhostRacr is particularly beneficial for individuals with ADHD. Its gamified approach and structured task management can help improve focus, reduce distractions, and enhance overall productivity."
    },
    {
      question: "What are some tips for reducing distractions while using GhostRacr?",
      answer: "To reduce distractions, consider implementing boredom therapy by taking breaks without digital devices, using methods like the phone foyer method to keep your phone out of reach during focused work periods, and scheduling regular distraction-free time slots throughout your day."
    },
    {
      question: "How does GhostRacr integrate with my professional goals?",
      answer: "GhostRacr helps you align your daily tasks with your long-term professional goals by providing a clear framework for your work. This alignment creates intrinsic motivation, making it easier to put effort into tasks that contribute to your overall career vision."
    },
    {
      question: "What kind of community support does GhostRacr offer?",
      answer: "GhostRacr includes a community feature where you can connect with other users, participate in challenges, share tips, and find accountability partners. This support network can enhance your motivation and help you stay committed to your productivity goals."
    }
  ];

  const faqStyle = {
    container: {
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    question: {
      backgroundColor: '#f7f7f7',
      padding: '15px',
      border: '1px solid #ddd',
      marginBottom: '10px',
      cursor: 'pointer',
      borderRadius: '5px',
    },
    answer: {
      padding: '15px',
      border: '1px solid #ddd',
      borderTop: 'none',
      marginBottom: '10px',
      borderRadius: '0 0 5px 5px',
      display: openIndex !== null ? 'block' : 'none',
    }
  };

  return (
    <div style={faqStyle.container}>
      {faqs.map((faq, index) => (
        <div key={index}>
          <div style={faqStyle.question} onClick={() => toggleFAQ(index)}>
            {faq.question}
          </div>
          {openIndex === index && (
            <div style={faqStyle.answer}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
