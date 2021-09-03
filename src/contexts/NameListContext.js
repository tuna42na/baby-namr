import React from "react";
import axios from "axios";

let NameListContext;
const { Provider, Consumer } = (NameListContext = React.createContext());

class NameListProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
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
      draggedItem: null,
      sortBy: "popularity",
      namesPerPage: 25,
      page: 1,
      nameHistory: null,
      filterDisplay: true,

      // Functional Export
      onChangeOrder: this.onChangeOrder,
      onChangeNumber: this.onChangeNumber,
      onPageChange: this.onPageChange,
      onAdd: this.onAdd,
      onDelete: this.onDelete,
      callList: this.callList,
      fetchNameHistory: this.fetchNameHistory,
      toggleDisplay: this.toggleDisplay,
      onDragged: this.onDragged,
    };
  }

  // Toggle the filter form modal
  toggleDisplay = () => {
    const filterDisplay = this.state.filterDisplay !== true ? true : false;

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

  // Fetches all records for the name and uses the response
  // to populate `nameHistory`
  fetchNameHistory = (selectedName, selectedSex) => {
    const url = `https://baby-namer-api.herokuapp.com/names?name=${selectedName}&sex=${selectedSex}`;
    const updateNameHistory = async () => {
      let response;
      try {
        response = await axios(url);
      } catch (err) {
        console.log("failed to fetch name data: ", err);
        return;
      }
      const nameHistory = {
        name: selectedName,
        data: response.data.map((name) => ({
          year: name.year,
          count: name.count,
        })),
      };
      this.setState({ nameHistory });
    };
    updateNameHistory();
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
    this.onPageChange(this.state.page);
  };

  // Change Page
  onPageChange = (newPageNumber) => {
    let pageStart = (newPageNumber - 1) * this.state.namesPerPage;
    if (
      newPageNumber < 1 ||
      newPageNumber > this.state.list.length / this.state.namesPerPage
    ) {
      console.log(newPageNumber);
      return;
    } else {
      const newPageResults = [...this.state.list].splice(
        pageStart,
        this.state.namesPerPage
      );
      this.setState({ listView: newPageResults, page: newPageNumber });
    }
  };

  // Add Preferences
  onAdd = (item) => {
    if (!this.state.preferences.some((e) => e.name === item.name)) {
      const updatedPreferences = [...this.state.preferences, item];
      this.setState({ preferences: updatedPreferences });
    }
  };
  onDragged = (item) => {
    this.setState({ draggedItem: item });
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
