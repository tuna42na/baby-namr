import React, { useContext } from "react";
import ListItem from "./listItem";
import PreferenceList from "./preferenceList";
import OrderNames from "./orderNames";
import { NameListContext } from "./NameListContext";
import babyChic from "../data/chic.png";

const List = () => {
  const { list } = useContext(NameListContext);

  return (
    <div className="list-page-container">
      {list.length < 10 ? (
        <div className="loading-chic">
          <img src={babyChic} />
          <p> Loading... </p>
        </div>
      ) : (
        <>
          <div className="baby-name-container">
            <h1>Baby Names</h1>
            <OrderNames />
            <ListItem />
          </div>
          <PreferenceList />
        </>
      )}
    </div>
  );
};

export default List;
