import React from "react";
import "./ProductDetails.css";
export default function ProductDetails() {
  return (
    <div className="product-details-container">
      <img
        src="https://cdn-images-1.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg"
        alt="image"
        className="product-image"
      />
      <div className="details">
        <p>
          <span>Title:</span> Web Development Course
        </p>
        <p>
          <span>Category: </span> Website Development
        </p>
        <p>
          <span>Price: </span> 34$
        </p>
        <p>
          <span>Description:</span> Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Enim rem explicabo sunt pariatur vel blanditiis
          cupiditate saepe nihil placeat ipsam laudantium vero, similique dolore
          aspernatur sed repellat doloremque veritatis earum maxime, quia
          dolores molestiae expedita. Explicabo reprehenderit vitae suscipit
          alias in quam ullam vel pariatur, eos quo consectetur est dolorem?
        </p>
        <button className="buy-button">Enrolled</button>
      </div>
    </div>
  );
}
