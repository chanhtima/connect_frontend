import React from "react";
import { Link } from "react-router-dom";
import Ficon from "../assets/icon/Ficon.svg";
import Yicon from "../assets/icon/Yicon.svg";
import Eicon from "../assets/icon/Eicom.svg";
import Iicon from "../assets/icon/Iicon.svg";

function Footer() {
  return (
    <div className=" border-t-2 border-dark-blue/40">
      {/* top footer */}
      <div className="section-container flex max-lg:flex-col gap-8 items-center justify-between">
        <div className="gap-4 flex flex-col max-lg:items-center">
          <Link to={"/"}>
            <img
              src="/images/LOGOArtboard.png"
              alt="logo "
              width={300}
              height={20}
            />
          </Link>
          <div className=" lg:w-1/2">
            <p>
              723 Supakarn building Room No. 4B09 3rd Floor, Soi Charoen-Nakorn
              15A, Charoen-Nakorn Road, Klongtonsai, Klongsan, Bangkok 10600
              Thailand
            </p>
          </div>
        </div>
        {/* icon */}
        <div className=" flex gap-4">
          <Link to={"/"}>
            <img src={Ficon} alt="icon" />
          </Link>
          <Link to={"/"}>
            <img src={Iicon} alt="icon" />
          </Link>{" "}
          <Link to={"/"}>
            <img src={Yicon} alt="icon" />
          </Link>{" "}
          <Link to={"/"}>
            <img src={Eicon} alt="icon" />
          </Link>
        </div>
      </div>
      <div className=" bg-dark-blue text-white flex items-center justify-between px-12 md:px-24 py-2">
        <p>Privacy Policy</p>
        <p>Copyright © 2023 Connect Asia Interfood Co., Ltd.</p>
      </div>
    </div>
  );
}

export default Footer;
