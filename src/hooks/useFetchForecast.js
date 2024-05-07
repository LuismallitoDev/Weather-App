import { useEffect, useState } from "react";

export const useFetchForecast = (city) => {
  const [currentData, setCurrentData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let URL_API = `https://api.weatherapi.com/v1/forecast.json?key=9f1b2390b34c40f68c650817240505&q=${city}&days=6&aqi=no&alerts=no`;

    fetch(URL_API)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setCurrentData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  },[city]);

  return { currentData, loading, error };
};
