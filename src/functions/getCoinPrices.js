import axios from "axios";

 export const getCoinPrice =(id,days,priceType)=>{
    const prices =  axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      console.log(response.data[priceType]);

    return response.data[priceType]
    })
    .catch((err) => {
      console.log("error Occoured" + err);
    
    });
    return prices
}