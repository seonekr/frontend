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
          <Route path="/registerUser" Component={RegisterUser} />
          <Route path="/forgotPassword" Component={ForgotPassword} />
          <Route path="/userRegister" Component={UserRegister} />
          <Route path="/sellerRegister" Component={SellerRegister} />
          <Route path="/sigupGoogle" Component={SigupGoogle} />
          <Route path="/additionalSeller" Component={AdditionalSeller} />
          <Route path="/more" Component={More} />
          <Route path="/" Component={Home} />
          <Route path="/productdetial" Component={ProductDetial} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
