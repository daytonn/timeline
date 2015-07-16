import React from "bower_components/react/react";
import Event from "./event";

function eventNodes(events) {
  return events.map((event) => {
    return (<Event description={event.description} timestamp={event.timestamp} key={event.id} />);
  });
}

export default React.createClass({
  getDefaultProps() {
    return {
      events: [
        {timestamp: moment(), description: "This is one event", id: 1},
        {timestamp: moment(), description: "This is one event", id: 2},
        {timestamp: moment(), description: "This is one event", id: 3},
        {timestamp: moment(), description: "This is one event", id: 4},
        {timestamp: moment(), description: "This is one event", id: 5},
        {timestamp: moment(), description: "This is one event", id: 6},
        {timestamp: moment(), description: "This is one event", id: 7},
        {timestamp: moment(), description: "This is one event", id: 8},
        {timestamp: moment(), description: "This is *another* event", id: 9}
      ]
    };
  },

  render() {
    return (
      <div className="event-stream">
        <ul className="event-list" events={this.props.events}>
          {eventNodes(this.props.events)}
        </ul>
      </div>
    );
  }
});
