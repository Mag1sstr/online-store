import axios from "axios";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { AuthContext } from "../../contexts/AuthContext";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductPage() {
  const [productInfo, setProductInfo] = useState(null);
  const { productId } = useParams();

  const { setCurt, curt } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`).then((resp) => {
      // console.log(resp.data);
      setProductInfo(resp.data);
    });
  }, [productId]);
  return (
    <>
      {productInfo ? (
        <section className="productpage">
          <ToastContainer />
          <div className="conteiner">
            <div className="productpage__inner">
              <div className="productpage__row">
                <img
                  className="productpage__image"
                  src={productInfo.image}
                  alt=""
                />
                <div className="productpage__info">
                  <p className="productpage__title">{productInfo.title}</p>
                  <p className="productpage_price">{productInfo.price}</p>
                  <p className="productpage__category">
                    Категория:{" "}
                    <span className="productpage__span">
                      {productInfo.category}
                    </span>
                  </p>
                  <p className="productpage__category">
                    В наличии:{" "}
                    <span className="productpage__span">
                      {productInfo.rating.count} шт.
                    </span>
                  </p>
                  <p className="productpage__category">
                    Рейтинг:{" "}
                    <span className="productpage__span">
                      {productInfo.rating.rate}
                    </span>
                  </p>

                  <p className="productpage__desc">{productInfo.description}</p>
                  <button
                    onClick={() => {
                      let newArr = [...curt];
                      newArr.push({
                        title: productInfo.title,
                        price: productInfo.price,
                        image: productInfo.image,
                        id: productInfo.id,
                        text: productInfo.category,
                        count: 1,
                      });
                      setCurt(newArr);
                      toast.success("Добалено в корзину");
                    }}
                    className="productpage__button"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
}
