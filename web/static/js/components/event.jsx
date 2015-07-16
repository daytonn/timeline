import React from "bower_components/react/react";

export default React.createClass({
  isToday() {
    return this.props.timestamp.isSame(moment(), 'day');
  },

  render() {
    var classes = classNames({
      'event': true,
      'today': this.isToday()
    });

    return (
      <li className={classes}>
        <span className="month">
          {this.props.timestamp.format("MMMM")},
        </span>
        <span className="date">
          {this.props.timestamp.format("D")}
        </span>
        <span className="year">
          {this.props.timestamp.format("YYYY")}
        </span>
        <span className="time">
          {this.props.timestamp.format("h:mm")}
        </span>
        <span className="meridian">
          {this.props.timestamp.format("a")}
        </span>
        <div className="description">
          {this.props.description}
        </div>
      </li>
    );
  }
})
