import React, { useContext } from "react";
import { NameListContext } from "./NameListContext";
import Chart, { ChartType } from "./Chart";

const PreferenceList = () => {
  const { preferences, onDelete, nameHistory } = useContext(NameListContext);
  let chart = null;
  if (nameHistory) {
    const data = {
      series: [
        {
          label: nameHistory.name,
          points: nameHistory.data.map((record) => ({
            x: record.year,
            y: record.count,
          })),
        },
      ],
    };
    chart = <Chart type={ChartType.SCATTER} data={data} />;
  }
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
