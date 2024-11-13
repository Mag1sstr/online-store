import { Route, Routes } from "react-router-dom";
import "./App.css";
import CategoriesSection from "./components/CategoriesSection/CategoriesSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LessSection from "./components/LessSection/LessSection";
import TrendingSection from "./components/TrendingSection/TrendingSection";
import Main from "./components/Main/Main";
import Basket from "./components/Basket/Basket";
import CategoryProduct from "./components/CategoryProduct/CategoryProduct";
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/categories/:name" element={<CategoryProduct />} />
        <Route path="/products/:productId" element={<ProductPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
