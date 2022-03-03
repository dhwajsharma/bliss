import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Product from "../Product/Product";
import FadeIn from "react-fade-in";
import "./Home.css";

const Home = () => {
  const [result, setResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setResult(data));
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          className="home__image"
          src="https://t3.ftcdn.net/jpg/03/21/97/42/360_F_321974259_BnmlxfkknMol8HiQ0dg1bwQizor48uB9.jpg"
          alt=""
        />
        <FadeIn>
          <div className="home__product">
            {result
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((product, key) => (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                />
              ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Home;
