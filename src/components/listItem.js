import React from "react";

const ListItem = (props) => {
  const list = props.list;

  return (
    <div>
      <ul>
        {list.names.map((item, i) => {
          return (
            <li key={i}>
              <button
                onClick={() => {
                  props.onAdd(item);
                }}
              >
                + {item.name} : {item.year}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListItem;
