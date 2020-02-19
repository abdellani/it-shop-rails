import React from "react"


const UserDetails = ({id,name})=>
<div className="w-100 shadow-lg px-3 py-3">
  <div>
    Name : {name}
  </div>
  <div>
    ID : {id}
  </div>
</div>


export default UserDetails;