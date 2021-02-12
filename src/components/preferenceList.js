import React, { useEffect, useState } from "react";

const PreferenceList = (props) => {
  const [choices, setChoices] = useState([...props.preferences]);

  useEffect(() => {
    setChoices(props.preferences);
  }, [props.preferences]);

  return (
    <div className="preference-container">
      <ul>
        {choices.map((item) => {
          return (
            <li key={item.id}>
              <button
                onClick={() => {
                  props.onDelete(item);
                }}
              >
                -
              </button>{" "}
              <strong>{item.name}</strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PreferenceList;
