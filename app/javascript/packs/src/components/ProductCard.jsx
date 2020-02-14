import React from "react"
import axios from "axios"
import ProductPhoto from "./ProductPhoto"
const ProductCard =(props)=>
<div>
<ul>
  <li>
    {props.name}
  </li>
  <li>
    {props.price}
  </li>
  <li>
    {props.category}
  </li>
  <li>
    {props.photos.length>0 && <ProductPhoto  {...props.photos[0]}/>}
  </li>
</ul>
</div>

export default ProductCard;