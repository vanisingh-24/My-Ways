import React from "react";
import thankyouTick from "./asset/images/Tick.svg";

const Thankyou = () => {
  return (
    <div>
      <center>
        <img src={thankyouTick} alt="Done" style={{ marginTop: "5rem" }} />
        <h3 style={{ marginTop: "5rem" }}>Thanks Successful!</h3>
      </center>
    </div>
  );
};

export default Thankyou;