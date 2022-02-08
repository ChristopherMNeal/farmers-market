import React from "react";
import ProduceList from "./ProduceList";
import ProduceItem from "./ProduceItem";
import { render } from "@testing-library/react";

class ProduceControl extends React.Component {
  constructor(props) {
    super(props);
    const month = new Date().getUTCMonth();
    this.state = {
      month: month
    }
  }

  render() {
    let currentMonthState = null;
    
    if (this.state.pageNumber === 0) {
      currentlyVisibleState = <TicketList />
      buttonText = "Add Ticket";
  

    return (
      <React.Fragment>
        <ProduceList />
      </React.Fragment>
    )
  }
}
