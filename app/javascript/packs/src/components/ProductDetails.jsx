import React from "react";
import ProductPhoto from "./ProductPhoto";
const ProductDetails = props => (
  <div className="col-md-8 my-4">
    {props.photos.length > 0 && <ProductPhoto {...props.photos[0]} />}
    <div className="my-3">
      Proposed by{" "}
      <span className="font-weight-bolder">@{props.owner.name}</span> on{" "}
      <span className="font-weight-bold">
        {props.created_at.substring(0, 10)}
      </span>{" "}
      at{" "}
      <span className="font-weight-bold">
        {props.created_at.substring(11, 16)}
      </span>
      .
    </div>
    <div>
      <table class="table table-hover">
        <colgroup>
          <col class="col-md-4" />
          <col class="col-md-7" />
        </colgroup>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{props.name}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{props.description}</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>{props.category}</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>{(props.quantity)?props.quantity:"Unavailable " }</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{props.price} $</td>
          </tr>
        </tbody>
      </table>
      <button type="button" className="btn btn-primary btn-lg btn-block">Add to basket</button>
    </div>
  </div>
);

export default ProductDetails;
