import { useState, useContext } from "react";
//import response from "../mocks/forecast-response.json";
import { AppContext } from "../context/AppContext";
import "../styles/Nav.css";
import { Oval } from "react-loader-spinner";
import { SearchDiv } from "../components/SearchDiv";

export function Nav() {
  const [nav, setNav] = useState(false); //false means closed, and true means opened
  //false means celcius, and true means fahrenheit
  let {
    temperature,
    getCurrentDate,
    transformDate,
    currentData,
    setCurrentLocation,
    handleQuery,
    resultSearch,
    handleCity
  } = useContext(AppContext); //false meansntext(false); //false means+
  const changeCity = (value) =>{
    handleCity(value);
    document.getElementById("query").value = value;
    setNav(false);
    document.getElementById("result-query").innerHTML = ""
  }
  
  const data = currentData;
  

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const handleNavChange = (state) => {
    setNav(state);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const field = new window.FormData(event.target);
    const query = field.get("query");
    handleQuery(query);
    
  };
  const OpenNav = () => {
    return (
      <>
        <div className="close-nav">
          <button onClick={() => setNav(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="top-nav-opened">
          <form onSubmit={handleSubmit}>
            <div className="input-div">
              <span className="material-symbols-outlined">search</span>
              <input
                type="text"
                placeholder="Search location"
                className="search-input"
                name="query"
                id="query"
                autoComplete="off"
              />
            </div>
            <button className="search-button">Search</button>
          </form>
        </div>
        <div className="result-query" id="result-query"> 
          {
             resultSearch && resultSearch.length > 0
             ? resultSearch.map((item) => {
                  return (
                    <SearchDiv handleCity={changeCity} key={item.id}>{item.region + ", " + item.name}</SearchDiv>
                  );
                })
              : null
          }
        </div>
      </>
    );
  };
  const ClosedNav = () => {
    return (
      <>
        <div className="top-nav">
          <button onClick={() => handleNavChange(true)}>
            Search for places
          </button>
          <button>
            <span
              className="material-symbols-outlined"
              onClick={setCurrentLocation}
            >
              my_location
            </span>
          </button>
        </div>
        <div className="weather-nav">
          <div className="img-nav-weather"></div>
          <img
            src={data.current.condition.icon}
            alt={data.current.condition.text}
          />
        </div>
        <div className="current-temp">
          {temperature == "c" ? (
            <>
              <h1>{data.current.temp_c} </h1>
              <span>°C</span>
            </>
          ) : (
            <>
              {" "}
              <h1>{data.current.temp_f} </h1>
              <span>°F</span>
            </>
          )}
        </div>
        <div className="current-weather-type">
          {capitalize(data.current.condition.text)}
        </div>
        <div className="date">
          <span>Today</span>
          <span className="material-symbols-outlined">fiber_manual_record</span>
          <span>{transformDate(getCurrentDate())}</span>
        </div>
        <div className="location">
          <span className="material-symbols-outlined">location_on</span>
          {data.location.name}
        </div>
      </>
    );
  };
  return (
    <div className="nav">
      {currentData ? (
        nav ? (
          <OpenNav></OpenNav>
        ) : (
          <ClosedNav></ClosedNav>
        )
      ) : (
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#FFEC65"
          secondaryColor=""
          ariaLabel="oval-loading"
          wrapperStyle={{ position: "absolute", top: "50%", left: "50%", transform: `translate(-50%,-50%)`}}
          wrapperClass=""
          />

      )}
    </div>
  );
}
