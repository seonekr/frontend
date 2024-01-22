import { useState } from "react";
import "./sellerRegister.css"
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";

const SellerRegister = () => {
  const [userData, setUserData] = useState({
    email: '',
    certificationNumber: '',
    password: '',
    verifyPassword: '',
  });

  const [storeData, setStoreData] = useState({
    storeName: '',
    address: '',
    detailedAddress: '',
    contactNumber: '',
    businessRegistrationNumber: '',
    storeIntroduction: '',
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleUserStoreSubmit = async (e) => {
    e.preventDefault();

    // Check if password and verify password match
    if (userData.password !== userData.verifyPassword) {
      setPasswordMatch(false);
      return;
    }

    try {
      // Submit user data
    //   const userResponse = await axios.post('http://localhost:8000/api/user/', userData);
    //   console.log('User API Response:', userResponse.data);
    console.log(userData)

      // Submit store data
    //   const storeResponse = await axios.post('http://localhost:8000/api/store/', storeData);
    //   console.log('Store API Response:', storeResponse.data);

    console.log(storeData)


    setUserData({
        email: '',
        certificationNumber: '',
        password: '',
        verifyPassword: '',
      });

      setStoreData({
        storeName: '',
        address: '',
        detailedAddress: '',
        contactNumber: '',
        businessRegistrationNumber: '',
        storeIntroduction: '',
      });

      // You can add additional logic here based on the responses if needed
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleStoreChange = (e) => {
    const { name, value } = e.target;
    setStoreData({ ...storeData, [name]: value });
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

        <form className='container_form_sellerregister' onSubmit={handleUserStoreSubmit}>
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
            <div className='verification'>Verification</div>
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
          {!passwordMatch && <p className="error-text">Passwords do not match.</p>}
          
          <div className='title_seller2'>
            Enter store information
          </div>
          <input
            type="text"
            name="storeName"
            placeholder="Store name (required)"
            value={storeData.storeName}
            onChange={handleStoreChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address (required) "
            value={storeData.address}
            onChange={handleStoreChange}
            required
          />
          <input
            type="text"
            name="detailedAddress"
            placeholder="Detailed address (optional)"
            value={storeData.detailedAddress}
            onChange={handleStoreChange}
            required
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact information number (optional)"
            value={storeData.contactNumber}
            onChange={handleStoreChange}
            required
          />
          <input
            type="text"
            name="businessRegistrationNumber"
            placeholder="Business registration number (optional)"
            value={storeData.businessRegistrationNumber}
            onChange={handleStoreChange}
            required
          />

          <textarea
            className="box_text"
            name="storeIntroduction"
            placeholder="Store introduction (optional/maximum 300 characters)"
            maxLength="300"
            value={storeData.storeIntroduction}
            onChange={handleStoreChange}
          ></textarea>

          <button type="submit">Check</button>
        </form>
      </div>
    </>
  );
};

export default SellerRegister;
