import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        {this.props.contact}
        {/* Should also reieve the displayConvo prop, and call the function onClick */}
      </div>
    );
  }
}

export default Contact;
