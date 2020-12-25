import React, { useState } from "react";

const OtpForm = () => {
  const [otp, setOtp] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setOtp(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.otp) {
      // const newsignup = { ...signup, id: new Date().getTime().toString() };
      setOtp("");
    }
  };
  return (
    <>
      <form className="form">
        <center>
          <h3>OTP Sent!</h3>
          <div className="form-control">
            <input
              type="text"
              id="otp"
              name="otp"
              placeholder="Enter your OTP"
              value={otp.otp}
              onChange={handleChange}
            />
          </div>
          <p>Otp has been sent to you email id: abc@xyz.in</p>
          <button className="" type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </center>
      </form>
    </>
  );
};

export default OtpForm;