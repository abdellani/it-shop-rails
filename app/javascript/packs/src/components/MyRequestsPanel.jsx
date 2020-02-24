import React from "react"
import {Link} from "react-router-dom"
const MyRequestsPanel = ({requests})=>
  <table className="table table-hover">
    <thead>
      <tr>
        <td>product_id</td>
        <td>Product</td>
        <td>Category</td>
        <td>Quantity</td>
        <td>Unit Price</td>
        <td>Order owner</td>
      </tr>
    </thead>
    <tbody>
      {requests.map((request, index) => (
        <tr key={index}>
          <td>
            <Link
              className="text-decoration-none font-weight-bolder text-dark"
              to={`/products/${request.product.id}`}
            >
              {request.product.id}
            </Link>
          </td>
          <td>
            <Link
              className="text-decoration-none font-weight-bolder text-dark"
              to={`/products/${request.product.id}`}
            >
              {request.product.name}
            </Link>
          </td>
          <td>{request.product.category}</td>
          <td>{request.quantity}</td>
          <td>{request.product.price}</td>
          <td>
            <Link
              className="text-decoration-none font-weight-bolder text-dark"
              to={`/users/${request.owner.id}`}
            >
              @{request.owner.name}
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

export default MyRequestsPanel;