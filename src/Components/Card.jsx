/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { ContextGlobal } from "../Context/global.context";

const Card = ({ name, username, id, isFavorite }) => {
  const { toggleFavorite } = useContext(ContextGlobal);

  const [fav, setFav] = useState(isFavorite);

  const addFav = () => {
    const value = !fav;
    setFav(value);
    toggleFavorite({ id, isFavorite: value });
    alert(`${!fav ? "Added to favorites" : "Removed from favorites"}`);
  };

  return (
    <div className="max-w-[200px] border-2 border-gray-200 p-2 ">
      <img src={"https://res.cloudinary.com/dyntsz5qv/image/upload/v1733428959/doctor_wob2v0.jpg"} alt={`${id}-card`} />
      <div className="text-center my-4">
        <Link
          to={`/detail/${id}`}
          className="hover:text-[#888888] hover:font-semibold dark:hover:text-blue-500"
        >
          <h3>{name}</h3>
        </Link>
        <h4>{username}</h4>
      </div>

      <button
        onClick={addFav}
        className="bg-gray-200 w-full p-2 text-blue-500 flex items-center justify-center"
      >
        {" "}
        {fav ? (
          <FaStar className="h-5 w-5" />
        ) : (
          <FaRegStar className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

export default Card;
