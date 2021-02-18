import React from "react";

const ListItem = (props) => {
  console.log(props.listView);

  return (
    <div>
      <table id="name-list">
        <tbody>
          {props.listView.map((item, i) => {
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
                </td>
                <td>
                  <strong>{item.name}</strong>
                </td>
                <td> Year: {item.year}</td>
                <td> Popularity: {item.popularity}/100 </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListItem;
