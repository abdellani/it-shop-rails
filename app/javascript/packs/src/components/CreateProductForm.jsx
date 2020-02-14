import React from "react"

const ProductForm = ({handleChange,handleSubmit,name,description,price,quantity,category})=>
<div>
  <form>
    <input type="text" id="name"   value={name} onChange={handleChange}/>
    <input type="text" id="description"   value={description} onChange={handleChange}/>
    <input type="number" step="0.01" id="price"   value={price} onChange={handleChange}/>
    <input type="number" id="1"   value={quantity} onChange={handleChange}/>
    <input type="text" id="category"   value={category} onChange={handleChange}/>
    <input type="file" id="photo" onChange={handleChange}/>
    <input type="submit" onClick={handleSubmit}/>
  </form>
</div>

export default ProductForm;