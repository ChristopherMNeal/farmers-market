import React from "react";
import MarketDay from "./MarketDay";

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A",
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C",
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F",
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E",
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D",
  },
  {
    day: "Friday",
    location: "No Markets Today!",
    hours: "no",
    booth: "nada",
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G",
  },
];

function MarketList(props) {
  return (
    <React.Fragment>
      <hr />

      <MarketDay
        day={marketSchedule[props.day].day}
        location={marketSchedule[props.day].location}
        hours={marketSchedule[props.day].hours}
        booth={marketSchedule[props.day].booth}
      />
    </React.Fragment>
  );
}

export default MarketList;
