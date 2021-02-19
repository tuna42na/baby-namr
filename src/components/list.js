import React, { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "./listItem";
import PreferenceList from "./preferenceList";
import OrderNames from "./orderNames";
import NamesPerPage from "./namesPerPage";

const List = () => {
  const [list, setList] = useState([]);
  const [listView, setListView] = useState([]);
  const [preferences, setPreferences] = useState([]);

  // Data Call
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        "https://baby-namer-api.herokuapp.com/names?year=2008&sex=M"
      );
      setList(results.data);
    };
    fetchData();
  }, [preferences]);

  // Ordering Names Switch Function
  const onChangeOrder = (value) => {
    if (value == "name") {
      const results = [...listView].sort((a, b) => {
        let varA = a.name.toUpperCase();
        let varB = b.name.toUpperCase();
        if (varA < varB) {
          return -1;
        } else if (varA > varB) {
          return 1;
        }
        return 0;
      });
      setList(results);
    } else {
      const results = [...listView].sort((a, b) => {
        return b[value] - a[value];
      });
      setList(results);
    }
  };

  // Change List View
  const onChangeListView = (number) => {
    let results = [...list];
    setListView(results.splice(0, number));
  };

  // Add Preferences
  const onAdd = (item) => {
    if (!preferences.some((e) => e.name === item.name)) {
      let updatedPreferences = [...preferences];
      updatedPreferences.push(item);
      setPreferences(updatedPreferences);
    }
  };

  // Take Away Preferences
  const onDelete = (item) => {
    let updatedPreferences = [...preferences];
    let index = updatedPreferences.findIndex((x) => x.name === item.name);
    updatedPreferences.splice(index, 1);
    setPreferences(updatedPreferences);
  };

  return (
    <div className="list-page-container">
      {list.length == 0 ? (
        <p> Loading... </p>
      ) : (
        <div className="baby-name-container">
          <h1>Baby Names</h1>
          <OrderNames onChangeOrder={onChangeOrder} />
          <NamesPerPage onChangeListView={onChangeListView} />
          <ListItem listView={listView} onAdd={onAdd} />
        </div>
      )}
      <div>
        <h1>Your Picks</h1>
        <PreferenceList preferences={preferences} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default List;
