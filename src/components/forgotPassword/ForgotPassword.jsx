import React from 'react'
import { useState } from "react";
import "./forgotPassword.css"
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";
import axios from "axios";

const ForgotPassword = () => {

  const [formData, setFormData] = useState({
    email: "",
    certificationNumber: "",
    password: "",
    newPassword: "",
  });
  const [message, setMessage] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const email = formData.email;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendVerification = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/user/send-email",
        { email }
      );

      setMessage(response.data.message);
    } catch (error) {
      console.error("Error sending email:", error.message);
      setMessage("Error sending email. Please try again.");
    }
  };

  const handleForgotpassword = async () => {
    if (formData.password !== formData.newPassword) {
      setPasswordMatch(false);
      return;
    }

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/user/signup",
      data: formData,
    }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <>
      <div className="box_forgot">
        <Link to="/loginuser" className="box_iconBack">
          <MdArrowBack id='iconBack'/>
        </Link>
        <h2>Find password</h2>
        <div className="title">Please change your password after verifying your email!</div>
        <form className='container_form_forgot'>
          <div className='box_infor'>Enter basic information</div>

          <div className='container_form_forgot2'>
            <input 
              type="email" 
              name='email'
              placeholder="Email" 
              required 
              onChange={handleChange}
              value={formData.email}
            />

            <div className='verification' onClick={handleSendVerification}>Verification</div>
          </div>

          <input 
            type="text" 
            name='certificationNumber'
            placeholder="Verification number" 
            required 
            onChange={handleChange}
            value={formData.certificationNumber}
          />
          <input 
            type="password" 
            name='password'
            placeholder="New passwords" 
            required 
            onChange={handleChange}
            value={formData.password}
          />
          <input 
            type="password" 
            name='newPassword'
            placeholder="Confirm your new password" 
            required 
            onChange={handleChange}
            value={formData.newPassword}
          />

          {!passwordMatch && (
            <p className="error-text">Passwords do not match.</p>
          )}
          <button type="submit" onClick={handleForgotpassword}>Confirmation</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  )
}

export default ForgotPassword