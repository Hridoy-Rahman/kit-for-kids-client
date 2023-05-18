import React from "react";

function Toy(props) {
  const { pictureUrl, name, price, rating } = props;

  return (
    <div className="toy">
      <img src={pictureUrl} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Rating: {rating}/5</p>
      <button>View Details</button>
    </div>
  );
}

export default Toy;
