import "./Card.css";
import cardImage from "../../images/trendingSection/01.png";
import { useNavigate } from "react-router-dom";

export default function Card({ category, image, price, title, id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/products/${id}`);
      }}
      className="trending__card"
    >
      <img className="trending__card-image" src={image} alt="" />
      <p className="trending__card-title">{title}</p>
      <p className="trending__card-text">{category}</p>
      <div className="trending__card-row">
        <p className="trending__card-price">{price}$</p>
        <p className="trending__card-counts">19 people purchased</p>
      </div>
    </div>
  );
}
