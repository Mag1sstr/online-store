import "./Basket.css";
import image from "../../images/trendingSection/01.png";
import deleteImage from "../../images/delete.png";

export default function Basket() {
  return (
    <div className="basket">
      <div className="conteiner">
        <div className="categories__rightside">
          <p className="basket__title">Your cart</p>
          <div className="basket__column">
            <div className="basket__card">
              <img className="basket__card-image" src={image} alt="" />
              <div className="basket__card-block">
                <p className="basket__card-title">Nike ZoomX 2023</p>
                <p className="basket__card-text">Sneakers</p>
              </div>
              <p className="basket__card-price">99$</p>
              <div className="basket__card-row">
                <button className="basket__card-minus">-</button>
                <p className="basket__card-count">1</p>
                <button className="basket__card-plus">+</button>
              </div>
              <img src={deleteImage} alt="" />
            </div>
            <div className="basket__card">
              <img className="basket__card-image" src={image} alt="" />
              <div className="basket__card-block">
                <p className="basket__card-title">Nike ZoomX 2023</p>
                <p className="basket__card-text">Sneakers</p>
              </div>
              <p className="basket__card-price">99$</p>
              <div className="basket__card-row">
                <button className="basket__card-minus">-</button>
                <p className="basket__card-count">1</p>
                <button className="basket__card-plus">+</button>
              </div>
              <img src={deleteImage} alt="" />
            </div>
            <div className="basket__card">
              <img className="basket__card-image" src={image} alt="" />
              <div className="basket__card-block">
                <p className="basket__card-title">Nike ZoomX 2023</p>
                <p className="basket__card-text">Sneakers</p>
              </div>
              <p className="basket__card-price">99$</p>
              <div className="basket__card-row">
                <button className="basket__card-minus">-</button>
                <p className="basket__card-count">1</p>
                <button className="basket__card-plus">+</button>
              </div>
              <img src={deleteImage} alt="" />
            </div>
            <div className="basket__card">
              <img className="basket__card-image" src={image} alt="" />
              <div className="basket__card-block">
                <p className="basket__card-title">Nike ZoomX 2023</p>
                <p className="basket__card-text">Sneakers</p>
              </div>
              <p className="basket__card-price">99$</p>
              <div className="basket__card-row">
                <button className="basket__card-minus">-</button>
                <p className="basket__card-count">1</p>
                <button className="basket__card-plus">+</button>
              </div>
              <img src={deleteImage} alt="" />
            </div>
            <div className="basket__card">
              <img className="basket__card-image" src={image} alt="" />
              <div className="basket__card-block">
                <p className="basket__card-title">Nike ZoomX 2023</p>
                <p className="basket__card-text">Sneakers</p>
              </div>
              <p className="basket__card-price">99$</p>
              <div className="basket__card-row">
                <button className="basket__card-minus">-</button>
                <p className="basket__card-count">1</p>
                <button className="basket__card-plus">+</button>
              </div>
              <img src={deleteImage} alt="" />
            </div>
            <div className="basket__card">
              <img className="basket__card-image" src={image} alt="" />
              <div className="basket__card-block">
                <p className="basket__card-title">Nike ZoomX 2023</p>
                <p className="basket__card-text">Sneakers</p>
              </div>
              <p className="basket__card-price">99$</p>
              <div className="basket__card-row">
                <button className="basket__card-minus">-</button>
                <p className="basket__card-count">1</p>
                <button className="basket__card-plus">+</button>
              </div>
              <img src={deleteImage} alt="" />
            </div>
          </div>
          <div className="basket__row">
            <p className="basket__row-title">
              TOTAL PRICE: <span className="basket__row-span">198$</span>
            </p>
            <button className="basket__button">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
