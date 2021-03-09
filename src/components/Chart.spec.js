import React from "react";
import { shallow } from "enzyme";
import Chart, { ChartType } from "./Chart";
import { Scatter } from "react-chartjs-2";
import { setup } from "../utils/enzyme";

setup();

function getDummyData() {
  return {
    series: [],
  };
}

describe("ChartType", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("is an object with string values", () => {
    expect(typeof ChartType).toBe("object");
    Object.values(ChartType).forEach((v) => {
      expect(typeof v).toBe("string");
    });
  });
});

describe("Chart", () => {
  describe("constructor", () => {
    it("does not render 'chart-container' if no type is provided", () => {
      const data = getDummyData();
      const wrapper = shallow(<Chart type={null} data={data} />);
      expect(wrapper.exists(".chart-container")).toBe(false);
    });

    it("does not render 'chart-container' if no data is provided", () => {
      const wrapper = shallow(<Chart type={ChartType.SCATTER} />);
      expect(wrapper.exists(".chart-container")).toBe(false);
    });

    it("renders 'chart-container' if type and data are provided", () => {
      const data = getDummyData();
      const wrapper = shallow(<Chart type={ChartType.SCATTER} data={data} />);
      expect(wrapper.exists(".chart-container")).toBe(true);
    });

    it("creates an instance of 'Scatter'", () => {
      const data = getDummyData();
      const wrapper = shallow(<Chart type={ChartType.SCATTER} data={data} />);
      const scatter = wrapper.find(Scatter);
      expect(scatter).toHaveLength(1);
    });

    it("populates the data object passed to Scatter", () => {
      const data = getDummyData();
      const points = [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
      ];
      const series = { label: "test", points };
      data.series.push(series);
      const wrapper = shallow(<Chart type={ChartType.SCATTER} data={data} />);
      const scatter = wrapper.find(Scatter);
      const props = scatter.props();
      const scatterData = props.data();
      expect(scatterData.datasets[0].data).toEqual(points);
    });
  });
});
