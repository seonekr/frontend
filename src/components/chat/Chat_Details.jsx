import React, { useRef, useState, useEffect } from 'react'
import User from '../../img/user.png'
import './chat_Details.css'

function Chat_Details() {

    const[message, setMessage] = useState('')
    const handleInputChange = (event) => {
        setMessage(event.target.value);
      };
    
      useEffect(() => {
        const textarea = document.getElementById('multiline-input');
        textarea.style.height = 'auto';
        const newHeight = `${textarea.scrollHeight}px`;
        textarea.style.height = newHeight;
        textarea.scrollTop = textarea.scrollHeight;
      }, [message]);

    return (
        <>
            <div className="box_chatDetails_container">
                <div className="box_chatDetails_details">
                    <img src={User} alt="image" />
                    <div className='txt_chat_boxdetails'>
                        <h4>Sompong</h4>
                    </div>
                </div>

                <form className='message-form'>
                    <div className="box_chat_content_room">

                        <div className="sender">
                            <span className="text-box">Hi, I'm sender</span>
                        </div>

                        <div className="recipient ">
                            <span className="text-box">Hi, I'm recipient</span>
                        </div>
                        <div className="sender">
                            <span className="text-box">Hi, I'm sender</span>
                        </div>

                        <div className="recipient ">
                            <span className="text-box">Hi, I'm recipient</span>
                        </div>
                        <div className="sender">
                            <span className="text-box">Hi, I'm sender</span>
                        </div>

                        <div className="recipient ">
                            <span className="text-box">Hi, I'm recipient</span>
                        </div>
                        <div className="sender">
                            <span className="text-box">Hi, I'm sender</span>
                        </div>

                        <div className="recipient ">
                            <span className="text-box">Hi, I'm recipient</span>
                        </div>
                        <div className="sender">
                            <span className="text-box">Hi, I'm sender</span>
                        </div>

                        <div className="recipient ">
                            <span className="text-box">Hi, I'm recipient</span>
                        </div>

                    </div>
                    <div className="send-message">
                        <div className="send-bar">
                            <textarea
                                name="message"
                                className="multiline-input"
                                id="multiline-input"
                                placeholder="Your opinion"
                                value={message}
                                onChange={handleInputChange}
                            />
                            <button>Send</button>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Chat_Details