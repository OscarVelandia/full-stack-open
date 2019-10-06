import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Anecdote = ({ title, selected, votes }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{selected}</p>
      <p>Has {votes}</p>
    </div>
  );
};

const App = ({ anecdotes }) => {
  const [indexSelected, setIndexSelected] = useState(0);
  const [indexMostVoted, setIndexMostVoted] = useState(null);

  const handleNextAnecdoteClick = () => {
    const indexSelectedAnecdote = Math.floor(
      Math.random() * Math.floor(anecdotes.length)
    );

    setIndexSelected(indexSelectedAnecdote);
  };

  const handleVoteClick = () => {
    anecdotes = anecdotes.map((anecdote, idx) => {
      return indexSelected === idx
        ? { ...anecdote, votes: (anecdote.votes += 1) }
        : anecdote;
    });

    getMostVotedAnecdoteIndex();
  };

  const getMostVotedAnecdoteIndex = () => {
    const votes = anecdotes.map(item => item.votes);
    setIndexMostVoted(votes.indexOf(Math.max(...votes)));
    console.log(anecdotes[indexSelected]);
  };

  return (
    <div>
      <Anecdote
        title="Anecdote of the day"
        selected={anecdotes[indexSelected].data}
        votes={anecdotes[indexSelected].votes}
      />
      <Button onClick={handleVoteClick} text="Vote" />
      <Button onClick={handleNextAnecdoteClick} text="next anecdote" />
      <>
        {indexMostVoted !== null ? (
          <Anecdote
            title="Anecdote with most votes"
            selected={anecdotes[indexMostVoted].data}
            votes={anecdotes[indexMostVoted].votes}
          />
        ) : (
          <p>No votes {indexMostVoted}</p>
        )}
      </>
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
