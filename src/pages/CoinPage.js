import React, { useEffect, useState } from "react";

import PriceToggle from "../components/coin/PriceToggle";
import SelectDays from "../components/coin/SelectDays";
import { convertDate } from "../functions/convertDate";
import LineChart from "../components/coin/LineChart";
import { getCoinPrice } from "../functions/getCoinPrices";
import { getCoinData } from "../functions/getCoinData";
import CoinInfo from "../components/coin/CoinInfo";
import List from "../components/dashboard/List";
import { coinObject } from "../functions/convertObject";
import Header from "../components/common/Header/header";
import Loader from "../components/common/Loader";
import { useParams } from "react-router-dom";
import { settingChartData } from "../functions/settingChartData";

const CoinPage = () => {
  const { id } = useParams();
  const [days, setDays] = useState(14);
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [chartData, setChartData] = useState(null);
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);
  async function getData() {
    const data = await getCoinData(id);
    setIsLoading(false);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrice(id, days, priceType);
      if (prices.length > 0) {
        console.log("whooho");
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  }

  const handleDays = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrice(id, event.target.value, priceType);
    if (prices.length > 0) {
      console.log("whooho");
      settingChartData(setChartData, prices);

      setIsLoading(false);
    }
  };

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrice(id, days, newType);
    if (prices.length > 0) {
      console.log("whooho");
      settingChartData(setChartData, prices);

      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <div className="grey-wrapper">
            <List data={coinData} />
          </div>
          <div className="chart-design grey-wrapper">
            <SelectDays days={days} handleDays={handleDays} />
            <PriceToggle
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            {chartData && <LineChart chartData={chartData} />}
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
};
export default CoinPage;
