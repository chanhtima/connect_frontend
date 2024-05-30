import React from "react";

function ContactAddress({ icon, label, detail }) {
  return (
    <div className=" text-center col-span-3  lg:col-span-1">
      <img src={icon} alt="iconAddress" className=" w-11 h-11 mx-auto" />
      <h2 className="text-[28px] mt-4 mb-2  text-dark-blue">{label}</h2>
      <p>{detail}</p>
    </div>
  );
}

export default ContactAddress;
