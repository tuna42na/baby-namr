import React, { useContext } from "react";
import { Scatter } from "react-chartjs-2";
import { NameListContext } from "./NameListContext";

const PopularityChart = () => {
  const { chartData } = useContext(NameListContext);

  return (
    <>
      {chartData.length == 0 ? (
        <div></div>
      ) : (
        <Scatter data={chartData} width={140} height={100} />
      )}
    </>
  );
};

export default PopularityChart;
