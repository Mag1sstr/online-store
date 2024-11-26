import { useSelector } from "react-redux";
import "./SearchPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Spinner from "../Spinner/Spinner";

export default function SearchPage() {
  const [searchData, setSearchData] = useState(null);
  const searchValue = useSelector((state) => state.category.searchValue);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      setSearchData(resp.data);
    });
  }, []);

  let filteredData = [];
  if (searchData) {
    filteredData = searchData.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    // filteredData.sort((a, b) => searchValue.localeCompare(b.title));
  }
  if (!filteredData.length) {
    return <Spinner />;
  }

  return (
    <div className="searchpage">
      <div className="conteiner">
        <h1>SearchPage</h1>
        <div className="searchpage__row">
          {filteredData?.map((item) => {
            return (
              <Card
                key={item.id}
                category={item.category}
                id={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
