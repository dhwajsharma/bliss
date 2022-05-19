import React from "react";
import { useSelector } from "react-redux";
import { selectpostIsOpen } from "../../features/postSlice";
import { useStateValue } from "../../StateProvider";
import "./ProductPage.css";

const ProductPage = () => {
  const selectedPost = useSelector(selectpostIsOpen);
  const [{ basket }, dispatch] = useStateValue();

  console.log(selectedPost);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: selectedPost.id,
        title: selectedPost.title,
        image: selectedPost.image,
        price: selectedPost.price,
        rating: selectedPost.rating,
      },
    });
  };

  return (
    <div className="productpage">
      <div className="productpage__left">
        <img src={selectedPost?.image} alt="" />
      </div>
      <div className="openpost__right">
        <div className="openpost__message">
          <h2>Title: </h2>
          <p>{selectedPost?.title}</p>

          {/* <h2>Description: </h2> */}
          {/* <p>{selectedPost?.description}</p> */}

          <h2>Price: </h2>
          <p>
            {"₹ "}
            {selectedPost?.price}
          </p>
          <button onClick={addToBasket}>Add to Cart</button>

          {/* <h2>Contact Number: </h2> */}
          {/* <p>{selectedPost?.number}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
