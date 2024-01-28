import "./productHome.css";
import productImage from "../../img/productImage.png";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductHome = () => {
  const navigate = useNavigate();
  const [ShowFilter, setShowFilter] = useState(false);
  const [goods_list, set_goods_list] = useState([]);
  const [sliceNum, set_sliceNum] = useState(8);
  const storage = JSON.parse(window.localStorage.getItem("user"));
  const [seatch, set_search] = useState("");
  const [category, set_category] = useState(6);

  const handleMore = () => {
    set_sliceNum(sliceNum + 8);
  };

  const SliceGoodsList = useMemo(() => {
    return goods_list.slice(0, sliceNum);
  }, [goods_list]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: import.meta.env.VITE_API + `/store/?category=${category}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(response.data);
        set_goods_list(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  // useEffect(() => {
  //   if (storage.is_first) {
  //     window.localStorage.setItem(
  //       "user",
  //       JSON.stringify({ ...storage, is_first: false })
  //     );
  //     change_modal({
  //       title: (
  //         <>
  //           <div className="img">
  //             <img src={user_type02} alt="" />
  //           </div>
  //           <div className="txt">
  //             <span className="ty01">Seller Registration</span> Do you want to
  //             do it?
  //           </div>
  //         </>
  //       ),
  //       onClick: () => {
  //         navigate("/change-seller");
  //       },
  //     });
  //   }
  // }, []);

  return (
    <div>
      <section id="product">
        <div className="productHead_content">
          <h1 className="htxthead">
            <span className="spennofStyle"></span>Product
          </h1>
          <div className="categoryBoxfiler">
            <form className="boxfilterseach">
              <select
                className="filter_priceProduct"
                onClick={(e) => set_category(e.target.value)}
              >
                <option value="6">Latest</option>
                <option value="3">Sort by review</option>
                <option value="1">Highest price</option>
                <option value="4">Low to lowest prices</option>
                <option value="5">By sales volume</option>
              </select>
            </form>
          </div>
        </div>

        <div className="product-area">
          {/* {console.log(SliceGoodsList)} */}
          {SliceGoodsList.map((i, index) => (
            <div
              className="box-product"
              key={index}
              onClick={() => {
                navigate(`/goods/${i.id}`);
              }}
            >
              <div>
                <div className="img">
                  <img src={"" + i.image} alt="" />
                </div>
                <ul className="txtOFproduct2">
                  <li className="name">{i.name}</li>
                  <li className="price">{i.price}</li>
                  <li className="desc">{i.store_address}</li>
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
