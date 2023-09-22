import React, { useEffect, useState } from "react";

import PriceToggle from "../components/coin/PriceToggle";
import LineChart from "../components/coin/LineChart";
import { settingChartData } from "../functions/settingChartData";
import CoinInfo from "../components/coin/CoinInfo";
import List from "../components/dashboard/List";
import Loader from "../components/common/Loader";
import SelectDays from "../components/coin/SelectDays";
import SelectCoins from "../components/ComparePageComponent/SelectCoins";
import Header from "../components/common/Header/header";
import { getCoinData } from "../functions/getCoinData";
import { coinObject } from "../functions/convertObject";
import { getCoinPrice } from "../functions/getCoinPrices";
const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [priceType, setPriceType] = useState("prices");
  const [days, setDays] = useState(14);
  const [chartData, setChartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  async function handleDays(event) {
    setIsLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrice(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrice(crypto2, event.target.value, priceType);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);

    if (data1) {
      const data2 = await getCoinData(crypto2);
      coinObject(setCrypto1Data, data1);
      if (data2) {
        coinObject(setCrypto2Data, data2);
        const prices1 = await getCoinPrice(crypto1, days, priceType);
        const prices2 = await getCoinPrice(crypto2, days, priceType);
        settingChartData(setChartData, prices1, prices2);
        console.log("both prices fetched", prices1, prices2);
        setIsLoading(false);
      }
    }
  }

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      console.log("coin2" + event.target.value);
      if (data) {
        coinObject(setCrypto2Data, data);
      }

      setIsLoading(false);
    } else {
      setCrypto1(event.target.value);
      console.log("coin1" + event.target.value);
      const data = await getCoinData(event.target.value);
      setIsLoading(false);
      if (data) {
        coinObject(setCrypto1Data, data);
      }
      setIsLoading(false);
    }
    const prices1 = await getCoinPrice(crypto1, days, priceType);
    const prices2 = await getCoinPrice(crypto2, days, priceType);
    if (prices1.length > 0 && prices2.length > 0) {
      console.log("both prices fetched", prices1, prices2);
      // settingChartData(setChartData,prices)
      setIsLoading(false);
    }
  };
  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrice(crypto1, days, newType);
    const prices2 = await getCoinPrice(crypto2, days, newType);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false)
  };
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="coins-days-flex">
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays days={days} handleDays={handleDays} noPTag={false} />
          </div>
          <div className="grey-wrapper">
            <List data={crypto1Data} />
          </div>
          <div className="grey-wrapper">
            <List data={crypto2Data} />
          </div>
          <div className="chart-design grey-wrapper">
            {chartData && (
              <>
                <PriceToggle
                  priceType={priceType}
                  handlePriceTypeChange={handlePriceTypeChange}
                />
                <LineChart
                  chartData={chartData}
                  priceType={priceType}
                  multiAxis={true}
                />
              </>
            )}
          </div>
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
};
export default ComparePage;
