import "./homePage.css";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import Banner from "../header/Banner";
import ProductHome from "../products/ProductHome";
import Category from "./Category";
import axios from "axios";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    AllProducts();
  });

  const AllProducts = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/store", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Header />
      <Banner />
      <Category />
      <ProductHome />
      <Menu />
    </>
  );
};

export default HomePage;
