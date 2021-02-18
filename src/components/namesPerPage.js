import React from "react";

const NamesPerPage = (props) => {
  const handleChange = (value) => {
    props.onChangeListView(value);
  };

  return (
    <>
      <label>Names per page: </label>
      <select
        name="filter"
        id="filter"
        onChange={(e) => handleChange(e.target.value)}
        defaultValue={25}
      >
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </>
  );
};

export default NamesPerPage;
