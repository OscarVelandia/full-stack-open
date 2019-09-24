import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = props => {
  const { course } = props.title;

  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

const Part = props => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  );
};

const Content = props => {
  const [part1, part2, part3] = props.exercises;

  return (
    <div>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </div>
  );
};

const Footer = props => {
  const { exercises1, exercises2, exercises3 } = props.exercises;

  return (
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  );
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
      <Header title={course.name} />
      <Content exercises={course.parts} />
      <Footer
        exercises={{
          exercises1: course.parts[0].exercises,
          exercises2: course.parts[1].exercises,
          exercises3: course.parts[2].exercises
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
