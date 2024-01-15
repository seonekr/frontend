import React from 'react'
import "./sellerRegister.css"
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";

const SellerRegister = () => {
  return (
    <>
        <div className="box_forgot">
            <Link to="#" className="box_iconBack">
                <MdArrowBack id='iconBack'/>
            </Link>
            <h2>Seller registratio</h2>
            <div className="title">
                I'm in the process of signing up as a seller!
            </div>

            <form className='container_form'>
                <div className='title_seller'>
                    Enter basic information
                </div>
                <div className='box_certification'>
                    <input type="email" placeholder="Email" required />
                    {/* <div className='certification'>Certification</div> */}
                </div>
                <input type="text" placeholder="Certication number " required />
                <input type="password" placeholder="passwords" required />
                <input type="password" placeholder="Verify password" required />

                <div className='title_seller2'>
                    Enter store information
                </div>
                <input type="text" placeholder="Store name (required)" required />

                <input type="text" placeholder="Address (required) " required />
                <input type="text" placeholder="Detailed address (optional)" required />
                <input type="text" placeholder="Contact information number (optional)" required />
                <input type="text" placeholder="Business registration number (optional)" required />

                <textarea
                  className="box_text"
                  placeholder="Store introduction (optional/maximum 300 characters)"
                  maxLength="300"
                ></textarea>

                <button type="submit">Check</button>
            </form>
        </div>
    </>
  )
}

export default SellerRegister