import React from "react";
import { formatDate } from "../../libs/formatDate";

function CardNoImageNews({ data }) {
  return (
    <div className="flex items-center gap-6">
      <div className=" bg-dark-blue w-20 max-lg:px-4 flex flex-col justify-center items-center text-white py-2 rounded-xl">
        <p className="text-[24px]">
          {formatDate(data.updatedAt).split(" ")[1]}
        </p>
        <p className="text-[18px]">
          {formatDate(data.updatedAt).split(" ")[0]}
        </p>
      </div>
      <div>
        <h2 className="text-[24px] line-clamp-1">{data.NE_name}</h2>
        <p className=" line-clamp-2">{data.NE_detail}</p>
      </div>
    </div>
  );
}

export default CardNoImageNews;
