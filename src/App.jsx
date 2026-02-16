import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";


import Vendor from "./pages/Vendor";
import Cart from "./components/Cart";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>

        {/* 👇 NAVBAR IMPORTED HERE */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/cart" element={<Cart />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/auth" element={<Auth />} />
                     <Route path="/Profile" element={<Profile />} />



        </Routes>

      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;