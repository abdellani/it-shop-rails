import React from "react";
import ProductPhoto from "./ProductPhoto";
const ProductDetails = props => (
  <div className="col-md-8 my-4">
    {props.photos.length > 0 && 
    <ProductPhoto 
    {...props.photos[0]}
     style={{width:"500px",height:"500px"}}
     />
     }
    <div className="my-3">
      <table className="table table-hover">
        <colgroup>
          <col className="col-md-3" />
          <col className="col-md-9" />
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
            <td>{props.quantity ? props.quantity : "Unavailable "}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{props.price} $</td>
          </tr>
          <tr>
            <td>Provider</td>
            <td>
              <span className="font-weight-bolder">@{props.owner.name}</span>
            </td>
          </tr>
          <tr>
            <td>Publication date</td>
            <td>
              {props.created_at.substring(0, 10)} at{" "}
              {props.created_at.substring(11, 16)}.
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" className="btn btn-primary btn-lg btn-block">
        Add to basket
      </button>
    </div>
  </div>
);

export default ProductDetails;
