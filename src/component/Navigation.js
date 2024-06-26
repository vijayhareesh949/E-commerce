import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import Homes from "./home";
import Products from "./products";
import Navbar1 from "./navbar";
import ProductCard from "./productcard";
import Cart from "./cart";
import About from "./about";
import Contact from "./contact";
import Checkout from "./checkout";
import Login from "./login";
import RegistrationForm from "./registration";

const Navigation = () => {
  return (
    <>
    
      <BrowserRouter>
      <Navbar1/>
        <Routes>
          
          <Route path="/" element={<Homes/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductCard/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about" element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/Checkout" element={<Checkout/>}/>
          <Route path="/register" element={<RegistrationForm/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;


