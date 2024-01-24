import React from 'react'
import './chats.css'

const Chats = () => {
  return (
    <>
      <div className="boc_chat_container">
        <div className="header">
          <div>&lt;</div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
          </div>
          <div>...</div>
        </div>

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
    </>
  )
}

export default Chats