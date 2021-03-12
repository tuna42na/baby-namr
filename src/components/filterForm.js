import React, { useState, useContext } from "react";
import InputRange from "react-input-range";
import { NameListContext } from "./NameListContext";
import "react-input-range/lib/css/index.css";

const Form = () => {
  const { callList, filterDisplay, toggleDisplay } = useContext(
    NameListContext
  );

  const [gender, setGender] = useState("M");
  const [yearRange, setYearRange] = useState({ min: 1970, max: 1990 });
  // const [display, setDisplay] = useState("visible");

  const handleSubmit = () => {
    let searchURL = `https://baby-namer-api.herokuapp.com/names?sex=${gender}&yearStart=${yearRange.min}&yearEnd=${yearRange.max}`;
    callList(searchURL);
    toggleDisplay();
  };

  return (
    <>
      <div style={{ display: filterDisplay }} className="formPage">
        <div className="modal-container">
          <div className="modal">
            <h2>Name Search</h2>
            <br />
            <label htmlFor="gender">Baby's Gender: </label>
            <select
              id="gender"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="B">Both</option>
            </select>
            <br />
            <label htmlFor="yearRange">Year Range</label>
            <div id="yearRange">
              <InputRange
                draggableTrack
                minValue={1880}
                maxValue={2019}
                value={yearRange}
                onChange={(value) => {
                  setYearRange(value);
                }}
              />
            </div>
            <br />
            <span></span>
            <button onClick={handleSubmit}> Search </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
