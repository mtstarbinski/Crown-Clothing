import React from "react";
import PreviewCollection from "../../components/Preview-Collection/PreviewCollection";
import SHOP_DATA from "../../data/shop.data";

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      shopData: SHOP_DATA,
    };
  }

  render() {
    const { shopData } = this.state;
    return (
      <div className="shop-page">
        {shopData.map(({ id, ...collectionProps }) => (
          <PreviewCollection key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
