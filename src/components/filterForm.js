import React, { useState } from "react";
import { NameListConsumer } from "./NameListContext";

const Form = () => {
  const [gender, setGender] = useState("B");
  const [yearStart, setYearStart] = useState(1930);
  const [yearEnd, setYearEnd] = useState(2019);

  const handleSexChange = (value) => {
    setGender(value);
  };

  const handleSubmit = () => {
    let searchURL = `https://baby-namer-api.herokuapp.com/names?sex=${gender}&yearStart=${yearStart}&yearEnd=${yearEnd}`;
    console.log(searchURL);
  };

  return (
    <>
      <NameListConsumer>
        {({ callList }) => (
          <div className="formPage">
            <div className="modal-container">
              <div className="modal">
                <h2>Name Search</h2>
                <br />
                <label htmlFor="gender">Baby's Gender: </label>
                <select
                  id="gender"
                  name="gender"
                  onChange={(e) => handleSexChange(e.target.value)}
                >
                  <option value="M">male</option>
                  <option value="F">female</option>
                  <option value="B">both</option>
                </select>
                <br />
                <label>Year Min:</label>
                <input
                  id="yearMin"
                  value={yearStart}
                  onChange={(e) => {
                    setYearStart(e.target.value);
                  }}
                ></input>
                <br />
                <label>Year Max:</label>
                <input
                  id="yearMax"
                  value={yearEnd}
                  onChange={(e) => {
                    setYearEnd(e.target.value);
                  }}
                ></input>
                <br />
                <span></span>
                <button onClick={handleSubmit}> Search </button>
              </div>
            </div>
          </div>
        )}
      </NameListConsumer>
    </>
  );
};

export default Form;
