import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import FadeIn from "react-fade-in";
import "./Home.css";
import InputBox from "../InputBox/InputBox";
import { db } from "../../firebase";

const Home = () => {
  const [result, setResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
            timestamp: null,
          }))
        )
      );
  }, []);

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
        <InputBox />
        <img
          className="home__image"
          src="https://t3.ftcdn.net/jpg/03/21/97/42/360_F_321974259_BnmlxfkknMol8HiQ0dg1bwQizor48uB9.jpg"
          alt=""
        />
        <FadeIn>
          <div className="home__product">
            {post
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.data.title}
                  price={product.data.price}
                  image={product.data.image}
                  email={product.data.email}
                />
              ))}
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
              .map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  email={product.email}
                />
              ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Home;
