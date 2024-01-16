import React from 'react'
import './editProduct.css'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";

function EditProduct() {
    return (
        <>
            <div className="header_box_management">
                <Link to="/store_management" className="box_management_iconnback">
                    <IoIosArrowBack id="icons_back" />
                    <p>Back</p>
                </Link>
                <div>
                    <h3>Store management</h3>
                </div>
                <div></div>
            </div>
            <div className="addproduct_container">
                <h3>Edit product</h3>
                <div className='inputproduct_box'>
                    <input className="inputproduct" type="text" placeholder='Product name' />
                </div>
                <div className='inputproduct_box'>
                    <input className="inputproduct" type="text" placeholder='Product price' />
                </div>
                <div className='inputproduct_box'>
                    <input className="inputproduct" type="text" placeholder='Category' />
                </div>
                <div className='inputproduct_box'>
                    <input className="inputproduct" type="text" placeholder='Description' />
                </div>
                <div className="size_product_box">
                    <h3>Size</h3>
                    <div className="size_product_box_container">
                        <div className="box_sizeTso_add">
                            <div className="box_sizeTo_add_item">
                                <p>M</p>
                                <IoIosClose className='iconn_close_addSize' />
                            </div>
                            <div className="box_sizeTo_add_item">
                                <p>L</p>
                                <IoIosClose className='iconn_close_addSize' />
                            </div>
                            <div className="box_sizeTo_add_item">
                                <p>XL</p>
                                <IoIosClose className='iconn_close_addSize' />
                            </div>
                            <div className="box_sizeTo_add_item">
                                <p>XL</p>
                                <IoIosClose className='iconn_close_addSize' />
                            </div>
                        </div>
                        <div className="size_content_box">
                            <input className="inputproduct" type="text" placeholder='Add size...' />
                            <div className="addsize_btn">
                                Add
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Color_product_box">
                    <h3>Color:</h3>
                    <div className="size_product_box_container">
                        <div className="box_sizeTso_add">
                            <div className="box_sizeTo_add_item">
                                <p>Red</p>
                                <IoIosClose className='iconn_close_addSize' />
                            </div>
                            <div className="box_sizeTo_add_item">
                                <p>Blue</p>
                                <IoIosClose className='iconn_close_addSize' />
                            </div>
                            <div className="box_sizeTo_add_item">
                                <p>Black</p>
                                <IoIosClose className='iconn_close_addSize' />
                            </div>
                            <div className="box_sizeTo_add_item">
                                <p>While</p>
                                <IoIosClose className='iconn_close_addSize' />
                            </div>
                        </div>
                        <div className="size_content_box">
                            <input className="inputproduct" type="text" placeholder='Add color...' />
                            <div className="addsize_btn">
                                Add
                            </div>
                        </div>
                    </div>
                </div>

                <div className="add_img_product_box">
                    <h3>Profile image:</h3>
                    <div className="boxicon_img_input">
                        <CiImageOn className='boxicon_img_iconn' />
                        <input type="file" className="input" />
                    </div>
                </div>

                <div className="add_img_product_box">
                    <h3>Details image:</h3>
                    <div className="boxicon_img_input">
                        <CiImageOn className='boxicon_img_iconn'/>
                        <input type="file" className="input" />
                    </div>
                </div>

                <Link to="#" >
                    <div className='btn_save_productUser'>
                        Save
                    </div>
                </Link>
            </div>
        </>
    )
}

export default EditProduct