import { createContext, useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { useFetchForecast } from "../hooks/useFetchForecast.js";
import { useFetchSearch } from "../hooks/useFetchSearch.js";

const AppContext = createContext();
function AppContextProvider({ children }) {
  const [temperature, setTemperature] = useState("c");
  const [location, setLocation] = useState("");
  const [currentCity, setCurrentCity] = useState(location);
  const [query, setQuery] = useState("")
  const {resultSearch} = useFetchSearch(query)

  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  const getLocation = async (setLocation, setCurrentCity) => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const pos = await response.json();
      const city = pos.city || "London";
      setLocation(city);
      setCurrentCity(city); // Set currentCity to the fetched location
    } catch (error) {
      console.error(error);
      setLocation("London");
      setCurrentCity("London"); // Set currentCity to a default value
    }
  };

  useEffect(() => {
    getLocation(setLocation, setCurrentCity);
  }, []);

  const { currentData } = useFetchForecast(currentCity);

  const handleCity = (value) => {
    setCurrentCity(value);
  };
  const handleQuery = (value) =>{
    setQuery(value)
  }
  const transformDate = (inputDate) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Parse inputDate into a Date object
    const date = new Date(inputDate);

    // Extract day of the week, day of the month, and month name
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    const dayOfMonth = date.getDate();
    const monthName = months[date.getMonth()];

    // Format the date in the desired format
    const formattedDate = `${dayOfWeek.slice(
      0,
      3
    )} ${dayOfMonth}, ${monthName}`;

    return formattedDate;
  };

  const handleTemperature = (value) => {
    setTemperature(value);
  };
  const setCurrentLocation = () =>{
    setCurrentCity(location)
  }
  return (
    <AppContext.Provider
      value={{
        temperature,
        handleTemperature,
        handleCity,
        getLocation,
        getCurrentDate,
        transformDate,
        currentData,
        currentCity,
        setCurrentLocation,
        handleQuery,
        resultSearch
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
AppContextProvider.propTypes = {
  children: PropTypes.node,
};
export { AppContext, AppContextProvider };
