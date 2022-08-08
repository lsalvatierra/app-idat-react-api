import React from "react";
import { Routes , Route } from "react-router-dom";

import { CheckoutScreen } from "./checkout";
import { NotFoundScreen } from "./not-found";
import { LoginScreen } from "./oauth/login";
import { HomeScreen } from "./home";
import { HistoryScreen } from "./history";
// import { StoreScreen } from "./store";
import { CartScreen } from "./cart";
import { StoreScreen } from "./store";
import { ProductScreen } from "./store/product";
// import { ProductScreen } from "./store/product";

export const Navigation = () => (
  <Routes>
    <Route path="/oauth/login" element={<LoginScreen />} />
    <Route exact path="/" element={<HomeScreen />} />
    <Route exact path="/cart" element={<CartScreen />} />
    <Route exact path="/checkout" element={<CheckoutScreen />} />
    <Route exact path="/history" element={ <HistoryScreen />}  />
    <Route exact path="/store" element={ <StoreScreen />}  />
    <Route exact path="/product/:id" element={ <ProductScreen />}  />
    <Route path="*" component={<NotFoundScreen />} />
  </Routes>
);