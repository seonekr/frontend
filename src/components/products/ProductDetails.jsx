import React from "react";
import {Link} from "react-router-dom";
import "./productDetails.css";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import { IoIosArrowBack } from "react-icons/io";
import { BiStore } from "react-icons/bi";
import icon_star from "../../img/icon_star.png"
import icon_star2 from "../../img/icon_star2.png"
import user from "../../img/user.png"
import productImage from "../../img/productImage.png";
import detailproduct from "../../img/detailproduct.jpg";

function ProductDetails() {
  return (
    <>
      <Header />
      <div className="contentBody">
        <Link to="#" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
        <div className="box_betavinOfob">
          <div className="boxProduct_deteils">
            <div className="product-page-img">
              <img src={productImage} alt="" />
            </div>

            <form >
              <div className="txtContentproduct">
                <h1 className="txt_nameP">name</h1>
                <p className="money_txt">price</p>
                <p className="txt_description">description</p>
                <Link to="/stores" className="store_boxLink">
                  <BiStore className="iconn_linkbox" />
                  <p>Lorem ipsum</p>
                </Link>
                {/* Checked colors */}
                <div className="color_product">
                  <h5>Color:</h5>
                  <div >
                    <label >Red</label>
                    <input
                      className="echColor"
                      type="radio"
                    />
                  </div>
                  <div >
                    <label >Red</label>
                    <input
                      className="echColor"
                      type="radio"
                    />
                  </div>
                  <div >
                    <label >Red</label>
                    <input
                      className="echColor"
                      type="radio"
                    />
                  </div>
                  <div >
                    <label >Red</label>
                    <input
                      className="echColor"
                      type="radio"
                    />
                  </div>
                </div>

                <div className="size_product">
                  <p>Size:</p>
                  <div>
                    <p className="echSize">M</p>
                  </div>
                  <div>
                    <p className="echSize">L</p>
                  </div>
                  <div>
                    <p className="echSize">XL</p>
                  </div>
                </div>
                {/* Amount product */}
                <div className="container_item_icon">
                  <div className="container_minus_plus" >
                    -
                  </div>
                  <span>
                    1
                  </span>
                  <div className="container_minus_plus" >
                    +
                  </div>
                </div>
                <div className="Count_product">
                  <button type="submit" className="echbtn btnBut" >
                    Buy Now
                  </button>
                  <button type="submit" className="echbtn btnAdd" >
                    Add To Cart
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="description_container">
            <img src={detailproduct} alt="" />
          </div>

          <div className="review_box">
            <h3>Reviews(8)</h3>
            <form className="review_boxstar">
              <img src={icon_star} alt="" />
              <img src={icon_star2} alt="" />
              <img src={icon_star2} alt="" />
              <img src={icon_star2} alt="" />
              <img src={icon_star2} alt="" />
            </form>
            <form className="comment_box_content">
              <input type="text" placeholder="Comment..." />
              <button className="btn_submit_comment">Sent</button>
            </form>
            <div className="last_box_review">
              <div className="box_comment_connntent">
                <div className="box_head_user">
                  <div className="box_head_user_title">
                    <div className="comment__userImg">
                      <img src={user} alt="" />
                    </div>
                    <div className="box_head_user_titt_detils">
                      <p>Name of user</p>
                      <form className="review_boxstar_user">
                        <img src={icon_star} alt="" />
                        <img src={icon_star2} alt="" />
                        <img src={icon_star2} alt="" />
                        <img src={icon_star2} alt="" />
                        <img src={icon_star2} alt="" />
                      </form>
                    </div>
                  </div>
                  <div className="box_user_time">
                    <p>2023.08.23</p>
                  </div>
                </div>
                <div className="comment_boxOfuser">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est numquam sapiente voluptates ut porro quisquam eveniet voluptas sed. Nulla ducimus odit esse quam corporis, dolorem labore. Ipsa quis repudiandae nihil.</p>
                </div>
              </div>
              <div className="box_comment_connntent">
                <div className="box_head_user">
                  <div className="box_head_user_title">
                    <div className="comment__userImg">
                      <img src={user} alt="" />
                    </div>
                    <div className="box_head_user_titt_detils">
                      <p>Name of user</p>
                      <form className="review_boxstar_user">
                        <img src={icon_star} alt="" />
                        <img src={icon_star2} alt="" />
                        <img src={icon_star2} alt="" />
                        <img src={icon_star2} alt="" />
                        <img src={icon_star2} alt="" />
                      </form>
                    </div>
                  </div>
                  <div className="box_user_time">
                    <p>2023.08.23</p>
                  </div>
                </div>
                <div className="comment_boxOfuser">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est numquam sapiente voluptates ut porro quisquam eveniet voluptas sed. Nulla ducimus odit esse quam corporis, dolorem labore. Ipsa quis repudiandae nihil.</p>
                </div>
              </div>
              <div className="box_comment_connntent">
                <div className="box_head_user">
                  <div className="box_head_user_title">
                    <div className="comment__userImg">
                      <img src={user} alt="" />
                    </div>
                    <div className="box_head_user_titt_detils">
                      <p>Name of user</p>
                      <form className="review_boxstar_user">
                        <img src={icon_star} alt="" />
                        <img src={icon_star2} alt="" />
                        <img src={icon_star2} alt="" />
                        <img src={icon_star2} alt="" />
                        <img src={icon_star2} alt="" />
                      </form>
                    </div>
                  </div>
                  <div className="box_user_time">
                    <p>2023.08.23</p>
                  </div>
                </div>
                <div className="comment_boxOfuser">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est numquam sapiente voluptates ut porro quisquam eveniet voluptas sed. Nulla ducimus odit esse quam corporis, dolorem labore. Ipsa quis repudiandae nihil.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="box_betavinOfob asd2">
          <span className="spennofStyle"> </span>
          More products
        </h2>
        <div className="product-area">
          <div className="box-product" >
            <div>
              <div className="img">
                <img src={productImage} alt="image" />
              </div>
              <ul className="txtOFproduct2">
                <li className="name">Name</li>
                <li className="price">Price</li>
                <li className="desc">desc</li>
              </ul>
            </div>
          </div>

          <div className="box-product" >
            <div>
              <div className="img">
                <img src={productImage} alt="image" />
              </div>
              <ul className="txtOFproduct2">
                <li className="name">Name</li>
                <li className="price">Price</li>
                <li className="desc">desc</li>
              </ul>
            </div>
          </div>

          <div className="box-product" >
            <div>
              <div className="img">
                <img src={productImage} alt="image" />
              </div>
              <ul className="txtOFproduct2">
                <li className="name">Name</li>
                <li className="price">Price</li>
                <li className="desc">desc</li>
              </ul>
            </div>
          </div>

          <div className="box-product" >
            <div>
              <div className="img">
                <img src={productImage} alt="image" />
              </div>
              <ul className="txtOFproduct2">
                <li className="name">Name</li>
                <li className="price">Price</li>
                <li className="desc">desc</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <Menu />
    </>
  );
}

export default ProductDetails;
