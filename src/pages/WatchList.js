import React, { useState } from "react";
import Header from "../components/common/Header/header";
import Button from "../components/common/Button";
import Dashboard from "./Dashboard";
const WatchList=()=>{
  
    return(
        <>
        <Header/>
        <div className="watchlist-flex">
            <p>No item added</p>
          <Button text={"Dashboard"} outlined={true} onclick={onclick} />
        </div>
        </>
    )
}
export default WatchList