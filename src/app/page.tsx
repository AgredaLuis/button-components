"use client"

import React from "react";
import LoginPage from "@/components/templates/LoginPage";
import CartPage from "@/components/templates/CartPage";
import CartListPage from "@/components/templates/CartListPage";


const HomePage = () => {
  return (
    <div>
      HomePage
      <LoginPage />
      <CartPage />
      <CartListPage/>
    </div>
  );
};

export default HomePage;
