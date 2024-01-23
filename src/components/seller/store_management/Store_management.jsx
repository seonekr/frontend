import "./store_management.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoCameraSharp } from "react-icons/io5";
import banner_no from "../../../img/banner_no.jpg";
import { useState } from "react";
import productImage from "../../../img/productImage.png";
import { FaPen } from "react-icons/fa6";

function Store_management() {

    //PopUp box add banner
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    return (
        <>
            <div className="box_store">
                <div className="store_container_management">
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
                    <div className="banner_no_box">
                        <div className="banner_no_box_img">
                            <img src={productImage} alt="" />
                        </div>
                        <div className="edit_image">
                            <a className="trigger_popup_fricc" onClick={togglePopup}>
                                <IoCameraSharp />
                            </a>
                            {/* PopUp box add banner */}
                            {isPopupVisible && (
                                <form className="hover_bkgr_fricc">
                                    <p>Image banner</p>
                                    <div className="popupCloseButton" onClick={togglePopup}>&times;</div>
                                    <label className="popup_txt_Boximagae">
                                        <input type="file" name='image' />
                                    </label>
                                    <button className="banner_confirm_btn">Confirm</button>
                                </form>
                            )}
                        </div>
                    </div>

                    <div className="group_container_product">
                        <div className="box-product" >
                            <div className="editproduct_boxIocno">
                                <Link to="/edit-product" className="iconn_pendit_product" ><FaPen /></Link>
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
                            <div className="editproduct_boxIocno">
                                <Link to="/edit-product" className="iconn_pendit_product" ><FaPen /></Link>
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
                            <div className="editproduct_boxIocno">
                                <Link to="/edit-product" className="iconn_pendit_product" ><FaPen /></Link>
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
                            <div className="editproduct_boxIocno">
                                <Link to="/edit-product" className="iconn_pendit_product" ><FaPen /></Link>
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
                <Link to="/addProduct" className="btn_addProdcut">
                    Add Product
                </Link>
            </div>

        </>
    )
}

export default Store_management