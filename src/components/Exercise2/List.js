import React, { Component } from "react";
import Contact from "./Contact";

class List extends Component {
  //should recieve the prop "contact"
  render() {
    return this.props.contacts.map((contact) => (
      <Contact
        displayConversation={this.props.displayConversation}
        contact={contact}
        displayConvo={this.props.displayConvo}
      ></Contact>
    ));
  }
}

export default List;
