import axios from "axios";
export const getCoinData = (id) => {
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("Error is happened" + err);
    });
    return myData
};
