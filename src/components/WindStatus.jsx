import { PropTypes } from "prop-types";
const WindStatus = ({ dir, degree }) => {
  return (
    <div className="wind-status">
      <span
        className="material-symbols-outlined"
        style={{ transform: `rotate(${degree}deg)`, transition: 'transform 800ms ease-in-out'}}
      >
        navigation
      </span>
      <span>{dir}</span>
    </div>
  );
};

WindStatus.propTypes = {
  dir: PropTypes.string.isRequired,
  degree: PropTypes.number.isRequired,
};

export { WindStatus };
