import React, { useContext } from "react";
import { NameListContext } from "../contexts/NameListContext";
import Chart, { ChartType } from "./Chart";

const PreferenceList = () => {
  const { preferences, onDelete, nameHistory } = useContext(NameListContext);

  const handleDragOver = () => {
    console.log("dragged!");
    const draggedItem = document.querySelector(".dragged-item");
    console.log(draggedItem);
  };

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
      <div className="preference-box" onDragOver={() => handleDragOver()}>
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
