import { PropTypes } from "prop-types";
import { useState } from "react";

const SearchDiv = ({ children,handleCity }) => {
  const [hovered, setHovered] = useState(false);
  const handleHovered = (hovered) => {
    setHovered(hovered);
  };
  return (
    <div
      className={`query-div ${hovered ? 'hovered' : ''}`}
      onMouseOver={() =>handleHovered(true)}
      onMouseLeave={() =>handleHovered(false)}
      onClick={()=>handleCity(children)}
    >
      {hovered ? (
        <>
          <p>{children}</p>
          <span className="material-symbols-outlined">chevron_right</span>
        </>
      ) : (
        <p>{children}</p>
      )}
    </div>
  );
};
SearchDiv.propTypes = {
  children: PropTypes.string.isRequired,
  handleCity: PropTypes.func.isRequired,
};

export { SearchDiv };
