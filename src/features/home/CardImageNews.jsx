import React from "react";
import { formatDate } from "../../libs/formatDate";


function CardImageNews({ data }) {
  return (
    <div className="card  w-full bg-base-100 shadow-xl">
      <div className=" relative">
        <figure>
          {data.NE_image.length !== 0 && (
            <img
              src={`data:${data.NE_image[0].image_type};base64,${data.NE_image[0].image}`}
              alt="Product Image"
              className="w-full   max-h-[19rem] object-cover rounded-t-lg"
            />
          )}
        </figure>
        <div className=" absolute right-0   bottom-[-1.5rem] bg-dark-blue w-20 max-lg:px-4 flex flex-col justify-center items-center text-white py-2 rounded-xl">
          <p className="text-[24px]">
            {formatDate(data.updatedAt).split(" ")[1]}
          </p>
          <p className="text-[18px]">
            {formatDate(data.updatedAt).split(" ")[0]}
          </p>
        </div>
      </div>

      <div className="card-body min-h-[12.75rem]">
        <h2 className="card-title line-clamp-1 text-[24px] hover:text-blue-2">{data.NE_name}</h2>
        <p className="line-clamp-3  ">{data.NE_detail}</p>
        <div className="card-actions">
          <button  className=" font-semibold">Read more</button>
        </div>
      </div>
    </div>
  );
}

export default CardImageNews;
