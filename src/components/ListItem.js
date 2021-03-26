import React, { useContext } from "react";
import { NameListContext } from "../contexts/NameListContext";

const ListItem = () => {
  const { listView, onAdd, fetchNameHistory } = useContext(NameListContext);

  const handleDragStart = (e) => {
    e.target.classList.add("dragged-item");
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove("dragged-item");
  };

  return (
    <div>
      <table id="name-list">
        <tbody>
          {listView.map((item, i) => {
            return (
              <tr
                onClick={() => fetchNameHistory(item.name, item.sex)}
                key={i}
                draggable="true"
                onDragStart={(e) => handleDragStart(e)}
                onDragEnd={(e) => handleDragEnd(e)}
              >
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
