import React from "react"

const ProductCard =(props)=>
<div>
<ul>
  <li>
    {props.name}
  </li>
  <li>
    {props.description}
  </li>
  <li>
    {props.price}
  </li>
  <li>
    {props.category}
  </li>
</ul>
</div>

export default ProductCard;