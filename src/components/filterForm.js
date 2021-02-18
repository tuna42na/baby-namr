import React from "react";

const Form = () => {
  return (
    <div className="formPage">
      <div class="modal-container">
        <form class="modal">
          <h2>Name Search</h2>
          <label for="gender">Baby's Gender: </label>
          <select id="gender" name="gender">
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="both">both</option>
          </select>
          <br />
          <label for="gender">Baby's Gender: </label>
          <select id="gender" name="gender">
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="both">both</option>
          </select>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Form;
