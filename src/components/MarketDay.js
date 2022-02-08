import React from "react";
import PropTypes from "prop-types";

function MarketDay(props) {
  return (
    <div id="marketDay-div">
    <h3>{props.day}</h3>
    <p>location: {props.location}</p>
    <p>hours: {props.hours}</p>
    <p>booth: {props.booth}</p>
    </div>
  );
}

MarketDay.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
};

export default MarketDay;