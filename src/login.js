import React, { useState } from "react";

const LoginForm = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.email && login.password) {
      // const newsignup = { ...signup, id: new Date().getTime().toString() };
      setLogin({ email: "", password: "" });
    }
  };

  return (
    <>
      <form className="form">
        <h3>Login</h3>
        <div className="box">
          <h3 className="login-heading">Student</h3>
          <hr className="student-line" />
          <div className="form-control">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="forgot-password-div">
            <a href="/forgot-password" className="forgot-password">
              Forgot Password
            </a>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
          <div className="new-to-myways-text-div">
            <a href="#" className="new-to-myways-text">
              New to MyWays? Sign Up here
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
