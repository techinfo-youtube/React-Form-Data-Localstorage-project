import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  return (
    <>
      <div className="form__container d-flex felx-column align-items-center justify-content-center">
        <form>
          <h4 className="form__heading">User Management System </h4>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="form__signupLink mb-3">
            <p>
              Don't Have An Account? <Link to="/">Signup !</Link>
            </p>
          </div>
          <button type="submit" className="form__button">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
