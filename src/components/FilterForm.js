import React, { useState, useContext } from "react";
import InputRange from "react-input-range";
import Button from "../styled/Button";
import { NameListContext } from "../contexts/NameListContext";
import "react-input-range/lib/css/index.css";

const Form = () => {
  const { callList, filterDisplay, toggleDisplay } = useContext(
    NameListContext
  );

  const [gender, setGender] = useState("M");
  const [rangeToggle, setRangeToggle] = useState(false);
  const [yearRange, setYearRange] = useState({ min: 1950, max: 1990 });
  const [year, setYear] = useState(1950);

  const handleSubmit = () => {
    let searchURL = `https://baby-namer-api.herokuapp.com/names?sex=${gender}&yearStart=${year}`;
    if (rangeToggle) {
      searchURL = `https://baby-namer-api.herokuapp.com/names?sex=${gender}&yearStart=${yearRange.min}&yearEnd=${yearRange.max}`;
    }
    callList(searchURL);
    toggleDisplay();
  };

  const toggleRange = () => {
    // Activated before range state changes
    if (!rangeToggle) {
      if (yearRange.max <= year) {
        setYearRange({ ...yearRange, max: year, min: yearRange.max });
      } else {
        setYearRange({ ...yearRange, min: year });
      }
    } else {
      setYear(yearRange.min);
    }
    rangeToggle ? setRangeToggle(false) : setRangeToggle(true);
  };

  return (
    <>
      <div style={{ display: filterDisplay }} className="form-page">
        <div className="modal-container">
          <div className="modal">
            <div className="close-window" onClick={() => toggleDisplay()}>
              {" "}
              X
            </div>
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
            </select>
            <br />
            {rangeToggle ? (
              <>
                <div>
                  <label htmlFor="yearRange">Year Range</label>
                  <Button
                    style={{ float: "right" }}
                    onClick={() => toggleRange()}
                  >
                    Year?
                  </Button>
                </div>
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
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="year">Year</label>
                  <Button
                    style={{ float: "right" }}
                    onClick={() => toggleRange()}
                  >
                    Year Range?
                  </Button>
                </div>
                <div id="year">
                  <InputRange
                    draggableTrack
                    minValue={1880}
                    maxValue={2019}
                    value={year}
                    onChange={(value) => {
                      setYear(value);
                    }}
                  />
                </div>
              </>
            )}
            <br />
            <span></span>
            <Button onClick={handleSubmit}> Search </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
