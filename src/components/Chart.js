import React from "react";
import { Scatter } from "react-chartjs-2";

export const ChartType = {
  SCATTER: "SCATTER",
};

export default function Chart(props) {
  const { type, data } = props;
  if (!type || !data) {
    return null;
  }
  const { series } = data;
  let node = null;
  switch (type) {
    case ChartType.SCATTER:
      node = _createScatter(series);
      break;
    default: {
    }
  }
  return node;
}

function _createScatter(series) {
  const data = {
    datasets: series.map((s) => ({
      label: s.label,
      fill: false,
      backgroundColor: "rgba(75,192,192,0.4)",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: s.points,
    })),
  };
  return (
    <div className="chart-container">
      <Scatter data={() => data} />
    </div>
  );
}
