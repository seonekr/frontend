import React from 'react'
import "./selleredit.css"
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";

const SellerEdit = () => {
  return (
    <>
        <div className="SellerPage_edit">
            <div className='boxgoback'>
                <Link to="#" className="box_iconBack">
                    <MdArrowBack id='iconBack'/>
                </Link>
            </div>
            <div className='box_name'>
                <div className='box_image_profile'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg" alt="" />
                </div>
                <p>Fruit Country</p>
            </div>
            <div className='box_seller_edit'>
                <p>Seller</p>
            </div>
            <form className='container_form_selleredit'>
                <input type="email" placeholder="humascot@gmail.com" required />
                <input type="text" placeholder=" Fruit Country " required />
                <input type="text" placeholder=" 99 Daehak-ro, Daejeon Metropolitan City " required />
                <input type="text" placeholder=" 010-9288-4753 " required />
                <input type="text" placeholder=" 892-86-02420 " required />

                <textarea
                  className="box_text"
                  placeholder="Kwailnara is an organic apple ..............."
                  maxLength="300"
                ></textarea>

                <input type="password" placeholder=" Please enter your current password " required />
                <input type="password" placeholder=" Plaese enter a new password " required />
                <input type="password" placeholder=" Please confirm your new password " required />

                <button type="submit" >Confirmation</button>
            </form>
          
        </div>
    </>
  )
}

export default SellerEdit