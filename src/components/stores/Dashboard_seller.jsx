import "./Dashboard_seller.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import banner from "../../img/banner.jpg";
import productImage from "../../img/productImage.png";

const Dashboard_seller = () => {
  return (
    <>
      <div className="box_store">
        <div className="store_container">
          <div className="store_item_head">
            <Link to="/stores" className="back_icons_back">
              <IoIosArrowBack />
              <p>Back</p>
            </Link>
            <div className="title_nameStore">
              <h3>online shop</h3>
            </div>
            <div></div>
          </div>

          <div className="link_btn_store">
            <Link to="/stores" className="btn_link_store ">
              Sale items
            </Link>
            <Link to="/dashboard_seller" className="btn_link_store link_store_active">
              Dashboard
            </Link>
            <Link to="/payment_store" className="btn_link_store">
              Payment
            </Link>
          </div>

          <div className="dasboard_box_container">
            <h3>Dashboard</h3>
            <div className="box_dasb_content">
              <div className="box_item_dasb">
                <p>Something</p>
                <p>5</p>
                <Link to="#">
                  View
                </Link>
              </div>
              <div className="box_item_dasb">
                <p>Something</p>
                <p>5</p>
                <Link to="#">
                  View
                </Link>
              </div>
              <div className="box_item_dasb">
                <p>Something</p>
                <p>5</p>
                <Link to="#">
                  View
                </Link>
              </div>
              <div className="box_item_dasb">
                <p>Something</p>
                <p>5</p>
                <Link to="#">
                  View
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard_seller;
