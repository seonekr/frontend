import { FiPlus } from "react-icons/fi";
import "./payment.css";
import qrcode from "../../img/QRCODE.png";
import wechat from "../../img/WeChat.png";
import Menu from "../menuFooter/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";

const Payment = () => {

  return (
    <>
      <Header />
      <div className="guopBoxPayment_container">
        <div className="header_box_payment">
          <h3>Payment</h3>
        </div>
        <form >
          <div className="adress_payment_content">
            <div className="box_address">
              <Link to="#" className="address">
                <FiPlus /> Update address
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, explicabo?
              </p>
            </div>
            <div className="details_ProductInPayMentBox">
              <h3>Details</h3>
              <ul>
                <li className="detailsProduct_li">
                  <div>Product ID: </div>
                  <div>Product Name: </div>
                  <div>Size: </div>
                  <div>Color: </div>
                  <div>Price: </div>
                  <div>Product Counts: </div>
                  <div>
                    Have to pay:
                  </div>
                </li>
              </ul>
            </div>
            <div></div>

            <div className="box">
              <div className="transfer">
                <div className="select-option">
                  <input
                    type="radio"
                    id="onePay"
                    value="onePay"
                  />
                  <label htmlFor="onePay">Bcel One</label>
                </div>
                <div className="select-option">
                  <input
                    type="radio"
                    id="wechat"
                    value="wechat"
                  />
                  <label htmlFor="wechat">WeChat</label>
                </div>
              </div>
              <div className="boxImageqr">
                <div className="qr">
                  <img src={qrcode} alt="" />
                </div>
              </div>
            </div>

            <div className="box_description">
              <h3>Confirm transfer</h3>
              <div className="image_confirm_transfer">
                <label htmlFor="img">
                  <img alt="Main Product" />
                  <p>Choose image</p>
                  <input type="file" id="img" />
                </label>
              </div>
            </div>

            <div className="save">
              {/* <button type="submit">
                  Confirm
                </button> */}
              {/* The button will show when user input information */}
              <Link to="#" >Confirm</Link>
            </div>
          </div>
        </form>
      </div>
      <Menu />
    </>
  );
};

export default Payment;
