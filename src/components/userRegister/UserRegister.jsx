import React from 'react';
import "./userRegister.css"
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";

const UserRegister = () => {
  return (
    <>
        <div className="box_forgot">
            <Link to="#" className="box_iconBack">
              <MdArrowBack id='iconBack'/>
            </Link>
            <h2>User registratio</h2>
            <div className="title">You are in the process of signing up as a user!</div>
            <form className='container_form'>
              <div className='box_title'>Enter basic information</div>
              <input type="emaill" placeholder="Email" required />
              <input type="text" placeholder="Certication Number" required />
              <input type="text" placeholder="Nickname (maximun 10 characters)" required />
              <input type="password" placeholder="passwords" required />
              <input type="password" placeholder="Verify password" required />
              <button type="submit">Check</button>
            </form>
        </div>
    </>
  )
}

export default UserRegister