import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UserList from "./components/UserList";
import PageNotFound from "./components/PageNotFound";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  return (
    // <AuthProvider>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<Login />} />
    //       <Route path="/dashboard" element={<Dashboard />} />
    //       <Route path="/users" element={<UserList />} />
    //       <Route path="*" element={<PageNotFound />} />
    //     </Routes>
    //   </Router>
    // </AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
