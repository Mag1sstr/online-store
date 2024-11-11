import "./Footer.css";
import logoImage from "../../images/logo.svg";
import githubImage from "../../images/github.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="conteiner">
        <div className="footer__row">
          <img style={{ width: "61px" }} src={logoImage} alt="" />
          <p className="footer__develop">
            Developed by <span className="footer__span">Karachev</span>
          </p>
          <a target="_blank" href="https://github.com/Mag1sstr">
            <img style={{ width: "36px" }} src={githubImage} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
