import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./billStore.css";

const BillStore = () => {

  return (
    <>
      <div className="bill">
        <div className="bill-detial newspanBox" >
          <div className="guopoidHead">
            <div className="idf">
              <p>OrderID: </p>
              <p>UserID: </p>
              <p>Name: </p>
            </div>
          </div>
          <div className="billGopBox">
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Color</th>
                  <th>Size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>name</td>
                  <td>2,000</td>
                  <td>3</td>
                  <td>red</td>
                  <td>L</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="titlePrice">
            <p>Total:</p>
            <p>2,000 KIP</p>
          </div>
          <div className="place-on">
            <p>Place on: BCEL ONE</p>
            <p>Payment method: MasterCard</p>
            <p>Status: something</p>
            <p>Delivery: company name</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillStore;
