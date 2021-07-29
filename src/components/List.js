import React, { useContext } from "react";
import Nav from "./Nav";
import ListItem from "./ListItem";
import PreferenceList from "./PreferenceList";
import OrderNames from "./OrderNames";
import { NameListContext } from "../contexts/NameListContext";
import Form from "./FilterForm";
import babyChic from "../data/chic.png";
import Pagination from "./Pagination";

const List = () => {
  const { list } = useContext(NameListContext);

  return (
    <div>
      <Nav />
      <Form />
      <div className="list-page-container">
        {list.length < 10 ? (
          <div className="loading-chic">
            <img src={babyChic} />
            <p> Loading... </p>
          </div>
        ) : (
          <>
            <PreferenceList />
            <div className="baby-name-container">
              <OrderNames />
              <Pagination />
              <ListItem />
              <Pagination />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default List;
