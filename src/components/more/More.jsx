import React from 'react'
import "./more.css";
import { MdDelete } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { IoKeySharp } from "react-icons/io5";
import { BsBackpack4Fill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const More = () => {

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userDetail, setUserDetail] = useState([]);
  const userID = localStorage.getItem("userID");
  const navigate = useNavigate();

  //Function Log out
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(import.meta.env.VITE_API + "/getAdmin/" + userID, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.Status === "Success") {
          setUserDetail(result.Result[0]);
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    console.log("Logged out");
    navigate("/");
  };

  const handleConfirmLogout = () => {
    handleLogout();
    setShowConfirmation(false);
  };
  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };



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
          <Link to="/terms" className='menu_icon'>
            <BsBackpack4Fill id="icon_more" />
            <p>Terms of use</p>
          </Link>
          <hr className='hr' />
          <Link to="/privacy" className='menu_icon'>
            <BsBackpack4Fill id="icon_more" />
            <p>Privay Policy</p>
          </Link>
          <hr className='hr' />
          <Link to="/forgotpassword" className='menu_icon'>
            <IoKeySharp id="icon_more" />
            <p>Change password</p>
          </Link>
          <hr className='hr' />
          <div onClick={() => setShowConfirmation(true)} className='menu_icon'>
            <IoLogOutOutline id="icon_more" />
            <p>Log out </p>
          </div>
          {showConfirmation && (
            <div className="confirmation-popup">
              <p>Are you sure you want to logout?</p>
              <div className="btn_ok_on">
                <button onClick={handleConfirmLogout} className="btn_yes">
                  Yes
                </button>
                <button onClick={handleCancelLogout} className="btn_on">
                  No
                </button>
              </div>
            </div>
          )}
          
          <hr className='hr'/>
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
