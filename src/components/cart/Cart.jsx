import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import productImage from "../../img/productImage.png";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import "./cart.css";

const Cart = () => {

  const [goods] = useState([
    { id: 1, name: "Product 1", price: 20, categoryID: 1, storeID: 1, desc: "desc", color: ["red", "blue", "black"], size: ["s", "m", "l", "xl", "xxl"] },
    { id: 2, name: "Product 2", price: 30, categoryID: 2, storeID: 2, desc: "desc", color: ["blue", "green", "brown"], size: ["s", "m", "l", "xl", "xxl"] },
    { id: 3, name: "Product 3", price: 20, categoryID: 1, storeID: 3, desc: "desc", color: ["pink", "yellow", "orange"], size: ["s", "m", "l", "xl", "xxl"] },
    { id: 4, name: "Product 4", price: 20, categoryID: 1, storeID: 1, desc: "desc", color: ["pink", "yellow", "orange"], size: ["s", "m", "l", "xl", "xxl"] }
  ]);

  const [category] = useState([
    { id: 1, name: "trousers" },
    { id: 2, name: "T-shirt" },
  ]);

  const [imageGoods] = useState([
    { id: 1, image: productImage, goodsID: 1 },
    { id: 2, image: productImage, goodsID: 2 },
    { id: 3, image: productImage, goodsID: 3 },
    { id: 4, image: productImage, goodsID: 4 },
  ]);

  const [store] = useState([
    { id: 1, name: "store 1", address: "vientiane", phone: "02099933393", company_number: "927835", sellerID: 2, sub_address: "sikhot" },
    { id: 2, name: "store 2", address: "vientiane", phone: "02053635454", company_number: "456354", sellerID: 1, sub_address: "donkoy" },
    { id: 3, name: "store 3", address: "vientiane", phone: "20298876565", company_number: "645364", sellerID: 3, sub_address: "donkoy" }
  ]);

  const [user] = useState([
    { id: 1, email: "email@gmail.com", nickname: "will", isSeller: 1, profile: "productImage" },
    { id: 2, email: "email@gmail.com", nickname: "dom", isSeller: 1, profile: "productImage" },
    { id: 3, email: "email@gmail.com", nickname: "taylor", isSeller: 1, profile: "productImage" },
    { id: 4, email: "email@gmail.com", nickname: "max", isSeller: 0, profile: "productImage" },
  ]);

  const getGoodsByStore = (storeId) => {
    return goods.filter((good) => good.storeID === storeId);
  };

  const getImageGoodsByGoods = (goodsId) => {
    return imageGoods.filter((imageGood) => imageGood.goodsID === goodsId);
  };

  // Function to get category by ID
  const getCategoryById = (categoryId) => {
    return category.find((cat) => cat.id === categoryId);
  };

  // Function to get user by ID
  const getUserById = (userId) => {
    return user.find((userItem) => userItem.id === userId);
  };


  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);


  const [goodsCount, setGoodsCount] = useState(goods.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {}));

  useEffect(() => {
    const totalPrice = goods.reduce((accumulator, product) => accumulator + product.price * (goodsCount[product.id] || 0), 0);
    const shipping = 0;
    const grandTotal = totalPrice + shipping;

    setPrice(totalPrice);
    setShipping(shipping);
    setGrandTotal(grandTotal);
  }, [goods, goodsCount]);


  const handleInputChange = (e, index, field) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = e.target.value;
    setProducts(updatedProducts);
  };

  const incrementCount = (goodsID) => {
    setGoodsCount((prevCounts) => ({
      ...prevCounts,
      [goodsID]: (prevCounts[goodsID] || 0) + 1,
    }));
  };

  const decrementCount = (goodsID) => {
    setGoodsCount((prevCounts) => ({
      ...prevCounts,
      [goodsID]: Math.max(0, (prevCounts[goodsID] || 0) - 1),
    }));
  };

  // send to checkout
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()

    setProducts([]);
    setPrice('');
    setShipping('');
    setGrandTotal('');
    const selectedProducts = products.map((product) => ({
      productID: product.productID,
      productName: product.productName,
      productType: product.productType,
      color: product.color,
      price: product.price,
      size: product.size,
      goodsCount: goodsCount[product.productID] || 0,
      totalPrice: grandTotal,
    }));

    navigate('/cart/payment/', {
      state: {
        productsCart: selectedProducts,
      }
    });


  };


  return (
    <>
      <Header />
      <div className="box_cart_container">
        <Link to="/" className="box_container_back_icons_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>


        {/* {store.map((storeItem) => (
        <div key={storeItem.id}>
          <h2>{storeItem.name}</h2>
          <p>Address: {storeItem.address}</p>
          <p>Phone: {storeItem.phone}</p>
          
          <h3>Goods in {storeItem.name}</h3>
          <ul>
            {getGoodsByStore(storeItem.id).map((good) => (
              <li key={good.id}>
                {good.name} - {good.price}

                <h4>Category:</h4>
                {getCategoryById(good.categoryID) && (
                  <p>{getCategoryById(good.categoryID).name}</p>
                )}

                <h4>Images:</h4>
                {getImageGoodsByGoods(good.id).map((img) => (
                  <img key={img.id} src={img.image} alt={`Product ${good.id}`} />
                ))}
              </li>
            ))}
          </ul>

          <h3>Seller Information</h3>
          {storeItem.sellerID && (
            <ul>
              <li>
                Seller: {getUserById(storeItem.sellerID).nickname} - {getUserById(storeItem.sellerID).email}
              </li>
            </ul>
          )}
        </div>
      ))} */}

        <div className="box_container_cart">
          <div>

            {store.map((storeItem) => (
            <div className="container_cart_item" key={storeItem.id}>
              <div className="box_item_gourp">
                <div className="sotre_name_box">
                  <h3>{storeItem.name}</h3>
                  <div className="cart_close_item_iconn">
                    <IoClose className="close_item_iconn" />
                  </div>
                </div>
                {getGoodsByStore(storeItem.id).map((good) => (
                <div className="box_item_image" key={good.id}>
                  {getImageGoodsByGoods(good.id).map((img) => (
                  <img key={img.id} src={img.image} alt={`Product ${good.id}`} />
                  ))}
                  <div className="box_item_text">
                    <p >{good.name}</p>
                    <p >{good.price} $</p>
                  </div>
                  <div className="box_icon_order">
                    <div className="btnicon_delete_order" >
                      <AiOutlineDelete id="btnicon_delete" />
                    </div>
                    <div className="box_item_icon">
                      <div className="icon_minus_plus" onClick={() => decrementCount(good.id)}>-</div>
                      <span>
                      <input
                        type="text"
                        value={goodsCount[good.id] || 0}
                        onChange={() => { }}
                      />
                      </span>
                      <div className="icon_minus_plus" onClick={() => incrementCount(good.id)}>+</div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
              <div className="box_item_total">
                <h3>Cart Total</h3>
                <div className="box_item_total_text">
                  <p>Quantity:</p>
                  <p>2</p>
                </div>
                <hr />
                <div className="box_item_total_text">
                  <p>Shipping: </p>
                  <p>free</p>
                </div>
                <hr />
                <div className="box_item_total_text">
                  <h3>Total: </h3>
                  <p>1,000$</p>
                </div>
                <div className="btn">
                  <button type="submit" className="checkout_btn">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
            ))}

            {/* <div className="container_cart_item">
              <div className="box_item_gourp">
                <div className="sotre_name_box">
                  <h3>Online shop2</h3>
                  <div className="cart_close_item_iconn">
                    <IoClose className="close_item_iconn" />
                  </div>
                </div>
                <div className="box_item_image">
                  <img src={productImage} alt="" />
                  <div className="box_item_text">
                    <p >Name: asdasd</p>
                    <p >Price: 1,000$</p>
                  </div>
                  <div className="box_icon_order">
                    <div className="btnicon_delete_order" >
                      <AiOutlineDelete id="btnicon_delete" />
                    </div>

                    <div className="box_item_icon">
                      <div className="icon_minus_plus">
                        -
                      </div>
                      <span>
                        1
                      </span>
                      <div className="icon_minus_plus">
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box_item_total">
                <h3>Cart Total</h3>
                <div className="box_item_total_text">
                  <p>Quantity:</p>
                  <p>2</p>
                </div>
                <hr />
                <div className="box_item_total_text">
                  <p>Shipping: </p>
                  <p>free</p>
                </div>
                <hr />
                <div className="box_item_total_text">
                  <h3>Total: </h3>
                  <p>1,000$</p>
                </div>
                <div className="btn">
                  <button type="submit" className="checkout_btn">
                    Checkout
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <Menu />
    </>
  );
};

export default Cart;


//     {products.map((product, index) => (
//       <div className='container_cart_item' key={index}>
//         <div className="box_item_image">
//           <img src={product.images[0]} alt='img'></img>
//           <div className='box_item_text'>
//             <input
//               type="text"
//               value={product.productName}
//               onChange={(e) => handleInputChange(e, index, "name")}
//               className='name'
//             />
//             <input
//               type="text"
//               value={product.description}
//               onChange={(e) => handleInputChange(e, index, "description")}
//               className='description'
//             />
//             <input
//               type="text"
//               value={product.price}
//               onChange={(e) => handleInputChange(e, index, "price")}
//             />
//           </div>
//         </div>
//         <div className='box_item_icon'>
//           <div className="icon_minus_plus" onClick={() => decrementCount(product.productID)}>-</div>
//           <span>
//             <input
//               type="text"
//               value={productCounts[product.productID] || 0}
//               onChange={() => { }}
//             />
//           </span>
//           <div className="icon_minus_plus" onClick={() => incrementCount(product.productID)}>+</div>
//         </div>
//       </div>
//     ))}

//     {products.length > 0 ?
// <div className='box_item_total'>
//   <h1>Cart Total</h1>
//   <div className='box_item_total_text'>
//     <p>Subtotal:</p>
//     <p><input type="text" value={"$ " + price} onChange={() => { }} /></p>
//   </div>
//   <hr />
//   <div className='box_item_total_text'>
//     <p>Shipping: </p>
//     <p><input type="text" value={"$ " + shipping} onChange={() => { }} /></p>
//   </div>
//   <hr />
//   <div className='box_item_total_text'>
//     <h3>Total: </h3>
//     <p><input type="text" value={"$ " + grandTotal} onChange={() => { }} /></p>
//   </div>
//   <div className='btn'>
//     <Link to="/product_search/" className="Continues_btn">Continues Shopping</Link>
//     <button type='submit' className="checkout_btn">Checkout</button>
//   </div>
// </div>: <p className='cart'>Your cart is empty</p> }
