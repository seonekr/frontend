import React, { useState, useEffect } from "react";
import "./header.css";
import { FaMagnifyingGlass, FaCartShopping, FaRegUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import Logo1 from "../../img/Logo1.png";

const Header = () => {
  return (
    <>
      <section id="header">
        <div className="navbar">
          <div className="headWithBox">
            <div className="headMenu">
              <div className="logo1">
                <Link to="/">
                  <img src={Logo1} alt="Logo" />
                </Link>
              </div>
              <div className="boxLiMenu">
                <div className="linkLi">
                  <Link to="#" className="link active">Home</Link>
                  <Link to="#" className="link ">Chat</Link>
                  <Link to="#" className="link ">Orders</Link>
                </div>
              </div>
            </div>

            <div className="ulHead_box">
              <form class="search_wrap search_wrap_2">
                <div class="search_box">
                  <div class="btn btn_common">
                    <FaMagnifyingGlass className="iconSearch" />
                  </div>
                  <input type="text" class="input" placeholder="search..."></input>
                </div>
              </form>
              <div className="right_ofHeadBox">
                <div className="boxsearchContainer">
                  <Link to="/cart">
                    <FaCartShopping className="head_colorr" />
                  </Link>
                </div>
                <div>
                  <div className="userAndstore">
                    <Link to="/account">
                      <FaRegUser className="head_colorr" />
                    </Link>
                    {/* <Link to="/account">
                      <BsShop className="head_colorr" />
                    </Link> */}
                    <div>
                      <Link to="/login" className="head_colorr">
                        Login
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
