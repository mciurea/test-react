import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      images: this.props.images,
      current: 0
    };
  }
  handleClickImg(event) {
    this.setState({
      current: event.target.dataset.index
    });
  }
  handleClose() {
    this.setState({
      visible: false
    });
  }
  render() {
    return (
      <div className={this.state.visible ? "modal visible" : "modal"}>
        <img src={this.state.images[this.state.current]} alt="product image" />
        {this.state.images.map((img, index) => {
          return (
            <img
              className="thumbnail"
              src={img}
              alt="product image"
              data-index={index}
            />
          );
        })}
      </div>
    );
  }
}

export default Modal;
