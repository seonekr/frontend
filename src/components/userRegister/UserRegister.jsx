
import { useState } from "react";
import "./userRegister.css";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import axios from "axios";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    email: "",
    certificationNumber: "",
    nickname: "",
    password: "",
    verifyPassword: "",
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

  const handleRegister = async () => {
    if (formData.password !== formData.verifyPassword) {
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
        <Link to="/registeruser" className="box_iconBack">
          <MdArrowBack id="iconBack" />
        </Link>

        <h2>User registration</h2>
        <div className="title">
          You are in the process of signing up as a user!
        </div>
        <div className="container_form_user">
          <div className="box_title">Enter basic information</div>
          <div className='container_form_user2'>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Email"
              required
            />
            <div className='verification' onClick={handleSendVerification}>
              Send Verification Email
            </div>
          </div>
          <input
            type="text"
            name="certificationNumber"
            onChange={handleChange}
            value={formData.certificationNumber}
            placeholder="Certication Number"
            required
          />
          <input
            type="text"
            name="nickname"
            onChange={handleChange}
            value={formData.nickname}
            placeholder="Nickname (maximun 10 characters)"
            required
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="passwords"
            required
          />
          <input
            type="password"
            name="verifyPassword"
            onChange={handleChange}
            value={formData.verifyPassword}
            placeholder="Verify password"
            required
          />
          {!passwordMatch && (
            <p className="error-text">Passwords do not match.</p>
          )}
          <button type="button" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
      {message && <p>{message}</p>}
      
      <p>fdvbfd</p>
    </>
  );
};

export default UserRegister;
