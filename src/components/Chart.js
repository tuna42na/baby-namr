import React from "react";
import { Scatter } from "react-chartjs-2";

export const ChartType = {
  SCATTER: "SCATTER",
};

export default function Chart(props) {
  const { type, data } = props;
  let node = <div></div>;
  switch (type) {
    case ChartType.SCATTER:
      {
        node = _createScatter(data);
      }
      break;
    default: {
    }
  }
  return node;
}

function _createScatter(data) {
  return (
    <div className="chart-container">
      <Scatter data={data} />
    </div>
  );
}
