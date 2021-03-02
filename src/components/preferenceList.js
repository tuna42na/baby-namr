import React, { useContext, useEffect, useState } from "react";
import { NameListContext } from "./NameListContext";

const PreferenceList = (props) => {
  const { onDelete } = useContext(NameListContext);

  return (
    <>
      <div className="preference-container">
        <ul>
          {props.preferences.map((item) => {
            return (
              <li key={item.id}>
                <button onClick={() => onDelete(item)}>-</button>{" "}
                <strong>{item.name}</strong>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PreferenceList;
