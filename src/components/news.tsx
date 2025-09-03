import { useState, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";

type NewsProps = {
  image: string;
  date: string;
  title: string;
};

const News: FC<NewsProps> = ({ image, date, title }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-[400px] h-[400px] relative">
      <img
        src={image}
        alt={title}
        className="w-full h-[73%] rounded-t-2xl relative"
      />

      <button
        onClick={() => setLiked(!liked)}
        className={`${
          liked ? "border-red-500 text-red-500" : "border-red-500 text-white"
        } transition-colors duration-300 absolute top-4 right-10 text-2xl`}
      >
        <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} />
      </button>

      <div className="bg-[#F8F9F9] border h-[27%] rounded-b-2xl">
        <span className="text-xs p-4 pt-[15px] text-gray-600">{date}</span>
        <p className="px-4">{title}</p>
      </div>
    </div>
  );
};

export default News;
