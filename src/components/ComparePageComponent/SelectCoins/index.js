import React, { useEffect, useState } from "react";
import get100Coin from "../../../functions/get100Coin";
import "./style.css";

import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
const SelectCoins = ({ crypto1, crypto2, handleCoinChange }) => {
  const [coin100, setCoin100] = useState([]);

  const styles = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "&MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const myCoin = await get100Coin();
    console.log(myCoin);
    if (myCoin) {
      setCoin100(myCoin);
    }
  }
  return (
    <div className="coins-flex">
      {/* for 1 coin */}
      <p>Crypto1: </p>
      <Select
        sx={styles}
        value={crypto1}
        label="Crypto 1"
        onChange={(event) => handleCoinChange(event, false)}
      >
        {coin100
          .filter((item) => item.id != crypto2)
          .map((coin) => (
            <MenuItem value={coin.id}>{coin.name}</MenuItem>
          ))}
      </Select>
      {/* for second coin */}
      <p>Crypto2: </p>
      <Select
        sx={styles}
        value={crypto2}
        label="Crypto 2"
        onChange={(event) => handleCoinChange(event, true)}
      >
        {coin100
          .filter((item) => item.id != crypto1)
          .map((coin) => (
            <MenuItem value={coin.id}>{coin.name}</MenuItem>
          ))}
      </Select>
    </div>
  );
};
export default SelectCoins;
