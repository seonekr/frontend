import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const [goods] = useState([
    { id: 1, name: "Product 1", price: 20, categoryID: 1, storeID: 1, desc: "desc", size: ["s", "m", "l", "xl"] },
    { id: 2, name: "Product 2", price: 30, categoryID: 2, storeID: 2, desc: "desc", size: ["s", "m", "l", "xl", "xxl"] },
    { id: 3, name: "Product 3", price: 20, categoryID: 1, storeID: 3, desc: "desc", size: ["s", "m", "l", "xl", "xxl"] },
    { id: 4, name: "Product 4", price: 20, categoryID: 1, storeID: 1, desc: "desc", size: ["s", "m", "l", "xl", "xxl"] },
    { id: 5, name: "Product 4", price: 50, categoryID: 1, storeID: 1, desc: "desc", size: ["s", "m", "l", "xl", "xxl"] },
  ]);

  const [imageGoods] = useState([
    { id: 1, image: productImage, goodsID: 1 },
    { id: 2, image: productImage, goodsID: 2 },
    { id: 3, image: productImage, goodsID: 3 },
    { id: 4, image: productImage, goodsID: 4 },
    { id: 5, image: productImage, goodsID: 5 },
  ]);

  const [store] = useState([
    { id: 1, name: "store 1", address: "vientiane", phone: "02099933393", company_number: "927835", sellerID: 2, sub_address: "sikhot" },
    { id: 2, name: "store 2", address: "vientiane", phone: "02053635454", company_number: "456354", sellerID: 1, sub_address: "donkoy" },
    { id: 3, name: "store 3", address: "vientiane", phone: "20298876565", company_number: "645364", sellerID: 3, sub_address: "donkoy" }
  ]);

  // Filter goods with id equal to 1
  const filteredGoods = goods.filter((good) => good.id === 1);

  // Joining data by goods ID (assuming only one item in filteredGoods)
  const joinedData = filteredGoods.map((good) => {
    const imageInfo = imageGoods.find((img) => img.goodsID === good.id);
    const storeInfo = store.find((s) => s.id === good.storeID);

    return {
      ...good,
      image: imageInfo ? imageInfo.image : null,
      store: storeInfo ? storeInfo : null,
    };
  });


  return (
    <>
      <Header />
      <div className="contentBody">
        <Link to="/" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>

        <ul>
        {joinedData.map((item) => (
          <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>CategoryID: {item.categoryID}</p>
            {/* Displaying sizes */}
            {item.size && (
              <p>Sizes: {item.size.join(', ')}</p>
            )}
            {/* Add more fields as needed */}
            {item.image && <img src={item.image} alt={`Product ${item.id}`} />}
            {item.store && (
              <div>
                <p>Store Name: {item.store.name}</p>
                <p>Store Address: {item.store.address}</p>
                {/* Add more store fields as needed */}
              </div>
            )}
            <hr />
          </li>
        ))}
      </ul>

        <div className="box_betavinOfob">
        {joinedData.map((item) => (
          <div className="boxProduct_deteils" key={item.id}>
            <div className="product-page-img">
              <img src={productImage} alt="" />
            </div>

            <form >
              <div className="txtContentproduct">
                <h1 className="txt_nameP">{item.name}</h1>
                <p className="money_txt">{item.price} $</p>
                <p className="txt_description">{item.desc}</p>
                <Link to="/stores" className="store_boxLink">
                  <BiStore className="iconn_linkbox" />
                  <p>Go to store</p>
                </Link>

                <div className="size_product">
                  <p>Size:</p>
                  {item.size && (
                  <div className="size">
                    {item.size.map((size, index) => (
                    <p className="echSize" key={index}>{size}</p>
                    ))}
                  </div>
                  )}
                </div>

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
                  <Link to="/payment" className="echbtn btnBut" >
                    Buy Now
                  </Link>
                  <Link to="/cart" className="echbtn btnAdd" >
                    Add To Cart
                  </Link>
                </div>
              </div>
            </form>
          </div>
          ))}


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
        {/* <h2 className="box_betavinOfob asd2">
          <span className="spennofStyle"> </span>
          More products
        </h2> */}
        {/* <div className="product-area">
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

        </div> */}
      </div>
      <Menu />
    </>
  );
}

export default ProductDetails;
