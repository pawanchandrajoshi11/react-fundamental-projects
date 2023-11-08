import { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 150)}...`}
          {readMore ? (
            <button
              type="button"
              className="info-btn"
              onClick={() => setReadMore(!readMore)}
            >
              show less
            </button>
          ) : (
            <button
              type="button"
              className="info-btn"
              onClick={() => setReadMore(!readMore)}
            >
              read more
            </button>
          )}
        </p>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
