import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section'
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0
}
  
export const App = () => {

  const [feedback, setFeedback] = useState(INITIAL_STATE)
  const [startCountFeedback, setStartCountFeedback] = useState(false)

  const { good, neutral, bad } = feedback; 
      
  const onButtonClick = (option) => {
    setFeedback(prevValue => ({
     ...prevValue,
    [option]: prevValue[option] + 1,
    })); 
    setStartCountFeedback(true);  

  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  }

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(INITIAL_STATE)} onButtonClick={onButtonClick}/>
      </Section>

      <Section title="Statistics">
        {startCountFeedback ? (
          <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
