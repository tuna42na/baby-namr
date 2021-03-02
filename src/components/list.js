import React, { useContext } from "react";
import ListItem from "./listItem";
import PreferenceList from "./preferenceList";
import OrderNames from "./orderNames";
import { NameListContext } from "./NameListContext";

const List = () => {
  const { list, preferences } = useContext(NameListContext);

  return (
    <div className="list-page-container">
      {list.length < 10 ? (
        <p> Loading... </p>
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
