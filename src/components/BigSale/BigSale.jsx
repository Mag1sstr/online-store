import "./BigSale.css";
import computerImage from "../../images/categoriesSection/comp.png";

export default function BigSale() {
  return (
    <div className="categories__rightside">
      <p className="categories__absolute-text">BIG SALE 20%</p>
      <div className="categories__rightside-inner">
        <p className="categories__rightside-text">the bestseller of 2022</p>
        <h1 className="categories__rightside-title">
          LENNON r2d2 <br />
          with NVIDIA 5090 TI
        </h1>
        <button className="categories__button">Shop Now</button>
      </div>
      <img className="categories__image" src={computerImage} alt="" />
    </div>
  );
}
