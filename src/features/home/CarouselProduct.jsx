import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { category_product } from "../../libs/constants";
import CardCategory from "./CardCategory";
import { Link } from "react-router-dom";

function CarouselProduct() {
  return (
    <Splide
      aria-label="News"
      options={{
        perPage: 4,
        arrows: true,
        autoplay: true,
        type: "loop",
        pagination: false,
        breakpoints: {
          1600: { perPage: 3 },
          1280: { perPage: 2 },
          600: { perPage: 1 },
        },
      }}
    >
      {category_product.map((item, idx) => (
        <SplideSlide key={idx}>
          <Link to={`/products/${item.label}`}>
            <CardCategory data={item} />
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default CarouselProduct;
