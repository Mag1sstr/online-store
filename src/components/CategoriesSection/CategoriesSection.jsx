import "./CategoriesSection.css";

import { Route, Routes } from "react-router-dom";
import BigSale from "../BigSale/BigSale";
import Basket from "../Basket/Basket";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CategoriesSection() {
  // API взято с сайта https://fakestoreapi.com/docs

  const [categories, setCategories] = useState(null);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((resp) => {
      setCategories(resp.data);
    });
  }, []);

  return (
    <section className="categories">
      <div className="conteiner">
        <div className="categories__row">
          <div className="categories__leftside">
            <h1 className="categories__leftside-title">CATEGORIES</h1>
            <div className="categories__leftside-items">
              {categories?.map((item, index) => {
                return (
                  <p key={index} className="categories__leftside-item">
                    {item}
                  </p>
                );
              })}
              {/* <p className="categories__leftside-item">Clothes</p>
              <p className="categories__leftside-item">Shoes</p>
              <p className="categories__leftside-item">Furniture</p>
              <p className="categories__leftside-item">Cosmetics</p>
              <p className="categories__leftside-item">Travel</p>
              <p className="categories__leftside-item">Automotive</p> */}
            </div>
            <div className="categories__help">
              <p className="categories__help-text">Help</p>
              <p className="categories__help-text text__decor">
                Terms & Conditions
              </p>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<BigSale />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
          {/* <div className="categories__rightside">
            <p className="categories__absolute-text">BIG SALE 20%</p>
            <div className="categories__rightside-inner">
              <p className="categories__rightside-text">
                the bestseller of 2022
              </p>
              <h1 className="categories__rightside-title">
                LENNON r2d2 <br />
                with NVIDIA 5090 TI
              </h1>
              <button className="categories__button">Shop Now</button>
            </div>
            <img className="categories__image" src={computerImage} alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
