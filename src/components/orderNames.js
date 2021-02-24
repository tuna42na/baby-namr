import React from "react";
import { NameListConsumer } from "./NameListContext";

const OrderNames = (props) => {
  return (
    <NameListConsumer>
      {({ onChangeOrder }) => (
        <>
          <label>Sort Names by : </label>
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
        </>
      )}
    </NameListConsumer>
  );
};

export default OrderNames;
