import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ButtonSeeMore from "../../components/ButtonSeeMore";
import { getNewsAll } from "../../api/newsApi";
import CardNoImageNews from "../../features/home/CardNoImageNews";
import CardImageNews from "../../features/home/CardImageNews";
import CarouselProduct from "../../features/home/CarouselProduct";

function Home() {
  const [newsList, setNewsList] = useState([]);
  const search = {
    page: 1,
    limit: 10,
    total: 0,
  };
  useEffect(() => {
    const getDate = async () => {
      const news = await getNewsAll(search);
      setNewsList(news.data.newsData);
      console.log(news.data.newsData);
    };

    getDate();
  }, []);

  return (
    <div>
      {/* สไลด์ */}
      <Splide
        aria-label="My Favorite Images"
        options={{
          pagination: false,
          arrows: false,
          autoplay: true,
          type: "loop",
        }}
      >
        {/* {sildeImage.map((url, idx) => ( */}
        <SplideSlide>
          <img
            src="/images/aerial-view-cargo-ship-cargo-container-harbor 1.png"
            alt="logo "
            className="w-full   lg:h-[30rem] object-cover object-top aspect-video"
          />
        </SplideSlide>
        {/* ))} */}
      </Splide>
      {/* about */}
      <div className=" text-center section-container">
        <p className="uppercase font-semibold text-dark-blue">ABOUT us</p>
        <h1 className="text-head">We are Online-Commerce solution platform</h1>
        <p className="lg:w-1/2 mx-auto ">
          Connnect Asia Interfood Co., Ltd was established in 2016 as a trading
          company in Thailand with the aim of being reliable partner in
          international trade. We are striving to import the high quality and
          exclusive products as the best alternative for people’s everyday need
          and happiness. Connect Asia Interfood Co., Ltd. is dedicated to
          connecting locals and the world with good products for people and we
          try to find the most effective ways to develop locally.
        </p>
      </div>
      {/* LATEST NEWS & ARTICLES */}
      <div className=" bg-blue-1">
        <div className="section-container">
          <div className=" flex max-lg:flex-col items-center justify-between gap-8 mb-8">
            <h2 className="text-head">LATEST NEWS & ARTICLES</h2>
            <div className=" max-lg:hidden">
              <ButtonSeeMore Url="/news" Label="See More" />
            </div>
          </div>
          {/* news not image */}
          {newsList.slice(0, 3).map((item, idx) => (
            <div key={idx} className="mb-3 pb-3 border-b-4">
              <Link to={`/news/${item._id}`}>
                <CardNoImageNews data={item} />
              </Link>
            </div>
          ))}
          <div className=" grid grid-cols-12 gap-4">
            {newsList.slice(4, 8).map((item, idx) => (
              <div
                key={idx}
                className=" col-span-12 sm:col-span-6 xl:col-span-3"
              >
                <Link to={`/news/${item._id}`}>
                  <CardImageNews data={item} />
                </Link>
              </div>
            ))}
          </div>

          {/* ButtonSeeMore md */}
          <div className=" lg:hidden text-center mt-8">
            <ButtonSeeMore Url="/news" Label="See More" />
          </div>
        </div>
      </div>
      {/* PRODUCT CATALOGUE */}
      <div className="section-container">
        <div className=" flex max-lg:flex-col items-center justify-between gap-8 mb-8">
          <h2 className="text-head">PRODUCT CATALOGUE</h2>
          <div className=" max-lg:hidden">
            <ButtonSeeMore Url="/products" Label="See More" />
          </div>
        </div>
        <div className="grid grid-cols-12 items-center gap-4">
          {/*  */}
          <div className=" col-span-12  lg:col-span-6 xl:col-span-3">
            <p className="indent-16">
              Connnect Asia Interfood Co., Ltd was established in 2016 as a
              trading company in Thailand with the aim of being reliable partner
              in international trade.
            </p>
            <p className=" indent-16">
              We are striving to import the high quality and exclusive products
              as the best alternative for people’s everyday need and happiness.
            </p>
          </div>
          <div className=" col-span-12  lg:col-span-6 xl:col-span-9">
            <CarouselProduct/>
          </div>
        </div>
        <div className=" lg:hidden text-center mt-8">
          <ButtonSeeMore Url="/products" Label="See More" />
        </div>
      </div>
    </div>
  );
}

export default Home;
