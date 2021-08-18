import styled from "styled-components";

const FormBox = styled.form`
  background: #e4572e;
  box-shadow: -5px 5px 3px #7180ac;
  color: white;
  padding: 20px;
  min-width: 30vw;
  border-radius: 2px;
  font-size: 2.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    border: none;
    font-size: 2.5vh;
  }
  a {
    color: #2b4570;
  }
`;

export default FormBox;
