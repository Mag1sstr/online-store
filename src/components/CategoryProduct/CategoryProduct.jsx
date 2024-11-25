import { useParams } from "react-router-dom";
import "./CategoryProduct.css";
import { useEffect } from "react";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getProductsWithCategory } from "../../store/categoriesSlice";

export default function CategoryProduct() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.category.categoryData);
  useEffect(() => {
    dispatch(getProductsWithCategory(name));
  }, [name]);

  if (!categoryData) {
    return <Spinner />;
  }

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
