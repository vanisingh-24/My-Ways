import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import myWaysLogo from "./asset/images/myways_logo.png";
import dropdownarrow from "./asset/images/Path 2.svg";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import LoginForm from "./login";
import SignUpForm from "./signup";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showStateLogin, setShowStateLogin] = useState(false);

  const onOpenModalLogin = () => {
    setShowStateLogin(true);
  };
  const onCloseModalLogin = () => {
    setShowStateLogin(false);
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const [showStateSignup, setShowStateSignup] = useState(false);

  const onOpenModalSignup = () => {
    setShowStateSignup(true);
  };
  const onCloseModalSignup = () => {
    setShowStateSignup(false);
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={myWaysLogo} alt="myWays" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`${
            showLinks ? "links-container show-container" : "links-container"
          }`}
        >
          <ul className="links">
            <li>
              <a href="#" onClick={() => setShowDropdown(!showDropdown)}>
                For You
                <span className="for-you">
                  <img src={dropdownarrow} />
                </span>
              </a>
            </li>
            <div
              id="myDropdown"
              class={`${
                showDropdown ? "dropdown-content show" : "dropdown-content"
              }`}
            >
              <a href="#">Find matching internship</a>
              <a href="#">Hire right talent</a>
              <a href="#">Work from Home</a>
            </div>
            <li>
              <a href="/instant-apply">
                <span className="instant-apply">Instant Apply</span>
              </a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/about-us">About us</a>
            </li>
            <li>
              <a
                href="#"
                className="sign-up"
                onClick={() => onOpenModalSignup()}
              >
                SIGN UP
              </a>
              <Modal
                modalId="signup-modal"
                open={showStateSignup}
                onClose={() => onCloseModalSignup()}
                classNames="sign-up-modal"
              >
                <SignUpForm />
              </Modal>
            </li>
            <li>
              <button
                className="login-button"
                onClick={() => onOpenModalLogin()}
              >
                <h2>LOGIN</h2>
              </button>
              <Modal
                modalId="login-modal"
                open={showStateLogin}
                onClose={() => onCloseModalLogin()}
              >
                <LoginForm />
              </Modal>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
