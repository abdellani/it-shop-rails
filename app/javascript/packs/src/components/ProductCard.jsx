import React from "react";
import ProductPhoto from "./ProductPhoto";
import { Link } from "react-router-dom";
const ProductCard = props => (
  <div className="card" style={{ width: "18rem" }}>
    {props.photos.length > 0 && <ProductPhoto {...props.photos[0]} />}
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">
        {props.category}, {props.price}$
      </h6>
      <p className="card-text">{props.description.substring(0,100)}{props.description.length>100 && "..."}</p>
      <Link to={`/products/${props.id}`} className="card-link btn btn-primary">
        Details
      </Link>
    </div>
  </div>
);

export default ProductCard;
