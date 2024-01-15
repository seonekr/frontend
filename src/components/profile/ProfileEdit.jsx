import React from 'react';
import "./profileedit.css";
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const ProfileEdit = () => {
  return (
    <>
        <div className="ProfilePage_edit">
            <div className='boxgoback'>
                <Link to="/profile" className="box_iconBack">
                    <MdArrowBack id='iconBack'/>
                </Link>
            </div>
            <div className='box_name'>
                <div className='box_image_profile'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg" alt="" />
                </div>
                <p>Name: Sompong</p>
            </div>
            <div className='box_user_profile'>
                <p>User</p><FaRegUserCircle />
            </div>
            <form className='container_form'>
                <input type="email" placeholder="humascot@gmail.com" required />
                <input type="password" placeholder=" Please enter yourcurrent password " required />
                <input type="password" placeholder=" Please enter a new password " required />
                <input type="password" placeholder=" Please confirm your new password " required />

                <button type="submit" >Confirmation</button>
            </form>
          
        </div>
    </>
  )
}

export default ProfileEdit