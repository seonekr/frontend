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

  const user = localStorage.getItem("user");

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
              Account: {JSON.parse(window.localStorage.getItem("user")).email}
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
          <div className='menu_icon' onClick={() => {
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("user");
            navigate("/");
          }}>
            <IoLogOutOutline id="icon_more" />
            <p>Log out </p>
          </div>
          <hr className='hr' />
          <div className='menu_icon' onClick={() => {
            let config = {
              method: 'delete',
              maxBodyLength: Infinity,
              url: 'http://127.0.0.1:8000/user/my-page',
              headers: {"Content-Type": "application/json",}
            };
            
            axios.request(config)
            .then((response) => {
              console.log(JSON.stringify(response.data));
              window.localStorage.removeItem("token");
              window.localStorage.removeItem("user");
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
            });
          }}>

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
