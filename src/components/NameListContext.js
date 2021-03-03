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
          name: "Helen",
          year: 1998,
          id: 14,
          sex: "female",
          popularity: 20,
        },
      ],
      preferences: [],
      sortBy: "name",
      namesPerPage: 25,

      onChangeOrder: this.onChangeOrder,
      onChangeNumber: this.onChangeNumber,
      onAdd: this.onAdd,
      onDelete: this.onDelete,
      callList: this.callList,
    };
  }

  componentDidUpdate() {}

  // Call the List from the Server => Sets List Component
  callList = (listURL) => {
    const callNames = async () => {
      try {
        const names = await axios(listURL);
        this.setState({ list: names.data, listView: names.data });
        this.onChangeNumber(this.state.namesPerPage);
      } catch (err) {
        console.log(err);
      }
    };
    callNames();
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
        return b[value] - a[value];
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
      console.log(updatedPreferences);
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
