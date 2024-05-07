import {PropTypes} from "prop-types"
const HumidityBar = ({value}) => {
  return (
    <div className="humidity-bar">
        <div>
            <span>0</span>
            <span>50</span>
            <span>100</span>
        </div>
        <div className="porcentaje-bar">
            <div className="percentaje" style={{width: `${value}%`}}></div>
        </div>
        <div>
            %
        </div>
    </div>
  )
}

HumidityBar.propTypes = {
    value: PropTypes.number.isRequired,
}
export {HumidityBar}