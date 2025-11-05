import React from "react";
import { FaEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCards = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    id,
  } = news;

  return (
    <div className="card w-full  bg-base-100 shadow-md  hover:shadow-xl transition-all">
      {/* Header: Author + Icons */}
      <div className="flex items-center bg-base-200 justify-between p-4">
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-3 text-gray-500">
          <button className="hover:text-orange-500 transition">
            <FaRegBookmark size={18} />
          </button>
          <button className="hover:text-orange-500 transition">
            <FaShareAlt size={18} />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="font-bold text-lg uppercase text-gray-800 leading-snug">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-md w-full h-48 object-cover"
        />
      </figure>

      {/* Description */}
      <div className="px-4 py-3">
        <p className="text-sm text-gray-600 leading-relaxed">
          {details.slice(0, 200)}...
        </p>
        <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold text-sm mt-2 hover:underline">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-sm" />
          ))}
          <span className="ml-1 text-gray-700 text-sm font-semibold">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye className="text-base" />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
