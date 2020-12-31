import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { toast } from "react-toastify";

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    console.log("add to basket was called");

    // dispatch item to datalayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const notify = () => {
    console.log("notified was called");
    toast(`Item successfully added`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => {
              return <p>⭐</p>;
            })}
        </div>
      </div>
      <img src={image} alt="" />
      <button
        onClick={() => {
          addToBasket();
          notify();
        }}
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
