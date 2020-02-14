import React from "react";

const SignupForm = ({
  handleChange,
  handleSubmit,
  email,
  name,
  password,
  passwrd_confirmation
}) => (
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
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={name}
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
      <div className="form-group">
        <label htmlFor="password_confirmation">Password confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          className="form-control"
          value={passwrd_confirmation}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="Sign up" className="btn btn-primary" onClick={handleSubmit} />
    </form>
  </div>
);

export default SignupForm;
