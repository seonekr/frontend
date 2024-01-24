import React from 'react'
import User from '../../img/user.png'
import './chat_Details.css'

function Chat_Details() {
    return (
        <>
            <div className="box_chatDetails_container">
                <div className="box_chatDetails_details">
                    <img src={User} alt="image" />
                    <div className='txt_chat_boxdetails'>
                        <h4>Sompong</h4>
                    </div>
                </div>

                <div className="box_chat_content_room">
                    <div className="box_chatUser">
                        <span className="box_chatUser_txt1">Hi, how are you?</span>
                    </div>
                    <div className="box_chatUser">
                        <span className="box_chatUser_txt2">Hi, how are you?</span>
                    </div>
                    <div className="box_chatUser">
                        <span className="box_chatUser_txt1">Hi, how are you?</span>
                    </div>
                    <div className="box_chatUser">
                        <span className="box_chatUser_txt2">Hi, how are you?</span>
                    </div>
                    <div className="box_chatUser">
                        <span className="box_chatUser_txt1">Hi, how are you?</span>
                    </div>
                    <div className="box_chatUser">
                        <span className="box_chatUser_txt2">Hi, how are you?</span>
                    </div>
                    <div className="box_chatUser">
                        <span className="box_chatUser_txt1">Hi, how are you?</span>
                    </div>
                    <div className="box_chatUser">
                        <span className="box_chatUser_txt2">Hi, how are you?</span>
                    </div>
                    <div className="box_chatUser">
                        <span className="box_chatUser_txt1">Hi, how are you?</span>
                    </div>
                    <div className="box_chatUser">
                        <span className="box_chatUser_txt2">Hi, how are you?</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Chat_Details