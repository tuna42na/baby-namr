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
              <button
                onClick={() => {
                  props.onDelete(item);
                }}
              >
                -
              </button>{" "}
              ~ {item.name} ~
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PreferenceList;
