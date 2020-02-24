import React from "react";
import { Link } from "react-router-dom";
const MyOrdersPanel = ({ orders }) => (
  <table className="table table-hover">
    <thead>
      <tr>
        <td>product_id</td>
        <td>Product</td>
        <td>Category</td>
        <td>Quantity</td>
        <td>Unit Price</td>
        <td>Product owner</td>
      </tr>
    </thead>
    <tbody>
      {orders.map((order, index) => (
        <tr key={index}>
          <td>
            <Link
              className="text-decoration-none font-weight-bolder text-dark"
              to={`/products/${order.product.id}`}
            >
              {order.product.id}
            </Link>
          </td>
          <td>
            <Link
              className="text-decoration-none font-weight-bolder text-dark"
              to={`/products/${order.product.id}`}
            >
              {order.product.name}
            </Link>
          </td>
          <td>{order.product.category}</td>
          <td>{order.quantity}</td>
          <td>{order.product.price}</td>
          <td>
            <Link
              className="text-decoration-none font-weight-bolder text-dark"
              to={`/users/${order.product_owner.id}`}
            >
              @{order.product_owner.name}
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default MyOrdersPanel;
