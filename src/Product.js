import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fav: this.props.fav
    };
    this.handleClickFav = this.handleClickFav.bind(this);
  }

  handleClickFav() {
    this.setState({
      fav: !this.state.fav
    });
  }
  render() {
    return (
      <div className="card">
        <div className="card-img">
          <img
            src={this.props.image}
            alt="product image"
            width="100%"
            height="100%"
          />
        </div>
        <h3 className="name">{this.props.title}</h3>
        <a
          className={this.state.fav ? "fav-icon fav" : "fav-icon"}
          onClick={this.handleClickFav}
        >
          <i className="ts-icon-favorites" />
        </a>
        <div className="subtitle">
          Supplied by <span className="supplier">{this.props.subtitle}</span>
        </div>
        <div className="description">{this.props.description}</div>
        <div className="right-icon">
          <i className="ts-icon-basket" />
        </div>
        <div className="price">{this.props.price}</div>
        <div className="each">Each</div>
        <div className="currency">USD</div>
      </div>
    );
  }
}

export default Product;
