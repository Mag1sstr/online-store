import "./Basket.css";
import image from "../../images/trendingSection/01.png";
import deleteImage from "../../images/delete.png";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

export default function Basket() {
  const { curt, setCurt } = useContext(AuthContext);
  // const [basketData, setBasketData] = useState([
  //   {
  //     id: 1,
  //     title: "Nike ZoomX 2023",
  //     text: "Sneakers",
  //     price: 150,
  //     count: 1,
  //     image: image,
  //   },
  //   {
  //     id: 2,
  //     title: "Nike ZoomX 2023",
  //     text: "Sneakers",
  //     price: 99,
  //     count: 1,
  //     image: image,
  //   },
  //   {
  //     id: 3,
  //     title: "Nike ZoomX 2023",
  //     text: "Sneakers",
  //     price: 100,
  //     count: 1,
  //     image: image,
  //   },
  // ]);
  let totalSum = 0;
  curt.forEach((item) => {
    totalSum += item.price * item.count;
  });

  return (
    <div className="basket">
      <div className="conteiner">
        <div className="categories__rightside">
          <p className="basket__title">Your cart</p>
          <div className="basket__column">
            {curt.length ? (
              curt.map((item, index) => (
                <div className="basket__card">
                  <img className="basket__card-image" src={item.image} alt="" />
                  <div className="basket__card-block">
                    <p className="basket__card-title">{item.title}</p>
                    <p className="basket__card-text">{item.text}</p>
                  </div>
                  <p className="basket__card-price">
                    {item.price * item.count}$
                  </p>
                  <div className="basket__card-row">
                    <button
                      onClick={() => {
                        let newArr = [...curt];
                        item.count > 1 ? (newArr[index].count -= 1) : null;
                        setCurt(newArr);
                      }}
                      className="basket__card-minus"
                    >
                      -
                    </button>
                    <p className="basket__card-count">{item.count}</p>
                    <button
                      onClick={() => {
                        let newArr = [...curt];
                        newArr[index].count += 1;
                        setCurt(newArr);
                      }}
                      className="basket__card-plus"
                    >
                      +
                    </button>
                  </div>
                  <img
                    onClick={() => {
                      const filteredData = curt.filter(
                        (el) => el.id !== item.id
                      );
                      setCurt(filteredData);
                    }}
                    src={deleteImage}
                    style={{ cursor: "pointer" }}
                    alt=""
                  />
                </div>
              ))
            ) : (
              <p style={{ fontSize: "48px" }}>Нет товара в корзине</p>
            )}
          </div>
          <div className="basket__row">
            <p className="basket__row-title">
              TOTAL PRICE: <span className="basket__row-span">{totalSum}$</span>
            </p>
            <button className="basket__button">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
