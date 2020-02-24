import React from "react";
import { Link } from "react-router-dom";

const MyProducts = ({ myProducts,deleteProduct }) => (
  <div className="table-responsive-md">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Statistics</th>
          <th>Page</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {myProducts.map((product, index) => (
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>
              <Link
                to={`/user/products/${product.id}/visits`}
                className="btn btn-success"
              >
                Statistics
              </Link>
            </td>
            <td>
              <Link
                to={`/products/${product.id}`}
                className="btn btn-info"
              >
                Details
              </Link>
            </td>
            <td>
              <Link
                to={`/products/${product.id}/edit`}
                className="btn btn-warning"
              >
                Edit
              </Link>
            </td>
            <td>
              <button
                onClick={()=> deleteProduct(product.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default MyProducts;
