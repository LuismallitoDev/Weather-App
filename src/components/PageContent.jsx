import "../styles/PageContent.css";
import { ForecastDiv } from "../components/ForecastDiv";
import { Hightlight } from "../components/Hightlight";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { HumidityBar } from "./HumidityBar";
import { WindStatus } from "./WindStatus";

export function PageContent() {
  const { temperature, handleTemperature, transformDate, currentData } =
    useContext(AppContext);

  if (currentData) {
    var data = currentData;
    var forecast = data.forecast;
  }

  return (
    forecast && (
      <div className="page-content">
        <div className="temperature-bar">
          <button
            className={temperature == "c" ? "selected" : ""}
            onClick={() => handleTemperature("c")}
          >
            °C
          </button>
          <button
            className={temperature == "f" ? "selected" : ""}
            onClick={() => handleTemperature("f")}
          >
            °F
          </button>
        </div>
        <div className="forecast-container">
          {forecast.forecastday.map((array) => {
            return (
              <ForecastDiv
                key={array.date_epoch}
                minTemperature={
                  temperature == "c" ? array.day.mintemp_c : array.day.mintemp_f
                }
                maxTemperature={
                  temperature == "c" ? array.day.maxtemp_c : array.day.maxtemp_f
                }
                src={array.day.condition.icon}
                alt={array.day.condition.text}
                title={transformDate(array.date)}
                temperature={temperature}
              />
            );
          })}
        </div>

        <div className="hightlights">
          <h2 className="title-hightlight">Today&#39;s Hightlight</h2>
          <div>
            <Hightlight
              title={"Wind status"}
              number={data.current.wind_mph}
              scalar={"mph"}
            >
              <WindStatus
                degree={data.current.wind_degree}
                dir={data.current.wind_dir}
              />
            </Hightlight>
            <Hightlight
              title={"Humidity"}
              number={data.current.humidity}
              scalar={"%"}
            >
              <HumidityBar value={data.current.humidity} />
            </Hightlight>
            <Hightlight
              title={"Visibility"}
              number={data.current.vis_miles}
              scalar={"miles"}
            ></Hightlight>
            <Hightlight
              title={"Air Pressure"}
              number={data.current.pressure_mb}
              scalar={"mb"}
            ></Hightlight>
          </div>
        </div>
      </div>
    )
  );
}
