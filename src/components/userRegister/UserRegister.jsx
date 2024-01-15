import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import axios from 'axios';
import "./userRegister.css";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    email: '',
    certificationNumber: '',
    nickname: '',
    password: '',
    verifyPassword: '',
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.verifyPassword) {
      setPasswordMatch(false);
      return;
    }

    try {

      // const response = await axios.post('http://localhost:8000/api/user/', formData);

      // console.log('API Response:', response.data);

      console.log(formData)
      setFormData({
        email: '',
        certificationNumber: '',
        nickname: '',
        password: '',
        verifyPassword: '',
      });
    } catch (error) {

      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <div className="box_forgot">
        <Link to="/loginuser" className="box_iconBack">
          <IoArrowBack id="box_icon_Back" />
          <p>Back</p>
        </Link>
        <h2>User registration</h2>
        <div className="title">You are in the process of signing up as a user!</div>
        <form className='container_form' onSubmit={handleSubmit}>
          <div className='box_title'>Enter basic information</div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="certificationNumber"
            placeholder="Certification Number"
            value={formData.certificationNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="nickname"
            placeholder="Nickname (maximum 10 characters)"
            value={formData.nickname}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="verifyPassword"
            placeholder="Verify Password"
            value={formData.verifyPassword}
            onChange={handleChange}
            required
          />
          {!passwordMatch && <p className="error-text">Passwords do not match.</p>}
          <button type="submit">Check</button>
        </form>
      </div>
    </>
  );
};

export default UserRegister;
