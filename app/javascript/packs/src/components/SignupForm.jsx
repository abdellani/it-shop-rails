import React from "react"

const SignupForm = ({handleChange,handleSubmit,email,name,password,passwrd_confirmation})=>
<div>
  <form>
    <input type="email" id="email" value={email} onChange={handleChange}/>
    <input type="text" id="name"   value={name} onChange={handleChange}/>
    <input type="password" id="password" value={password} onChange={handleChange}/>
    <input type="password" id="password_confirmation" value={passwrd_confirmation} onChange={handleChange}/>
    <input type="submit" onClick={handleSubmit}/>
  </form>
</div>

export default SignupForm;