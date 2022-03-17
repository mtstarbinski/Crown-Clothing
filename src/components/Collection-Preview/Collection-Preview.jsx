import React from "react";
import "./CollectionPreview.style.scss";
import CollectionItem from "../Collection-Item/CollectionItem";
import { Link } from "react-router-dom";

const CollectionPreview = ({ title, routeName, items }) => {
  return (
    <div className="collection-preview">
      <Link to={`${routeName}`} className="title">{title.toUpperCase()}</Link>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item}/>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
