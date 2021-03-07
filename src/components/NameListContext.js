import React from "react";
import axios from "axios";

let NameListContext;
const { Provider, Consumer } = (NameListContext = React.createContext());

class NameListProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: "",
          year: 1880,
          id: 14,
          sex: "female",
          popularity: 20,
        },
      ],
      listView: [
        {
          name: "",
          year: 1880,
          id: 14,
          sex: "female",
          popularity: 20,
        },
      ],
      preferences: [],
      sortBy: "name",
      namesPerPage: 25,
      chartData: null,
      filterDisplay: "visible",
      // Functional Export
      onChangeOrder: this.onChangeOrder,
      onChangeNumber: this.onChangeNumber,
      onAdd: this.onAdd,
      onDelete: this.onDelete,
      callList: this.callList,
      createChart: this.createChart,
      toggleDisplay: this.toggleDisplay,
    };
  }
  // Toggle the filter form modal
  toggleDisplay = () => {
    const filterDisplay =
      this.state.filterDisplay === "visible" ? "hidden" : "visible";
    this.setState({ filterDisplay });
  };

  // Call the List from the Server && Setting List Component
  callList = (listURL) => {
    const callNames = async () => {
      try {
        const names = await axios(listURL);
        this.setState({ list: names.data, listView: names.data });
        this.onChangeOrder(this.state.sortBy);
      } catch (err) {
        console.log(err);
      }
    };
    callNames();
  };

  // Calls the Popularity Chart Data
  createChart = (selectedName, selectedSex) => {
    const chartUrl = `https://baby-namer-api.herokuapp.com/names?name=${selectedName}&sex=${selectedSex}`;
    const constructChart = async () => {
      let response;
      try {
        response = await axios(chartUrl);
        // TODO: validate response
      } catch (err) {
        console.log("failed to fetch name data: ", err);
        return;
      }
      const points = response.data.map((name) => ({
        x: name.year,
        y: name.count,
      }));
      const name = `${response.data[0].name}`;
      const chartData = {
        series: [
          {
            label: `${name}`,
            points: points,
          },
        ],
      };
      this.setState({ chartData });
    };
    constructChart();
  };

  // Ordering Names Switch Function
  onChangeOrder = async (value) => {
    if (value == "name") {
      const results = [...this.state.list].sort((a, b) => {
        let varA = a.name.toUpperCase();
        let varB = b.name.toUpperCase();
        if (varA < varB) {
          return -1;
        } else if (varA > varB) {
          return 1;
        }
        return 0;
      });
      try {
        await this.setState({ list: results, listView: results });
      } catch (err) {
        console.log(err);
      }
    } else {
      const results = [...this.state.list].sort((a, b) => {
        return a[value] - b[value];
      });
      try {
        await this.setState({ list: results, listView: results });
      } catch (err) {
        console.log(err);
      }
    }

    this.setState({ sortBy: value });
    this.onChangeNumber(this.state.namesPerPage);
  };

  // Change List View Number
  onChangeNumber = (number) => {
    this.setState({ namesPerPage: number });
    let results = [...this.state.list];
    this.setState({ listView: results.splice(0, number) });
  };

  // Add Preferences
  onAdd = (item) => {
    if (!this.state.preferences.some((e) => e.name === item.name)) {
      const updatedPreferences = [...this.state.preferences, item];
      this.setState({ preferences: updatedPreferences });
    }
  };

  // Take Away Preferences
  onDelete = (item) => {
    let updatedPreferences = [...this.state.preferences];
    let index = updatedPreferences.findIndex((x) => x.name === item.name);
    updatedPreferences.splice(index, 1);
    this.setState({ preferences: updatedPreferences });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { NameListProvider, Consumer as NameListConsumer, NameListContext };
