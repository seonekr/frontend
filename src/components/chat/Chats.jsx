import React from 'react'
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import User from '../../img/user.png'
import './chats.css'
import { Link } from 'react-router-dom';
import { IoMdMore } from "react-icons/io";

const Chats = () => {
  return (
    <>
      <Header />
      <div className="boc_chat_container">
        <form className="search_box_chat">
          <FaMagnifyingGlass className="iconSearch_chat" />
          <input type="text" className="input_search_chat" placeholder="Search..."></input>
        </form>

        <div className="conversation_list_box">

          <Link to="/chat-details" className="conversation_item">
            <div className="conversation_details">
              <img src={User} alt="image" />
              <div className='txt_chat_box'>
                <h4>Sompong</h4>
                <p>new message...</p>
              </div>
            </div>
            <Link to="#" className="conversation_options">
              <IoMdMore />
            </Link>
          </Link>
          <Link to="/chat-details" className="conversation_item">
            <div className="conversation_details">
              <img src={User} alt="image" />
              <div className='txt_chat_box'>
                <h4>Sompong</h4>
                <p>new message...</p>
              </div>
            </div>
            <Link to="#" className="conversation_options">
              <IoMdMore />
            </Link>
          </Link>

        </div>
      </div>
      <Menu />
    </>
  )
}

export default Chats