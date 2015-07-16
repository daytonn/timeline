import React from "bower_components/react/react";
import classNames from "bower_components/classnames/index";
import moment from "bower_components/moment/moment";

export default React.createClass({
  isToday() {
    return this.props.timestamp.isSame(moment(), 'day');
  },

  render() {
    var classes = classNames({
      'day': true,
      'today': this.isToday()
    });

    return (
      <li className={classes}>
        <div className="header">
          <span className="date">
            {this.props.timestamp.format("D")}
          </span>
          <span className="month">
            {this.props.timestamp.format("MMMM")}
          </span>
          <span className="year">
            {this.props.timestamp.format("YYYY")}
          </span>
        </div>
      </li>
    );
  }
});
