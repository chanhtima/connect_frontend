import React from "react";

function CardProduct({ data }) {
  return (
    <div className="card  w-full bg-base-100 shadow-xl border-blue-3 border">
      <div className=" relative">
        <figure className="p-6  bg-gray-1/20 rounded-t-lg">
          {data.PD_image.length !== 0 && (
            <img
              src={`data:${data.PD_image[0].image_type};base64,${data.PD_image[0].image}`}
              alt="Product Image"
              className="object-cover max-h-[9.5rem]"
            />
          )}
        </figure>
      </div>

      <div className="card-body min-h-[10rem]">
        <h2 className="card-title line-clamp-1 text-[18px] hover:text-blue-2">
          {data.PD_name}
        </h2>
        <p className="line-clamp-2 border-t-2 pt-2  ">{data.PD_detail}</p>
      </div>
    </div>
  );
}

export default CardProduct;
