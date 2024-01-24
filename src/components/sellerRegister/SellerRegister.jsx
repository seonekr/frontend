import { useState } from "react";
import "./sellerRegister.css"
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";
import axios from "axios";

const SellerRegister = () => {
  const [userData, setUserData] = useState({
    email: '',
    certificationNumber: '',
    password: '',
    verifyPassword: '',
    storeName: '',
    address: '',
    detailedAddress: '',
    contactNumber: '',
    businessRegistrationNumber: '',
    storeIntroduction: '',
  });

  // const [storeData, setStoreData] = useState({
  //   storeName: '',
  //   address: '',
  //   detailedAddress: '',
  //   contactNumber: '',
  //   businessRegistrationNumber: '',
  //   storeIntroduction: '',
  // });

  const email = userData.email;
  const [message, setMessage] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);


  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // const handleStoreChange = (e) => {
  //   const { name, value } = e.target;
  //   setStoreData({ ...storeData, [name]: value });
  // };



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

  const handleSellerRegister = async () => {
    if (userData.password !== userData.password) {
      setPasswordMatch(false);
      return;
    }

    // await axios({
    //   method: "post",
    //   url: "http://127.0.0.1:8000/user/signup",
    //   data: userData,
    // }).then((response) => {
    //   console.log(response.data);
    // });
    
    console.log(userData)
  };


  return (
    <>
        <div className="box_forgot">
            <div className='boxgoback'>
              <Link to="/registeruser" className="box_iconBack">
                  <MdArrowBack id='iconBack'/>
              </Link>
            </div>
            <h2>Seller registratio</h2>
            <div className="title">
                I'm in the process of signing up as a seller!
            </div>

        <form className='container_form_sellerregister'>
          <div className='title_seller'>
            Enter basic information
          </div>
          <div className='container_form_sellerregister2'>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleUserChange}
              required
            />
            <div className='verification' onClick={handleSendVerification}>
              Verification
            </div>
          </div>
          <input
            type="text"
            name="certificationNumber"
            placeholder="Certification number "
            value={userData.certificationNumber}
            onChange={handleUserChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleUserChange}
            required
          />
          <input
            type="password"
            name="verifyPassword"
            placeholder="Verify Password"
            value={userData.verifyPassword}
            onChange={handleUserChange}
            required
          />
          {!passwordMatch && 
            <p className="error-text">Passwords do not match.</p>
          }
          {message && <p>{message}</p>}

          <div className='title_seller2'>
            Enter store information
          </div>
          <input
            type="text"
            name="storeName"
            placeholder="Store name (required)"
            value={userData.storeName}
            onChange={handleUserChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address (required) "
            value={userData.address}
            onChange={handleUserChange}
            required
          />
          <input
            type="text"
            name="detailedAddress"
            placeholder="Detailed address (optional)"
            value={userData.detailedAddress}
            onChange={handleUserChange}
            required
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact information number (optional)"
            value={userData.contactNumber}
            onChange={handleUserChange}
            required
          />
          <input
            type="text"
            name="businessRegistrationNumber"
            placeholder="Business registration number (optional)"
            value={userData.businessRegistrationNumber}
            onChange={handleUserChange}
            required
          />

          <textarea
            className="box_text"
            name="storeIntroduction"
            placeholder="Store introduction (optional/maximum 300 characters)"
            maxLength="300"
            value={userData.storeIntroduction}
            onChange={handleUserChange}
          ></textarea>

          <button type="submit" onClick={handleSellerRegister}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default SellerRegister;
