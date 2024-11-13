import "./TrendingSection.css";

import Card from "../Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

export default function TrendingSection() {
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=5").then((resp) => {
      setProductData(resp.data);
    });
  }, []);
  if (!productData) {
    return <Spinner />;
  }
  return (
    <section className="trending">
      <div className="conteiner">
        <div className="trending__inner">
          <h1 className="trending__title">Trending</h1>
          <div className="trending__row">
            {productData?.map((item, index) => {
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
          </div>
        </div>
      </div>
    </section>
  );
}
