import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import css from './App.module.css';

 export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const countTotalFeedback = () => {
    return total;
  };

 const onLeaveFeedback = evt => {
    if (evt === 'good') setGood(prev => prev + 1);
    if (evt === 'neutral') setNeutral(prev => prev + 1);
    if (evt === 'bad') setBad(prev => prev + 1);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / total) * 100 || 0);
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">

        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback yet..." />
        ) : (
          <Statistics
            options={Object.keys({ good, neutral, bad })}
            statistic={{ good, neutral, bad }}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage} 
          />
        )}
      </Section>
    </div>
  );
};