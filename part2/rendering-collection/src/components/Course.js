import React, { useState } from "react";
import ReactDOM from "react-dom";

const Course = ({ course }) => (
  <div>
    <Header course={course} />
  </div>
);

export default Course;
