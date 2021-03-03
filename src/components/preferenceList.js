import React, { useContext, useEffect, useState } from "react";
import { NameListContext } from "./NameListContext";

const PreferenceList = (props) => {
  const { preferences, onDelete } = useContext(NameListContext);

  return (
    <div className="preference-container">
      <h1> Your Picks </h1>
      <div className="preference-box">
        <ul>
          {preferences.map((item) => {
            return (
              <li key={item.id}>
                <button onClick={() => onDelete(item)}>-</button>{" "}
                <strong>{item.name}</strong>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PreferenceList;
