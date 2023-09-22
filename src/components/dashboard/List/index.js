import React from "react";
import "./style.css";
import { convertNumber } from "../../../functions/convertNumber";
import { Link } from "react-router-dom";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
const List = ({ data }) => {
  return (
    <Link to={`/coin/${data.id}`}>
      <tr className="list-row">
        <td className="info-flex">
          <img className="td-image" src={data.image} />

          <div className="name-flex">
            <p className="coin-symbol">{data.symbol}</p>
            <p className="coin-name">{data.name}</p>
          </div>
        </td>
        {data.price_change_percentage_24h > 0 ? (
          <Tooltip title="Persentage-Change">
            <td className="chip-flex">
              <div className="price-chip">
                {data.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-green">
                <TrendingUpRoundedIcon />
              </div>
            </td>
          </Tooltip>
        ) : (
          <td className="chip-flex">
            <div className="price-chip chip-price-red">
              {data.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-red">
              <TrendingDownRoundedIcon />
            </div>
          </td>
        )}
        <td>
          {""}
          <Tooltip title="Price" placement="bottom">
            <h3
              className="coin-price td-center-align"
              style={{
                color:
                  data.price_change_percentage_24h >= 0
                    ? "var(--green)"
                    : "var(--red)",
              }}
            >
              ${data.current_price.toLocaleString()}
            </h3>
          </Tooltip>
        </td>
        {/* total volume */}
        <td className="desktop-total-volume">
          <Tooltip title="Total-Volume" placement="bottom-end">
            <p className="total-volume td-right-align">
              {" "}
              ${data.total_volume.toLocaleString()}
            </p>
          </Tooltip>
        </td>
        <td className="mobile-total-volume">
          <Tooltip title="Total-Volume" placement="bottom-end">
            <p className="total-volume td-right-align">
              {" "}
              ${convertNumber(data.total_volume.toLocaleString())}
            </p>
          </Tooltip>
        </td>
        {/* market cap  */}
        <td className="desktop-market-cap">
          {" "}
          <Tooltip title="Market-cap" placement="bottom-end">
            <p className="total-market-cap td-right-align">
              {data.market_cap.toLocaleString()}
            </p>
          </Tooltip>
        </td>
        <td className="mobile-market-cap">
          {" "}
          <Tooltip title="Market-cap" placement="bottom-end">
            <p className="total-market-cap td-right-align">
              {convertNumber(data.market_cap.toLocaleString())}
            </p>
          </Tooltip>
        </td>
      </tr>
    </Link>
  );
};
export default List;
