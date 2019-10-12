import React from "react";

const Header = ({ course }) => <h2>{course}</h2>;

const Content = ({ content }) => (
  <div>
    {content.map(item => {
      return <Part name={item.name} exercise={item.exercises} key={item.id} />;
    })}
  </div>
);

const Part = ({ name, exercise }) => (
  <p>
    {name} {exercise}
  </p>
);

const Total = ({ total }) => {
  const totalExercises = total.reduce(
    (acumulator, current) => current.exercises + acumulator,
    0
  );

  return <p>Total of exercises {totalExercises}</p>;
};

const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content content={course.parts} />
    <Total total={course.parts} />
  </div>
);

export default Course;
