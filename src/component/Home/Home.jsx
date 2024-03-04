import { Fragment } from "react";
import "./Product.css";
import Product from "./Product";
import Reward from "../reward/Reward";
import Test from "../pickup/Test";
import Banner from "../banner/Banner"


const Home = () => {


  return (
    <Fragment>
    
       {/* <Bannerr/> */}
       <Banner/> 
      <Product />
      <Reward />
      <Test/>  
      
    </Fragment>

  );
};

export default Home;