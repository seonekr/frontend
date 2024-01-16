import "./homePage.css";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import Banner from "../header/Banner";
import ProductHome from "../products/ProductHome";
import Category from "./Category";


const HomePage = () => {
 
  return (
    <>
      <Header />
      <Banner />
      <Category />
      <ProductHome />
      <Menu/>
    </>
  );
};

export default HomePage;
