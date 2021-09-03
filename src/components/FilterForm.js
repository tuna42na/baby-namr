import React, { useState, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import InputRange from "react-input-range";
import Button from "../styled/Button";
import { NameListContext } from "../contexts/NameListContext";
import "react-input-range/lib/css/index.css";

const Form = () => {
  const { callList, filterDisplay, toggleDisplay } =
    useContext(NameListContext);

  const [gender, setGender] = useState("M");
  const [rangeToggle, setRangeToggle] = useState(true);
  const [yearRange, setYearRange] = useState({ min: 1950, max: 1990 });
  const [year, setYear] = useState(1950);

  const handleSubmit = () => {
    let baseURL = `https://baby-namer-api.herokuapp.com/names?sex=${gender}`;
    let searchURL = baseURL + `&yearStart=${year}`;
    if (!rangeToggle) {
      searchURL =
        baseURL + `&yearStart=${yearRange.min}&yearEnd=${yearRange.max}`;
    }
    callList(searchURL);
    toggleDisplay();
  };

  // Conditional Rendering Logic
  let yearLabel, buttonLabel, yearValue, sliderId;
  rangeToggle
    ? ((yearLabel = "Year"),
      (buttonLabel = "Year Range?"),
      (yearValue = year),
      (sliderId = "year"))
    : ((yearLabel = "Year Range"),
      (buttonLabel = "Year?"),
      (yearValue = yearRange),
      (sliderId = "yearRange"));
  const handleYearChange = (value) => {
    rangeToggle ? setYear(value) : setYearRange(value);
  };

  const toggleRange = () => {
    // Activated before range state changes
    if (rangeToggle) {
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
      <div className="form-page">
        <CSSTransition
          in={filterDisplay}
          timeout={500}
          unmountOnExit
          classNames="form-modal"
        >
          <div className="modal-container">
            <div className="modal">
              <a className="close-window" onClick={() => toggleDisplay()}>
                <p> x </p>
              </a>
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

              <div>
                <label htmlFor={sliderId}> {yearLabel} </label>
                <Button
                  style={{ float: "right" }}
                  onClick={() => toggleRange()}
                >
                  {buttonLabel}
                </Button>
              </div>
              <div id={sliderId}>
                <InputRange
                  draggableTrack
                  minValue={1880}
                  maxValue={2019}
                  value={yearValue}
                  onChange={(value) => {
                    handleYearChange(value);
                  }}
                />
              </div>

              <br />
              <span></span>
              <Button onClick={handleSubmit}> Search </Button>
            </div>
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default Form;
