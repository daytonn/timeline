import React from "bower_components/react/react";
import moment from "bower_components/moment/moment";
import classNames from "bower_components/classnames/index"
import {map, first} from "bower_components/lodash/lodash";

import Day from "./day";

export default React.createClass({
  isCurrentWeek() {
    return moment().week() === first(this.props.days).timestamp.week();
  },

  componentDidMount() {
    first(document.querySelectorAll(".this-week")).scrollIntoView();
  },

  render() {
    var classes = classNames({
      'week': true,
      'this-week': this.isCurrentWeek()
    });

    var days = this.props.days.map(function(day) {
      return <Day {...day}/>;
    });

    return (
      <div className={classes}>
        <ul className="days">
          {days}
        </ul>
      </div>
    )
  }
});
