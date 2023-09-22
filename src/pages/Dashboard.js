import React, { useState, useEffect } from "react";
import axios from "axios";
import get100Coin from "../functions/get100Coin"
import BackToTop from "../components/common/BackToTop";
import Header from "../components/common/Header/header";
import TabsComponent from "../components/dashboard/TabsComponent/TabsComponent";
import Search from "../components/dashboard/Search";
import Loader from "../components/common/Loader";
import PaginationDashboard from "../components/PaginationDashboard";
const Dashboard = () => {
  const [coin, setCoin] = useState([]);
  const [paginatedcoin, setPaginatedCoin] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  // this function for the page change
  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoin(coin.slice(previousIndex, previousIndex + 10));
  };
  // this function is for search input
  function onSearchChange(e) {
    console.log(search);
    setSearch(e.target.value);
  }
  var filterCoin = coin.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
   getCoin()
   setIsLoading(false)
  }, []);

  const getCoin= async ()=>{
  const myCoin = await get100Coin();
  if(myCoin){
    setCoin(myCoin)
    setPaginatedCoin(myCoin.slice(0,10))
    setIsLoading(false)
  }
  }
  
  return (
    <>
      <Header />
      <BackToTop/>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <TabsComponent coin={search ? filterCoin : paginatedcoin} />
          {!search && (
            <PaginationDashboard
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
