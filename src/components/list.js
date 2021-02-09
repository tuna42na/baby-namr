import React, { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "./listItem";
import PreferenceList from "./preferenceList";

const List = () => {
  const [list, setList] = useState([]);
  const [preferences, setPreferences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("src/data/names.json");
      setList(results.data);
    };
    fetchData();
  }, [preferences]);

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
    <div className="baby-name-container">
      {list.length == 0 ? (
        <p> Loading... </p>
      ) : (
        <div>
          <div>
            <h1>Baby Names</h1>
            <ListItem list={list} onAdd={onAdd} />
          </div>
          <div>
            <h1>Your Picks</h1>
            <PreferenceList preferences={preferences} onDelete={onDelete} />
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
