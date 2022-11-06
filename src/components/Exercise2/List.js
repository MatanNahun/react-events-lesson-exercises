import React, { Component } from "react";

class List extends Component {
  //should recieve the prop "contact"
  render() {
    return this.props.contacts;
  }
}

export default List;
