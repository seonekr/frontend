import React from 'react'
import "./more.css";
import { MdDelete } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { IoKeySharp } from "react-icons/io5";
import { BsBackpack4Fill } from "react-icons/bs";
import { IoPeopleCircle } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

export const More = () => {
  return (
    <>
      <div className="header_box_management">
        <Link to="/" className="box_management_iconnback">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
        <div>
          <h3>Setting Account</h3>
        </div>
        <div></div>
      </div>
      <div className="MorePage">
        <div className="profile_box">
          <div className="left_box">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg" alt="" />
            <div className="user_name">
              Name: Sompong
            </div>
          </div>
          <Link to="/profile" className="right_box">
            <button>View</button>
          </Link>
        </div>

        <hr className='hr' />
        <div className="more-menu-list">
          <div className='menu_icon'>
            <BsBackpack4Fill id="icon_more" />
            <p>Terms of use</p>
          </div>
          <hr className='hr' />
          <div className='menu_icon'>
            <BsBackpack4Fill id="icon_more" />
            <p>Privay Policy</p>
          </div>
          <hr className='hr' />
          <div className='menu_icon'>
            <IoKeySharp id="icon_more" />
            <p>Change password</p>
          </div>
          <hr className='hr' />
          <div className='menu_icon'>
            <IoLogOutOutline id="icon_more" />
            <p>Log out </p>
          </div>
          <hr className='hr' />
          <div className='menu_icon'>
            <MdDelete id="icon_more" />
            <p>Delete account</p>
          </div>
          <hr className='hr' />
        </div>
      </div>
    </>
  )
}
export default More
