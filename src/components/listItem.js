import React, { useContext } from "react";
import { NameListContext } from "./NameListContext";

const ListItem = () => {
  const { listView, onAdd, createChart } = useContext(NameListContext);

  return (
    <div>
      <table id="name-list">
        <tbody>
          {listView.map((item, i) => {
            return (
              <tr onClick={() => createChart(item.name, item.sex)} key={i}>
                <td>
                  <button onClick={() => onAdd(item)}>+</button>
                </td>
                <td>
                  <strong>{item.name}</strong>
                </td>
                <td> Year: {item.year}</td>
                <td> Rank: {item.popularity} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListItem;
