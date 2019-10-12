import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ content }) => {
  const name = content.map(part => part.name);
  const exercise = content.map(part => part.exercises);

  return (
    <div>
      <Part name={name[0]} exercise={exercise[0]} />
      <Part name={name[1]} exercise={exercise[1]} />
      <Part name={name[2]} exercise={exercise[2]} />
    </div>
  );
};

const Part = ({ name, exercise }) => {
  return (
    <p>
      {name} {exercise}
    </p>
  );
};

const Total = ({ total }) => {
  const totalExercises = total.reduce(
    (acumulator, current) => current.exercises + acumulator,
    0
  );

  return <p>Number of exercises {totalExercises}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
