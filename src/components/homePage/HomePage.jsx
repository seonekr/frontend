import "./homePage.css";
import Header from "../header/Header";
import Banner from "../header/Banner";
import Menu from "../menuFooter/Menu";
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
