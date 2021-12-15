import { useState } from "react";
import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = (nameState) => {
    // eslint-disable-next-line default-case
    switch (nameState) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;

      case "neutral":
        setNeutral((prevGood) => prevGood + 1);
        break;

      case "bad":
        setBad((prevGood) => prevGood + 1);
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good * 100) / countTotalFeedback();
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onLeaveFeedback={addFeedback}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      ></Statistics>
    </Section>
  );
};

export default App;
