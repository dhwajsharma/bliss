import React from "react";
import "./Product.css";
import { useNavigate } from "react-router";
import { selectPost } from "../../features/postSlice";
import { useDispatch } from "react-redux";

const Product = ({ id, title, image, price, email }) => {
  let navigate = useNavigate();
  const Dispatch = useDispatch();

  const openPost = () => {
    Dispatch(
      selectPost({
        id: id,
        title: title,
        image: image,
        price: price,
        email: email,
      })
    );
    navigate("/productPage");
  };

  return (
    <div className="product" onClick={openPost}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img src={image} alt="" />
    </div>
  );
};

export default Product;
