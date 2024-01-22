// import { useState } from "react";
// import "./userRegister.css"
// import { Link } from 'react-router-dom';
// import { MdArrowBack } from "react-icons/md";
// import axios from "axios";

// const UserRegister = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     certificationNumber: "",
//     nickname: "",
//     password: "",
//     verifyPassword: "",
//   });
//   const [message, setMessage] = useState("");
//   const [passwordMatch, setPasswordMatch] = useState(true);

//   const email = formData.email;

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSendVerification = async () => {
//     try {
//       const response = await axios.post(
//         "https://api.web4all.site/user/send-email",
//         { email }
//       );

//       setMessage(response.data.message);
//     } catch (error) {
//       console.error("Error sending email:", error.message);
//       setMessage("Error sending email. Please try again.");
//     }
//   };

//   const handleRegister = async () => {
//     if (formData.password !== formData.verifyPassword) {
//       setPasswordMatch(false);
//       return;
//     }

//     await axios({
//       method: "post",
//       url: "https://api.web4all.site/user/signup",
//       data: formData,
//     }).then((response) => {
//       console.log(response.data);
//     });
//   };



//   return (
//     <>
//         <div className="box_forgot">
//           <Link to="/registeruser" className="box_iconBack">
//             <MdArrowBack id='iconBack'/>
//           </Link>

//             <h2>User registratio</h2>
//             <div className="title">You are in the process of signing up as a user!</div>
//             <form className='container_form_user'>
//               <div className='box_title'>Enter basic information</div>

//               <div className='container_form_user2'>
//                 <input 
//                   type="email" 
//                   placeholder="Email" 
//                   required 
//                   onChange={handleChange}
//                 />
//                 <div className='verification' onClick={handleSendVerification} >Ceritification</div>
//               </div>

//               <input 
//                 type="text" 
//                 placeholder="Certication Number" 
//                 required 
//                 onChange={handleChange}
//               />

//               <input 
//                 type="text" 
//                 placeholder="Nickname (maximun 10 characters)" 
//                 required 
//                 onChange={handleChange}
//               />

//               <input 
//                 type="password" 
//                 placeholder="Passwords" 
//                 required 
//                 onChange={handleChange}
//               />

//               <input 
//                 type="password" 
//                 placeholder="Verify password" 
//                 required 
//                 onChange={handleChange}
//               />
//                {!passwordMatch && (
//                   <p className="error-text">Passwords do not match.</p>
//                   )}
//                   <button type="button" onClick={handleRegister}>
//                     Register
//                   </button>
//                 {message && <p>{message}</p>}
          
//             </form>
//         </div>
//     </>
//   );
// };

// export default UserRegister;

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
        <Link to="/registeruser" className="box_iconBack">
          <MdArrowBack id="iconBack" />
        </Link>

            <h2>User registratio</h2>
            <div className="title">You are in the process of signing up as a user!</div>
            <form className='container_form_user'>
              <div className='box_title'>Enter basic information</div>
              <input type="emaill" placeholder="Email" required />
              <input type="text" placeholder="Certication Number" required />
              <input type="text" placeholder="Nickname (maximun 10 characters)" required />
              <input type="password" placeholder="passwords" required />
              <input type="password" placeholder="Verify password" required />
              <button type="submit">Check</button>
            </form>
        </div>
      </div>
      {message && <p>{message}</p>}
    </>
  );
};

export default UserRegister;
