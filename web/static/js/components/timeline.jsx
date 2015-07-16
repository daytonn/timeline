import React from "bower_components/react/react";
import Calendar from "./calendar";
import Clock from "./clock";


export default React.createClass({
  render: function() {
    return (
      <div className="timeline">
        <Clock />
        <Calendar />
      </div>
    );
  }
});
