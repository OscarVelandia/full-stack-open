import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = () => {
  const course = "Half Stack application development";

  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

const Content = props => {
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";
  const { exercises1, exercises2, exercises3 } = props;

  return (
    <>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </>
  );
};

const Footer = props => {
  const { exercises1, exercises2, exercises3 } = props;
  console.log(props);

  return (
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  );
};

const App = () => {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header />
      <Content exercises={{exercises1, exercises1, exercises1}} />
      <Footer exercises={{exercises1, exercises2, exercises3}} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
