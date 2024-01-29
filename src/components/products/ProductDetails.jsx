
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

// Example userID
const userID = "u421"


  // Filter goods with id equal to 1
  const filteredGoods = goods.filter((good) => good.id === 2);

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

  // Number of product
  const [goodsCount, setGoodsCount] = useState(1);

  // Reduce the number of products
  const incrementCount = (goodsID) => {
    setGoodsCount((prevCounts) => ({
      ...prevCounts,
      [goodsID]: (prevCounts[goodsID] || 1) + 1,
    }));
  };

  // Increase the number of products
  const decrementCount = (goodsID) => {
    setGoodsCount((prevCounts) => ({
      ...prevCounts,
      [goodsID]: Math.max(1, (prevCounts[goodsID] || 1) - 1),
    }));
  };

  // Rating =================
  const storeid = "r4444";
  const productid = "u4434";
  const userid = "John";
  const [comment, setComment] = useState({
    commend: "",
    rating: 0,
  });
  const handleRatingChange = (newRating) => {
    setComment({ ...comment, rating: newRating });
  };

  // Comment input box
  const handleChange = (e) => {
    if (comment.rating < 1) {
      e.preventDefault();
      return;
    }
    setComment({ ...comment, [e.target.name]: e.target.value });
    autoGrowTextarea(e.target);
  };

  // Resize grow up if typing full box
  const autoGrowTextarea = () => {
    const textarea = document.getElementById("multiline-input");
    const maxHeight = (10 * window.innerHeight) / 100;

    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + "px";
  };

  // sent review
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Review submit
  const handleReviewSubmit = (e) => {
    e.preventDefault();

    try {
      const newReview = {
        id: reviews.length + 1,
        storeid,
        productid,
        userid,
        ...comment,
      };

      console.log(newReview)

      setReviews((prevReviews) => [...prevReviews, newReview]);

      setComment({
        commend: "",
        rating: 0,
      });

      document.getElementById("review").style.height = "auto";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  // Buy now function
  const buyNow = async (e) => {
    e.preventDefault()
    const product = joinedData.map((product) => ({
      userID: userID,
      productID: product.id,
      quantity: goodsCount,
      price: product.price
    }))
    console.log(product)
  }

  // Add to cart
  const addToCart = async (e) => {
    e.preventDefault();
    console.log("Add to cart")
  }


  return (
    <>
      <Header />
      <div className="contentBody">
        <Link to="/" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>

        <div className="box_betavinOfob">

          {joinedData.map((item) => (
            <div className="boxProduct_deteils" key={item.id}>
              <div className="product-page-img">
                <img src={item.image} alt={`Product ${item.id}`} />
              </div>

              <form>
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
                    <div className="container_minus_plus" onClick={() => decrementCount(item.id)}>-</div>
                    <span>{goodsCount[item.id] || 1}</span>
                    <div className="container_minus_plus" onClick={() => incrementCount(item.id)}>+</div>
                  </div>
                  <div className="Count_product">
                    <Link onClick={buyNow} className="echbtn btnBut">
                      Buy Now
                    </Link>
                    <Link onClick={addToCart} className="echbtn btnAdd">
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

            <form className="review_boxstar" onSubmit={handleReviewSubmit}>
              <div className="star">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      cursor: "pointer",
                      color: star <= comment.rating ? "#FFBF00" : "gray",
                    }}
                    onClick={() => handleRatingChange(star)}
                  >
                    {star <= comment.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <div className="comment_box_content">
                <textarea
                  name="commend"
                  className="review-text"
                  id="review"
                  value={comment.commend}
                  onChange={handleChange}
                  placeholder="Your opinion"
                  maxLength="255"
                  required
                />
                <button 
                  type="submit" 
                  disabled={comment.rating < 1 || comment.commend.trim() === ""} 
                  className="btn_submit_comment"
                >
                  Sent
                </button>

              </div>
            </form>
            <div className="last_box_review">
              {reviews.length > 0 ? (
                <div>
                  {loading ? (
                    <p>Loading reviews...</p>
                  ) : (
                    <div>
                      {reviews.map((item) => (
                        <div className="box_comment_connntent" key={item.id}>
                          <div className="box_head_user">
                            <div className="box_head_user_title">
                              <div className="comment__userImg">
                                <img src={user} alt="" />
                              </div>
                              <div className="box_head_user_titt_detils">
                                <p>{item.userid}</p>
                                <div className="review_boxstar_user">
                                  {[...Array(item.rating)].map((_, index) => (
                                    <span key={index} className="star">★</span>
                                  ))}
                                  {[...Array(5 - item.rating)].map((_, index) => (
                                      <span key={index} className="star" style={{ color: "gray" }} >☆</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="box_user_time">
                              <p>2023.08.23</p>
                            </div>
                          </div>
                          <div className="comment_boxOfuser">
                            <p>{item.commend}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              ) : (
                <p className="no-available">No reviews available.</p>
              )}

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
      <Menu />
    </>
  );
}

export default ProductDetails;
