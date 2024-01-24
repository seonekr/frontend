import React from 'react'
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import './chats.css'


const Chats = () => {
  return (
    <>
      <Header />
      <div className="boc_chat_container">
        <form className="search_box_chat">
          <div className="search_box_item">
            <div className="btn_common">
              <FaMagnifyingGlass className="iconSearch" />
            </div>
            <input type="text" className="input_search_heaederr" placeholder="search..."></input>
          </div>
        </form>

        <ul className="conversation-list">
          <li className="conversation">
            <img src="avatar.jpg" alt="Avatar" width="50" height="50" />
            <div className="conversation-details">
              <h4>Sompong</h4>
              <p>new message...</p>
            </div>
            <div className="conversation-options">...</div>
          </li>
        </ul>
      </div>
      <Menu />
    </>
  )
}

export default Chats