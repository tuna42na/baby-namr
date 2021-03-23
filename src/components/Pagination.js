import React, { useContext } from "react";
import Button from ".././styled/Button";
import { NameListContext } from "../contexts/NameListContext";

const Pagination = () => {
  const { page, onPageChange } = useContext(NameListContext);
  const next = page + 1;
  const prev = page - 1;
  return (
    <div>
      {page == 1 ? (
        <></>
      ) : (
        <Button
          onClick={() => {
            onPageChange(prev);
          }}
        >
          Prev
        </Button>
      )}
      <Button
        onClick={() => {
          onPageChange(next);
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
