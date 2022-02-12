// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import AdminDashboard from "./pages/Admin/Dashboard";
import Service from "./pages/Admin/Service";
import Settings from "./pages/Settings";
import Clients from "./pages/Admin/Clients";
import Inventory from "./pages/Admin/Inventory";
import AddProduct from "./pages/Admin/AddProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* External Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/client/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/product-details/:id"
          element={<ProductDetails />}
        />
        <Route path="/checkout" element={<Checkout />} />

        {/* Main App pages */}
        <Route path="/service" element={<Service />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/clients" element={<Clients />} />
        <Route path="/admin/inventory" element={<Inventory />} />
        <Route path="/admin/addproduct" element={<AddProduct />} />
        <Route path="/adminstaff" element={<Admin_staff />} />
        <Route path="/account/settings" element={<Settings />} />

        {/* Do not put any route after this one */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
