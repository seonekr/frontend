import React from "react";
import "./header.css";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { FaMagnifyingGlass, FaCartShopping, FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo1 from "../../img/Logo1.png";

const Header = () => {
  const user = localStorage.getItem("user");

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
                  <Link to="/" className="link active">
                    Home
                  </Link>
                  <Link to="/chats" className="link ">
                    Chat
                  </Link>
                  <Link to="/order" className="link ">
                    Orders
                  </Link>
                </div>
              </div>
            </div>

            <div className="ulHead_box">
              <form className="search_wrap search_wrap_2">
                <div className="search_box">
                  <div className="btn_common">
                    <FaMagnifyingGlass className="iconSearch" />
                  </div>
                  <input
                    type="text"
                    className="input_search_heaederr"
                    placeholder="search..."
                  ></input>
                </div>
              </form>
              <div className="right_ofHeadBox">
                <div className="boxsearchContainer">
                  <Link to="/cart">
                    <FaCartShopping className="head_colorr" />
                  </Link>
                </div>

                {/* for seller */}
                {/* <div className="userAndstore">
                  <Link to="/stores">
                    <HiOutlineBuildingStorefront  className="head_colorr" />
                  </Link>
                </div> */}

                {user ? (
                  <div className="userAndstore">
                    <Link to="/more">
                      <FaRegUser className="head_colorr" />
                    </Link>
                  </div>
                ) : (
                  <div className="userAndstore">
                    <Link to="/loginuser">Login</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
