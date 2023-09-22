import { convertDate } from "./convertDate";
export const settingChartData=(setChartData,prices1,prices2)=>{
   if(prices2){
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          label:"Crypto1",
          data: prices1.map((price) => price[1]),
          borderColor: "#3a80e9",
          backgroundColor: "rgba(58,128,233,.1)",
          borderWidth: 1,
          tension: 0.25,
          fill: false,
          pointRadius: 0,
          yAxisId:"crypto1"
        },
        {
          label:"Crypto1",
          data: prices2.map((price) => price[1]),
          borderColor: "#61c96f",
          backgroundColor: "rgba(58,128,233,.1)",
          borderWidth: 1,
          tension: 0.25,
          fill: false,
          pointRadius: 0,
          yAxisId:"crypto2"
        },
        
      ]
    });
   }else{
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          data: prices1.map((price) => price[1]),
          borderColor: "#3a80e9",
          backgroundColor: "rgba(58,128,233,.1)",
          borderWidth: 1,
          tension: 0.25,
          fill: true,
          pointRadius: 0,
          yAxisId:"crypto1"
        },
        
      ]
    });
   }
  
}