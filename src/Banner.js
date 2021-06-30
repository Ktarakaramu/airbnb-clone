import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./Banner.css";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      {showSearch && <Search />}
      <div className="banner__search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          varaint="outlined"
          className="banner__searchButton">
          {showSearch ? "Hide Search" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different king of getaway to uncover hidden gems near you
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
