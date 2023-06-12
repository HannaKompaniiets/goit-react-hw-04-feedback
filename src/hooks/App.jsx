import React from "react";
import { useState } from 'react';
import FeedbackOptions from "./feedbackOptions/FeedbaxckOptions";
import Statistics from "./statistics/Statistics";
import Section from "./section/Section";
import Notification from "./notification/Notification";

const  App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
  const handleChange = (event) => {
    switch (event) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

    const countTotalFeedback = () => {
      const total = good + neutral + bad;
      return total;
    }

    const countPositiveFeedbackPercentage = () => {
      const positiveFeedbackPercentager = Math.round((good /countTotalFeedback()) * 100, 0);
      return positiveFeedbackPercentager;
    }
 
    const options = Object.keys({ good, neutral, bad });
     
    return (
      <div>
        <Section title={'Please leave feedback'} >
          <FeedbackOptions options={
            options}
            onLeaveFeedback={handleChange} />
        </Section>
        <Section title={"Statistics"}>
          {countTotalFeedback() > 0
            ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()} />
            ) : (
              <Notification message="There is no feedback." />
            )
          }
        </Section>
      </div>
    );
  };

export default App;