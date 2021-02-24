import React, { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "./listItem";
import PreferenceList from "./preferenceList";
import OrderNames from "./orderNames";
import NamesPerPage from "./namesPerPage";
import { NameListConsumer } from "./NameListContext";

const List = () => {
  // // Data Call
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const results = await axios(
  //       "https://baby-namer-api.herokuapp.com/names?year=2008&sex=M"
  //     );
  //     setList(results.data);
  //   };
  //   fetchData();
  // }, [preferences]);

  return (
    <NameListConsumer>
      {({ list, onChangeListView }) => (
        <div className="list-page-container">
          {list.length == 0 ? (
            <p> Loading... </p>
          ) : (
            <div className="baby-name-container">
              <h1>Baby Names</h1>
              <OrderNames />
              <NamesPerPage onChangeListView={onChangeListView} />
              <ListItem />
            </div>
          )}
          <div>
            <h1>Your Picks</h1>
            <PreferenceList />
          </div>
        </div>
      )}
    </NameListConsumer>
  );
};

export default List;
