import React, { Component } from "react";

class Contact extends Component {
  displayConvo = () => {
    this.props.displayConvo(this.props.contact);
  };

  render() {
    return (
      <div onClick={this.displayConvo}>
        {this.props.contact}
        {/* Should also reieve the displayConvo prop, and call the function onClick */}
      </div>
    );
  }
}

export default Contact;
