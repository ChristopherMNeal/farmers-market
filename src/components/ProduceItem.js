import React from "react";
import PropTypes from "prop-types";

function ProduceItem(props) {
  return (
    <React.Fragment>
      <h3>{props.monthName} Availabilties</h3>
      <ul>
        {props.itemArray.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

ProduceItem.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string),
};

export default ProduceItem;
