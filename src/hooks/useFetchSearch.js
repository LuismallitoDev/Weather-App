import { useEffect, useState } from "react";

export const useFetchSearch = (query) => {
  const [resultSearch, setResult] = useState();

  useEffect(() => {
    let URL_API = `https://api.weatherapi.com/v1/search.json?key=9f1b2390b34c40f68c650817240505&q=${query}&days=5&aqi=no&alerts=no`;

    fetch(URL_API)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },[query]);

  return { resultSearch  };
};
