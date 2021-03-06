import React from "react";

const ProductForm = ({
  handleChange,
  handleSubmit,
  name,
  description,
  price,
  category
}) => (
  <div className="col-9 my-4 p-3 shadow-lg">
    <form className="">
      <div className="form-group">
        <label htmlFor="Name">Name of product</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description of product</label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          step="0.01"
          id="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category of product</label>
        <input
          type="text"
          id="category"
          className="form-control"
          value={category}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Photo of product</label>
        <input
          type="file"
          id="photo"
          //          {/* value={photo} */}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <input className="btn btn-primary btn-lg" value="Submit" type="submit" onClick={handleSubmit} />
    </form>
  </div>
);

export default ProductForm;
