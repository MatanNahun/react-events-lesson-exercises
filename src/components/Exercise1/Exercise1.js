import React, { Component } from "react";

class Exercise1 extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
        "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg",
      ],
      currentImg: 0,
    };
  }
  shiftImageBack = () => {
    // this should reduce currentImg by 1
    let newCurrentImg = this.state.currentImg - 1;
    if (newCurrentImg < 0) {
      return;
    } else {
      this.setState({ currentImg: newCurrentImg });
    }
  };
  shiftImageForward = () => {
    // shiftImageForward - this should increase currentImg by 1
    let newCurrentImg = this.state.currentImg + 1;
    if (newCurrentImg === this.state.images.length) {
      this.setState({ currentImg: 0 });
    } else {
      this.setState({ currentImg: newCurrentImg });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.shiftImageBack}>back</button>
        <img
          alt="error with image index"
          width={200}
          height={200}
          src={this.state.images[this.state["currentImg"]]}
        ></img>
        <button onClick={this.shiftImageForward}>forward</button>
      </div>
    );
  }
}

//   render() {
//     return this.state.images.map((imageLink) => (
//       <div>
//         <button onClick={this.shiftImageBack}>back</button>
//         <img width={200} height={200} src={imageLink} alt="nada"></img>
//         <button onClick={this.shiftImageForward}>forward</button>
//       </div>
//     ));
//   }
// }

export default Exercise1;
