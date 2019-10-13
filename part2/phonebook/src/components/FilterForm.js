import React from "react";

const FilterForm = ({ onChange }) => (
  <form>
    <div>
      filter shown by:
      <input onChange={onChange} />
    </div>
  </form>
);

export default FilterForm;
