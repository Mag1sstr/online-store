import "./CategoriesSection.css";
import computerImage from "../../images/categoriesSection/comp.png";

export default function CategoriesSection() {
  return (
    <section className="categories">
      <div className="conteiner">
        <div className="categories__row">
          <div className="categories__leftside">
            <h1 className="categories__leftside-title">CATEGORIES</h1>
            <div className="categories__leftside-items">
              <p className="categories__leftside-item">Computers</p>
              <p className="categories__leftside-item">Clothes</p>
              <p className="categories__leftside-item">Shoes</p>
              <p className="categories__leftside-item">Furniture</p>
              <p className="categories__leftside-item">Cosmetics</p>
              <p className="categories__leftside-item">Travel</p>
              <p className="categories__leftside-item">Automotive</p>
            </div>
            <div className="categories__help">
              <p className="categories__help-text">Help</p>
              <p className="categories__help-text text__decor">
                Terms & Conditions
              </p>
            </div>
          </div>
          <div className="categories__rightside">
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
          </div>
        </div>
      </div>
    </section>
  );
}
