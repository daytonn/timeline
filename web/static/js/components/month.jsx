import React from "bower_components/react/react";
import {groupBy, values, each, map} from "bower_components/lodash/lodash";
import Day from "./day";
import Week from "./week";

export default React.createClass({
  render() {
    var days = this.props.days.map((day) => <Day timestamp={day.timestamp} key={day.id} />);

    var weeks = values(groupBy(this.props.days, (day) => day.timestamp.week()));
    weeks = map(weeks, (days) => {
      return (<Week className="week" days={days}/>);
    });

    return (
      <div className="month">
        <ul className="weeks">
          {weeks}
        </ul>
      </div>
    );
  }
})
