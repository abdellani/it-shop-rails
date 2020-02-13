import React from 'react'
import LoginPage from "./containers/LoginPage"
import SignupPage from "./containers/SignupPage"
import GuestRoute from "./containers/GuestRoute"
const Application=()=>
<div>
  <GuestRoute Component={LoginPage}/>
  <GuestRoute Component={SignupPage}/>
  
  {/* <SignupPage /> */}
  {/* <LoginPage /> */}
</div> 
export default Application;