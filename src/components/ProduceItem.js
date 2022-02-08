import React from "react";
import PropTypes from "prop-types";

function ProduceItem(props) {
  return (
    <React.Fragment>
      <h3>{props.month} Availabilties</h3>
      <ul>{props.selection.map((item) => `<li>${item}</li>`)}</ul>
    </React.Fragment>
  );
}

ProduceItem.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string),
};

export default ProduceItem;
