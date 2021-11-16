import React from "react";
import Appbar from "../../Shared/Appbar/Appbar";
import Footer from "../../Shared/Footer/Footer";

import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import CounterHome from "../CounterHome/CounterHome";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Appbar></Appbar>
      <Banner></Banner>
      <Products></Products>
      <CounterHome></CounterHome>
      <Contact></Contact>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
