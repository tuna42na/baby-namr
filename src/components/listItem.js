import React from "react";

const ListItem = (props) => {
  const list = props.list;

  return (
    <div>
      <table id="nameList">
        {list.map((item, i) => {
          return (
            <tr key={i}>
              <td>
                <button
                  onClick={() => {
                    props.onAdd(item);
                  }}
                >
                  +
                </button>
              </td>{" "}
              <td>
                <h2>{item.name}</h2>
              </td>
              <td>Year:{item.year}</td>
              <td>Popular:{item.popularity}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ListItem;
