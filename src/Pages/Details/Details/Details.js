import React from "react";
import Appbar from "../../Shared/Appbar/Appbar";
import Footer from "../../Shared/Footer/Footer";
import ProductDetails from "../ProductDetails/ProductDetails";

const Details = () => {
  return (
    <div>
      <Appbar></Appbar>
      <ProductDetails></ProductDetails>
      <Footer></Footer>
    </div>
  );
};

export default Details;
