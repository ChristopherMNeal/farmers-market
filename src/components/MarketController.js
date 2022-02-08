import React from "react";
// import MarketList from "./MarketList";
import MarketList from "./MarketList";

class MarketController extends React.Component {
  constructor(props) {
    const weekDay = new Date().getUTCDay();
    super(props);
    this.state = {
      weekDay: weekDay,
    };
  }

  handleClick = () => {
    if (this.state.weekDay < 6) {
      this.setState((prevState) => ({
        weekDay: prevState.weekDay + 1,
      }));
    } else {
      this.setState({
        weekDay: 0,
      });
    }
  };

  render() {
    let day = this.state.weekDay;

    return (
      <React.Fragment>
        <MarketList day={day} />
        <button onClick={this.handleClick}>Next Day</button>
      </React.Fragment>
    );
  }
}

export default MarketController;
