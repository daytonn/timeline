import React from "bower_components/react/react";
import moment from "bower_components/moment/moment";
import {first} from "bower_components/lodash/lodash";

function getTime() {
  return { time: moment().format("hh:mm:ss a") };
}

export default React.createClass({
  updateTime() {
    this.setState(getTime());
  },

  componentDidMount() {
    setInterval(this.updateTime, 1000);
    React.findDOMNode(this).addEventListener("click", () => { first($(".today")).scrollIntoView() }, false);
  },

  getInitialState() {
    return getTime();
  },

  render() {
    return (
      <div className="clock">
        {this.state.time}
      </div>
    )
  }
});
