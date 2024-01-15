import React from "react";
import abcd from "../../img/abcd.jpg";

const ProductDetial = () => {
  return (
    <>
      <div className="product-detial">
        <div className="product-page-img">
          <div className="myslides">
            <img src={abcd} alt="" />
          </div>
          <div className="slider_img">
            <div className="slider-box">
              <img src={abcd} alt="" />
            </div>
          </div>
        </div>
        <form>
          <div className="txtContentproduct">
            <div className="text">
              <h2>Name</h2>
              <span>$10</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing el</p>
            </div>
            <hr />
            
            <div className="colors">
              <label>Red</label>
              <input type="radio" />
              <label>Blue</label>
              <input type="radio" />
              <label>Yellow</label>
              <input type="radio" />
            </div>
            <div className="size">
              <p>Size:</p>
              <label htmlFor="s" className="echSize">
                S
              </label>
              <input type="radio" id="s" />
              <label htmlFor="m" className="echSize">
                M
              </label>
              <input type="radio" id="m" />
              <label htmlFor="l" className="echSize">
                L
              </label>
              <input type="radio" id="l" />
              <label htmlFor="xl" className="echSize">
                XL
              </label>
              <input type="radio" id="xl" />
            </div>
            <div className="container_item_icon">
              <div className="container_minus_plus">-</div>
              <span>
                <input type="text" value="2" />
              </span>
              <div className="container_minus_plus">+</div>
            </div>
            <hr />

            <div className="Count_product">
              <button type="submit" className="echbtn btnBut">
                Buy Now
              </button>
              <button type="submit" className="echbtn btnAdd">
                Add To Cart
              </button>
            </div>
          </div>
        </form>
        <div className="description_container">
          <img src={abcd} alt="img" />
        </div>
      </div>
    </>
  );
};

export default ProductDetial;
