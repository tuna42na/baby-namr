import React, { useContext } from "react";
import { NameListContext } from "./NameListContext";

const OrderNames = () => {
  const { onChangeOrder, onChangeNumber, toggleDisplay } = useContext(
    NameListContext
  );

  return (
    <>
      <div>
        <label>Sort Names by: </label>
        <select
          name="filter"
          id="filter"
          onChange={(e) => onChangeOrder(e.target.value)}
          defaultValue="name"
        >
          <option value="name">name</option>
          <option value="year">year</option>
          <option value="popularity">popularity</option>
        </select>
        <label> Names per page: </label>
        <select
          name="filter"
          id="filter"
          onChange={(e) => onChangeNumber(e.target.value)}
          defaultValue={25}
        >
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      <br />
      <button onClick={() => toggleDisplay()}> New Search </button>
    </>
  );
};

export default OrderNames;
