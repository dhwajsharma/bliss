import React from "react";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://t3.ftcdn.net/jpg/03/21/97/42/360_F_321974259_BnmlxfkknMol8HiQ0dg1bwQizor48uB9.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/51u2E5fNq8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="As a Man Thinketh"
            price={9.99}
            image="https://m.media-amazon.com/images/I/81tEgsxpNZS._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Ikigai: The Japanese secret to a long and happy life "
            price={24.99}
            image="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="The Book Thief: The life-affirming international bestseller as seen on TikTok"
            price={12.99}
            image="https://m.media-amazon.com/images/I/81YPgi4vpDL._AC_UY218_.jpg"
            rating={3}
          />
          <Product
            id="5"
            title="Easy Bake Oven Cookbook with Pictures: Easy and Amazing Baking Recipes for Kids"
            price={5.99}
            image="https://m.media-amazon.com/images/I/81njfRlRuTL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Will: The Sunday Times Bestselling Autobiography"
            price={45.99}
            image="https://m.media-amazon.com/images/I/91C0eiPBxLL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
