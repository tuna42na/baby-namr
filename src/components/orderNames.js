import React from "react";

const OrderNames = (props) => {
  const handleChange = (value) => {
    props.onChangeOrder(value);
  };

  return (
    <>
      <label>Filter Names by : </label>
      <select
        name="filter"
        id="filter"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="name">name</option>
        <option value="year">year</option>
        <option value="popularity">popularity</option>
      </select>
    </>
  );
};

export default OrderNames;
