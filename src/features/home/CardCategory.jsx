import React from "react";

function CardCategory({ data }) {
  return (
    <div className="relative h-[30rem] p-2">
      <div className="relative h-full">
        <img
          src={data.image}
          alt="Product Image"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col bg-gradient-to-b from-blue-500 to-white opacity-0 hover:opacity-[0.9] rounded-lg transition-opacity duration-300">
          <span className="text-[28px] font-semibold">{data.name}</span>
          <span className=" line-clamp-2 text-center">{data.detail}</span>
        </div>
      </div>
    </div>
  );
}

export default CardCategory;
