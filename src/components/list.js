import React, { useEffect, useState } from "react";
import axios from "axios";

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("src/data/names.json");
      setList(results.data);
    };
    fetchData();
  }, []);
  console.log(list);

  return (
    <div className="baby-name-container">
      <h1>Baby Names</h1>
      {list.length == 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {list.names.map((item, i) => {
            return (
              <li key={i}>
                - {item.name} : {item.year}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default List;
