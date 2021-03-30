import React, { useContext } from "react";
import { NameListContext } from "../contexts/NameListContext";
import Chart, { ChartType } from "./Chart";

const PreferenceList = () => {
  const { preferences, onDelete, onAdd, draggedItem, nameHistory } = useContext(
    NameListContext
  );

  let prefBox = document.querySelector(".preference-box");

  const handleDragOver = (e) => {
    e.preventDefault();
    prefBox.classList.add("preference-drag");
  };
  const handleDragLeave = (e) => {
    prefBox.classList.remove("preference-drag");
  };
  const handleDrop = (e) => {
    e.preventDefault();

    prefBox.classList.remove("preference-drag");
    onAdd(draggedItem);
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
      <div
        className="preference-box"
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDrop={(e) => handleDrop(e)}
      >
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
