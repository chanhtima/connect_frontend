import React from "react";
import HomeIcon from "../assets/icon/HomIcom.svg";
function Breadcrumbs({ page_url, page_name, sub_page, title_name }) {
  return (
    <div className="px-12 md:px-24  xl:px-40">
      <div className="breadcrumbs justify-end md:flex items-center py-8">
        <ul>
          <li>
            <a href="/">
              <img src={HomeIcon} alt="" />
              Home
            </a>
          </li>
          <li>
            <span className="px-2">/</span>
            <a href={page_url}>{title_name}</a>
          </li>
          {sub_page && (
            <li className=" max-md:!hidden">
              <span className="px-2">/</span>
              <a>{sub_page}</a>
            </li>
          )}
        </ul>
      </div>
      <div className=" flex items-center justify-between">
        <h1 className="text-[34px] pr-4">{page_name}</h1>
        <span className="border-b-4  border-black w-[70%] xl:w-[80%]  max-md:hidden"></span>
      </div>
    </div>
  );
}

export default Breadcrumbs;
