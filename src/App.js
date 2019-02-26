import React from "react";
import ReactDOM from "react-dom";
import Product from "./Product";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper justo id semper accumsan. Nam vitae nulla at nisi mollis ultrices. Duis vel hendrerit neque. Donec scelerisque risus vitae risus viverra, eu interdum mauris condimentum.",
          image: require("./product_pic.png"),
          title: "Product 1",
          subtitle: "Product 1 subtitle",
          price: "99.99",
          fav: false
        },
        {
          id: 2,
          description:
            "Sed porttitor arcu eget nisi commodo consectetur. Nunc elementum erat massa, sed tempor lacus consequat eget. Ut tincidunt tortor a lobortis pharetra. Maecenas iaculis est at aliquam faucibus.",
          image: require("./product_pic.png"),
          title: "Product 2",
          subtitle: "Product 2 subtitle",
          price: "89.09",
          fav: false
        },
        {
          id: 3,
          description:
            "Sed porttitor arcu eget nisi commodo consectetur. Nunc elementum erat massa, sed tempor lacus consequat eget. Ut tincidunt tortor a lobortis pharetra. Maecenas iaculis est at aliquam faucibus.",
          image: require("./product_pic.png"),
          title: "Product 3",
          subtitle: "Product 3 subtitle",
          price: "35.09",
          fav: false
        },
        {
          id: 4,
          description:
            "Sed porttitor arcu eget nisi commodo consectetur. Nunc elementum erat massa, sed tempor lacus consequat eget. Ut tincidunt tortor a lobortis pharetra. Maecenas iaculis est at aliquam faucibus.",
          image: require("./product_pic.png"),
          title: "Product 4",
          subtitle: "Product 4 subtitle",
          price: "399.99",
          fav: false
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        {this.state.products.map(prod => {
          return (
            <Product
              key={prod.id}
              description={prod.description}
              image={prod.image}
              title={prod.title}
              subtitle={prod.subtitle}
              price={prod.price}
              fav={prod.fav}
            />
          );
        })}
      </div>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById("main"));
