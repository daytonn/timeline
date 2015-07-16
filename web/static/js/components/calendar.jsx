import {times, groupBy, values, each, reduce, map} from "bower_components/lodash/lodash";
import React from "bower_components/react/react";
import moment from "bower_components/moment/moment";
import Month from "./month";
import Day from "./day";

function getDaysInYear() {
  return times(365, (i) => { return { timestamp: moment().dayOfYear(i + 1) } });
}

function getMonths() {
  var months = values(groupBy(getDaysInYear(), (day) => day.timestamp.format("MMMM")));
  return map(months, (days, i) => {
    return {
      name: moment().month(i).format("MMMM"),
      days: days,
      timestamp: moment().month(i)
    };
  });
}

function dayNodes(days) {
  return days.map((day) => {
    return (<Day timestamp={day.timestamp} key={day.id} />);
  });
}

export default React.createClass({
  getInitialState() {
    return {
      year: parseInt(moment().format("YYYY"), 10),
      days: getDaysInYear(),
      months: getMonths()
    };
  },

  render() {
    var months = this.state.months.map((month) => <Month {...month}/>);
    return (
      <div className="calendar-stream">
        <ul className="months">
          {months}
        </ul>
      </div>
    );
  }
});
