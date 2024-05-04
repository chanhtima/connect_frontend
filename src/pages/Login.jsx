import React, { useContext, useEffect, useState } from "react";
import { LoginApi } from "../api/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../contexts/authentication";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  // const { login ,token} = useContext(AuthContext);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = await LoginApi(input);
      const res = loginData.data;
      if (res.success) {
        toast.success(res.message);
        localStorage.setItem("token", res.token);
        window.location.replace("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-[90vh] container flex justify-center items-center">
      <div className=" bg-slate-200 w-96 p-6 rounded-lg">
        <h1 className=" text-center mb-4 font-semibold">Sign In</h1>
        <form className=" space-y-2" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={input.email}
            placeholder="Enter your Email"
            className="input input-bordered w-full "
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={input.password}
            placeholder="Enter your password"
            className="input input-bordered w-full "
          />
          <button type="submit" className=" btn btn-success text-white w-full">
            login
          </button>
        </form>
        <div className="mt-4">
          <p className=" text-sm">
            Already have an acount? go to
            <a href="/register" className=" text-blue-500 hover:underline px-1">
              Register
            </a>
            Page
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
