import React, { Component } from "react";
import Contact from "./Contact";

class List extends Component {
  //should recieve the prop "contact"
  render() {
    return this.props.contacts.map((contact) => (
      <Contact contact={contact}></Contact>
    ));
  }
}

export default List;
