import React from "react";
import { NameListConsumer } from "./NameListContext";

const ListItem = () => {
  return (
    <NameListConsumer>
      {({ listView, onAdd }) => (
        <div>
          <table id="name-list">
            <tbody>
              {listView.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <button
                        onClick={() => {
                          onAdd(item);
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
      )}
    </NameListConsumer>
  );
};

export default ListItem;
