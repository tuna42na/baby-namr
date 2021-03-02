import React, { useContext } from "react";
import { NameListContext } from "./NameListContext";

const ListItem = () => {
  const { listView, onAdd } = useContext(NameListContext);

  return (
    <div>
      <table id="name-list">
        <tbody>
          {listView.map((item, i) => {
            return (
              <tr key={i}>
                <td>
                  <button onClick={() => onAdd(item)}>+</button>
                </td>
                <td>
                  <strong>{item.name}</strong>
                </td>
                <td> Year: {item.year}</td>
                <td>
                  {" "}
                  Popularity: {Math.round((item.popularity / 1000) * 100)}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListItem;
