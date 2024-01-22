import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const OrderStore = () => {
    return (

        <>
            <div className="container_order_all">
                <Link to="/" className="box_management_iconnback">
                    <IoIosArrowBack id="icons_back" />
                    <p>Back</p>
                </Link>
                <h2>Order</h2>
                <Link to="/bill" className="box_item_order">
                    <div>
                        <div className="box_item_order_text">
                            <p>No: 01</p>
                            <p>10.1.2024</p>
                        </div>
                        <p className="txtheadeproductorder">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui!
                        </p>
                    </div>
                </Link>

                <Link to="/bill" className="box_item_order">
                    <div>
                        <div className="box_item_order_text">
                            <p>No: 01</p>
                            <p>10.1.2024</p>
                        </div>
                        <p className="txtheadeproductorder">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui!
                        </p>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default OrderStore;
