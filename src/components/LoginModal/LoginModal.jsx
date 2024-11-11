import { useContext, useState } from "react";
import "./LoginModal.css";
import { AuthContext } from "../../contexts/AuthContext";

export default function LoginModal({ style, setClickModal }) {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const { signIn } = useContext(AuthContext);

  return (
    <div onClick={() => setClickModal(false)} className={`loginmodal ${style}`}>
      <div onClick={(e) => e.stopPropagation()} className="loginmodal__form">
        <p className="loginmodal__title">Register</p>
        <p className="loginmodal__text">Логин: jimmie_k | Пароль: klein*#%*</p>
        <input
          value={inputValue.username}
          onChange={(e) =>
            setInputValue({ ...inputValue, username: e.target.value })
          }
          className="loginmodal__input"
          type="text"
          placeholder="Username"
        />
        <input
          value={inputValue.password}
          onChange={(e) =>
            setInputValue({ ...inputValue, password: e.target.value })
          }
          className="loginmodal__input"
          type="text"
          placeholder="Password"
        />
        <button
          onClick={() => {
            signIn(inputValue.username, inputValue.password);
            setClickModal(false);
          }}
          className="loginmodal__button"
        >
          Sing in
        </button>
      </div>
    </div>
  );
}
