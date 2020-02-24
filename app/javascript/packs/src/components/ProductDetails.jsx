import React, { Fragment } from "react";
import ProductPhoto from "./ProductPhoto";
import { Link } from "react-router-dom";
const ProductDetails = props => (
  <div className="col-md-8 my-4">
    {props.photos.length > 0 && (
      <ProductPhoto
        {...props.photos[0]}
        style={{ width: "500px", height: "500px" }}
      />
    )}
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
            <td>Price</td>
            <td>{props.price} $</td>
          </tr>
          <tr>
            <td>Provider</td>
            <td>
              <Link
                className="text-decoration-none"
                to={`/users/${props.owner.id}`}
              >
                <span className="font-weight-bolder text-dark">
                  @{props.owner.name}
                </span>
              </Link>
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
      {props.token && (
        <Fragment>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block"
            data-toggle="modal"
            data-target="#orderModal"
          >
            Order the product
          </button>
          <Modal {...props} />
        </Fragment>
      )}
    </div>
  </div>
);
const Modal = ({ price, quantity, handleChange, submitOrder }) => (
  <div
    className="modal fade"
    id="orderModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="orderModalLabel">
            Order
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group row px-3">
            <label className="col-sm-3" htmlFor="description">
              Quantity
            </label>
            <div className="col-sm-9">
              <input
                type="number"
                min="1"
                id="quantity"
                className="form-control"
                value={quantity}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group row px-3">
            <label className="col-sm-3" htmlFor="description">
              Total price
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                min="1"
                id="quantity"
                className="form-control"
                value={`${price * quantity}$`}
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" data-dismiss="modal">
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-success"
            data-dismiss="modal"
            onClick={e => submitOrder(e)}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ProductDetails;
