import Card from "../Card/Card";
import "./LessSection.css";

export default function LessSection() {
  return (
    <section className="lesssection">
      <div className="conteiner">
        <div className="lesssection__inner">
          <h1 className="lesssection__title">Less than 100$</h1>
          <div className="lesssection__row">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="lesssection__block">
            <button className="lesssection__button">See more</button>
          </div>
        </div>
      </div>
    </section>
  );
}
