import "./Header.css";
import logoImage from "../../images/logo.svg";
import searchImage from "../../images/header/search.svg";
import likedImage from "../../images/header/liked.svg";
import basketImage from "../../images/header/basket.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="conteiner">
        <div className="header__row">
          <img
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
            src={logoImage}
            alt="logo"
          />
          <div className="header__user">
            <div className="header__user-image"></div>
            <p className="header__user-name">Unknown user</p>
          </div>
          <div className="header__search">
            <img
              className="header__search-img"
              src={searchImage}
              alt="search"
            />
            <input
              className="header__search-input"
              type="text"
              placeholder="Search for anything..."
            />
          </div>
          <div className="header__icons">
            <img src={likedImage} alt="" />
            <div
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/basket")}
              className="header__basket-block"
            >
              <img src={basketImage} alt="" />
              <div className="header__basket-circle">1</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
