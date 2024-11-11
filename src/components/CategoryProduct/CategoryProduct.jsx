import { useParams } from "react-router-dom";
import "./CategoryProduct.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

export default function CategoryProduct() {
  const [categoryData, setCategoryData] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${name}`)
      .then((resp) => {
        setCategoryData(resp.data);
      });
  }, [name]);
  //   console.log(name);

  return (
    <div className="categoryproduct">
      <div className="conteiner">
        <h1 className="categoryproduct__title">{name}</h1>
        <div className="categoryproduct__row">
          {categoryData?.map((item) => {
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
  );
}
