import React from "react";

import "./style.css";
import { Link } from "react-router-dom";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

const Grid = ({ data }) => {

  return (
    <Link to={`/coin/${data.id}`}>
      <div className="flex-container">
        <div className="info-outer-flex">
          <div className="info-flex">
            <img className="coin-logo" src={data.image} />
            <div className="name-flex">
              <p className="coin-symbol">{data.symbol}</p>
              <p className="coin-name">{data.name}</p>
            </div>
          </div>
          <div >
            {" "}
            <StarsRoundedIcon />
          </div>
        </div>
        {data.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {data.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-green">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip chip-price-red">
              {data.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        <div className="info-container">
          <h3
            className="coin-price"
            style={{
              color:
                data.price_change_percentage_24h >= 0
                  ? "var(--green)"
                  : "var(--red)",
            }}
          >
            ${data.current_price.toLocaleString()}
          </h3>
          <p className="total-volume">
            {" "}
            Total Volume:{data.total_volume.toLocaleString()}
          </p>
          <p className="total-market-cap">
            Market Cap:{data.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default Grid;
