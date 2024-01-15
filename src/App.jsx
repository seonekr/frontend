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
import More from "./components/more/More";
import Home from "./components/Home";
import ProductDetial from "./components/products/ProductDetial";

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
          <Route path="/" Component={Home} />
          <Route path="/productdetial" Component={ProductDetial} />
        </Routes>
      </Router>
    </>
  );
}
export default App;