import { PropTypes } from "prop-types";
function Hightlight({ title, number, scalar,children = "" }) {
  return (
    <div className="hightlight">
      <h3>{title}</h3>
      <div>
        <span>{number}</span>
        <span>{scalar}</span>
      </div>
      
        {children}
    </div>
  );
}
Hightlight.propTypes = {
  title: PropTypes.string.isRquired,
  number: PropTypes.isRequired,
  scalar: PropTypes.string.isRequired,
  children: PropTypes.component,
};

export { Hightlight };
