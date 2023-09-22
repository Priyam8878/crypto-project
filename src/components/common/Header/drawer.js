import React, { useState } from "react";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
export default function SwipeableTemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="menu" />
      </IconButton>
      <SwipeableDrawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
      
      >
        <div className="drawer-div">
        <Link to="/">
          <p className="link"> Home</p>
        </Link>
        <Link to="/compare">
          <p className="link"> Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link"> WatchList</p>
        </Link>
        <Link to="/dashboard">
          <p className="link">Dashboard</p>
        </Link>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
