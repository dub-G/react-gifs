import React, { Component } from 'react';

class Gif extends Component {
  handleUpdate = () => {
    if (this.props.gifListFn) {
      this.props.gifListFn(this.props.id);
    }
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img
        src={src}
        className="gif"
        alt=""
        onClick={this.handleUpdate}
      />
    );
  }
}

export default Gif;
