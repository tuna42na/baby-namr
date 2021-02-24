import React from "react";
import axios from "axios";

let NameListContext;
const { Provider, Consumer } = (NameListContext = React.createContext());

class NameListProvider extends React.Component {
  state = {
    list: [
      {
        name: "Helen",
        year: 1998,
        id: 14,
        sex: "female",
        popularity: 20,
      },
      { name: "Mark", year: 1930, id: 16, sex: "male", popularity: 45 },
    ],
    listView: [],
    preferences: [],
  };

  callList = (listURL) => {
    console.log(listURL);
    // this.setState({ listView: newList });
  };
  // Ordering Names Switch Function
  onChangeOrder = (value) => {
    if (value == "name") {
      const results = [...this.state.listView].sort((a, b) => {
        let varA = a.name.toUpperCase();
        let varB = b.name.toUpperCase();
        if (varA < varB) {
          return -1;
        } else if (varA > varB) {
          return 1;
        }
        return 0;
      });
      this.setState({ list: results });
    } else {
      const results = [...this.state.listView].sort((a, b) => {
        return b[value] - a[value];
      });
      this.setState({ listView: results });
    }
  };

  // Change List View Number
  onChangeListView = (number) => {
    let results = [...this.state.list];
    this.setState({ listView: results.splice(0, number) });
  };

  // Add Preferences
  onAdd = (item) => {
    if (!this.state.preferences.some((e) => e.name === item.name)) {
      let updatedPreferences = [...this.state.preferences];
      updatedPreferences.push(item);
      this.setState({ preferences: [...updatedPreferences] });
    }
    console.log(this.state.preferences);
  };

  // Take Away Preferences
  onDelete = (item) => {
    let updatedPreferences = [...this.state.preferences];
    let index = updatedPreferences.findIndex((x) => x.name === item.name);
    updatedPreferences.splice(index, 1);
    this.setState({ preferences: updatedPreferences });
  };

  render() {
    return (
      <Provider
        value={{
          list: this.state.list,
          listView: this.state.listView,
          preferences: this.state.preferences,
          onChangeOrder: this.onChangeOrder,
          onChangeListView: this.onChangeListView,
          onAdd: this.onAdd,
          onDelete: this.onDelete,
          callList: this.callList,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { NameListProvider, Consumer as NameListConsumer, NameListContext };
