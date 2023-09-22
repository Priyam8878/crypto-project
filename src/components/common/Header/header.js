import React from "react";
import "./style.css";
import Button from "../Button";
import SwipeableTemporaryDrawer from "./drawer";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Link  to="/">
          <p className="link"> Home</p>
        </Link>
        <Link to="/compare">
          <p className="link"> Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link"> WatchList</p>
        </Link>
        <Link to="/dashboard">
          <Button
            text="Dashboard"
            outlined="true"
            onclick={() => console.log("button Clicked")}
          />
        </Link>
      </div>

      <div className="mobile-drawer">
        <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer>
      </div>
    </div>
  );
};

export default Header;
