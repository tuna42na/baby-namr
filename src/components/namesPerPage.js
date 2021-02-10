import React from "react";

const NamesPerPage = () => {
  return (
    <>
      <div>
        <span>Names Per Page: </span>
        <input type="radio" id="25" name="drone" value="25" defaultChecked />
        <label htmlFor="25">25</label>

        <input type="radio" id="50" name="drone" value="50" />
        <label htmlFor="50">50</label>

        <input type="radio" id="100" name="drone" value="100" />
        <label htmlFor="100">100</label>
      </div>
    </>
  );
};

export default NamesPerPage;
