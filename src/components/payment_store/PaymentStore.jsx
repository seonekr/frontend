import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import './paymentStore.css'
import { CiImageOn } from "react-icons/ci";

function PaymentStore() {
    return (
        <>
            <div className="header_box_management">
                <Link to="/stores" className="box_management_iconnback">
                    <IoIosArrowBack id="icons_back" />
                    <p>Back</p>
                </Link>
                <div>
                    <h3>Store management</h3>
                </div>
                <div></div>
            </div>
            <div className="box_container_review1">
                <div className="add_payment_box">
                    <h3>Add payment</h3>
                    <div className='inputproduct_box'>
                        <p>Bank  name:</p>
                        <input className="inputproduct" type="text" placeholder='name...' />
                    </div>
                    <div className='inputproduct_box'>
                        <p>Account number:</p>
                        <input className="inputproduct" type="text" placeholder='account number...' />
                    </div>
                    <div className="add_img_product_box">
                        <p>QR Code:</p>
                        <div className="boxicon_img_input">
                            <CiImageOn className='boxicon_img_iconn' />
                            <input type="file" className="input" />
                        </div>
                    </div>
                    <Link to="#" >
                        <div className='btn_save_productUser'>
                            Save
                        </div>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default PaymentStore