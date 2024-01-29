import React from 'react'
import './storeAdmin.css'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import AdminMenu from "../adminMenu/AdminMenu";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

function StoreAdmin() {
    return (
        <>
            <section id="menager">
                <AdminMenu />
                <div className="container_body_adminuser">
                    <div className="container_box_users">
                        <div className="box_users">
                            <div className="box_add_admin">
                                <Link to="/admin/register" className="btn_addadmin">
                                    <BiPlus id="icon_add_admin" />
                                    Add Store
                                </Link>
                            </div>

                            <form className="search">
                                <div className="search-box_menageruser">
                                    <input type="text" placeholder="Search ..." />
                                    <button type="submit">
                                        <IoSearchOutline />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="box_users_user" >
                            <Link className="box_user_text">
                                <div className="container_chat_name" >
                                    <p>
                                        Name:
                                    </p>
                                    <p>Eamil:</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StoreAdmin