import React from 'react'
import abcd from '../img/abcd.jpg'

const Home = () => {
  return (
    <>
    <div className="homepage">
        <div className="head_content">
            <div className="text">
                <span className="spennofStyle"></span>Product
            </div>
            <div className="filter">
                <label>Select Filter</label>
                <form className="box">
                    <select className="filter-title">
                        <option value="default">All Product</option>
                        <option value="higherPrice">Higher Price</option>
                        <option value="lowerPrice">Lower Price</option>
                        <option value="newProducts">New Products</option>
                        <option value="popularProducts">Popular Products</option>
                    </select>
                </form>
            </div>
        </div>
        <div className="product-area">
            <div className="box-product">
                <div className="img">
                    <img src={abcd} alt="" />
                </div>
                <div className="text">
                    <span>name</span>
                    <span>price</span>
                    <span>description</span>
                </div>
            </div>
            <div className="box-product">
                <div className="img">
                    <img src={abcd} alt="" />
                </div>
                <div className="text">
                    <span>name</span>
                    <span>price</span>
                    <span>description</span>
                </div>
            </div>
            <div className="box-product">
                <div className="img">
                    <img src={abcd} alt="" />
                </div>
                <div className="text">
                    <span>name</span>
                    <span>price</span>
                    <span>description</span>
                </div>
            </div>
            <div className="box-product">
                <div className="img">
                    <img src={abcd} alt="" />
                </div>
                <div className="text">
                    <span>name</span>
                    <span>price</span>
                    <span>description</span>
                </div>
            </div>
            <div className="box-product">
                <div className="img">
                    <img src={abcd} alt="" />
                </div>
                <div className="text">
                    <span>name</span>
                    <span>price</span>
                    <span>description</span>
                </div>
            </div>
            <div className="box-product">
                <div className="img">
                    <img src={abcd} alt="" />
                </div>
                <div className="text">
                    <span>name</span>
                    <span>price</span>
                    <span>description</span>
                </div>
            </div>
            <div className="box-product">
                <div className="img">
                    <img src={abcd} alt="" />
                </div>
                <div className="text">
                    <span>name</span>
                    <span>price</span>
                    <span>description</span>
                </div>
            </div>
            <div className="box-product">
                <div className="img">
                    <img src={abcd} alt="" />
                </div>
                <div className="text">
                    <span>name</span>
                    <span>price</span>
                    <span>description</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home