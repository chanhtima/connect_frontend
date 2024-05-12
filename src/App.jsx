import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserLayout from "./Layout/UserLayout";
import Home from "./pages/Users/home/Home";
import Login from "./pages/Login";
import DashboardLayout from "./Layout/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductIndex from "./pages/Dashboard/products/ProductIndex";
import Products from "./pages/Dashboard/products/Products";
import About from './pages/Users/about/About'
import NewsIndex from "./pages/Dashboard/news/NewsIndex";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
        />
        {isAuthenticated ? (
          <Route path="/dashboard/*" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            {/*product */}
            <Route path="product" element={<ProductIndex />} />
            <Route path="product/:id" element={<Products />} />
            <Route path="product/create" element={<Products />} />
            {/* News */}
            <Route path="news" element={<NewsIndex />} />
            {/* <Route path="product/:id" element={<Products />} /> */}
            {/* <Route path="product/create" element={<Products />} /> */}
          </Route>
        ) : (
          <Route path="/dashboard" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
