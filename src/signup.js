import React, { useState } from "react";
// import Otp from "./otp-form";
// import Thankyou from "./thank-you";

const SignUpForm = () => {
  const [signup, setSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignup({ ...signup, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      signup.firstName &&
      signup.lastName &&
      signup.email &&
      signup.password
    ) {
      // const newsignup = { ...signup, id: new Date().getTime().toString() };
      setSignup({ firstName: "", lastName: "", email: "", password: "" });
    }
  };
  return (
    <>
      <form className="form">
        <center>
          <h3>Sign Up</h3>
          <p className="header2">It's quick and easy</p>
          <div className="row">
            <div className="form-control half">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={signup.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-control half">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={signup.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-control">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={signup.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={signup.password}
              onChange={handleChange}
            />
          </div>
          <button className="" type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </center>
      </form>
    </>
  );
};

export default SignUpForm;