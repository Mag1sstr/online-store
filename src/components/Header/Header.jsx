import "./Header.css";
import logoImage from "../../images/logo.svg";
import searchImage from "../../images/header/search.svg";
import likedImage from "../../images/header/liked.svg";
import basketImage from "../../images/header/basket.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import { AuthContext } from "../../contexts/AuthContext";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../store/categoriesSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.category.searchValue);
  const [clickModal, setClickModal] = useState(false);
  // const [searchValue, setSearchValue] = useState("");
  const { user, setUser, curt } = useContext(AuthContext);

  useEffect(() => {
    if (searchValue.trim().length) {
      navigate("/search");
    } else {
      navigate("/");
    }
  }, [searchValue]);

  // console.log(searchValue);

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
          {user ? (
            <div className="header__auth">
              <p className="header__auth-name">
                {`${user.name.firstname} ${user.name.lastname}(${user.email})`}
              </p>
              <p
                onClick={() => {
                  setUser(null);
                  localStorage.setItem("token", null);
                }}
                className="header__auth-btn"
              >
                Выйти
              </p>
            </div>
          ) : (
            <div className="header__user">
              <div className="header__user-image"></div>
              <LoginModal
                setClickModal={setClickModal}
                style={clickModal ? "open__modal" : ""}
              />
              <p
                onClick={() => {
                  setClickModal(true);
                }}
                className="header__user-name"
              >
                Sign in
              </p>
            </div>
          )}
          <div className="header__search">
            <img
              className="header__search-img"
              src={searchImage}
              alt="search"
            />
            <input
              value={searchValue}
              onChange={(e) => dispatch(setSearchValue(e.target.value))}
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
              <div className="header__basket-circle">{curt.length}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
