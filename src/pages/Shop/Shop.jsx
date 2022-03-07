import React from "react";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";
import { SHOP_DATA } from "../../data/shop.data";

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionProps }) => (
          <PreviewCollection key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
