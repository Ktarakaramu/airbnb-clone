import React, { useState } from "react";
import "./Search.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import PeopleIcon from "@material-ui/icons/People";
import { Button } from "@material-ui/core";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionrange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionrange]} onChange={handleSelect} />
      <h2>
        Number of Guests <PeopleIcon />
        {""}
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button>Search AIRBNB</Button>
    </div>
  );
}

export default Search;
