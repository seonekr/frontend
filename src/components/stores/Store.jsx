import "./store.css";
import { Link} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import banner from "../../img/banner.jpg";
import productImage from "../../img/productImage.png";

const Store = () => {
  return (
    <>
      <div className="box_store">
        <div className="store_container">
          <div className="store_item_head">
            <Link to="/" className="back_icons_back">
              <IoIosArrowBack />
              <p>Back</p>
            </Link>
            <div className="title_nameStore">
              <h3>online shop</h3>
            </div>
            <Link to="/store_management" className="btn_add_editStore">
              Add/Edit
            </Link>
          </div>

          <div className="link_btn_store">
            <Link to="/stores" className="btn_link_store link_store_active">
              Sale items
            </Link>
            <Link to="#" className="btn_link_store">
              Dashboard
            </Link>
            <Link to="/eviewStore" className="btn_link_store">
              Review
            </Link>
            <Link to="/payment_store" className="btn_link_store">
              Payment
            </Link>
          </div>

          <div className="banner_box">
            <img src={banner} alt="" />
          </div>

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
      </div>
    </>
  );
};

export default Store;
