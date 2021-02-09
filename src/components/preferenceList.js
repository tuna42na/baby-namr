import React, { useEffect, useState } from "react";

const PreferenceList = (props) => {
  const [choices, setChoices] = useState([...props.preferences]);

  useEffect(() => {
    setChoices(props.preferences);
  }, [props.preferences]);

  return (
    <>
      <ul>
        {choices.map((item) => {
          return (
            <li key={item.id}>
              ~ {item.name} ~{" "}
              <button
                onClick={() => {
                  props.onDelete(item);
                }}
              >
                -
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PreferenceList;
