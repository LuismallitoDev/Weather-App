import {PropTypes} from "prop-types";

function ForecastDiv ({ title,src,alt,maxTemperature,minTemperature,temperature}) {
  return (
    <div className="forecast-div" title={alt}>
        <h3>{title}</h3>
        <img src={src} alt={alt} />
        <div className="max-min">
            <span className="max">{maxTemperature}{temperature == "c" ? "°C" : "°F"}  </span>
            <span className="min">{minTemperature}{temperature == "c" ? "°C" : "°F"}  </span>
        </div>
    </div>
  )
}
ForecastDiv.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  maxTemperature: PropTypes.number.isRequired,
  minTemperature: PropTypes.number.isRequired,
  temperature: PropTypes.string.isRequired
}
export {ForecastDiv} 