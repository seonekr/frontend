import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./productDetails.css";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import { IoIosArrowBack } from "react-icons/io";
import { BiStore } from "react-icons/bi";
import icon_star from "../../img/icon_star.png";
import icon_star2 from "../../img/icon_star2.png";
import user from "../../img/user.png";
import productImage from "../../img/productImage.png";
import detailproduct from "../../img/detailproduct.jpg";
import axios from "axios";

function ProductDetails() {
  const navigate = useNavigate();
  const storage = JSON.parse(window.localStorage.getItem("user"));
  const [goods, set_goods] = useState(null);
  const { goods_id } = useParams();
  const [reviewBtn, set_reviewBtn] = useState(false);
  const [changeView, set_changeView] = useState({
    update: false,
    value: "",
  });
  const [sliceNum, set_sliceNum] = useState(8);

  function StarWidth(value) {
    let star_avg = (value / 5) * 100;
    if (star_avg === 0) {
      star_avg = 100;
    }
    return star_avg;
  }

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + "/store/detail/" + goods_id,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        set_goods(response.data);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [goods_id]);

  return (
    <>
      <Header />
      <div className="contentBody">
        <Link to="/" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>

        <div className="box_betavinOfob">
          <div className="boxProduct_deteils">
            <div className="product-page-img">
              {/* <img src={item.image} alt={`Product ${item.id}`} /> */}
            </div>

            <form>
              <div className="txtContentproduct">
                {/* <h1 className="txt_nameP">{goods.name}</h1>
                <p className="money_txt">${goods.price}</p>
                <p className="txt_description">{goods.description}</p> */}
                <Link to="/stores" className="store_boxLink">
                  <BiStore className="iconn_linkbox" />
                  <p>Go to store</p>
                </Link>

                <div className="size_product">
                  <p>Size:</p>
                  {/* {item.size && (
                    <div className="size">
                      {item.size.map((size, index) => (
                        <p className="echSize" key={index}>
                          {size}
                        </p>
                      ))}
                    </div>
                  )} */}
                </div>
                <div className="container_item_icon">
                  <div className="container_minus_plus">-</div>
                  <span>1</span>
                  <div className="container_minus_plus">+</div>
                </div>
                <div className="Count_product">
                  <Link to="/payment" className="echbtn btnBut">
                    Buy Now
                  </Link>
                  <Link to="/cart" className="echbtn btnAdd">
                    Add To Cart
                  </Link>
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    numquam sapiente voluptates ut porro quisquam eveniet
                    voluptas sed. Nulla ducimus odit esse quam corporis, dolorem
                    labore. Ipsa quis repudiandae nihil.
                  </p>
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    numquam sapiente voluptates ut porro quisquam eveniet
                    voluptas sed. Nulla ducimus odit esse quam corporis, dolorem
                    labore. Ipsa quis repudiandae nihil.
                  </p>
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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    numquam sapiente voluptates ut porro quisquam eveniet
                    voluptas sed. Nulla ducimus odit esse quam corporis, dolorem
                    labore. Ipsa quis repudiandae nihil.
                  </p>
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
          <div className="box-product">
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

          <div className="box-product">
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

          <div className="box-product">
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

          <div className="box-product">
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
