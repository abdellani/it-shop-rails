import React from "react"

const LoginForm = ({handleChange,handleSubmit,email,password})=>
<div>
  <form>
    <input type="email" id="email" value={email} onChange={handleChange} />
    <input type="password" id="password" value={password} onChange={handleChange} />
    <input type="submit" onClick={handleSubmit}/>
  </form>
</div>
export default LoginForm;