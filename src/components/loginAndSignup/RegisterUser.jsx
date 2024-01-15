import React from "react";
import "./registerUser.css";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";


const RegisterUser = () => {
  return (
    <>
        <div className="signup_page">
            <h3 className="title_mt20">
                Join the membership
            </h3>
            <p>Please sign up to use the service!</p>
            <div className="form">
              <div className="input_wrap">
                <ul>
                    <li>
                      <input
                        type="radio"
                        id="user_type01"
                        name="user_type"
                      />
                      <label htmlFor="user_type01" className="">
                        <FaUsers id="icon_user_sell"/>
                        User
                      </label>
                    </li>
                </ul>
                <ul>
                    <li>
                      <input
                        type="radio"
                        id="user_type02"
                        name="user_type"
                      />
                      <label htmlFor="user_type02" className="user_type02">
                        <FaUsers id="icon_user_sell"/>
                        Seller
                      </label>
                    </li>
                </ul>
              </div>
              <button className="btn_register_next">Next</button>
            </div>
        </div>
    </>
  );
};

export default RegisterUser;
