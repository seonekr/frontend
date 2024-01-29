import React, { useState, useEffect } from "react";
import "./admins.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import AdminMenu from "../adminMenu/AdminMenu";
import { Link, useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import user from "../../../img/user.png";

const Admins = () => {
  return (
    <>
      <section id="menager">
        <AdminMenu />
        <div className="container_body_adminuser">
          <div className="container_box_users">
            <div className="box_users">
              <div className="box_add_admin">
                <Link to="/admin/register" className="btn_addadmin">
                  <BiPlus id="icon_add_admin" />
                  Add Admin
                </Link>
              </div>

              <form className="search">
                <div className="search-box_menageruser">
                  <input type="text" placeholder="Search ..." />
                  <button type="submit">
                    <IoSearchOutline />
                  </button>
                </div>
              </form>
            </div>
            <div
              className="box_users_user"
            >
              <Link className="box_user_text">
                <img
                  src="#"
                  alt="admin profile"
                />

                <div className="container_chat_name" >
                  <p>
                    Name: 
                  </p>
                  <p>Eamil:</p>
                </div>
              </Link>
            </div>
            <div className="box_container_next_product">
              <button className="box_prev_left_product" >
                <AiOutlineLeft id="box_icon_left_right_product" />
                <p>Prev</p>
              </button>

              <div className="box_num_product">
                <div >
                  <div className="num_admin_product">
                    <p>a</p>
                  </div>
                </div>
              </div>

              <button className="box_prev_right_product">
                <p>Next</p>
                <AiOutlineRight id="box_icon_left_right_product" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admins;
