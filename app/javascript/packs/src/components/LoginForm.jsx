import React from "react";

const LoginForm = ({ handleChange, handleSubmit, email, password }) => (
  <div className="col-8 my-4">
    <form>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          className="form-control"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="form-control"
          value={password}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="Login" className="btn btn-primary" onClick={handleSubmit} />
    </form>
  </div>
);
export default LoginForm;
