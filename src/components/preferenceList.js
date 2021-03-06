import React, { useContext, useEffect, useState } from "react";
import { NameListContext } from "./NameListContext";
import Chart, { ChartType } from "./Chart";

const PreferenceList = () => {
  const { preferences, onDelete, chartData } = useContext(NameListContext);
  const chart = chartData ? (
    <Chart type={ChartType.SCATTER} data={chartData} />
  ) : null;
  return (
    <div className="preference-container">
      <h1> Your Picks </h1>
      <div className="preference-box">
        <ul>
          {preferences.map((item) => {
            return (
              <li key={item.id}>
                <button onClick={() => onDelete(item)}>-</button>{" "}
                <strong>{item.name}</strong>
              </li>
            );
          })}
        </ul>
      </div>
      {chart}
    </div>
  );
};

export default PreferenceList;
