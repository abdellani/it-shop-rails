import React from "react"

const Notifications = ({notifications})=>
<div className="w-100">
<ul className="list-group">
  {notifications.map((notification,index)=>
    <li className="list-group-item" key={index}>{notification.content}</li>
  )}
  </ul>
</div>
export default Notifications;