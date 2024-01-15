import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginUser from "./components/loginAndSignup/LoginUser";
import RegisterUser from "./components/loginAndSignup/RegisterUser";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import UserRegister from "./components/userRegister/UserRegister";
import SellerRegister from "./components/sellerRegister/SellerRegister";
import SigupGoogle from "./components/sigupforGoogle/SigupGoogle";
import AdditionalSeller from "./components/additionalSeller/AdditionalSeller";
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
          <Route path="/more" Component={More} />
          <Route path="/" Component={Home} />
          <Route path="/productdetial" Component={ProductDetial} />
        </Routes>
      </Router>
    </>
  );
}
export default App;