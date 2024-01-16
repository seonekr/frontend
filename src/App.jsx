import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginUser from "./components/loginAndSignup/LoginUser";
import RegisterUser from "./components/loginAndSignup/RegisterUser";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import UserRegister from "./components/userRegister/UserRegister";
import SellerRegister from "./components/sellerRegister/SellerRegister";
import SigupGoogle from "./components/sigupforGoogle/SigupGoogle";
import AdditionalSeller from "./components/additionalSeller/AdditionalSeller";
import ProfileEdit from './components/profile/ProfileEdit';
import Profile from './components/profile/Profile';
import SellerEdit from './components/sellerRegister/SellerEdit';
import Terms from './components/termsandprivacy/Terms';
import Privacy from './components/termsandprivacy/Privacy';
import More from "./components/more/More";
import Home from "./components/homePage/HomePage";
import ProductDetails from "./components/products/ProductDetails";
import Cart from "./components/cart/Cart";
import Payment from "./components/cart/Payment";
import Order from "./components/order/Order";
import Bill from "./components/order/Bill";
import Stores from "./components/stores/Store";
import Store_management from "./components/store_management/Store_management";
import AddProduct from "./components/addProduct/AddProduct";
import EditProduct from "./components/editProduct/EditProduct";
import ReviewStore from "./components/reviewStore/ReviewStore";
import Payment_store from "./components/payment_store/PaymentStore";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/loginuser" Component={LoginUser} />
          <Route path="/registeruser" Component={RegisterUser} />
          <Route path="/forgotpassword" Component={ForgotPassword} />
          <Route path="/userregister" Component={UserRegister} />
          <Route path="/sellerregister" Component={SellerRegister} />
          <Route path="/sigupgoogle" Component={SigupGoogle} />
          <Route path="/additionalseller" Component={AdditionalSeller} />
          <Route path="/profileedit" Component={ProfileEdit} />
          <Route path="/profile" Component={Profile} />
          <Route path="/selleredit" Component={SellerEdit} />
          <Route path="/more" Component={More} />
          <Route path="/terms" Component={Terms} />
          <Route path="/privacy" Component={Privacy} />
          <Route path="/" Component={Home} />
          <Route path="/productDetails" Component={ProductDetails} />
          <Route path="/cart" Component={Cart} />
          <Route path="/payment" Component={Payment} />
          <Route path="/order" Component={Order} />
          <Route path="/bill" Component={Bill} />
          <Route path="/stores" Component={Stores} />
          <Route path="/store_management" Component={Store_management} />
          <Route path="/addProduct" Component={AddProduct} />
          <Route path="/editProduct" Component={EditProduct} />
          <Route path="/eviewStore" Component={ReviewStore} />
          <Route path="/payment_store" Component={Payment_store} />
        </Routes>
      </Router>
    </>
  );
}
export default App;