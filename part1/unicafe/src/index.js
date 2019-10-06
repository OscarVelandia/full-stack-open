import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Statistics = props => {
  const { good, neutral, bad } = props.value;
  const totalVotes = good + neutral + bad;
  const average = (good + neutral * 0 + bad * -1) / totalVotes;
  const positive = (good / totalVotes) * 100;

  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={totalVotes} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={`${positive} %`} />
      </tbody>
    </table>
  );
};

const Statistic = ({ value, text }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <h2>Statistics</h2>
      {totalVotes ? (
        <Statistics value={{ good, neutral, bad }} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
