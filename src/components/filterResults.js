import React from "react";

const FilterResults = (props) => {
  return (
    <>
      <div>
        <span>Gender:</span>
        <input type="radio" id="all" name="drone" value="all" defaultChecked />
        <label htmlFor="all">all</label>
        <input
          type="radio"
          id="male"
          name="drone"
          value="male"
          defaultChecked
        />
        <label htmlFor="male">male</label>
        <input type="radio" id="female" name="drone" value="female" />
        <label htmlFor="female">female</label>
      </div>
    </>
  );
};

export default FilterResults;
