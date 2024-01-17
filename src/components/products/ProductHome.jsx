import "./productHome.css";
import productImage from "../../img/productImage.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductHome = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    AllProducts();
  });

  const AllProducts = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(import.meta.env.VITE_API + "/store", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => console.log("error", error));
  };


  return (
    <div>
      <section id="product">
        <div className="productHead_content">
          <h1 className="htxthead">
            <span className="spennofStyle"></span>Product
          </h1>
          <div className="categoryBoxfiler">
            <form className="boxfilterseach">
              <label>Select Filter</label>
              <select className="filter_priceProduct">
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
          {products.map((product, index) => (

            <div  className="box-product" key={index}>
              <div>
                <div className="img">
                  <img src={product.image} alt="image" />
                </div>
                <ul className="txtOFproduct2">
                  <li className="name">{product.name}</li>
                  <li className="price">{product.price}</li>
                  <li className="desc">{product.description}</li>
                </ul>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};

export default ProductHome;
