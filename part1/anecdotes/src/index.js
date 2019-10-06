import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(0);
  const [indexMostVoted, setIndexMostVoted] = useState(null);

  const handleNextAnecdoteClick = () => {
    const indexSelectedAnecdote = Math.floor(
      Math.random() * Math.floor(anecdotes.length)
    );

    setSelected(indexSelectedAnecdote);
    setVotes(anecdotes[indexSelectedAnecdote].votes);
  };

  const handleVoteClick = () => {
    setVotes((anecdotes[selected].votes += 1));
    getMostVotedAnecdoteIndex();
  };

  const getMostVotedAnecdoteIndex = () => {
    const votes = anecdotes.map(item => item.votes);
    setIndexMostVoted(votes.indexOf(Math.max(...votes)));
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected].data}</p>
      <p>Has {votes}</p>
      <Button onClick={handleVoteClick} text="Vote" />
      <Button onClick={handleNextAnecdoteClick} text="next anecdote" />
      {indexMostVoted !== null ? (
        <div>
          <h1>Anecdote with most votes</h1>
          <p>{anecdotes[indexMostVoted].data}</p>
          <p>Has {anecdotes[indexMostVoted].votes}</p>
        </div>
      ) : (
        <p>No votes</p>
      )}
    </div>
  );
};

const anecdotes = [
  { data: "If it hurts, do it more often", votes: 0 },
  {
    data: "Adding manpower to a late software project makes it later!",
    votes: 0
  },
  {
    data:
      "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    votes: 0
  },
  {
    data:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    votes: 0
  },
  { data: "Premature optimization is the root of all evil.", votes: 0 },
  {
    data:
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    votes: 0
  }
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
