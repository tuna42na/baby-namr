import React, { useContext } from "react";
import { NameListContext } from "./NameListContext";

const PreferenceList = () => {
  const { preferences, onDelete } = useContext(NameListContext);

  return (
    <>
      <div className="preference-container">
        <ul>
          {preferences.map((item) => {
            return (
              <li key={item.id}>
                <button onClick={onDelete(item)}>-</button>{" "}
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
