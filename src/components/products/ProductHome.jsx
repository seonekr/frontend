import "./productHome.css";
import productImage from "../../img/productImage.png";

const ProductHome = () => {
 
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
            <div className="box-product" >
              <div>
                <div className="img">
                  <img src={productImage} alt="image"/>
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
                  <img src={productImage} alt="image"/>
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
                  <img src={productImage} alt="image"/>
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
                  <img src={productImage} alt="image"/>
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
                  <img src={productImage} alt="image"/>
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
                  <img src={productImage} alt="image"/>
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
                  <img src={productImage} alt="image"/>
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
                  <img src={productImage} alt="image"/>
                </div>
                <ul className="txtOFproduct2">
                  <li className="name">Name</li>
                  <li className="price">Price</li>
                  <li className="desc">desc</li>
                </ul>
              </div>
            </div>

        </div>
      </section>
    </div>
  );
};

export default ProductHome;
