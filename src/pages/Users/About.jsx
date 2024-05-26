import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import img1 from "../../../public/images/img1-min-1024x618 2.png";
import img2 from "../../../public/images/img2-min-1024x615 2.png";
import img3 from "../../../public/images/city-1 1.png";

function About() {
  return (
    <>
      <Breadcrumbs
        page_name="About us"
        page_url="/about"
        // sub_page="Front-End Developer"
        title_name="About us"
      />
      <div className="section-container min-h-screen">
        <div className=" text-center">
          <h1 className="text-head">
            We are Online-Commerce solution platform
          </h1>
          <p className=" lg:w-[60%] mx-auto font-light">
            Connnect Asia Interfood Co., Ltd was established in 2016 as a
            trading company in Thailand with the aim of being reliable partner
            in international trade. We are striving to import the high quality
            and exclusive products as the best alternative for people’s everyday
            need and happiness. Connect Asia Interfood Co., Ltd. is dedicated to
            connecting locals and the world with good products for people and we
            try to find the most effective ways to develop locally.
          </p>
        </div>
        <div className=" grid grid-cols-2 mt-4 gap-4">
          <div className=" col-span-2 lg:col-span-1">
            <img src={img1} alt="" className="w-full" />
          </div>
          <div className=" col-span-2 lg:col-span-1">
            <img src={img2} alt="" className="w-full" />
          </div>
        </div>
        <div className=" text-center mt-4">
          <h2 className="text-[26px] mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className=" lg:w-[60%] mx-auto font-light">
            Connnect Asia Interfood Co., Ltd was established in 2016 as a
            trading company in Thailand with the aim of being reliable partner
            in international trade. We are striving to import the high quality
            and exclusive products as the best alternative for people’s everyday
            need and happiness. Connect Asia Interfood Co., Ltd. is dedicated to
            connecting locals and the world with good products for people and we
            try to find the most effective ways to develop locally.
          </p>
        </div>
      </div>
      <div className="px-12 md:px-24  xl:px-40">
        <img src={img3} alt="" className="w-full" />
      </div>
    </>
  );
}

export default About;
