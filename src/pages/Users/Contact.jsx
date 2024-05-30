import React, { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactAddress from "../../features/ContactAddress";
import AddressIcon from "../../assets/icon/AddressIcon.svg";
import EmailIcon from "../../assets/icon/EmailIcon.svg";
import telIcon from "../../assets/icon/telIcon.svg";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import img3 from "../../../public/images/papd 1.png";

function Contact() {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    telephone: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <>
      <Breadcrumbs
        page_name="Contact Us "
        page_url="/contact"
        title_name="Contact Us "
      />
      <div className="section-container">
        <div className="grid grid-cols-3 gap-4">
          <ContactAddress
            icon={AddressIcon}
            label="Location"
            detail="723 Supakarn building Room No. 4B09 3rd Floor, Soi Charoen-Nakorn 15A, Charoen-Nakorn Road, Klongtonsai, Klongsan, Bangkok 10600 Thailand"
          />
          <ContactAddress
            icon={EmailIcon}
            label="Email"
            detail={
              <>
                mgr.sales@connectasia.net
                <br />
                sales.support@connectasia.net
              </>
            }
          />
          <ContactAddress
            icon={telIcon}
            label="Telephoe"
            detail="02-064-7361,02-064-7365"
          />
        </div>
        <div className=" lg:w-[60%] bg-[#8FB5F9] py-6 px-6 lg:px-16 rounded-xl mx-auto mt-14 space-y-4">
          <h1 className="text-head">Send Us A Message</h1>
          <Input
            name="fullName"
            label="Name - Surname"
            placeholder="Name - Surname"
            onChange={handleChange}
            value={input?.fullName}
          />
          <div className="grid grid-cols-2 gap-4 ">
            <div className="  col-span-2  md:col-span-1">
              <Input
                name="email"
                label="Email"
                placeholder="Email"
                onChange={handleChange}
                value={input?.email}
              />
            </div>
            <div className="  col-span-2  md:col-span-1">
              <Input
                name="telephone"
                label="Telephone"
                placeholder="Telephone"
                onChange={handleChange}
                value={input?.telephone}
              />
            </div>
          </div>
          <Input
            name="subject"
            label="Subject"
            placeholder="Subject"
            onChange={handleChange}
            value={input?.subject}
          />
          <Textarea
            name="message"
            label="Message"
            placeholder="Message"
            onChange={handleChange}
            value={input?.message}
          />
          <label className="cursor-pointer flex items-center gap-3">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox bg-white  rounded-full"
            />
            <span className="label-text">
              I have read and accept the terms and conditions stated in Privacy
              Policy
            </span>
          </label>
          <img src={img3} />
          <button
            className="btn bg-dark-blue text-white border-none btn-lg hover:bg-dark-blue/50"
            type="button"
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
