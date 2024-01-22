import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import productImage from "../../img/productImage.png";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import "./cart.css";

const Cart_copy = () => {
  return (
    <>
      <Header />
      <div className="box_cart_container">
        <Link to="/" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
        <div className="box_container_cart">

          <div>

            <div className="container_cart_item">
              <div className="box_item_gourp">
                <div className="sotre_name_box">
                  <h3>Online shop1</h3>
                  <div className="cart_close_item_iconn">
                    <IoClose className="close_item_iconn" />
                  </div>
                </div>

                <div className="box_item_image">
                  <img src={productImage} alt="" />
                  <div className="box_item_text">
                    <p >Name: asdasd</p>
                    <p >Price: 1,000$</p>
                  </div>
                  <div className="box_icon_order">
                    <div className="btnicon_delete_order" >
                      <AiOutlineDelete id="btnicon_delete" />
                    </div>

                    <div className="box_item_icon">
                      <div className="icon_minus_plus">
                        -
                      </div>
                      <span>
                        1
                      </span>
                      <div className="icon_minus_plus">
                        +
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box_item_image">
                  <img src={productImage} alt="" />
                  <div className="box_item_text">
                    <p >Name: asdasd</p>
                    <p >Price: 1,000$</p>
                  </div>
                  <div className="box_icon_order">
                    <div className="btnicon_delete_order" >
                      <AiOutlineDelete id="btnicon_delete" />
                    </div>

                    <div className="box_item_icon">
                      <div className="icon_minus_plus">
                        -
                      </div>
                      <span>
                        1
                      </span>
                      <div className="icon_minus_plus">
                        +
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <div className="box_item_total">
                <h3>Cart Total</h3>
                <div className="box_item_total_text">
                  <p>Quantity:</p>
                  <p>2</p>
                </div>
                <hr />
                <div className="box_item_total_text">
                  <p>Shipping: </p>
                  <p>free</p>
                </div>
                <hr />
                <div className="box_item_total_text">
                  <h3>Total: </h3>
                  <p>1,000$</p>
                </div>
                <div className="btn">
                  <button type="submit" className="checkout_btn">
                    Checkout
                  </button>
                </div>
              </div>
            </div>


            <div className="container_cart_item">
              <div className="box_item_gourp">
                <div className="sotre_name_box">
                  <h3>Online shop2</h3>
                  <div className="cart_close_item_iconn">
                    <IoClose className="close_item_iconn" />
                  </div>
                </div>
                <div className="box_item_image">
                  <img src={productImage} alt="" />
                  <div className="box_item_text">
                    <p >Name: asdasd</p>
                    <p >Price: 1,000$</p>
                  </div>
                  <div className="box_icon_order">
                    <div className="btnicon_delete_order" >
                      <AiOutlineDelete id="btnicon_delete" />
                    </div>

                    <div className="box_item_icon">
                      <div className="icon_minus_plus">
                        -
                      </div>
                      <span>
                        1
                      </span>
                      <div className="icon_minus_plus">
                        +
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="box_item_total">
                <h3>Cart Total</h3>
                <div className="box_item_total_text">
                  <p>Quantity:</p>
                  <p>2</p>
                </div>
                <hr />
                <div className="box_item_total_text">
                  <p>Shipping: </p>
                  <p>free</p>
                </div>
                <hr />
                <div className="box_item_total_text">
                  <h3>Total: </h3>
                  <p>1,000$</p>
                </div>
                <div className="btn">
                  <button type="submit" className="checkout_btn">
                    Checkout
                  </button>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
      <Menu />
    </>
  );
};

export default Cart_copy;
