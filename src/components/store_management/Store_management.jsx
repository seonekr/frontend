import "./store_management.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoCameraSharp } from "react-icons/io5";
import banner_no from "../../img/banner_no.jpg";
import no_shopping_cart1 from "../../img/no_shopping_cart1.png";
import productImage from "../../img/productImage.png";

function Store_management() {
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
                        <img src={banner_no} alt="" />
                        <Link to="#" className="edit_image">
                            <IoCameraSharp />
                        </Link>
                    </div>
                    <div className="product-area">
                        <Link to="/editProduct" className="box-product" >
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
                        </Link>
                    </div>
                    {/* <div className="body_content_product">
                        <div className="proItem">
                            <img src={no_shopping_cart1} alt="" />
                            <p>There are no products</p>
                        </div>
                    </div> */}
                </div>
                <Link to="/addProduct" className="btn_addProdcut">
                    Add Product
                </Link>
            </div>

        </>
    )
}

export default Store_management