import React from 'react'
import "./sigupGoogle.css";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const SigupGoogle = () => {
  return (
    <>
    <div className="box_forgot">
            {/* <Link to="#" className="box_iconBack">
              <MdArrowBack id='iconBack'/>
            </Link> */}
            <h2>Seller registratio</h2>
            <div className="title">
                Please enter additional information to register as a seller!
            </div>

            <form className='container_form'>

                <div className='title_seller2'>
                    Enter additional informatiom
                </div>
                <input type="text" placeholder="Store name (required)" required />

                <input type="text" placeholder="Address (required) " required />
                <input type="text" placeholder="Contact information (optional)" required />
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

export default SigupGoogle