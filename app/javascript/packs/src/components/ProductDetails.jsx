import React from "react"
import ProductPhoto from "./ProductPhoto"
const ProductDetails = (props)=>{
  console.log(props)
  return <div> 
    <ul>
      <li>
        {props.photos.length>0 && <ProductPhoto {...props.photos[0]} />}
      </li>
      <li>
        posted by {props.owner.name} on {props.created_at.substring(0,10)}
      </li>
    </ul>
  </div>
}

export default ProductDetails;