import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./LessSection.css";
import axios from "axios";

export default function LessSection() {
  const [allData, setAllData] = useState(null);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((resp) => {
        setAllData(resp.data);
        // console.log(resp.data);
      });
  }, [limit]);

  const [openSort, setOpenSort] = useState(false);
  const [mainSort, setMainSort] = useState("Сортировать по:");
  return (
    <section className="lesssection">
      <div className="conteiner">
        <div className="lesssection__inner">
          <div
            onClick={() => setOpenSort(!openSort)}
            className="lesssection__sort"
          >
            <div className="lesssection__item">{mainSort}</div>
            <div
              className={`lesssection__items ${openSort ? "open__sort" : ""}`}
            >
              <div
                onClick={() => {
                  setMainSort("Возрастанию цены");
                  allData.sort((a, b) => a.price - b.price);
                }}
                className="lesssection__item"
              >
                Возрастанию цены
              </div>
              <div
                onClick={() => {
                  setMainSort("Уменьшению цены");
                  allData.sort((a, b) => b.price - a.price);
                }}
                className="lesssection__item"
              >
                Уменьшению цены
              </div>
            </div>
          </div>
          <h1 className="lesssection__title">All products</h1>
          <div className="lesssection__row">
            {allData?.map((item) => {
              return (
                <Card
                  key={item.id}
                  category={item.category}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  title={item.title}
                />
              );
            })}
            {/* <Card />
            <Card />
            <Card />
            <Card /> */}
          </div>
          <div className="lesssection__block">
            <button
              onClick={() => {
                setLimit(limit + 5);
              }}
              className="lesssection__button"
            >
              See more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
